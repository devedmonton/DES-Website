<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

defineProps<{
  group: any
  pending: boolean
}>()

const showEventModal = ref(false)
const selectedEvent = ref<any>({})
const onEventClick = (event: any, e: any) => {
  selectedEvent.value = event
  showEventModal.value = true
  e.stopPropagation()
}
</script>

<template>
  <section
    v-if="!pending"
    :id="slugify(group.name)"
    :key="group.name"
    class="max-w-7xl mx-auto lg:pt-20 pt-10 px-4 relative"
  >
    <ProseH1 class="mb-8 text-center">
      {{ group.name }}
    </ProseH1>
    <vue-cal
      class="rounded-lg bg-white dark:bg-neutral-800 overflow-hidden shadow"
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
    <!-- TODO: Implement the list view
    <div
      id="calendar-list-toggle"
      class="w-[180px] bg-gray-400/20 rounded-lg absolute top-[158px] left-[22px]"
    >
      <div
        class="w-1/2 inline-flex items-center"
      >
        <input
          id="calendar-toggle"
          name="calendar-list-toggle-radio"
          type="radio"
          class="hidden peer"
          checked
        >
        <label
          for="calendar-toggle"
          class="w-full text-center px-3 py-1 cursor-pointer rounded-lg peer-checked:bg-primary peer-checked:text-white"
        >
          Calendar
        </label>
      </div>
      <div
        class="w-1/2 inline-flex items-center"
      >
        <input
          id="list-toggle"
          name="calendar-list-toggle-radio"
          type="radio"
          class="hidden peer"
        >
        <label
          for="list-toggle"
          class="w-full text-center px-3 py-1 cursor-pointer rounded-lg peer-checked:bg-primary peer-checked:text-white"
        >
          List
        </label>
      </div>
    </div> -->
    <AppModal
      id="event-modal"
      v-model="showEventModal"
    >
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ selectedEvent.title }}
        </h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon
            class="w-6 h-6"
            name="i-ph-x-light"
            @click="showEventModal = false"
          />
          <span class="sr-only">Close dialog</span>
        </button>
      </div>
      <div class="p-4 space-y-4">
        <p class="text-sm text-gray-500">
          {{ selectedEvent.start.format('DD/MM/YYYY') }}
        </p>
        <p
          class="content-full"
          v-html="selectedEvent.description"
        />
        <div>
          <strong>Event details:</strong>
          <ul>
            <li>Event starts at: {{ selectedEvent.start.formatTime() }} MT</li>
            <li>Event ends at: {{ selectedEvent.end.formatTime() }} MT</li>
          </ul>
        </div>
      </div>
    </AppModal>
  </section>
  <section
    v-if="pending"
    class="max-w-7xl mx-auto lg:py-20 py-10 px-4"
  >
    <ProseH1 class="mb-8 text-center">
      {{ group.name }}
    </ProseH1>
    <div class="rounded-lg bg-white dark:bg-neutral-800 overflow-hidden shadow h-[691px]">
      <div class="flex items-center justify-center h-96">
        <Icon
          class="w-12 h-12 animate-spin"
          name="i-ph-spinner"
        />
      </div>
    </div>
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
  @apply flex flex-col justify-center p-2 bg-primary text-white border border-gray-400/25;
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

.vuecal__heading .weekday-label {
  font-weight: bold;
}

.vuecal--month-view .vuecal__cell {
  height: 125px;
}

.vuecal--month-view .vuecal__cell-content {
  justify-content: start;
  padding: .5rem;
}

.vuecal--month-view .vuecal__event {
  padding: unset;
  text-align: left;
  border: unset;
  color: #265dad;
  background-color: unset;
  padding: 0.3rem;
  border-radius: 0.2rem;
  gap: 5px;
  flex-direction: row;
  align-items: center;
}

.dark .vuecal--month-view .vuecal__event {
  color: white;
}

.vuecal--month-view .vuecal__cell--out-of-scope .vuecal__event {
  color: #bebaba;
}

.dark .vuecal--month-view .vuecal__cell--out-of-scope .vuecal__event {
  color: rgb(55, 55, 55);
}

.vuecal--month-view .vuecal__event:hover {
  background-color: #265dad;
  color: white;
}

.vuecal--month-view .vuecal__event .vuecal__event-title {
  font-weight: normal;
  text-wrap: nowrap;
  overflow: hidden;
  font-weight: bold;
}

.vuecal--month-view .vuecal__event .vuecal__event-time {
  order: -1;
}

.vuecal--month-view .vuecal__event .vuecal__event-time span {
  display: none;
}

#event-modal .content-full a {
  @apply hover:underline text-gray-600 dark:text-gray-400;
}
</style>
