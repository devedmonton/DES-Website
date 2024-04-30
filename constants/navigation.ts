import type { NavItem } from '~/types'

export const navigation: NavItem[] = [
  {
    name: 'Home',
    icon: 'i-ph-house',
    to: '/',
  },
  {
    name: 'Meetups',
    icon: 'i-ph-users-duotone',
    to: '/meetups',
  },
  {
    name: 'Events',
    icon: 'i-ph-calendar-blank-duotone',
    to: '/events',
  },
  {
    name: 'Calendar',
    icon: 'i-ph-calendar-duotone',
    to: '/calendar',
  },
  {
    name: 'Resources',
    icon: 'i-ph-books-duotone',
    to: '/resources',
  },
  {
    name: 'Contact',
    icon: 'i-ph-phone-duotone',
    to: '/contact',
  },
]
