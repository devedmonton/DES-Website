<script setup lang="ts">
class Event {
  start: Date
  end: Date
  title: string
  organizer: string
  content: string
  description: string
  class: string
  eventUrl: string
  sourceUrl: string | undefined
  allDay: boolean

  constructor(start: string, end: string, summary: string, organizer: string, content: string, description: string, eventUrl: string) {
    this.start = new Date(start)
    this.end = new Date(end)
    this.title = summary
    this.organizer = organizer
    this.content = content
    // Parse the source URL out of the raw description before we wrap URLs in
    // <a> tags — keeps the regex simple.
    this.sourceUrl = extractSourceUrl(description)
    this.description = description ? renderMarkdown(convertUrlsToLinks(description)) : description
    // vue-cal applies this string as a CSS class on the event element. Mark
    // past events so they can be greyed out in the calendar view.
    this.class = this.end < new Date() ? 'past' : this.organizer
    this.eventUrl = eventUrl
    this.allDay = false // default
  }
}

const convertUrlsToLinks = (description: string) => {
  const urlRegex = /(?<!["'>]|href=")\b((https?:\/\/)(([a-zA-Z0-9-]+\.)+)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?(\/[^\s"'<]*)?(\?[^\s"'<]*)?(:(\d{1,5}))?\/?)(?!["'<])/gm

  return description.replace(urlRegex, '<a href="$&" target="_blank">$&</a>')
}

function renderMarkdown(description: string) {
  return description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
}

// Pulls the canonical event URL out of the description. The cron import (see
// server/api/import_events.ts) appends "Event link: <url>" when the source
// VEVENT has a URL property. For legacy events that pre-date that marker, fall
// back to a meetup.com / lu.ma / elug.ca URL we can find in the body.
//
// Preference order: an event-shaped URL (one that points at a specific event,
// not a group landing page) always wins. Some feeds put the group URL into
// the iCal URL property; without this preference we would wire "Go to Event"
// at a group page, which is misleading.
//
// The character class deliberately stops at HTML/quote/markdown-delimiter
// chars. Real Meetup and Lu.ma URLs use only [a-zA-Z0-9_\-./?=&%~+#:], so
// it is safe to bail out at brackets, parens, and asterisks. Those are
// virtually always prose/markdown wrapping the URL (e.g. `(<url>)`,
// `**<url>**`, `[label](<url>)`, `<a href="<url>">`).
function extractSourceUrl(description: string): string | undefined {
  if (!description) return undefined
  const urlChars = `[^\\s<>"'()\\[\\]{}*]+`

  // Pass 1: explicit "Event link:" marker, validated as an event URL. The
  // importer sets this from the iCal URL property; rejecting non-event-shaped
  // values defends against feeds that put a group URL there by mistake.
  const marked = description.match(new RegExp(`Event link:\\s*(https?://${urlChars})`, 'i'))
  if (marked && looksLikeEventUrl(marked[1])) return cleanUrl(marked[1])

  // Pass 2: scan the body for any event-shaped URL on a known platform.
  // Catches legacy events that pre-date the "Event link:" marker.
  const eventShaped = description.match(
    new RegExp(
      `https?://(?:www\\.|api\\.|api2\\.)?(?:meetup\\.com/[^/]+/events/\\d+|lu\\.ma/[a-z0-9-]+|luma\\.com/event/${urlChars}|elug\\.ca/(?:events?|meetings?)/${urlChars})/?`,
      'i',
    ),
  )
  if (eventShaped) return cleanUrl(eventShaped[0])

  // Pass 3: honor the "Event link:" marker even if it does not look
  // event-shaped. The importer set it for a reason, so this is better than
  // returning nothing. If the only URL we have is a group page, the next
  // pass will surface that as a last resort.
  if (marked) return cleanUrl(marked[1])

  return undefined
}

// True when the URL points at a specific event rather than a group landing
// page. The meetup.com check requires a /events/<numeric-id> segment; Lu.ma
// event URLs sit at the domain root (lu.ma/<slug>); luma.com uses /event/;
// elug.ca uses /events/ or /meetings/.
function looksLikeEventUrl(url: string): boolean {
  if (/meetup\.com\/[^/]+\/events\/\d+/i.test(url)) return true
  if (/(?:www\.)?lu\.ma\/[a-z0-9-]+/i.test(url)) return true
  if (/luma\.com\/event\//i.test(url)) return true
  if (/elug\.ca\/(?:events?|meetings?)\//i.test(url)) return true
  return false
}

// Strip trailing punctuation that's almost never part of a URL (e.g. a trailing
// period from a sentence, a comma, or markdown emphasis markers).
function cleanUrl(url: string): string {
  return url.replace(/[.,;:!?*_~]+$/, '')
}

const createEventsList = (events: any) => {
  return events.map((event: any) => new Event(
    (event.start.dateTime || `${event.start.date}T00:00:00`),
    (event.end.dateTime || `${event.end.date}T23:59:59`),
    event.summary,
    '',
    '',
    event.description,
    event.htmlLink,
  ))
}

let groupCalendar = { name: 'Calendar', items: [] }
const { pending } = await useLazyFetch('/api/events', {
  transform: (data) => {
    groupCalendar = { name: 'Calendar', items: createEventsList((data as any).events) }

    // check if the event is an "allDay" event
    const eventItems = groupCalendar.items
    eventItems.forEach((event: Event) => {
      const START_DATE = '12:00:00 AM'
      const END_DATE = '11:59:59 PM'

      // condition where an event is an "allDay" event fix
      if ((event.start.toLocaleTimeString() === START_DATE) && (event.end.toLocaleTimeString() === END_DATE)) {
        event.allDay = true
      }
    })
  },
})

const title = 'Calendar'
const description = 'Interactive calendar view of all the events happening in Edmonton'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  props: {
    icon: 'i-ph-calendar-blank-duotone',
  },
})
</script>

<template>
  <main>
    <AppCalendar
      :group="groupCalendar"
      :pending="pending"
    />
  </main>
</template>
