<script setup lang="ts">
const group = { name: 'Meetups We Support', items: meetups }

const title = 'Meetups'
const description = 'Lists all the meetups that are hosting events in the Dev Edmonton community.'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  icon: 'i-ph-users-duotone',
})
</script>

<template>
  <main>
    <AppSection :group="group" />
  </main>
</template>
