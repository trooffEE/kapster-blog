import { defineStore } from 'pinia'
// Types
import { News } from '~/types/news'

interface StoreType {
  news: News[]
  searchQuery: string
}

export const useNewsStore = defineStore('news', {
  state: (): StoreType => ({
    news: [],
    searchQuery: '',
  }),
})
