<template>
    <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
            <h2
                class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
            >
                Community Events
            </h2>
        </div>
        <div
            class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
        >
            <ExternalInfoCard
                v-for="(event, index) in events"
                v-bind="event"
                :key="index"
            >
            </ExternalInfoCard>
        </div>
    </div>
</template>

<script>
import ExternalInfoCard from "./ExternalInfoCard.vue";

export default {
    components: {
        ExternalInfoCard,
    },
    computed: {
        events() {
            return this.$store.getters["events/getAllEvents"];
        },
    },
};
</script>
