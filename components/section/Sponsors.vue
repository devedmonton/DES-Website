<script setup lang="ts">
const { page } = useContent()
</script>

<template>
    <main>
        <section v-for="group of page.sponsors" :key="group.title" class="flex flex-col">
            <h3 class="text-2xl font-bold mb-4">{{ group.title }}</h3>
            <div class="flex sm:flex-row flex-col gap-10 justify-around">
                <div
v-for="sponsor of group.sponsors" :key="sponsor.title"
                    class="w-full sm:max-w-sm rounded-lg overflow-hidden shadow-lg border">
                    <figure class="px-6 pt-8 pb-4">
                        <img :src="sponsor.image" alt="sponsor" class="w-48" />
                    </figure>
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <div class="px-6 pb-4 bg-white" v-html="sponsor.description" />
                </div>
            </div>
            <hr class="my-8" />
        </section>
    </main>
</template>
