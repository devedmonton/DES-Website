<template>
    <NuxtLink
        :to="linkTo"
        class="grid place-items-center link__all p-16"
        :class="cardLimit % 2 === 0 ? 'col-span-2' : ''"
    >
        <slot />
        <span
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
    </NuxtLink>
</template>

<script>
export default {
    props: {
        // Used to determine whether the link should span 2 columns or not
        cardLimit: {
            type: Number,
            default: 5,
        },
        linkTo: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.link__all {
    font-size: 1.25rem;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    position: relative;
}

.link__all span {
    transition: color 0.2s ease-in-out;
}

.link__all:hover {
    background: #fff;
    color: #265dad;
}

.link__all:hover span {
    color: #265dad;
}
</style>
