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
      theme: 'github-light',
      preload: ['diff', 'ts', 'js', 'css', 'java', 'groovy', 'sql', 'xml', 'json', 'python'],
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css']
})