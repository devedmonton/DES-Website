export default defineNuxtConfig({

  // @nuxt/devtools
  devtools: {
    enabled: true,
  },

  experimental: {
    headNext: true,
    // server components
    componentIslands: true,
  },

  runtimeConfig: {
    mailChimp: {
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER ?? 'us20',
      listId: process.env.MAILCHIMP_LIST_ID,
    },
    googleCalendarAPI: {
      googleCalendarId: process.env.GOOGLE_CALENDAR_ID,
      serviceAccountCredentialsJSON: process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS_JSON,
    },
  },

  app: {
    keepalive: true,
  },

  router: {
    options: {
      linkExactActiveClass: '',
      linkActiveClass: '',
    },
  },

  // route redirects
  routeRules: {
    '/bylaws': { redirect: 'https://docs.google.com/document/d/1i6oXabir-628csa2bQacHpc17Kmhec9EfkyHij9yQGM/edit' },
    '/2021-survey': { redirect: 'https://docs.google.com/forms/d/e/1FAIpQLSeUyguShgoj6TZmqTboJN8qFVjKagrn1WRFvOuqDHqyGHEWeA/viewform?usp=sf_link' },
    '/api/events': { cors: true },
  },

  // custom css
  css: [
    '~/assets/style.css',
  ],

  // auto imports
  imports: {
    dirs: [
      './constants',
    ],
  },

  modules: [
    'nuxt-icon',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
  ],

  // @nuxtjs/seo
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://devedmonton.com',
    name: 'Dev Edmonton Society',
    strictNuxtContentPaths: true,
  },
  ogImage: {
    compatibility: {
      prerender: {
        chromium: false,
      },
    },
  },

  // @nuxt/image
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/des',
    },
  },

  // @nuxt/eslint
  eslint: {
    config: {
      stylistic: true,
    },
  },

  // @nuxtjs/color-mode
  colorMode: {
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    storageKey: 'color-mode',
    preference: 'light',
    classSuffix: '',
  },

  // server
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
})
