<template>
    <section class="px-4" :class="[bg ? 'py-16' : 'my-16', sectionClass]">
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        bg: {
            type: String,
            default: null,
        },
    },

    computed: {
        sectionClass() {
            return `bg-${this.bg}`
        },
    },
}
</script>
