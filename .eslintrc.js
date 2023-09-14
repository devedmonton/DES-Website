module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:vue/vue3-recommended",
        "prettier",
    ],
    rules: {
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "vue/multi-word-component-names": "off",
    },
    globals: {
        $nuxt: true,
        defineNuxtConfig: true,
        defineNuxtPlugin: true,
    },
    ignorePatterns: ["node_modules/", ".nuxt/", "dist/", "static"],
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
    },
};
