// const iconStyles = 'width:20px;height:20px;position:absolute;bottom:2px;right:2px;'
// const imageKitUrl = 'https://ik.imagekit.io/des/'

// const organizerIcons = {
//   'js-ruby-python-meetup': '/meetups/Python-js-ruby.png',
//   'dotnet-user-group': '/meetups/dotNet_logo.png',
//   'edmonton-r-user-group': 'r.svg',
//   'edmonton-women-in-tech': '/meetups/yegwit.png',
//   'weekly-dev-chat': 'weeklydevchat.svg',
//   'edmonton-data-science-community': '/meetups/DataScience',
//   'yegsec': '/meetups/YEGSec.png',
// }

class Event {
  start: Date
  end: Date
  title: string
  organizer: string
  content: string
  contentFull: string
  // iconUrl: string
  // imageTag: string
  class: string
  eventUrl: string

  constructor(start: string, end: string, summary: string, organizer: string, content: string, contentFull: string, eventUrl: string) {
    this.start = new Date(start)
    this.end = new Date(end)
    this.title = summary
    this.organizer = organizer
    // this.iconUrl = `${imageKitUrl}${organizerIcons[organizer as keyof typeof organizerIcons]}`
    // this.imageTag = `<img src="${this.iconUrl}" style="${iconStyles}">`
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
