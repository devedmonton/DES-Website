<template>
    <button
        class="button inline-block px-8 py-2 align-middle text-base text-center uppercase font-normal whitespace-no-wrap leading-normal select-none border no-underline"
        :class="[
            appearance === 'default'
                ? 'text-brand-secondary bg-white border-brand-secondary hover:bg-brand-secondary hover:text-white'
                : null,
            appearance === 'inverted'
                ? 'text-white bg-brand-secondary border-brand-secondary hover:bg-brand-secondary-dark hover:border-brand-secondary-dark'
                : null,
        ]"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        appearance: {
            type: String,
            default: 'default',
        },
    },
}
</script>

<style>
.button {
    letter-spacing: -0.03em;
    font-variation-settings: 'wght' 700, 'slnt' calc(-1 * 0);
    border-bottom-color: theme('colors.brand-secondary');
}

.button:hover,
.button:focus {
    border-color: theme('colors.brand-secondary');
}
</style>
