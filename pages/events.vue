<script setup lang="ts">
const group = { name: 'Community Events', items: events }

class Event {
  start: Date
  end: Date
  title: string
  organizer: string
  content: string
  description: string
  class: string
  eventUrl: string
  allDay: boolean

  constructor(start: string, end: string, summary: string, organizer: string, content: string, description: string, eventUrl: string) {
    this.start = new Date(start)
    this.end = new Date(end)
    this.title = summary
    this.organizer = organizer
    this.content = content
    this.description = description ? renderMarkdown(convertUrlsToLinks(description)) : description
    this.class = this.organizer
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
const { pending } = await useLazyFetch('https://devedmonton.com/api/events', {
  transform: (data) => {
    groupCalendar = { name: 'Calendar', items: createEventsList((data as any).events) }

    // check if the event is an "allDay" event
    const eventItems = groupCalendar.items
    eventItems.forEach((event) => {
      const START_DATE = '12:00:00 AM'
      const END_DATE = '11:59:59 PM'

      // condition where an event is an "allDay" event fix
      if ((event.start.toLocaleTimeString() === START_DATE) && (event.end.toLocaleTimeString() === END_DATE)) {
        event.allDay = true
      }
    })
  },
})

const title = 'Events'
const description = 'List of all the organizations that have fun tech events in Edmonton.'

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
    <AppSection :group="group" />
  </main>
</template>
