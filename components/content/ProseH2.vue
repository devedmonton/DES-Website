<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

// @eslint-ignore
const props = defineProps<{
  id?: string
}>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>

<template>
  <h2
    :id="id"
    class="text-xl font-bold py-2 border-b border-neutral-400/40 my-4"
  >
    <NuxtLink
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h2>
</template>
