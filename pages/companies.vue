<script setup lang="ts">
const group = { name: 'Edmonton Companies', items: companies.sort((a, b) => a.name.localeCompare(b.name)) }

const title = 'companies'
const description = 'Lists of all the companies who are part of the Dev Edmonton community.'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  props: {
    icon: 'i-ph-books-duotone',
  },
})
</script>

<template>
  <main>
    <AppSection :group="group" />
  </main>
</template>
