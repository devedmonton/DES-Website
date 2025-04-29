<script setup lang="ts">
useServerSeoMeta({
  title: 'Dev Edmonton Society',
  titleTemplate: '%s | Dev Edmonton Society',
  description: 'Dev Edmonton Society is a community of developers, designers, and tech enthusiasts in Edmonton, Alberta.',
  author: 'Dev Edmonton Society',
  themeColor: '#265DAD',
})
</script>

<template>
  <NuxtPwaManifest />
  <Html>
    <Body class="bg-neutral-100 dark:bg-black dark:text-white w-screen transition-colors duration-300">
      <NuxtLoadingIndicator />
      <AppHeader />
      <NuxtPage />
      <AppFooter />
      <AppAnimationsMode class="fixed bottom-4 right-1 z-50" />
    </Body>
  </Html>
</template>
