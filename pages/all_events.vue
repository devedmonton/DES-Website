<template>
  <div class="relative py-8 bg-white overflow-hidden max-w-7xl mx-auto sm:px-4">
    <div class="text-gray-500">
      <EventsSection />
    </div>
  </div>
</template>

<script>
import EventsSection from "../components/EventsSection.vue";

export default {
  components: {
    EventsSection,
  },
};
</script>
