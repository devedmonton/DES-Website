import fetch from 'node-fetch'
import ICAL from 'ical.js'
import type { calendar_v3 } from 'googleapis'

import { ImportCalendarException, getEvents, createAllEvents } from '../serverUtilities/calendar'

type ServiceAccountCredentials = {
  client_email: string
  private_key: string
}

type CalendarEvent = calendar_v3.Schema$Event

type CalendarOptions = {
  googleCalendarId: string
  serviceAccountCredentials: ServiceAccountCredentials
}

/*
A short explanation about this gargantuan file/function.
Essentially this just pulls some icals from the calendars in meetup in the
ICAL_URLS link and
(say here https://www.meetup.com/edmontonunlimited/events/ under "events" click
"Calendar" and there's a "ical" link next to "Subscribe to a feed of this calendar:")

The function "importAndProcessExternalEvents" is the important one here
look pretty far at the bottom and goes through 4 steps.
  Step: 1 Import the events from meetup
  Step: 2: Get all of the Events in the GMAIL Calendar
  Step: 3: Identify new Events (that aren't already in the calendar)
  Step: 4: Create the new Events in gmail (doesn't make duplicates)

It just returns ONLY THE NEWLY created events which I thought made sense here.

I'll add this to a nuxt cron here so that we can pull these nightly.
https://github.com/hywax/nuxt-cron
*/

const ICAL_URLS = [
  'https://www.meetup.com/edmontonunlimited/events/ical/', // Edmonton unlimited
  'https://www.meetup.com/GDG-Cloud-Edmonton/events/ical/', // GDG cloud
  'http://api.lu.ma/ics/get?entity=calendar&id=cal-N0bfLPnGQ1LC86P', // Leetnight
  'http://api.lu.ma/ics/get?entity=calendar&id=cal-0bDgxCEdnFr1W8O', // Edmonton Data Society
  'https://api2.luma.com/ics/get?entity=calendar&id=cal-DX3cBt59kMNr4tI', // Democamp.
  'https://www.meetup.com/Edmonton-NET-User-Group/events/ical/', // .NET user group
  'https://www.meetup.com/flutter-edmonton/events/ical/', // flutter edmonton
  'https://www.meetup.com/edmonton-wordpress-meetup-group/events/ical/', // wordpress meetup
]

// AI Tinkerers Edmonton doesn't publish an iCal feed (their /events.ics returns
// 500, listing pages don't paginate, no <link rel="alternate"> is advertised),
// but every event detail page embeds a JSON-LD Event schema with ISO 8601
// dates, location, and a stable @id. We discover event URLs via their sitemap
// and parse the structured data out of each page.
const AITINKERERS_SITEMAPS = [
  'https://edmonton.aitinkerers.org/sitemaps/1.xml',
  // 2.xml-5.xml currently contain only technology/topic pages, not events.
  // Expand this list if event URLs start landing there.
]
const AITINKERERS_EVENT_URL_PREFIX = 'https://edmonton.aitinkerers.org/p/'
const USER_AGENT = 'DevEdmonton Calendar Import'

