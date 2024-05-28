<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const modal = useVModel(props, 'modelValue')
const modalRef = ref(null)

const closeModal = () => {
  modal.value = false
}

onClickOutside(modalRef, () => {
  closeModal()
})
</script>

<template>
  <div
    v-if="modal"
    id="modal"
    class="flex items-center justify-center overflow-hidden fixed top-0 left-0 z-10 w-full h-full bg-slate-400 bg-opacity-30"
    @click.stop
  >
    <div
      ref="modalRef"
      class="m-4 relative w-full max-w-2xl max-h-full bg-white border border-neutral-400/20 rounded-lg dark:bg-neutral-800 shadow z-50"
    >
      <slot />
      <slot name="footer">
        <div class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            type="button"
            class="duration-300 transition-all hover:bg-gray-200/30 dark:hover:bg-transparent border border-transparent rounded-lg bg-primary text-white px-3 py-1 hover:border-primary hover:text-primary flex items-center"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<style>
  #event-detail .content-full a{
    @apply hover:underline text-gray-600 dark:text-gray-400;
  }
</style>
