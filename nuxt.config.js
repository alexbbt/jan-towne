export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/jan-towne/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Janet (Jan) Arlene Peterson Towne - Memorial',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ' Janet Arlene (Peterson) Towne, known to all as Jan, was born September 25, 1944, in Quincy, '
          + 'Massachusetts.  She passed away at home in her sleep surrounded by her loved ones on '
          + 'January 26, 2022, after a long fight with COVID-19 pneumonia.',
      },
      { property: 'og:title', content: 'Janet (Jan) Arlene Peterson Towne - Memorial' },
      { property: 'og:image', content: '/images/social.jpeg' },
      { property: 'og:image:width', content: '1024' },
      { property: 'og:image:height', content: '536' },
      { property: 'og:url', content: 'https://alexbbt.github.io/jan-towne/' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/jan-towne/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/jan-towne/apple-touch-icon.png' },
      {
        rel: 'icon', type: 'image/png', sizes: '32x32', href: '/jan-towne/favicon-32x32.png',
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: '/jan-towne/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/jan-towne/site.webmanifest' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/full-page.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-progressive-image.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
