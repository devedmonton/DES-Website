<template>
    <div
        class="relative bg-grey-000 mt-8 pb-16 sm:px-6 pt-8 lg:pt-24 px-4 lg:px-8"
    >
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
