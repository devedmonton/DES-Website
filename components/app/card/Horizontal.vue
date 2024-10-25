<script setup lang="ts">
import { NuxtLink } from '#components'

const props = defineProps<{
  name: string
  to?: string
  image?: string
  description?: string
  socials?: object
  size?: number
}>()

const target = computed(() => {
  if (props.to?.startsWith('http') || props.to?.startsWith('//') || props.to?.startsWith('www.')) {
    return '_blank'
  }
  return undefined
})
</script>

<template>
  <component
    :is="to ? NuxtLink : 'div'"
    :to="to"
    :title="`${name} website`"
    :target="target"
    class="group relative p-6 bg-white dark:bg-neutral-900 min-h-48 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary col-span-1"
    :class="{ 'sm:col-span-2': size === 1 }"
  >
    <div class="flex items-center mb-2 pr-6">
      <div class="flex flex-wrap gap-x-4 gap-y-2 items-center">
        <NuxtImg
          v-if="image"
          class="h-10 inline-flex object-contain"
          :src="image"
          :provider="image?.startsWith('/assets/') ? undefined : 'imagekit'"
          :alt="`${name}-logo`"
          loading="lazy"
        />
        <h2 class="text-xl font-medium">
          {{ name }}
        </h2>
      </div>
      <span
        v-if="target"
        class="absolute text-gray-300 pointer-events-none top-4 right-4 group-hover:text-primary group-hover:rotate-45 transition-transform"
        aria-hidden="true"
      >
        <Icon
          class="w-8 h-8"
          name="i-ph-arrow-up-right"
        />
      </span>
    </div>
    <div class="mt-4 text-grey-700">
      <template v-if="socials">
        <div
          v-for="(value, key) of socials"
          :key="key"
          class="flex items-center gap-2 text-sm"
        >
          <Icon :name="iconify(key)" />
          <span>{{ value }}</span>
        </div>
      </template>
      <slot v-if="!description" />
      <p
        v-else
        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
        v-html="description"
      />
    </div>
  </component>
</template>
