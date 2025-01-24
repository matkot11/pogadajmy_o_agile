export type PaginatedEpisodes = {
  href: string
  limit: number
  next: number | null
  offset: number
  previous: number | null
  total: number
  items: Episode[]
}

export type Episode = {
  audio_preview_url: string
  description: string
  html_description: string
  duration_ms: number
  explicit: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: Image[]
  is_externally_hosted: boolean
  is_playable: boolean
  language: string
  languages: string[]
  name: string
  release_date: string
  release_date_precision: string
  type: string
  uri: string
}

export type Image = {
  height: string
  url: string
  width: string
}
