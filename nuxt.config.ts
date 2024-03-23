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
  