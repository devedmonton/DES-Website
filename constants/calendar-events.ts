const iconStyles = 'width:20px;height:20px;position:absolute;bottom:2px;right:2px;'
const imageKitUrl = 'https://ik.imagekit.io/des/'

const meetupIcons = {
  'js-ruby-python-meetup': '/meetups/Python-js-ruby.png',
  'dotnet-user-group': '/meetups/dotNet_logo.png',
  'edmonton-r-user-group': 'r.svg',
  'edmonton-women-in-tech': '/meetups/yegwit.png',
  'weekly-dev-chat': 'weeklydevchat.svg',
  'edmonton-data-science-community': '/meetups/DataScience',
  'yegsec': '/meetups/YEGSec.png',
}

class Event {
  start: Date
  end: Date
  title: string
  meetup: string
  content: string
  iconUrl: string
  imageTag: string
  class: string
  eventUrl: string

  constructor(start: string, end: string, title: string, meetup: string, content: string, eventUrl: string) {
    this.start = new Date(start)
    this.end = new Date(end)
    this.title = title
    this.meetup = meetup
    this.iconUrl = `${imageKitUrl}${meetupIcons[meetup as keyof typeof meetupIcons]}`
    this.imageTag = `<img src="${this.iconUrl}" style="${iconStyles}">`
    this.content = content + this.imageTag
    this.class = this.meetup
    this.eventUrl = eventUrl
  }
}

export const calendarEvents: Event[] = [
  new Event('2024-05-20 12:00', '2024-05-20 17:00', 'JS Ruby Python Meetup', 'js-ruby-python-meetup', 'This is a test', 'https://www.meetup.com/edmontonunlimited/events/300218136/'),
  new Event('2024-05-21 13:00', '2024-05-21 16:00', 'Edmonton .Net User Group', 'dotnet-user-group', '', 'https://www.meetup.com/edmontonunlimited/events/300218136/'),
  new Event('2024-05-22 17:00', '2024-05-22 20:00', 'Edmonton Women In Tech', 'edmonton-women-in-tech', '', 'https://www.meetup.com/edmontonunlimited/events/300218136/'),
  new Event('2024-05-23 10:00', '2024-05-23 12:00', 'YEGSec Meetup', 'yegsec', '', 'https://www.meetup.com/edmontonunlimited/events/300218136/'),
  new Event('2024-05-24 13:00', '2024-05-24 18:00', 'Weekly Dev Chat', 'weekly-dev-chat', '', 'https://www.meetup.com/edmontonunlimited/events/300218136/'),
  new Event('2024-05-23 18:00', '2024-05-23 20:00', 'Edmonton R User Group', 'edmonton-r-user-group', '', 'https://www.meetup.com/edmontonunlimited/events/300218136/'),
  new Event('2024-05-22 13:00', '2024-05-22 15:00', 'Edmonton Data Science Community', 'edmonton-data-science-community', '', 'https://www.meetup.com/edmontonunlimited/events/300218136/'),
]
