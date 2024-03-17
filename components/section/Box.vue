<script setup lang="ts">
defineProps<{
    name: string
    version?: number
    cards?: []
    page?: string
}>()
</script>

<template>
    <section :id="slugify(name)">
        <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 text-center pb-6">
            {{ name }}
        </h2>
        <div class="grid mt-4 rounded-lg divide-gray-200"
            :class="version === 2 ? 'lg:grid-cols-3 gap-4' : 'sm:grid-cols-2 gap-px bg-gray-200 overflow-hidden shadow'">
            <SectionCard v-for="card of cards" :key="card.name" v-bind="card" :version="version" />
            <slot />
        </div>
    </section>
</template>
