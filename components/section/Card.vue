<script setup lang="ts">
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<{
  name: string
  to?: string
  image?: string
  logo?: string
  description?: string
  socials?: {}
  version?: number
}>(), {
  version: 1,
})

const target = computed(() => {
  if (props.to?.startsWith('http') || props.to?.startsWith('//') || props.to?.startsWith('www.')) {
    return '_blank'
  }
  return undefined
})

const iconify = (social: string) => {
  switch (social) {
    case 'slack':
      return 'i-logos:slack-icon'
    case 'twitter':
      return 'i-logos:twitter'
    case 'github':
      return 'i-logos:github-icon'
    case 'meetup':
      return 'i-mdi:meetup'
    case 'youtube':
      return 'i-logos:youtube-icon'
    case 'discord':
      return 'i-logos:discord-icon'
    case 'instagram':
      return 'i-logos:instagram-icon'
    case 'facebook':
      return 'i-logos:facebook'
    case 'linkedin':
      return 'i-logos:linkedin-icon'
    case 'twitch':
      return 'i-logos:twitch'
    default:
      return undefined
  }
}
</script>

<template>
  <div v-if="version === 1"
    class="relative p-6 bg-white group focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
    <component :is="to ? NuxtLink : 'div'" :to="to" :target="target" class="focus:outline-none"
      :aria-label="name + ' website'">
      <div class="flex items-center">
        <div class="absolute inset-0" aria-hidden="true" />
      </div>
    </component>
    <div class="flex items-center mb-2 pr-6">
      <div class="flex flex-wrap gap-x-4 gap-y-2 items-center">
        <img v-if="logo" :class="`h-10 inline-flex object-contain`" :src="logo" :alt="`${name}-logo`" />
        <NuxtImg v-else-if="image" class="h-10 inline-flex object-contain" :src="image" :alt="`${name}-logo`" />
        <h3 class="text-xl font-medium">
          {{ name }}
        </h3>
      </div>
      <span v-if="target"
        class="absolute text-gray-300 pointer-events-none top-4 right-4 group-hover:text-brand-primary"
        aria-hidden="true">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
        </svg>
      </span>
    </div>
    <div class="mt-4 text-grey-700">
      <template v-if="socials">
        <div v-for="social of Object.keys(socials)" class="flex items-center gap-2 text-sm">
          <Icon :name="iconify(social)" />
          <span>{{ socials[social] }}</span>
        </div>
      </template>
      <slot v-if="!description" />
      <p v-else v-html="description" class="mt-2 text-sm text-gray-500" />
    </div>
  </div>
  <div v-else class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img v-if="logo" class="h-48 w-full object-cover" :src="logo" :alt="`${name}-logo`" />
      <NuxtImg v-else-if="image" class="h-48 w-full object-cover" alt="Group of people posing together at a past event" :src="image" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <div class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ name }}
          </h3>
          <div class="mt-3 text-base leading-6 text-gray-500">
            <p v-if="description" v-html="description" />
            <slot v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
