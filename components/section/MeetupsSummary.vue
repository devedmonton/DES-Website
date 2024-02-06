<template>
    <div
        class="relative bg-grey-000 pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
    >
        <a id="meetups" href="/#meetups" class="anchor"></a>
        <div class="absolute inset-0">
            <div class="h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2
                    class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                >
                    Meetups We Support
                </h2>
            </div>
            <div
                class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
            >
                <!-- Using ClientOnly to prevent hydation mismatch -->
                <ClientOnly>
                    <ExternalInfoCard
                        v-for="(meetup, index) in shuffledMeetups"
                        v-bind="meetup"
                        :key="index"
                    >
                        <p v-if="meetup.meetingTime" class="mt-2">
                            {{ meetup.meetingTime }}
                        </p>
                    </ExternalInfoCard>
                </ClientOnly>

                <ViewAll :card-limit="cardLimit" link-to="/meetups"
                    >View All Meetups</ViewAll
                >
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";

import { useMeetupsStore } from "@/store/meetups";

export default {
    props: {
        // Use this property to limit the number of cards displayed
        cardLimit: {
            type: Number,
            default: 5,
        },
    },
    setup(props) {
        const store = useMeetupsStore();

        // Gets a random list of meetups limited to the cardLimit (default value is 5)
        const shuffledMeetups = computed(() =>
            store.getLimitedMeetups(props.cardLimit),
        );

        return { shuffledMeetups };
    },
};
</script>
