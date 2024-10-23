<script setup lang="ts">
const title = 'Contact Us'
const description = 'A form for people to contact us if they have any questions or thoughts to share.'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  props: {
    icon: 'i-ph-phone-duotone',
  },
})
</script>

<template>
  <main class="mt-8 max-w-lg mx-auto px-8">
    <AppContactForm />
  </main>
</template>