// gets the ICAL from the urls above.
const fetchICALFromURL = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
    },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch ICS file: ${response.statusText}`)
  }
  return response.text()
}

// Marker used to embed the source event URL into descriptions in a way that
// is human-readable in calendar clients and trivially parseable on the website.
// Keep this string stable — pages/calendar.vue greps for it.
const EVENT_LINK_PREFIX = 'Event link:'

const eventStartDateTime = (event: CalendarEvent) => event.start?.dateTime || event.start?.date || ''

const eventSummary = (event: CalendarEvent) => event.summary || ''

// converts the ICAL data to google calendar events.
const parseICALData = (icalContent: string): CalendarEvent[] => {
  const icalData = ICAL.parse(icalContent) // Parse the ICAL content into jCal format
  const component = new ICAL.Component(icalData) // Create an ICAL.Component
  const events = component.getAllSubcomponents('vevent') // Get all VEVENT components

  // Map VEVENT components to Google Calendar API event objects
  return events.map((event) => {
    const vevent = new ICAL.Event(event)

    // Some feeds (notably Lu.ma and parts of Meetup) put the canonical event
    // URL only in the iCal URL property, not in the description body. Pull it
    // out and append it to the description so subscribers viewing the calendar
    // in their phone calendar app can click through, and the website can show
    // a "Go to Event" button without scraping for it.
    const sourceUrl = vevent.component.getFirstPropertyValue('url')
    let description = vevent.description || ''
    if (typeof sourceUrl === 'string' && !description.includes(sourceUrl)) {
      const trimmed = description.trim()
      description = trimmed
        + (trimmed ? '\n\n' : '')
        + `${EVENT_LINK_PREFIX} ${sourceUrl}`
    }

    // put this in the format of a google calendar event.
    return {
      // The feed's UID is stable across renames/edits, so we use it as the
      // iCalUID when importing. This is what lets a renamed event update the
      // existing Google Calendar event instead of creating a duplicate.
      iCalUID: vevent.uid || undefined,
      summary: vevent.summary || 'No Title',
      description,
      location: vevent.location || '',
      start: {
        dateTime: vevent.startDate.toJSDate().toISOString(),
        timeZone: 'UTC', // Adjust as necessary
      },
      end: {
        dateTime: vevent.endDate.toJSDate().toISOString(),
        timeZone: 'UTC', // Adjust as necessary
      },
    }
  })
}

// --- AI Tinkerers scrape -----------------------------------------------------
// No iCal feed; we discover events via the sitemap and read JSON-LD Event
// blocks off each event detail page. Output shape matches parseICALData so the
// rest of the pipeline (dedup and events.import) works unchanged.

type JsonLdNode = {
  '@type'?: string | string[]
  '@id'?: string
  '@graph'?: JsonLdNode[]
  'name'?: string
  'description'?: string
  'startDate'?: string
  'endDate'?: string
  'location'?: string | {
    name?: string
    address?: { streetAddress?: string }
  }
}

// Fetch every sitemap and collect event-detail URLs (/p/<slug>).
const fetchAitinkerersEventUrls = async (): Promise<string[]> => {
  const urls = new Set<string>()
  for (const sitemap of AITINKERERS_SITEMAPS) {
    const response = await fetch(sitemap, { headers: { 'User-Agent': USER_AGENT } })
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap ${sitemap}: ${response.statusText}`)
    }
    const xml = await response.text()
    const locMatches = xml.match(/<loc>([^<]+)<\/loc>/g) || []
    for (const match of locMatches) {
      const url = match.replace(/<\/?loc>/g, '')
      if (url.startsWith(AITINKERERS_EVENT_URL_PREFIX)) {
        urls.add(url)
      }
    }
  }
  return [...urls]
}

const isEventNode = (node: JsonLdNode): boolean => {
  const t = node['@type']
  return t === 'Event' || (Array.isArray(t) && t.includes('Event'))
}

// Walk a parsed JSON-LD blob (may be a single node, an array, or an @graph)
// and return the first Event node found.
const findEventNode = (data: unknown): JsonLdNode | null => {
  if (!data || typeof data !== 'object') return null
  if (Array.isArray(data)) {
    for (const item of data) {
      const found = findEventNode(item)
      if (found) return found
    }
    return null
  }
  const node = data as JsonLdNode
  if (isEventNode(node)) return node
  if (node['@graph']) return findEventNode(node['@graph'])
  return null
}

const extractJsonLdEvent = (html: string): JsonLdNode | null => {
  const blocks = html.match(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi) || []
  for (const raw of blocks) {
    const json = raw.replace(/<script[^>]*>/, '').replace(/<\/script>/, '').trim()
    let data: unknown
    try {
      data = JSON.parse(json)
    }
    catch {
      continue
    }
    const event = findEventNode(data)
    if (event) return event
  }
  return null
}

