export default {
  ssr: false,
  head: {
    script: [
      {
        src: '/js/jquery-3.5.1.min.js'
      },
      {
        src: '/js/tabs.js'
      },
      {
        src: '/js/jquery.mmenu.all.js'
      },
      {
        src: '/js/theia-sticky-sidebar.js'
      },
      {
        src: '/js/wow.min.js'
      },
      {
        src: '/js/jquery.flexslider.js'
      },
      {
        src: '/js/main.js'
      },
      {
        src: '/assets/js/sly.min.js'
      },
      {
        src: '/assets/js/dragscroll.js'
      },
      {
        src: '/assets/js/jquery.scrollbar.min.js'
      },
      {
        src: "/assets/js/leaflet.js"
      },
      {
        src: "/assets/js/leaflet.markercluster.js"
      },
      {
        src: "/js/modernizr.js"
      },
      {
        src: "/js/common_scripts.min.js"
      },
      {
        src: "/js/velocity.min.js"
      },
      // {
      //   src:"/js/functions.js"
      // },
      {
        src: "/assets/js/custom.js"
      },
      {
        src: "/assets/js/map-leaflet.js"
      },

    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800'
      },
      {
        rel: 'stylesheet',
        href: '/css/blog.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/style.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/vendors.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/vendors1.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/custom.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/menu.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/jquery.scrollbar.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/style.css',
      }
    ]
  },
  extend(config, ctx) {
    if (ctx.isDev) {
      config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
    }
  },
  generate: {
    fallback: true
  },
  components: true,
  router: {
    linkActiveClass: "active" // tailwind class with custom color
  },
  target: 'static',
  modules: [
    // Simple usage
    'nuxt-leaflet',
    '@nuxt/content',
    'nuxt-material-design-icons',
    '@nuxtjs/apollo',
    'bootstrap-vue/nuxt' // TODO - WILL REMOVE BOOTSRAP & JUST USE VUE IMPLEMENTATION
    // With options
    // ['nuxt-leaflet', { /* module options */ }],
  ],
  bootstrapVue: {
    icons: true,
    componentPlugins: ['IconsPlugin','ToastPlugin','ModalPlugin'],
    // bootstrapCSS: false, // Or `css: false`
    // bootstrapVueCSS: false,
    components: ['BContainer','BRow','BCol', 'BSkeletonImg', 'BSkeleton', 'BCard', 'BCardBody','BButton','BModal', 'BAvatar', 'BCarousel', 'BCarouselSlide', 'BToast', 'BModal']
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BASE_URL || 'https://prop-web-hasu.herokuapp.com/v1/graphql'
      }
    }
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  plugins: [
    {
      src: "~/plugins/leaflet-markercluster.js",
      mode: "client"
    },
    {
      src: '~/plugins/after-each',
      mode: 'client'
    },
    { 
      src: '~/plugins/vue-fb-customer-chat.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-form-wizard.js',
      ssr: false
    },
    {
      src: 'plugins/owl.js', ssr: false
    }, // Only works on client side
    {
      src: 'plugins/youtube.js', ssr: false
    },
    {
      src: '~plugins/filters.js'
    }
  ]
}
