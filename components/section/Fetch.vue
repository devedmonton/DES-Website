<script setup lang="ts">
const props = defineProps<{
    page: string
    limit: string
}>()

const { data } = await useAsyncData(props.page, () => queryContent(props.page).findOne())
</script>

<template>
    <div>
        <SectionBox v-for="section of data.sections" :key="section.name" :name="section.name"
            :cards="limit ? shuffleArray(section.cards).slice(0, Number(limit)) : section.cards">
            <NuxtLink :to="page"
                class="group flex flex-col text-center justify-center capitalize text-lg font-medium hover:bg-white transition-all duration-300 hover:text-brand-primary">
                <span>
                    view all {{ page }}
                    <Icon class="group-hover:translate-x-4 transition-all duration-300" name="i-carbon-arrow-right" />
                </span>
            </NuxtLink>
        </SectionBox>
    </div>
</template>
