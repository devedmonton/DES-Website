<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

defineProps<{
  group: any
}>()

const showDialog = ref(false)
const selectedEvent = ref<any>({})

const onEventClick = (event: any, e: any) => {
  selectedEvent.value = event
  showDialog.value = true
  console.log(selectedEvent)
  // window.open(selectedEvent.eventUrl)

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

    <div
      v-if="showDialog"
      id="dialog"
      class="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-400 bg-opacity-30"
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white border border-neutral-400/20 rounded-lg dark:bg-neutral-800 shadow">
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ selectedEvent.title }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="showDialog = false"
            >
              <Icon
                class="w-6 h-6"
                name="i-ph-x-light"
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
              v-html="selectedEvent.contentFull"
            />
            <div>
              <strong>Event details:</strong>
              <ul>
                <li>Event starts at: {{ selectedEvent.start.formatTime() }} MT</li>
                <li>Event ends at: {{ selectedEvent.end.formatTime() }} MT</li>
              </ul>
            </div>
          </div>
          <div class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              class="duration-300 transition-all hover:bg-gray-200/30 dark:hover:bg-transparent border border-transparent rounded-lg bg-primary text-white px-3 py-1 hover:border-primary hover:text-primary flex items-center"
              @click="showDialog = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .vuecal__event.js-ruby-python-meetup {
    background-color: hsl(46, 99%, 59%);
    @apply text-black;
  }

  .vuecal__event.dotnet-user-group {
    background-color: hsl(254, 67%, 50%);
    @apply text-white;
  }

  .vuecal__event.edmonton-r-user-group {
    background-color: hsl(19, 100%, 50%);
    @apply text-white;
  }

  .vuecal__event.edmonton-women-in-tech {
    background-color: hsl(0, 0%, 100%);
    @apply text-black;
  }

  .vuecal__event.weekly-dev-chat {
    background-color: hsl(178, 74%, 31%);
    @apply text-white;
  }

  .vuecal__event.edmonton-data-science-community {
    background-color: hsl(25, 97%, 70%);
    @apply text-black;
  }

  .vuecal__event.yegsec {
    background-color: hsl(0, 0%, 96%);
    @apply text-black;
  }

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
    @apply rounded flex flex-col justify-center p-2;
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

  #dialog .content-full a{
    @apply hover:underline text-gray-600 dark:text-gray-400;
  }
</style>
