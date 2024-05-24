<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

defineProps<{
  group: any
}>()

const showEventDetail = ref(false)
const selectedEvent = ref<any>({})

const close = () => {
  showEventDetail.value = false
}

const onEventClick = (event: any, e: any) => {
  selectedEvent.value = event
  showEventDetail.value = true

  e.stopPropagation()
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
    <vue-cal
      class="rounded-lg bg-white dark:bg-neutral-800 overflow-hidden shadow"
      style="height: 691px;"
      today-button
      small
      :events-on-month-view="true"
      :twelve-hour="true"
      :events="group.items"
      :start-week-on-sunday="true"
      :disable-views="['years', 'year', 'day']"
      :time-from="8 * 60"
      :time-to="22 * 60"
      :time-step="60"
      :on-event-click="onEventClick"
    >
      <template #arrow-prev>
        <Icon
          class="w-8 h-8"
          name="i-ph-arrow-left"
        />
      </template>
      <template #arrow-next>
        <Icon
          class="w-8 h-8"
          name="i-ph-arrow-right"
        />
      </template>
    </vue-cal>

    <AppEventDetail
      :show="showEventDetail"
      :event="selectedEvent"
      @close="close"
    />
  </section>
</template>

<style>
  .vuecal__event-title {
    @apply text-xs sm:text-sm font-semibold;
  }

  .vuecal__event-time {
    @apply text-[0.5rem] sm:text-xs;
  }

  .vuecal__event:hover {
    @apply cursor-pointer;
  }

  .vuecal__event {
    @apply rounded flex flex-col justify-center p-2 bg-primary text-white;
  }

  .vuecal__event-content {
    @apply italic text-xs;
  }

  .vuecal__title-bar {
    @apply relative;
  }

  .vuecal__today-btn {
    @apply bg-gray-400/20 hover:bg-gray-400/25 py-1 px-3 me-4 rounded-lg dark:text-white text-black font-semibold absolute right-[-10px] top-[-39px];
  }

  div.vuecal__cell:nth-child(7)::before {
    @apply rounded-ee-lg;
  }
</style>
