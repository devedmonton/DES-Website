<template>
    <div class="relative bg-grey-000 mt-8 pb-16 sm:px-6 lg:pt-24 px-4 lg:px-8">
        <Head>
            <Title>Dev Edmonton Society - Resources</Title>
            <Meta
                name="description"
                content="Lists all the resources that we know of to help the Dev Edmonton community."
            />
        </Head>
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
