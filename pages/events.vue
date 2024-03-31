<script setup lang="ts">
const group = { name: 'Community Events', items: events }

const title = 'Events'
const description = 'List of all the organizations that have fun tech events in Edmonton.'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  icon: 'i-ph-calendar-blank-duotone',
})
</script>

<template>
  <main>
    <AppSection :group="group" />
  </main>
</template>
