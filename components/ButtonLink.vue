<template>
    <component
        :is="href ? 'nuxt-link' : 'button'"
        :to="href"
        class="button inline-block px-8 py-2 align-middle text-base text-center uppercase font-normal whitespace-no-wrap leading-normal select-none border no-underline"
        :class="[
            appearance === 'default'
                ? 'text-brand-primary bg-white border-brand-primary hover:bg-brand-primary hover:text-white'
                : null,
            appearance === 'inverted'
                ? 'text-white bg-brand-primary border-brand-primary hover:bg-brand-primary-dark hover:border-brand-primary-dark'
                : null,
        ]"
    >
        <div>
            <slot />
        </div>
    </component>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: "#0",
        },
        appearance: {
            type: String,
            default: "default",
        },
    },
};
</script>

<style>
.button {
    letter-spacing: -0.03em;
    font-variation-settings:
        "wght" 700,
        "slnt" calc(-1 * 0);
    border-bottom-color: theme("colors.brand-primary");
}

.button:hover,
.button:focus {
    border-color: theme("colors.brand-primary");
}
</style>
