<script setup lang="ts">
import { usePreferredReducedMotion, useWindowScroll, useWindowSize } from '@vueuse/core'

const { hasAnimation } = useA11y()
const { y } = useWindowScroll()
const { height } = useWindowSize()
const reducedMotion = usePreferredReducedMotion()

// only offer the shortcut once there is a screen's worth of scrolling to undo
const visible = computed(() => y.value > height.value)

function scrollToTop() {
  const smooth = hasAnimation.value && reducedMotion.value !== 'reduce'
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
}
</script>

<template>
  <Transition name="fade">
    <button
      v-show="visible"
      type="button"
      title="Scroll to top"
      aria-label="Scroll to top"
      class="fixed lg:left-8 md:left-4 left-2 lg:bottom-8 md:bottom-4 bottom-2 z-40 p-3 rounded-full shadow-lg duration-300 transition-all bg-primary hover:bg-secondary text-white"
      @click="scrollToTop"
    >
      <Icon
        name="i-ph-arrow-up"
        class="w-5 h-5 !block"
      />
    </button>
  </Transition>
</template>

<style>
/* Fade animation for the button appearing on scroll */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
