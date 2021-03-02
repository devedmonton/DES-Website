<template>
    <div
        class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    >
        <div>
            <img
                :class="`w-12 h-12 rounded-md inline-flex p-1 ${
                    logoBg ? logoBg : null
                }`"
                :src="logo"
                :alt="`${name}-logo`"
            />
        </div>
        <div class="mt-4">
            <h3 class="text-lg font-medium">
                <a v-if="linkTo" :href="linkTo" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    {{ name }} - {{ slack }}
                </a>
                <p v-else>{{ name }} - {{ slack }}</p>
            </h3>
            <p class="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
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
        slack: { type: String, required: true },
    },
};
</script>

<style></style>
