<template>
    <div
        class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    >
        <component
            :is="linkTo ? 'a' : 'div'"
            :href="linkTo || ''"
            :target="linkTo ? '_blank' : '_self'"
            class="focus:outline-none"
            :aria-label="name + ' website'"
        >
            <!-- Extend touch target to entire header -->
            <div class="flex items-center">
                <div class="absolute inset-0" aria-hidden="true"></div>
            </div>
        </component>
        <div class="flex items-center mb-2">
            <img
                v-if="logo"
                :class="`h-12 mr-6 rounded-md inline-flex p-1 object-contain ${
                    logoBg ? logoBg : null
                }`"
                :src="logo"
                :alt="`${name}-logo`"
            />
            <h3 class="text-xl font-medium pr-8">{{ name }}</h3>
            <span
                v-if="linkTo"
                class="pointer-events-none absolute top-4 right-4 text-gray-300 group-hover:text-brand-primary"
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
        <div class="mt-1 text-grey-700">
            <div v-if="slack" class="flex items-center mt-1">
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
                <span>{{ slack }} on slack</span>
            </div>
            <p class="mt-2 text-sm text-gray-500">
                {{ description }}
                <slot v-if="!description"></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logo: { type: String, default: "" },
        logoBg: { type: String, default: "" },
        name: { type: String, default: "" },
        linkTo: { type: String, required: true },
        slack: { type: String, default: null },
        description: { type: String, default: "" },
    },
};
</script>
