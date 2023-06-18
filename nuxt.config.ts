// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  typescript: { strict: true },
  css: ['@@/node_modules/bootstrap/dist/css/bootstrap.min.css', '@@/scss/custom.scss'],
  plugins: [{ src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', mode: 'client' }],
})
