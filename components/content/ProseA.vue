<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="text-primary hover:underline"
  >
    <slot />
  </NuxtLink>
</template>
