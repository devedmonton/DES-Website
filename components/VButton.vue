<template>
    <span class="inline-flex rounded-md shadow-sm">
        <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white border-brand-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            :class="[
                appearance === 'default'
                    ? 'text-brand-primary hover:text-white bg-white hover:bg-brand-primary '
                    : null,
                appearance === 'inverted'
                    ? 'text-white hover:text-brand-primary bg-brand-primary hover:bg-white  hover:border border-solid hover:border-brand-primary'
                    : null,
            ]"
        >
            <slot />
        </button>
    </span>
</template>

<script>
export default {
    props: {
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
