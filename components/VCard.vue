<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <figure class="m-0">
            <slot name="image" />
        </figure>
        <div class="px-6 py-4 bg-white">
            <slot />
        </div>
    </div>
</template>

<script>
export default {}
</script>
