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
    name: 'Companies', 
    icon: 'i-ph-building',
    to: '/companies',
  },
]
