<script setup lang="ts">
defineProps<{
  showModal: boolean
}>()

const modalRef = ref(null)

const emit = defineEmits(['close'])

onClickOutside(modalRef, () => {
  emit('close')
})
</script>

<template>
  <div
    v-if="showModal"
    id="modal"
    class="flex items-center justify-center overflow-hidden fixed top-0 left-0 z-10 w-full h-full bg-slate-400 bg-opacity-30"
    @click.stop
  >
    <div
      ref="modalRef"
      class="m-4 relative w-full max-w-2xl max-h-full bg-white border border-neutral-400/20 rounded-lg dark:bg-neutral-800 shadow z-50"
    >
      <slot />
    </div>
  </div>
</template>

<style>
  #event-detail .content-full a{
    @apply hover:underline text-gray-600 dark:text-gray-400;
  }
</style>
