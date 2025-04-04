<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

const subscriptionBlurb = `

You should be able to subscribe to this calendar using [this link][] in
most calendar applications. Here are some instructions for [Apple][] and
[Google][] calendars.

To add events to this calendar, ask on slack in [#meetup-organizers][] to be
given edit permission, and then in Google Calendar go to Calendar → Other
Calendars → + → Subscribe → and paste
\`devedmonton.com_18bfk742j1eba9iduh4p7u4fgs@group.calendar.google.com\`.

[Apple]: https://support.apple.com/en-ca/102301
[Google]: https://support.google.com/calendar/answer/37100?hl=en&co=GENIE.Platform%3DAndroid&oco=1
[this link]: https://calendar.google.com/calendar/ical/devedmonton.com_18bfk742j1eba9iduh4p7u4fgs%40group.calendar.google.com/public/basic.ics
[#meetup-organizers]: https://devedmonton.slack.com/archives/CD8GT70CD
`

// https://antoniandre.github.io/vue-cal-v4/#date-prototypes
const TIME_FORMAT = '{h}:{mm} {am}'

// `undefined` for the locale means to use the system one, instead of one
// specified by the website
const DATE_FORMATTER = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

const props = defineProps<{
  group: any
  pending: boolean
}>()

const isMobile = useMediaQuery('(max-width: 700px)')
const calendarView = useCookie('calendarView', { default: () => 'calendar' })
const selectedView = computed({
  get: () => isMobile.value ? 'list' : calendarView.value,
  set: value => calendarView.value = value,
})
const showEventModal = ref(false)
const selectedEvent = ref<any>({})
const onEventClick = (event: any, e: any) => {
  selectedEvent.value = event
  showEventModal.value = true
  e.stopPropagation()
}

// used to display events grouped by month in the list view
const groupedEvents = computed(() => {
  return props.group.items.reduce((monthEvents: any, event: any) => {
    // creating a key to group the events by month in format "Month Year"
    const monthKey = event.start.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })

    // check if there are already events in this month
    // if not, initialize an empty array for this month
    if (!monthEvents[monthKey]) {
      monthEvents[monthKey] = []
    }

    // add current in the same month to the array
    monthEvents[monthKey].push(event)

    return monthEvents
  }, {})
})
</script>

