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
    name: 'Resources',
    icon: 'i-ph-books-duotone',
    to: '/resources',
  },
  {
    name: 'Companies', // Changed from 'Contact' to 'Companies'
    icon: 'i-ph-building', // Choose an appropriate icon for companies
    to: '/companies', // Link to the new companies page
  },
]
