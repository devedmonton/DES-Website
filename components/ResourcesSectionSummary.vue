<template>
    <div
        class="relative bg-grey-000 pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
    >
        <a id="resources" href="/#resources" class="anchor"></a>
        <div class="absolute inset-0">
            <div class="h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2
                    class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                >
                    Resources
                </h2>
            </div>
            <div
                class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
            >
                <ExternalInfoCard
                    v-for="(resource, index) in store.getLimitedResources(
                        cardLimit,
                    )"
                    v-bind="resource"
                    :key="index"
                >
                    <p v-if="resource.meetingTime" class="mt-2">
                        {{ resource.meetingTime }}
                    </p>
                </ExternalInfoCard>
                <ViewAll :card-limit="cardLimit" link-to="/all_resources"
                    >View All Resources</ViewAll
                >
            </div>
        </div>
    </div>
</template>

<script>
import { useResourcesStore } from "@/store/resources";

export default {
    props: {
        // Use this property to limit the number of cards displayed
        cardLimit: {
            type: Number,
            default: 5,
        },
    },
    setup() {
        const store = useResourcesStore();
        return { store };
    },
};
</script>
