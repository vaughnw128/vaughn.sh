// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content', 
    'nuxt-icon',
    '@nuxtjs/tailwindcss',],
  content: {
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: 'monokai',
      preload: ['python', 'javascript'],
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css']
})