<template>
  <section v-if="!pending" :id="slugify(group.name)" :key="group.name"
    class="max-w-7xl mx-auto lg:pt-20 pt-10 px-4 relative">
    <ProseH1 class="mb-8 text-center">
      {{ group.name }}
    </ProseH1>
    <div v-if="!isMobile" id="calendar-list-toggle" class="w-[180px] bg-gray-400/20 rounded-lg place-self-center mb-8">
      <div class="w-1/2 inline-flex items-center">
        <input id="calendar-toggle" v-model="selectedView" name="calendar-list-toggle-radio" type="radio"
          class="hidden peer" checked :value="'calendar'">
        <label for="calendar-toggle"
          class="w-full text-center px-3 py-1 cursor-pointer rounded-lg peer-checked:bg-primary peer-checked:text-white">
          Calendar
        </label>
      </div>
      <div class="w-1/2 inline-flex items-center">
        <input id="list-toggle" v-model="selectedView" name="calendar-list-toggle-radio" type="radio"
          class="hidden peer" :value="'list'">
        <label for="list-toggle"
          class="w-full text-center px-3 py-1 cursor-pointer rounded-lg peer-checked:bg-primary peer-checked:text-white">
          List
        </label>
      </div>
    </div>
    <vue-cal v-if="selectedView === 'calendar'"
      class="rounded-lg bg-white dark:bg-neutral-900 overflow-hidden shadow border border-gray-400/40" today-button
      small active-view="month" :events-on-month-view="true" :twelve-hour="true" :events="group.items"
      :start-week-on-sunday="true" :disable-views="['years', 'year', 'day']" :time-from="8 * 60" :time-to="22 * 60"
      :time-step="30" :on-event-click="onEventClick" :show-all-day-events="['short', true, false]">
      <template #arrow-prev>
        <Icon class="w-8 h-8" name="i-ph-arrow-left" />
      </template>
      <template #arrow-next>
        <Icon class="w-8 h-8" name="i-ph-arrow-right" />
      </template>
    </vue-cal>

    <!-- List View -->
    <div v-if="selectedView === 'list'">
      <div v-for="(events, month) in groupedEvents" :key="month" class="mb-8">
        <h3 class="text-2xl text-center mb-8 font-bold tracking-tight text-gray-900 dark:text-white">
          {{ month }}
        </h3>
        <div class="grid xl:grid-cols-2 gap-4">
          <div v-for="(event) in events" :key="event.title" class="border-2 border-gray-400/40 rounded mb-4 break-word">
            <div class="p-4 border-b rounded-t border-gray-400/40">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {{ event.title }}
              </h3>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <Icon name="formkit:date" />
                  <p class="text-sm text-gray-500">
                    {{ DATE_FORMATTER.format(event.start) }}
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="mingcute:time-line" />
                  <p class="text-sm text-gray-500">
                    {{ event.start.formatTime(TIME_FORMAT) }} - {{ event.end.formatTime(TIME_FORMAT) }}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 event-description" :class="{ 'max-w-md': isMobile }">
              <p class="content-full" v-html="event.description" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-8">
      <MDC class="subscription-blurb" :value="subscriptionBlurb" />
    </div>

    <AppModal id="event-modal" v-model="showEventModal">
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ selectedEvent.title }}
        </h3>
        <button type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <Icon class="w-6 h-6" name="i-ph-x-light" @click="showEventModal = false" />
          <span class="sr-only">Close dialog</span>
        </button>
      </div>
      <div class="p-4 space-y-4">
        <p class="text-sm text-gray-500">
          {{ DATE_FORMATTER.format(selectedEvent.start) }}
        </p>
        <p class="content-full" v-html="selectedEvent.description" />
        <div>
          <strong>Event details:</strong>
          <ul>
            <li>Event starts at: {{ selectedEvent.start.formatTime(TIME_FORMAT) }}</li>
            <li>Event ends at: {{ selectedEvent.end.formatTime(TIME_FORMAT) }}</li>
          </ul>
        </div>
      </div>
    </AppModal>
  </section>
  <section v-if="pending" class="max-w-7xl mx-auto lg:py-20 py-10 px-4">
    <ProseH1 class="mb-8 text-center">
      {{ group.name }}
    </ProseH1>
    <div
      class="rounded-lg bg-white dark:bg-neutral-900 overflow-hidden shadow h-[691px] flex items-center justify-center">
      <Icon class="w-12 h-12 animate-spin" name="i-ph-spinner" />
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
  @apply flex flex-col justify-start p-2 bg-primary text-white border border-gray-400/25;
}

.vuecal__event:hover {
  background-color: white;
  border: #265dad solid 1px;
  color: #265dad
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

.vuecal--month-view .vuecal__cell-events {
  overflow: auto;
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

.vuecal--week-view {
  height: 600px;
}

.vuecal--week-view .vuecal__all-day {
  @apply border-y-2;
}

.vuecal--week-view .vuecal__all-day-text {
  width: 57.5px !important;
}

/* .vuecal--week-view .vuecal__event:not(.vuecal__event--all-day) {
  @apply shadow-2xl rounded-lg;

} */

.vuecal--view-with-time .vuecal__event:not(.vuecal__event--all-day) {
  @apply shadow-2xl rounded-lg;
  width: 80% !important;
  left: 15% !important;

}

.vuecal--view-with-time .vuecal__event:not(.vuecal__event--all-day):first-child {
  position: absolute;
  left: 0% !important;
  width: 90% !important;
}

.vuecal--view-with-time .vuecal__event:not(.vuecal__event--all-day):nth-child(2) {
  position: absolute;
  left: 10% !important;
  width: 90% !important;
}

#event-modal .content-full a {
  @apply hover:underline text-gray-600 dark:text-gray-400;
}

.event-description a {
  @apply hover:underline text-gray-600 dark:text-gray-400;
}

p.content-full {
  overflow: auto;
  height: 180px;
}

.subscription-blurb code {
  @apply bg-gray-200 p-1;
  color: #344866;
  overflow-wrap: anywhere;
}
</style>
