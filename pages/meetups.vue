<script setup lang="ts">
const group = { name: 'Local Meetups', items: meetups }

const links = { name: 'Groups', items: groups }

const title = 'Meetups'
const description = 'Lists all the meetups that are hosting events in the Dev Edmonton community.'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  props: {
    icon: 'i-ph-users-duotone',
  },
})
</script>

<template>
  <main>
    <AppSection :group="group" />
    <AppSection :group="links" />
  </main>
</template>
