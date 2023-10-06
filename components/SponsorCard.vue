<template>
    <div class="w-full sm:max-w-sm rounded-lg overflow-hidden shadow-lg">
        <figure class="px-6 py-4 bg-white">
            <slot name="image" />
        </figure>
        <div class="px-6 pb-4 bg-white">
            <slot />
        </div>
    </div>
</template>

<script>
export default {};
</script>
