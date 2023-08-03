<template>
    <div
        class="relative py-8 bg-white overflow-hidden max-w-7xl mx-auto sm:px-4"
    >
        <div class="text-gray-500">
            <ResourcesSection />
        </div>
    </div>
</template>

<script>
import ResourcesSection from "../components/ResourcesSection.vue";

export default {
    components: {
        ResourcesSection,
    },
};
</script>