const fetchAitinkerersEvent = async (url: string): Promise<CalendarEvent | null> => {
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } })
  if (!response.ok) return null
  const html = await response.text()
  const event = extractJsonLdEvent(html)
  if (!event || !event.startDate || !event.endDate || !event.name) return null

  const location = typeof event.location === 'string'
    ? event.location
    : event.location?.name || event.location?.address?.streetAddress || ''

  // Prefer the JSON-LD @id as the source URL — it's the canonical identifier
  // for the event and what we want the website's "Go to Event" button to point
  // at. Falls back to the page URL if no @id was provided.
  const sourceUrl = event['@id'] || url

  const description = (event.description || '').trim()
  const descriptionWithLink = description
    + (description ? '\n\n' : '')
    + `${EVENT_LINK_PREFIX} ${sourceUrl}`

  return {
    // @id is stable across renames — same role as iCal UID for our dedup.
    iCalUID: sourceUrl,
    summary: event.name,
    description: descriptionWithLink,
    location,
    start: { dateTime: event.startDate, timeZone: 'America/Edmonton' },
    end: { dateTime: event.endDate, timeZone: 'America/Edmonton' },
  }
}

// Per-event fetch failures are tolerated (one broken page doesn't break the
// whole import); a sitemap fetch failure throws and is caught by the caller.
const getAllAitinkerersEvents = async (): Promise<CalendarEvent[]> => {
  const urls = await fetchAitinkerersEventUrls()
  const results = await Promise.allSettled(urls.map(fetchAitinkerersEvent))
  const events: CalendarEvent[] = []
  for (const result of results) {
    if (result.status === 'fulfilled' && result.value) {
      events.push(result.value)
    }
    else if (result.status === 'rejected') {
      console.log('  AI Tinkerers event fetch failed:', result.reason)
    }
  }
  return events
}

// --- External event sources --------------------------------------------------
// Each source produces CalendarEvent[]. By default the future-only filter is
// applied (iCal feeds from Meetup/Lu.ma only surface upcoming events anyway,
// so this is a no-op for them in practice and a safety net otherwise). Sources
// whose upstream intentionally publishes historical events can opt in by
// setting `includePast: true`.

type EventSource = {
  name: string
  fetch: () => Promise<CalendarEvent[]>
  includePast?: boolean
}

const SOURCES: EventSource[] = [
  ...ICAL_URLS.map((url): EventSource => ({
    name: url,
    fetch: async () => parseICALData(await fetchICALFromURL(url)),
  })),
  {
    name: 'AI Tinkerers Edmonton',
    fetch: getAllAitinkerersEvents,
    includePast: true,
  },
]

const isFutureEvent = (event: CalendarEvent) =>
  new Date(eventStartDateTime(event)) > new Date()

// Iterates every source, applying its future-only filter unless the source has
// opted in to past events. Per-source try/catch ensures one bad upstream
// doesn't break the whole import.
const getAllExternalEvents = async () => {
  console.log('parsing external sources')
  let allExternalEvents: CalendarEvent[] = []

  for (const source of SOURCES) {
    console.log(`importing from ${source.name}...`)
    try {
      const events = await source.fetch()
      const filtered = source.includePast ? events : events.filter(isFutureEvent)
      const range = source.includePast ? 'past + future' : 'future-only'
      allExternalEvents = [...filtered, ...allExternalEvents]
      console.log(`importing successful (${filtered.length} events ${range})`)
      console.log('-------------------')
    }
    catch (error) {
      console.log(`error while importing ${source.name}... skipping...`)
      console.log(error)
    }
  }

  return allExternalEvents
}

// gets the existing events from the calendar here.
//
// Anchored to today rather than fetching all history because the iCal sources
// (Meetup, Lu.ma) only ever surface upcoming events, so the dedup index only
// needs upcoming events to be accurate for those sources.
//
// Known limitation: AI Tinkerers events include past entries (its sitemap
// surfaces every event ever published). Past AI Tinkerers events will appear
// "new" to compareAndGetNewEvents on every cron run and re-pass through
// events.import. events.import dedups server-side by iCalUID, so no duplicates
// are created — just a small amount of wasted API quota each day. Worth
// revisiting if/when other past-inclusive sources are added.
const getExistingEvents = async ({ googleCalendarId, serviceAccountCredentials }: CalendarOptions) => {
  // try parse the events or throw an error
  try {
    console.log('Importing internal events from Devedmonton gmail calendar')
    const events = await getEvents({
      googleCalendarId,
      serviceAccountCredentials,
      startDate: new Date().toISOString(),
    })
    // return the events
    return events
  }
  catch {
    throw new ImportCalendarException({
      message: 'Error Fetching Events',
      error: 'Could not fetch events',
    })
  }
}

