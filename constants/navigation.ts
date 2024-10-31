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
    name: 'Calendar',
    icon: 'i-ph-calendar-blank-duotone',
    to: '/calendar',
  },
  {
    name: 'Resources',
    icon: 'i-ph-books-duotone',
    to: '/resources',
  },
  {
    name: 'Companies',
    icon: 'i-ph-building-duotone',
    to: '/companies',
  },
]
