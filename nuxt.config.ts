// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-content-assets',
    '@nuxt/content', 
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
  ],
  content: {
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: 'monokai',
      preload: ['python', 'javascript', 'c'],
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  hooks: {
    close: (nuxt) => {
      if (!nuxt.options._prepare)
        process.exit()
    }
  }
})