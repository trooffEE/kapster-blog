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
  actions: {
    toggleLikeNews(newsId: News['id']) {
      console.log('PLAZZZZZ')
      this.news = this.news.map((newsItem) => {
        if (newsItem.id === newsId) {
          newsItem.likes_count += newsItem.me_liked ? -1 : 1
          newsItem.me_liked = !newsItem.me_liked
        }
        return newsItem
      })
    },
  },
})
