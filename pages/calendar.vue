<script setup lang="ts">
const group = ref({ name: 'Calendar', items: [] })

const { pending, data: events } = await useLazyAsyncData('events', fetchEvents)

watch(events, (newEvents) => {
  group.value = { name: 'Calendar', items: newEvents }
})

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
</script>

<template>
  <main>
    <AppCalendar
      v-if="!pending"
      :group="group"
    />
    <div v-if="pending">
      Loading...
    </div>
  </main>
</template>
