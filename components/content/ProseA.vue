<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

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
    :class="twMerge('text-primary font-bold hover:underline', $attrs.class)"
  >
    <slot />
  </NuxtLink>
</template>
