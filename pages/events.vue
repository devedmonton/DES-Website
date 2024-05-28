<script setup lang="ts">
const group = { name: 'Community Events', items: events }

class Event {
  start: Date
  end: Date
  title: string
  organizer: string
  content: string
  contentFull: string
  class: string
  eventUrl: string

  constructor(start: string, end: string, summary: string, organizer: string, content: string, contentFull: string, eventUrl: string) {
    this.start = new Date(start)
    this.end = new Date(end)
    this.title = summary
    this.organizer = organizer
    this.content = content
    this.contentFull = contentFull
    this.class = this.organizer
    this.eventUrl = eventUrl
  }
}

const createEventsList = (events: any) => {
  return events.map((event: any) => new Event(
    event.start.dateTime,
    event.end.dateTime,
    event.summary,
    '',
    '',
    event.description,
    event.htmlLink,
  ))
}

let groupCalendar = { name: 'Calendar', items: [] }

const { pending, data } = await useLazyFetch('https://devedmonton.com/api/events', {
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
  icon: 'i-ph-calendar-blank-duotone',
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
