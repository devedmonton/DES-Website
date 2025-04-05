<script setup lang="ts">
import { NuxtLink } from '#components'

const props = defineProps<{
  name: string
  to?: string
  image?: string
  description?: string
  link?: { url: string, text?: string }
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
    :target="target"
    class="group flex flex-col h-full border border-neutral-400/40 rounded-lg bg-white dark:bg-neutral-900"
  >
    <NuxtImg
      v-if="image"
      class="rounded-t-lg w-full h-64 object-cover"
      :src="image"
      :alt="name"
      loading="lazy"
      :provider="image.startsWith('http') ? undefined : 'imagekit'"
    />
    <div class="relative flex flex-col justify-between h-full p-5">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      <div>
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ name }}
        </h3>
        <div
          class="mb-3 font-normal text-gray-700 dark:text-gray-400"
          v-html="description"
        />
      </div>
      <div
        v-if="link"
        class="flex justify-center mt-4"
      >
        <AppButton
          :to="link.url"
          :prefetch="false"
          :title="name"
          class="bg-primary text-white px-3 py-1 hover:border-primary hover:text-primary flex items-center"
        >
          {{ link.text ?? 'Read More' }}
          <Icon
            class="w-4 h-4 ml-2"
            name="i-ph-arrow-right"
          />
        </AppButton>
      </div>
    </div>
  </component>
</template>
