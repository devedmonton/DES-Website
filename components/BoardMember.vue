<template>
    <li>
        <div class="md:grid md:grid-cols-3 lg:gap-8 sm:pb-2">
            <div>
                <img
                    class="object-cover shadow-lg rounded-lg md:h-48"
                    :src="`${imageLink}`"
                    alt=""
                />
                <div class="flex flex-col py-2 text-center">
                    <button
                        class="p-1 border border-none text-sm font-medium rounded-md hover:text-white border-brand-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo hover:bg-indigo-700 transition ease-in-out duration-150"
                    >
                        Twitter
                    </button>
                    <button
                        class="p-1 border border-none text-sm font-medium rounded-md hover:text-white border-brand-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo hover:bg-indigo-700 transition ease-in-out duration-150"
                    >
                        Slack
                    </button>
                </div>
            </div>

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
