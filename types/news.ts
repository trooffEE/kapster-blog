import { DateType, HTMLText, Slug, Uuid } from './common'

export type News = {
  _type: 'post' | unknown // 'unknown' since obviously there's different variations but let it overlap to what i got from test-data
  id: number
  uid: Uuid
  title: string
  slug: Slug
  short: string
  likes_count: number
  me_liked: boolean
  published_at: DateType
  image_preview: string
  content: HTMLText
}
