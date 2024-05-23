<script setup lang="ts">
const group = { name: 'Calendar', items: await fetchEvents() }

const title = 'Calendar'
const description = 'List of all upcoming events in Edmonton'

useServerSeoMeta({
  title,
  description,
})

onMounted(() => {
  // fetch the events using the google api.
  // change the events ref to use the google api
  // profit.
})
</script>

<template>
  <main>
    <AppCalendar :group="group" />
  </main>
</template>
