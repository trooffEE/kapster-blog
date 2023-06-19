<template>
  <div class="card bg-dark text-white p-4 rounded-3 relative">
    <div class="row pointer">
      <div class="relative col-3 py-4">
        <div class="title font-bold sticky-top h-fit">{{ title }}</div>
        <div class="preview-on-hover rounded-3" :style="{ backgroundImage: `url(${image_preview})` || '' }" />
      </div>
      <div class="col-9 d-flex flex-column justify-content-between">
        <div class="quote-content" v-html="short" />
        <div class="d-flex justify-content-between">
          <div>
            <Icon :name="currentLikeStatus" color="black" @click="newsStore.toggleLikeNews(id)"/>
            {{  likes_count }}
          </div>
          <div>{{ date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '#components'
import { News } from '~/types/news'
import dayjs from 'dayjs'
import { useNewsStore } from '~/store/news';

const props = defineProps<{ news: News }>()
const { title, image_preview, likes_count, short, me_liked, published_at, id } = props.news

const newsStore = useNewsStore()
const currentLikeStatus = computed(() => !me_liked ? 'material-symbols:favorite-outline' : 'material-symbols:favorite-rounded')
const date = computed(() => dayjs(published_at).format('DD MMMM YYYY'))
</script>

<styles lang="scss">
.preview-on-hover {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.2;
  z-index: -1;
  transition: 300ms ease-in-out;
  background-position-x: 1200px;
}

.card .row {
  z-index: 3;
}

.card:hover {
  cursor: pointer;
  .preview-on-hover {
    z-index: 2;
    background-position-x: 0%;
    margin: -1.5rem 0 -1.5rem calc(-1 * (1.5rem - 12px));
    height: calc(100% + 1.5rem * 2);
    width: calc(100%);
  }
}
</styles>
