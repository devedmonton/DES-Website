export default {
    /*
     ** Headers of the page
     */
    head: {
        title: "Dev Edmonton Society",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "Fostering a stronger software development community in Edmonton. We are made up of people who believe that an impactful, diverse, and collaborative developer community enriches us all. We realize this vision by sharing knowledge and ideas, understanding the community and its needs, promoting events and initiatives, and supporting technology meetups and organizations.",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    /*
     ** Auto Import Components
     */
    components: true,
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js build-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        "@nuxtjs/tailwindcss",
        // Doc: https://google-analytics.nuxtjs.org
        "@nuxtjs/google-analytics",
        // Doc https://pwa.nuxtjs.org/
        "@nuxtjs/pwa",
    ],
    /*
     ** PWA Settings
     */
    pwa: {
        meta: { mobileApp: false },
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
    },
    googleAnalytics: {
        id: "UA-180778341-1",
    },
};
