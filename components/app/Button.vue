<script setup lang="ts">
import { NuxtLink } from '#components'
import { twMerge } from 'tailwind-merge'

withDefaults(defineProps<{
  to?: string
  icon?: string
  title?: string
  type?: 'button' | 'submit' | 'reset'
}>(), {
  type: 'button',
})
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :type="to ? undefined : type"
    :to="to"
    :aria-label="to ? undefined : title"
    :title="to ? title : undefined"
    :class="twMerge(
      'duration-300 transition-all hover:bg-gray-200/30 dark:hover:bg-transparent border border-transparent hover:border-neutral-400/20 px-2 py-2 rounded-lg',
      $attrs.class,
    )"
  >
    <slot />
    <Icon
      v-if="icon"
      :name="icon"
      class="w-5 h-5 !block"
    />
  </component>
</template>