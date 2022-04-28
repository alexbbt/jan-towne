const title = 'Janet (Jan) Arlene Peterson Towne - Memorial';
const description = `
Janet Arlene (Peterson) Towne, known to all as Jan, was born September 25, 1944, in Quincy,
Massachusetts.  She passed away at home in her sleep surrounded by her loved ones on
January 26, 2022, after a long fight with COVID-19 pneumonia.
`;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://jantowne.bell-towne.com/images/social.jpeg' },
      { property: 'og:image:width', content: '1024' },
      { property: 'og:image:height', content: '536' },
      { property: 'og:image:alt', content: 'Jan and Jeff with their three sons' },
      { property: 'og:url', content: 'https://jantowne.bell-towne.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      {
        rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png',
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
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
    // https://google-fonts.nuxtjs.org
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    download: true,
    families: {
      Cinzel: true,
      Montserrat: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
