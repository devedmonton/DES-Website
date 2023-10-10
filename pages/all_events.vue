<template>
    <div class="relative bg-grey-000 mt-8 pb-16 sm:px-6 lg:pt-24 px-4 lg:px-8">
        <head>
            <title>Dev Edmonton Society - Events</title>
            <meta
                name="description"
                content="List of all the organizations that have fun tech events in Edmonton."
            />
        </head>
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