/*
Returns the imported events that need to be sent to Google Calendar — either
because they're brand new, or because they exist but have been renamed in the
source feed.

Matching strategy (in order):
  1. iCalUID — the stable feed-side identifier. Survives renames and time
     changes, so this is the canonical identity check.
  2. (title + date) — fallback for legacy events that were imported before we
     started persisting iCalUID. Without this, the first run after this fix
     would duplicate every existing event.

When iCalUID matches but the title differs, the event is treated as a rename:
it's passed through so events.import can update the existing record server-side
rather than skipping it (which would leave the old title in place).
*/
const titleDateKey = (event: CalendarEvent) => {
  const startDateTime = eventStartDateTime(event)
  const dateOnly = startDateTime ? new Date(startDateTime).toISOString().split('T')[0] : ''
  return `${eventSummary(event).toLowerCase().trim()}|${dateOnly}`
}

const compareAndGetNewEvents = (existingGmailEvents: CalendarEvent[], importedEvents: CalendarEvent[]) => {
  // Pre-build lookup indexes so this is O(n+m) instead of O(n*m).
  const existingByUid = new Map<string, CalendarEvent>()
  const existingByTitleDate = new Map<string, CalendarEvent>()
  for (const existing of existingGmailEvents) {
    if (existing.iCalUID) existingByUid.set(existing.iCalUID, existing)
    existingByTitleDate.set(titleDateKey(existing), existing)
  }

  return importedEvents.filter((imported) => {
    // 1. Stable UID match — handles renames going forward.
    if (imported.iCalUID && existingByUid.has(imported.iCalUID)) {
      const existing = existingByUid.get(imported.iCalUID)
      // Same UID + same title -> nothing changed, skip the API call.
      // Same UID + different title -> source rename; pass through so
      // events.import can update the existing record.
      return existing
        ? eventSummary(existing).toLowerCase().trim() !== eventSummary(imported).toLowerCase().trim()
        : true
    }
    // 2. Legacy fallback — events imported before we tracked iCalUID.
    if (existingByTitleDate.has(titleDateKey(imported))) return false
    return true
  })
}

export const importAndProcessExternalEvents = async ({ googleCalendarId, serviceAccountCredentials }: CalendarOptions) => {
  // Step: 1 Import the events from meetup
  const importedEvents = await getAllExternalEvents()
  // Step: 2: Get all of the Events in the GMAIL Calendar
  const existingEvents = await getExistingEvents({
    googleCalendarId,
    serviceAccountCredentials,
  })
  // Step: 3: Identify New Events
  const newEvents = compareAndGetNewEvents(
    existingEvents,
    importedEvents,
  )
  // Step: 4: Create the new Events in gmail
  // Step 4.2 create all of them events.
  try {
    await createAllEvents({
      googleCalendarId,
      serviceAccountCredentials,
      newEvents,
    })
  }
  catch {
    throw new ImportCalendarException({
      message: 'Error while creating events',
      error: 'Google calendar api error.',
    })
  }

  // return the new events
  return newEvents
}

// this is the api.
export default defineEventHandler(async (event) => {
  // get the credentials from the service account
  const { googleCalendarId, serviceAccountCredentialsJSON } = useRuntimeConfig(event).googleCalendarAPI
  let serviceAccountCredentials
  try {
    serviceAccountCredentials = JSON.parse(serviceAccountCredentialsJSON)
  }
  catch {
    throw new ImportCalendarException({
      message: 'No Service Account Credentials Provided',
      error: 'Service Account Credentials are not provided',
    })
  }
  let newEvents
  try {
    newEvents = await importAndProcessExternalEvents({ googleCalendarId, serviceAccountCredentials })
  }
  catch (error) {
    if (error instanceof ImportCalendarException) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: error.message,
        data: {
          error: error.error,
        },
      })
    }
    else {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Error while importing events',
        data: {
          error: error instanceof Error ? error.message : String(error),
        },
      })
    }
  }
  return {
    statusCode: 200,
    statusMessage: 'Success',
    message: 'Events imported successfully, new Events added below',
    events: newEvents,
  }
})
