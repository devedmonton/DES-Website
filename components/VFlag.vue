<template>
    <div class="flex flex-col md:flex-row">
        <figure class="md:max-w-30" :class="[flipImage ? 'md:order-2' : null]">
            <slot name="image" />
        </figure>
        <div
            class="flex-1 px-2 md:pr-0"
            :class="[flipImage ? 'md:pr-8' : 'md:pl-8']"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        flip: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        flipImage() {
            return this.flip
        },
    },
}
</script>
