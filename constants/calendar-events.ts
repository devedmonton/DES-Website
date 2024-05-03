const iconStyles = 'width:16px;position:absolute;bottom:0;right:0;border-left: 1px outset rgba(255,255,255,0.4);border-top: 1px outset rgba(255,255,255,0.4);border-radius: 3px 0 0 0;'
const imageKitUrl = 'https://ik.imagekit.io/des/meetups/'

export const calendarEvents = [
  {
    start: '2024-05-01 16:00',
    end: '2024-05-01 18:00',
    title: ' JS Ruby Python Meetup',
    content: `<img style="${iconStyles}" src="${imageKitUrl}Python-js-ruby.png">`,
    location: '123 Main St, Edmonton',
    class: 'js-rb-py-meetup',
    url: 'https://www.meetup.com/edmontonunlimited/events/300218136/',
  },
  {
    start: '2024-04-30 12:30',
    end: '2024-04-30 14:30',
    title: 'Edmonton .Net User Group',
    content: `<img style="${iconStyles}" src=${imageKitUrl}dotNet_logo.png>`,
    location: '321 Maple St, Edmonton',
    class: 'dot-net-user-group',
    url: 'https://www.meetup.com/edmonton-net-user-group/events/233916054/',
  },
]
