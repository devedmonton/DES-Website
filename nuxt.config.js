// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    buildModules: ["@nuxtjs/pwa"],
    alias: {
        pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
    },
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
                content:
                    "Fostering a stronger software development community in Edmonton. We are made up of people who believe that an impactful, diverse, and collaborative developer community enriches us all. We realize this vision by sharing knowledge and ideas, understanding the community and its needs, promoting events and initiatives, and supporting technology meetups and organizations.",
            },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    options: {
        vite: {},
    },

    components: true,

    pwa: {
        meta: { mobileApp: false },
    },

    googleAnalytics: {
        id: "UA-180778341-1",
    },
});
