// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Shanta Equity Limited',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    '@nuxt/content',
    // '@nuxt/image-edge',
    'nuxt-windicss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [300, 400, 500, 600, 700, 800, 900],
    },
  },
})
