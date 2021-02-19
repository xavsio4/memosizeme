export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
   head: {
    title: 'CuicuiCuit',
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return  'memoSizeMe - Record your sizes locally. Free. No cookie. No backend. No account.';
    },
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Progressive Web App to record your body/bike sizes on your browsers DB.' },
      { hid: 'author', name: 'author', content: 'X. Villamuera' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: "yes" },
      { hid: 'og:type', name: 'og:type', content: 'app' },
    ],
    link: [
      { rel: 'canonical', href: 'https://memosize.me' },
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fauna+One|Playfair+Display&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
   
   /**
   * Bootstrap settings
   */
  bootstrapVue: {
    bootstrapCSS: false, 
    bootstrapVueCSS: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/custom.scss'
  ],

  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/universal-storage-module
    '@nuxtjs/universal-storage',
    // fontawesome
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faPen',
              'faCog',
              'faBicycle',
              'faChild',
              'faExternalLinkAlt',
              'faPlus',
              'faSearch',
              'faTrashAlt',
              'faBell',
              'faBookmark',
              'faEllipsisV',
              'faShareAlt',
              'faSkullCrossbones',
              'faTags',
              'faTag',
              'faTh',
              'faTimes',
              'faCloudUploadAlt',
              'faCloudDownloadAlt',
              'faSignOutAlt',
              'faThList'
            ]
          }
        ]
      }
    ],
    
  ],

  /*
  **  universal storage options
  */
  storage: {
    localStorage: {
      prefix: 'memosizeme_'
    },
  },

  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
  manifest: {
      name: 'Memo Size Me',
    short_name: 'memoSizeMe',
    lang: 'en',
    description:'Record your sizes locally. No account. Free. Data stays Local.',
    useWebmanifestExtension: false
  }
},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
