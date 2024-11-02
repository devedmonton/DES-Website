export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
    '@vite-pwa/nuxt',
  ],

  // auto imports
  imports: {
    dirs: [
      './constants',
    ],
  },

  // @nuxt/devtools
  devtools: {
    enabled: true,
  },

  app: {
    keepalive: true,
    head: {
      htmlAttrs: {
        lang: 'en-CA',
      },
    },
  },

  // custom css
  css: [
    '~/assets/style.css',
  ],

  router: {
    options: {
      linkExactActiveClass: '',
      linkActiveClass: '',
    },
  },

  // @nuxtjs/seo
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://devedmonton.com',
    name: 'Dev Edmonton Society',
    strictNuxtContentPaths: true,
  },

  // @nuxtjs/color-mode
  colorMode: {
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    storageKey: 'color-mode',
    preference: 'light',
    classSuffix: '',
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

  // route redirects
  routeRules: {
    '/bylaws': { redirect: 'https://docs.google.com/document/d/1i6oXabir-628csa2bQacHpc17Kmhec9EfkyHij9yQGM/edit' },
    '/2021-survey': { redirect: 'https://docs.google.com/forms/d/e/1FAIpQLSeUyguShgoj6TZmqTboJN8qFVjKagrn1WRFvOuqDHqyGHEWeA/viewform?usp=sf_link' },
    '/api/events': { cors: true },
  },

  experimental: {
    headNext: true,
    // server components
    componentIslands: true,
  },

  // server
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },

  // @nuxt/eslint
  eslint: {
    config: {
      stylistic: true,
    },
  },

  // @nuxt/image
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/des',
    },
  },

  ogImage: {
    compatibility: {
      prerender: {
        chromium: false,
      },
    },
  },

  // @vite-pwa
  pwa: {
    devOptions: {
      enabled: false,
    },
    manifest: {
      name: 'Dev Edmonton Society',
      short_name: 'Dev Edmonton',
      description: 'Dev Edmonton Society is a community of developers, designers, and tech enthusiasts in Edmonton, Alberta.',
      theme_color: '#265DAD',
      background_color: '#f5f5f5',
      icons: [
        {
          src: '/apple-touch-icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
})
