<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
</script>

<template>
  <p :class="twMerge('text-neutral-600 dark:text-neutral-300', $attrs.class)">
    <slot />
  </p>
</template>
