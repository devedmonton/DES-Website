<template>
    <div
        class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    >
        <div class="flex items-center">
            <img
                :class="`w-12 h-12 rounded-md inline-flex p-1 ${
                    logoBg ? logoBg : null
                }`"
                :src="logo"
                :alt="`${name}-logo`"
            />
            <h3 class="ml-6 text-xl font-medium pr-8">{{ name }}</h3>
        </div>
        <div class="mt-2">
            <div class="text-grey-700">
                <component
                    :is="linkTo ? 'a' : 'div'"
                    :href="linkTo || ''"
                    class="focus:outline-none"
                >
                    <!-- Extend touch target to entire panel -->
                    <div class="flex items-center">
                        <div class="absolute inset-0" aria-hidden="true"></div>
                        <div v-if="slack" class="flex items-center">
                            <svg
                                class="w-5 h-5 mr-2"
                                fill="#868e96"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2m1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5m2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9m0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5m8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2m-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5m-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2m0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z"
                                />
                            </svg>
                            {{ slack }} on slack
                        </div>
                    </div>
                </component>
            </div>
            <p class="mt-2 text-sm text-gray-500">
                <slot></slot>
            </p>
        </div>
        <span
            v-if="linkTo"
            class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
        >
            <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                />
            </svg>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        logo: { type: String, required: true },
        logoBg: { type: String, default: "" },
        name: { type: String, required: true },
        linkTo: { type: String, required: true },
        slack: { type: String, default: null },
    },
};
</script>

<style></style>
