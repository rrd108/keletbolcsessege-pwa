export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KrisnaNet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/vars.scss'],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/youtube.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      '@nuxtjs/fontawesome',
      {
        icons: {
          solid: [
            'faBackward',
            'faBookOpen',
            'faCog',
            'faForward',
            'faPause',
            'faPlay',
            'faPlayCircle',
            'faVolumeUp'
          ]
        }
      }
    ],
    '@nuxtjs/google-fonts',
    '@nuxtjs/dotenv'
  ],

  googleFonts: {
    families: {
      Montserrat: [100, 500, 700]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'hu',
      background_color: '#ede0c5',
      orientation: 'portrait'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
