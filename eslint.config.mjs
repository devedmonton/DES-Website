import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-restricted-syntax': [
      'error',
      {
        selector: 'VElement[name="a"]',
        message: 'Use NuxtLink instead.',
      },
      {
        selector: 'VElement[name="router-link"]',
        message: 'Use NuxtLink instead.',
      },
    ],
  },
})



