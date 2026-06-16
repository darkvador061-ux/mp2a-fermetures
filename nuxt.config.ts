export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static',
  },

  modules: ['@nuxtjs/sitemap', '@vueuse/motion/nuxt'],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap',
        },
      ],
    },
  },

  sitemap: {
    hostname: 'https://mp2afermetures.fr',
  },

  compatibilityDate: '2025-05-01',
})
