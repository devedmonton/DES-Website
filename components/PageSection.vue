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
            let classList

            switch (this.bg) {
                case 'dim':
                    classList = 'bg-gray-100'
                    break

                default:
                    break
            }

            return classList
        },
    },
}
</script>
