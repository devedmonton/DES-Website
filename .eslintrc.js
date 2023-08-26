module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "vue/multi-word-component-names": "off",
    },
    globals: {
        $nuxt: true,
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
    },
};
