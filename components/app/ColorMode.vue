<script lang="ts" setup>
const colorMode = useColorMode()

const themes = [
  // {
  //   name: 'system',
  //   icon: 'line-md:computer',
  // },
  {
    name: 'light',
    icon: 'line-md:moon-alt-to-sunny-outline-loop-transition',
  },
  {
    name: 'dark',
    icon: 'line-md:moon-alt-loop',
  },
  // {
  //   name: 'coffee',
  //   icon: 'line-md:coffee-half-empty-twotone-loop',
  // },
]

const theme = computed(() => themes.find(theme => theme.name === colorMode.preference) || themes[0])

function toggleTheme() {
  const index = themes.findIndex(theme => theme.name === colorMode.preference)
  const next = (index + 1) % themes.length
  colorMode.preference = themes[next].name
}
</script>

<template>
  <AppButton
    title="Color Mode"
    :class="`color-mode-${colorMode.preference}`"
    @click="toggleTheme"
  >
    <Icon
      class="w-5 h-5 !block"
      :name="theme.icon"
    />
  </AppButton>
</template>
