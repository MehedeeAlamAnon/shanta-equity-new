// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Shanta Equity Limited",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "@nuxt/content",
    "nuxt-windicss",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
  ],
  plugins: [
    { src: '~/plugins/fontawesome.js' }
  ],
  googleFonts: {
    display: "swap",
    families: {
      Roboto: [300, 400, 500, 600, 700, 800, 900],
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  server: {
    // Increase the maximum file size to 50 MB (52428800 bytes)
    maxPayload: 52428800
  }
});
