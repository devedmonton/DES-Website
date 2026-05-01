import fetch from 'node-fetch'
import ICAL from 'ical.js'

import { ImportCalendarException, getEvents, createAllEvents } from '../serverUtilities/calendar'

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

// gets the ICAL from the urls above.
const fetchICALFromURL = async (url) => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Node.js Fetch)',
    },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch ICS file: ${response.statusText}`)
  }
  return response.text()
}

// converts the ICAL data to google calendar events.
const parseICALData = (icalContent) => {
  const icalData = ICAL.parse(icalContent) // Parse the ICAL content into jCal format
  const component = new ICAL.Component(icalData) // Create an ICAL.Component
  const events = component.getAllSubcomponents('vevent') // Get all VEVENT components

  // Map VEVENT components to Google Calendar API event objects
  return events.map((event) => {
    const vevent = new ICAL.Event(event)

    // put this in the format of a google calendar event.
    return {
      // The feed's UID is stable across renames/edits, so we use it as the
      // iCalUID when importing. This is what lets a renamed event update the
      // existing Google Calendar event instead of creating a duplicate.
      iCalUID: vevent.uid || undefined,
      summary: vevent.summary || 'No Title',
      description: vevent.description || '',
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

// gets all of the external events from all ICAL sources and combines
// into one large list.
const getAllExternalEvents = async () => {
  console.log('parsing ics')
  let allExternalEvents = []

  for (let url of ICAL_URLS) {
    console.log(`importing from ${url}...`)
    try {
      let icsText = await fetchICALFromURL(url)
      let externalEvents = parseICALData(icsText)

      // only get future events, because the gmail api only gets future events
      let futureExternalEvents = externalEvents.filter((externalEvent) => {
        let today = new Date()
        let eventDate = new Date(externalEvent.start.dateTime)
        return eventDate > today
      })
      // add all of the events
      allExternalEvents = [...futureExternalEvents, ...allExternalEvents]
      console.log('importing successful')
      console.log('-------------------')
    }
    catch (error) {
      console.log(`error while importing ${url}... skipping...`)
      console.log(error)
    }
  }
  return allExternalEvents
}

// gets the existing events from the calendar here.
// Only future events are needed for dedup, since getAllExternalEvents() filters
// imported events to future-only as well. Anchoring startDate to today keeps
// this fast even though getEvents() now returns all events when unfiltered.
const getExistingEvents = async ({ googleCalendarId, serviceAccountCredentials }) => {
  // try parse the events or throw an error
  try {
    console.log('Importing internal events from Devedmonton gmail calendar')
    const events = await getEvents({
      googleCalendarId,
      serviceAccountCredentials,
      startDate: new Date().toISOString(),
      limitEvents: 100,
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
const titleDateKey = (event) => {
  const dateOnly = new Date(event.start.dateTime).toISOString().split('T')[0]
  return `${event.summary.toLowerCase().trim()}|${dateOnly}`
}

const compareAndGetNewEvents = (existingGmailEvents, importedEvents) => {
  // Pre-build lookup indexes so this is O(n+m) instead of O(n*m).
  const existingByUid = new Map()
  const existingByTitleDate = new Map()
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
      return existing.summary.toLowerCase().trim() !== imported.summary.toLowerCase().trim()
    }
    // 2. Legacy fallback — events imported before we tracked iCalUID.
    if (existingByTitleDate.has(titleDateKey(imported))) return false
    return true
  })
}

export const importAndProcessExternalEvents = async ({ googleCalendarId, serviceAccountCredentials }) => {
  // Step: 1 Import the events from meetup
  let importedEvents = await getAllExternalEvents()
  // Step: 2: Get all of the Events in the GMAIL Calendar
  const existingEvents = await getExistingEvents({
    googleCalendarId,
    serviceAccountCredentials,
  })
  // Step: 3: Identify New Events
  let newEvents = compareAndGetNewEvents(
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
        error: error.error,
      })
    }
    else {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Error while importing events',
        error: error.message,
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
