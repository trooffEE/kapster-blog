<template>
  <div class="card bg-dark text-white p-4 rounded-3 relative">
    <div class="row pointer">
      <div class="relative col-3 py-4">
        <div class="title font-bold sticky-top h-fit">
          {{ news.title }}
        </div>
        <div class="preview-on-hover rounded-3" :style="{ backgroundImage: `url(${news.image_preview})` || '' }" />
      </div>
      <div class="col-9 quote-content" v-html="news.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { News } from '~/types/news'

defineProps<{ news: News }>()
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
