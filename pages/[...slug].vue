<script setup lang="ts">
const { page } = useContent()
const route = useRoute()

const title = computed(() => page.value.title === 'Dev Edmonton Society' ? page.value.title : `${page.value.title} - Dev Edmonton Society`)
const description = computed(() => page.value?.description !== '' ? page.value.description : 'Fostering a stronger software development community in Edmonton. We are made up of people who believe that an impactful, diverse, and collaborative developer community enriches us all. We realize this vision by sharing knowledge and ideas, understanding the community and its needs, promoting events and initiatives, and supporting technology meetups and organizations.')

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: route.fullPath,
    twitterTitle: title,
    twitterDescription: description,
})

</script>

<template>
    <main class="md-content max-w-7xl mx-auto px-4 py-10 my-8">
        <ContentRenderer :key="page._id" :value="page">
            <SectionBox v-for="section of page.sections" :key="section.name" v-bind="section" />
            <ContentRendererMarkdown :value="page" />
        </ContentRenderer>
    </main>
</template>

<style lang="scss">
.md-content {
    h1 {
        @apply text-4xl font-extrabold pb-2 my-4;
    }

    // h2 {
    //   @apply text-2xl font-bold border-b border-gray-200 pb-2 my-4;
    // }

    // if there is more than one paragraph, add some space
    p+p {
        @apply mt-4;
    }

    ul {
        @apply list-disc pl-8 my-4 text-gray-600;
    }

    ol {
        @apply list-decimal pl-8 my-4 text-gray-600 text-base;

        li {
            @apply my-2;
        }

        ::marker {
            @apply text-gray-800 font-medium;
        }
    }
}
</style>
