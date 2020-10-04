
let development = process.env.NODE_ENV !== 'production'
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
      }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js' },
      { src: '/js/sb-admin-2.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/sb-admin-2.scss",
    "@/vendor/fontawesome-free/css/all.min.css"
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/axios.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: development ? 'http://127.0.0.1:3333/api/v1' : 'https://torgo-desk.herokuapp.com/api/v1'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      },
      google: {
        client_id: '219658332401-ae7gcsb4dd28r692vrhaq6i3c4hdmt0j.apps.googleusercontent.com'
      },
    },
    plugins: ['~plugins/auth.js'],
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/countries',
    },
  }
}
