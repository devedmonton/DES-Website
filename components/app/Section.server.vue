<!--
name: Section
description: This component is responsible for rendering the sections.
  it is a SERVER component because we are randomizing section items in home page and to avoid hydration mismatch we have to use a server component.
-->

<script setup lang="ts">
const props = defineProps<{
  group: any
}>()

function calcSize(index: number) {
  return !props.group?.to && props.group.items.length % 2 === 1 && index === props.group.items.length ? 1 : 2
}
</script>

<template>
  <section
    :id="slugify(group.name)"
    :key="group.name"
    class="max-w-7xl mx-auto lg:py-20 py-10 px-4"
  >
    <ProseH1 class="mb-8 text-center">
      {{ group.name }}
    </ProseH1>
    <div class="grid mt-4 rounded-lg divide-gray-200 sm:grid-cols-2 gap-px bg-gray-200 dark:bg-neutral-950 overflow-hidden shadow">
      <AppCardHorizontal
        v-for="item, index in group.items"
        :key="index"
        :size="calcSize(index + 1)"
        v-bind="item"
      />
      <NuxtLink
        v-if="group.to"
        :to="group.to"
        title="View all"
        class="group flex flex-col text-center justify-center capitalize text-lg font-medium hover:bg-white dark:bg-neutral-800 transition-all duration-300 hover:text-primary min-h-48"
      >
        <span>
          view all {{ group.to }}
          <Icon
            class="group-hover:translate-x-4 transition-all duration-300"
            name="i-ph-arrow-right"
          />
        </span>
      </NuxtLink>
    </div>
  </section>
</template>
