<template>
    <div
        class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-1 flex-col justify-center items-center"
    >
        <!-- Content goes here -->
        <h1 class="text-6xl text-brand-primary font-bold py-2">Uh Oh!</h1>
        <p class="text-2xl">404 Error - Page not found</p>
        <h2 class="text-3xl text-brand-primary">
            Looks like we can't find that page.
        </h2>
        <a href="/"
            ><VButton appearance="inverted" class="m-4"
                >Go to home page</VButton
            ></a
        >
    </div>
</template>

<script>
import VButton from "~/components/VButton.vue";

export default {
    components: {
        VButton,
    },
};
</script>

<style lang="sass" scoped></style>
