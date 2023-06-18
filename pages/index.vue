<template lang>
  <NuxtLayout>
    <h1 class="mb-4">Kapster Blog ✨</h1>
    <div class="d-flex gap-3 flex-column">
      <NewsCard v-for="newsItem in news" :news="newsItem"/>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@@/store/news'
// Component
import NewsCard from '~/components/UI/NewsCard.vue'

const { news } = storeToRefs(useNewsStore())
const { data } = await useFetch('/api/news')
news.value = data.value
</script>
