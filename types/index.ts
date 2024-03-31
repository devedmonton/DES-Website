export interface Service {
  name: string
  description: string
  image: string
  link?: {
    url: string
    text?: string
  }
}

export interface NavItem {
  name: string
  icon?: string
  to?: string
}

export interface Sponsor {
  name: string
  image: string
  description: string
  link?: string
  category: 'terabyte' | 'byte' | 'bit'
}
