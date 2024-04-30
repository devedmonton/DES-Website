<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import the calendar.
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

const group = {
  name: 'Calendar',
  items: [],
}
const title = 'Calendar'
const description = 'List of all upcoming events in Edmonton'
// Learn how to use this piece.
useServerSeoMeta({
  title,
  description,
})
onMounted(() => {
  // fetch the events using the google api.
  // change the events ref to use the google api
  // profit.
})
// have some events in a ref.
const events = ref([
  {
    start: '2024-05-01 16:00',
    end: '2024-05-01 18:00',
    title: 'JS Ruby Python Meetup',
    description: 'Join us for a meetup on js development',
    location: '123 Main St, Edmonton',
    class: 'js-rb-py-meetup',
  },
  // {
  //   start: '2024-05-02 19:00',
  //   end: '2024-05-02 21:00',
  //   title: 'React Workshop',
  //   description: 'Learn the basics of React at this workshop',
  //   location: '456 Elm St, Edmonton',
  // },
  // {
  //   start: '2024-04-29 17:30',
  //   end: '2024-04-29 19:30',
  //   title: 'Angular Conference',
  //   description: 'Attend the annual Angular conference',
  //   location: '789 Oak St, Edmonton',
  // },
  {
    start: '2024-04-30 12:30',
    end: '2024-04-30 14:30',
    title: 'Edmonton .Net User Group',
    description: 'Join fellow Python enthusiasts for a meetup',
    location: '321 Maple St, Edmonton',
    class: 'dot-net-user-group',
  },
])
</script>

<template>
  <main class="mt-8">
    <ProseH1 class="mb-8 text-center">
      Events Calendar
    </ProseH1>
    <vue-cal
      class="mx-auto mb-8"
      style="height: 615px"
      today-button
      :events="events"
      :start-week-on-sunday="true"
      :disable-views="['years', 'year']"
      :time-from="8 * 60"
      :time-to="20 * 60"
      :time-step="60"
    />
  </main>
</template>

<style>
  .vuecal {
    height: 90vh;
    width: 90vh;
  }

  .vuecal__event.js-rb-py-meetup {
    background-color: #fecc2f;
    border: 2px solid #f9b52e;
    color: #363636;
  }

  .vuecal__event.dot-net-user-group {
    background-color: #512ad5;
    border: 2px solid #3c1f9f;
    color: #fff;
  }
</style>
