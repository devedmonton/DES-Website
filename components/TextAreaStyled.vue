<template>
    <textarea :class="mergeClasses()" />
</template>

<script>
import { twMerge } from "tailwind-merge";

export default {
    methods: {
        mergeClasses() {
            return twMerge([
                "appearance-none block w-full border border-gray-300 rounded-md px-3 py-2 leading-6 transition duration-150 ease-in-out",
                this.$attrs.class,
            ]);
        },
    },
};
</script>

<style></style>
