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
            <div
                v-if="durationInfo"
                class="flex items-center text-grey-700 mt-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-5 h-5 mr-2"
                    fill="#868e96"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g fill="#231F20">
                        <path
                            d="M256 11C120.9 11 11 120.9 11 256s109.9 245 245 245 245-109.9 245-245S391.1 11 256 11zm203.2 255.4h20.7c-2.5 54-24.1 103-58.3 140.5L407 392.3c-4.1-4.1-10.7-4.1-14.7 0-4.1 4.1-4.1 10.7 0 14.7l14.6 14.6c-37.5 34.2-86.5 55.8-140.5 58.3v-20.7c0-5.8-4.7-10.4-10.4-10.4-5.8 0-10.4 4.7-10.4 10.4v20.7c-54-2.5-103-24.1-140.5-58.3l14.6-14.6c4.1-4.1 4.1-10.7 0-14.7-4.1-4.1-10.7-4.1-14.7 0l-14.6 14.6c-34.1-37.5-55.8-86.5-58.3-140.4h20.7c5.8 0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4H32.1c2.5-54 24.1-103 58.3-140.5l14.6 14.6c4.1 4.1 10.7 4.1 14.7 0 4.1-4.1 4.1-10.7 0-14.7l-14.6-14.6c37.5-34.2 86.5-55.8 140.5-58.3v20.7c0 5.8 4.7 10.4 10.4 10.4 5.8 0 10.4-4.7 10.4-10.4V32.1c54 2.5 103 24.1 140.5 58.3L392.3 105c-4.1 4.1-4.1 10.7 0 14.7 4.1 4.1 10.7 4.1 14.7 0l14.6-14.6c34.2 37.5 55.8 86.5 58.3 140.5h-20.7c-5.8 0-10.4 4.7-10.4 10.4s4.6 10.4 10.4 10.4z"
                        />
                        <path
                            d="M364.3 245.6h-97.9V101.2c0-5.8-4.7-10.4-10.4-10.4-5.8 0-10.4 4.7-10.4 10.4v144.4h-42.7c-5.8 0-10.4 4.7-10.4 10.4s4.7 10.4 10.4 10.4h42.7v39.4c0 5.8 4.7 10.4 10.4 10.4 5.8 0 10.4-4.7 10.4-10.4v-39.4h97.9c5.8 0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4z"
                        />
                    </g>
                </svg>
                {{ durationInfo }}
            </div>
            <p class="mt-2 text-sm text-gray-500">
                <slot></slot>
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
        durationInfo: { type: String, default: "" },
    },
};
</script>

<style></style>
