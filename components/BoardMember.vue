<template>
    <li>
        <div class="md:grid md:grid-cols-3 lg:gap-8 sm:pb-2">
            <img
                class="object-cover shadow-lg rounded-lg md:h-48"
                :src="`${imageLink}`"
                alt=""
            />

            <div class="md:col-span-2">
                <div class="space-y-1">
                    <div class="text-lg font-medium">
                        <h3>{{ name }}</h3>
                        <p class="text-indigo-600">{{ title }}</p>
                    </div>
                    <div class="text-lg">
                        <p class="mb-4 text-gray-500">
                            {{ description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </li>
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
