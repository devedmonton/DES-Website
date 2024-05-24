<script setup lang="ts">
const group = ref({ name: 'Calendar', items: [] })

const title = 'Calendar'
const description = 'List of all upcoming events in Edmonton'

useServerSeoMeta({
  title,
  description,
})

defineOgImage({
  component: 'AppOgImageFrame',
  icon: 'i-ph-calendar-duotone',
})

onMounted(async () => {
  try {
    const items = await fetchEvents()
    group.value = { name: 'Calendar', items }
  }
  catch (error) {
    console.error('Failed to fetch events:', error)
  }
})
</script>

<template>
  <main>
    <AppCalendar :group="group" />
  </main>
</template>
