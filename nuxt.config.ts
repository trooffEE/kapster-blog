// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-icon'],
  typescript: { strict: true },
  css: ['@@/assets/styles/main.scss'],
  plugins: [
  ],
})
