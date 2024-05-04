<script setup lang="ts">
defineProps<{
  group: any
}>()
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
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
      <AppCardVertical
        v-for="event of group.items.slice(0, 3)"
        :key="event.title"
        v-bind="event"
      />
    </div>
  </section>
</template>

<style>

</style>
