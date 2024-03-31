<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
</script>

<template>
  <textarea :class="twMerge('appearance-none block w-full border border-neutral-400/40 rounded-md px-3 py-2 leading-6 transition duration-150 ease-in-out dark:bg-neutral-800 dark:border-neutral-700', $attrs.class)" />
</template>
