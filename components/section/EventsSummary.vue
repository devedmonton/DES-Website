<template>
    <div class="relative bg-grey-000 pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8">
        <a id="community-events" href="/#community-events" class="anchor"></a>
        <div class="absolute inset-0">
            <div class="h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                    Community Events
                </h2>
            </div>
            <div
                 class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                 <!-- Using ClientOnly to prevent hydation mismatch -->
                <ClientOnly>
                    <ExternalInfoCard v-for="(event, index) in shuffledEvents" v-bind="event" :key="index" />
                </ClientOnly>
                <ViewAll 
                :card-limit="cardLimit"
                         link-to="/events">View All Events</ViewAll>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

import { useEventsStore } from "@/store/events";
import { shuffleArray } from "@/utilities/helpers";

export default {
    props: {
        // Use this property to limit the number of cards displayed
        cardLimit: {
            type: Number,
            default: 5,
        },
    },
    setup() {
        const store = useEventsStore();

        // Gets a random list of events limited to the cardLimit(5)
        const shuffledEvents = computed(() => {
            return shuffleArray(store.getLimitedEvents(5));
        });
        return { shuffledEvents };
    },
};
</script>
