import nuxt from './.nuxt/eslint.config.mjs'

export default [
  ...nuxt,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off',
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
  },
]
