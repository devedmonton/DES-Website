const opencolor = require('open-color')

function hueScale(hue = []) {
    return hue.reduce((acc, val, idx) => {
        let key = `${idx}00`
        return { ...acc, [key]: val }
    }, {})
}

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        colors: {
            transparent: 'transparent',

            black: '#000',
            white: '#fff',

            'brand-primary': '#265DAD',
            'brand-primary-dark': '#215097',
            'brand-light': '#ABAAC3',
            'brand-secondary': '#7751A9',
            'brand-secondary-dark': '#61428A',
            'brand-accent': '#DDB22E',
            'brand-black': '#171717',
            'brand-grey': '#CED3DC',

            grey: hueScale(opencolor.gray),
            red: hueScale(opencolor.red),
            pink: hueScale(opencolor.pink),
            grape: hueScale(opencolor.grape),
            violet: hueScale(opencolor.violet),
            indigo: hueScale(opencolor.indigo),
            blue: hueScale(opencolor.blue),
            cyan: hueScale(opencolor.cyan),
            teal: hueScale(opencolor.teal),
            green: hueScale(opencolor.green),
            lime: hueScale(opencolor.lime),
            yellow: hueScale(opencolor.yellow),
            orange: hueScale(opencolor.orange),
        },

        extend: {
            maxWidth: {
                30: '30%',
            },
        },
    },
    variants: {},
    plugins: [],
}
