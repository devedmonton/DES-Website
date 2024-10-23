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

  constructor(start: string, end: string, summary: string, organizer: string, content: string, description: string, eventUrl: string) {
    this.start = new Date(start)
    this.end = new Date(end)
    this.title = summary
    this.organizer = organizer
    this.content = content
    this.description = description ? renderMarkdown(convertUrlsToLinks(description)) : description
    this.class = this.organizer
    this.eventUrl = eventUrl
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
    event.start.dateTime || event.start.date,
    event.end.dateTime || event.end.date,
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
