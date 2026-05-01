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
// server/api/import_events.js) appends "Event link: <url>" when the source
// VEVENT has a URL property. For legacy events that pre-date that marker, fall
// back to the first meetup.com or lu.ma URL we can find in the body.
//
// The character class deliberately stops at HTML/quote/markdown-delimiter
// chars. Real Meetup and Lu.ma URLs use only [a-zA-Z0-9_\-./?=&%~+#:], so it's
// safe to bail out at brackets, parens, and asterisks — those are virtually
// always prose/markdown wrapping the URL (e.g. `(<url>)`, `**<url>**`,
// `[label](<url>)`, `<a href="<url>">`).
function extractSourceUrl(description: string): string | undefined {
  if (!description) return undefined
  const urlChars = `[^\\s<>"'()\\[\\]{}*]+`
  const marked = description.match(new RegExp(`Event link:\\s*(https?://${urlChars})`, 'i'))
  if (marked) return cleanUrl(marked[1])
  const fallback = description.match(
    new RegExp(`https?://(?:www\\.|api\\.|api2\\.)?(?:meetup\\.com|lu\\.ma|luma\\.com)/${urlChars}`, 'i'),
  )
  return fallback ? cleanUrl(fallback[0]) : undefined
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
