<template>
    <li>
        <div class="md:grid md:grid-cols-3 lg:gap-8 sm:pb-2">
            <div>
                <img
                    class="object-cover shadow-lg rounded-lg md:h-48"
                    :src="`${imageLink}`"
                    alt=""
                />
            </div>

            <div class="md:col-span-2">
                <div class="space-y-1">
                    <div class="text-lg font-medium">
                        <h3>{{ name }}</h3>
                        <p class="text-indigo-600">{{ title }}</p>
                        <div class="flex pb-1">
                            <span class="sr-only">Twitter</span>
                            <svg
                                class="w-5 h-5"
                                fill="#c0c0c0"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
                                />
                            </svg>
                            <span class="text-xs pt-0.5 text-gray-500"
                                ><i>@twitterHandle</i></span
                            >
                        </div>
                        <div class="flex">
                            <span class="sr-only">Twitter</span>
                            <svg
                                class="w-5 h-5"
                                fill="#c0c0c0"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2m1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5m2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9m0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5m8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2m-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5m-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2m0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z"
                                />
                            </svg>
                            <span class="text-xs pt-0.5 text-gray-500"
                                ><i>@slackAccount</i></span
                            >
                        </div>
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
        name: { type: String, default: "" },
        title: { type: String, default: "" },
        description: { type: String, default: "" },
        imageLink: { type: String, default: "" },
    },
};
</script>

<style scoped></style>
