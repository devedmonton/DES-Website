<script lang="ts" setup>

const { hasAnimation, toggleAnimation } = useAnimation()

// set the styles on the body class reactively
useHead({
  bodyAttrs: {
    class: computed(() => hasAnimation.value ? '' : 'no-animations'),
  },
})
</script>

<template>
  <AppButton
    :title="hasAnimation ? 'Disable Animations' : 'Enable Animations'"
    class="text-xl"
    @click="toggleAnimation"
  >
    <Icon
      :key="hasAnimation"
      class="!block"
      :name="hasAnimation ? 'line-md:pause-to-play-filled-transition' : 'line-md:play-filled-to-pause-transition'"
    />
  </AppButton>
</template>

<style>
/* disable animations globallu except that are allowed */
.no-animations *:not(.allow-animation) {
  animation: none !important;
  transition: none !important;
}
</style>
