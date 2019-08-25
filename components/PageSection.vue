<template>
    <section
        class="px-4"
        :class="[
            bg ? 'py-16' : 'my-16',
            dimBg ? 'bg-grey-000' : null,
            darkBg ? 'bg-grey-100' : null,
        ]"
    >
        <div class="container mx-auto px-4">
            <slot />
        </div>
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
        dimBg() {
            return this.bg === 'dim'
        },

        darkBg() {
            return this.bg === 'dark'
        },
    },
}
</script>
