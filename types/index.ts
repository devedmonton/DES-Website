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

// Interfaces for contributor page.
export interface UserPermissions {
  admin: boolean
  maintain: boolean
  push: boolean
  triage: boolean
  pull: boolean
}

export interface GitHubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
  permissions: UserPermissions
  role_name: string
}

// interface for the rest api response.
export interface RESTApiResponse<T> {
  statusCode: number
  message: string
  data: T
}
