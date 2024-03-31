<script setup lang="ts">
import type { Sponsor } from '~/types'

const categorized = computed(() => {
  const categorized = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.category]) {
      acc[sponsor.category] = []
    }
    acc[sponsor.category].push(sponsor)
    return acc
  }, {})
  return Object.entries(categorized).map(([name, sponsors]) => ({ name, sponsors })) as { name: string, sponsors: Sponsor[] }[]
})
</script>

<template>
  <main class="px-10">
    <section
      v-for="group, index of categorized"
      :key="group.name"
      class="flex flex-col"
      :class="{ 'pb-20': categorized.length - 1 === index }"
    >
      <h3 class="text-2xl font-bold mb-8 capitalize">
        {{ group.name }} Tier
      </h3>
      <div class="flex sm:flex-row flex-col gap-8 justify-around">
        <div
          v-for="sponsor of group.sponsors"
          :key="sponsor.name"
          class="w-full sm:max-w-sm rounded-lg overflow-hidden shadow-lg dark:bg-neutral-800 border"
        >
          <Icon
            class="w-64 h-28 px-6"
            :name="sponsor.image"
          />
          <div
            class="px-6 pb-4"
            v-html="sponsor.description"
          />
        </div>
      </div>
      <hr
        v-if="categorized.length - 1 !== index"
        class="my-8"
      >
    </section>
  </main>
</template>
