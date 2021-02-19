<template>
    <div
        class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"
    >
        <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
            <img
                class="object-cover shadow-lg rounded-lg"
                :src="`${imageLink}`"
                alt=""
            />
        </div>
        <div class="sm:col-span-2">
            <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ name }}</h3>
                    <p class="text-indigo-600">{{ title }}</p>
                </div>
                <div class="text-lg">
                    <p class="text-gray-500">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String },
        title: { type: String },
        description: { type: String },
        imageLink: { type: String },
    },
};
</script>

<style scoped></style>
