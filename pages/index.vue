<template lang>
  <NuxtLayout :name="layout">
    <h1>Kapster Blog ✨</h1>
  </NuxtLayout>
</template>

<script setup>
const { data } = await useFetch('/api/news')
</script>
