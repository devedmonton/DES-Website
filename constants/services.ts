import type { Service } from '~/types'

export const services: Service[] = [
  // What We Do
  {
    name: 'Support Meetups & Events',
    image: '/homepage/meetups-and-events.jpg',
    description: `If you're a technology meetup or event organizer, we've got your back!<br>From online streaming tools, equipment and training, to event support, organizer training, and venues we're here to help developers run awesome events about the tools they love; without having to start from scratch on their own.`,
  },
  {
    name: 'Connect Community',
    image: '/homepage/connect-community.jpg',
    description: `Technology changes faster everyday, and a great technology community needs to stay connected if we want to keep up.<br>Through our active Slack, mailing list, events, and online outreach we provide many ways for the Edmonton technology community to come together.`,
  },
  {
    name: 'Provide A Platform',
    image: '/homepage/provide-a-platform.jpg',
    description: `Beyond just connecting meetup and event organizers with great online and in-person venues and resources we provide access to a variety of supports to help local technologists build the community they want to see, wherever that may be. Share your ideas on our Slack!`,
  },
  // Get Involved
  {
    name: 'As a Developer',
    image: '/homepage/get-involved-dev.jpg',
    description: `
    <p>There so many ways to get involved in the Edmonton developer community!</p>
    <p>
      <a href="https://join.slack.com/t/devedmonton/shared_invite/zt-24bp1mmie-XdXUv1eYy4MRElmXZaoqdg" class="text-primary font-bold">Get started by joining our Slack</a> and make sure to say hello in our #introductions channel where one of our friendly community members will help you find your way.
    </p>
    <p>
    If you are interested in becoming more involved (like borrowing our equipment or voting on community decisions) then <a class="text-primary font-bold" href="/become_a_member">find more information about becoming a member here.</a> You do not need to be a member to come to events or participate in the slack!
    </p>
    `,
    link: {
      url: 'https://join.slack.com/t/devedmonton/shared_invite/zt-24bp1mmie-XdXUv1eYy4MRElmXZaoqdg',
      text: 'Join Slack'
    },
  },
  {
    name: 'As an Event Organizer',
    image: '/homepage/get-involved-meetups.png',
    description: 'If you\'re like us you\'re probably a developer keen to start a meetup or organize an event for your favourite language or technologies. We\'ve been there, and want to help! <br><br> Whether it\'s sharing best practices, streaming and recording resources, fundraising, or just lending a friendly ear we want to share the lessons we\'ve learned and let you focus on running successful and engaging events!',
    link: {
      url: 'mailto:board@devedmonton.com?subject=I%27m%20interested%20in%20help%20organizing%20an%20Edmonton%20technology%20event',
      text: 'Organize An Event'
    },
  },
  {
    name: 'As A Business',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    description: 'Whether you\'re a growing startup or an established player the Dev Edmonton Society can help your understand the tools and technologies shaping your business.<br><br>Supporting and growing the Edmonton tech community takes many shapes, from simple financial donations to direct engagement by providing speakers, venues, resources and donations of employee time. We want to help your business grow and find a community of technologists passionate about the tools you need to succeed!',
    link: {
      url: 'mailto:board@devedmonton.com?subject=Supporting%20Dev%20Edmonton%20Society',
      text: 'Support Local Tech'
    },
  },
]
