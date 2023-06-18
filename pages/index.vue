<template lang>
  <NuxtLayout>
    <h1>Kapster Blog ✨</h1>

    <div class="row" v-for="newsItem in news">
      <div class="col">
        {{ newsItem.title }}
      </div>
      <div class="col">
        {{ newsItem.content }}
      </div>
      <div class="col">
        {{ newsItem.content }}
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@@/store/news'

const { news } = storeToRefs(useNewsStore())
const { data } = await useFetch('/api/news')
news.value = data.value
</script>
