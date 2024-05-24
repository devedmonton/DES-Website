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

export const fetchEvents = async () => {
  const response = await fetch('https://devedmonton.com/api/events')
  const data = await response.json()
  return data.events.map((event: any) => {
    return new Event(event.start.dateTime, event.end.dateTime, event.summary, '', '', event.description, event.htmlLink)
  })
}
