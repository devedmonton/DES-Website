<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const modal = useVModel(props, 'modelValue')
const modalRef = ref(null)

const closeModal = () => {
  modal.value = false
}

watch(modal, (value) => {
  if (!document.body) return
  if (value) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = 'initial'
  }
})

onClickOutside(modalRef, () => {
  closeModal()
})
</script>

<template>
  <div
    v-if="modal"
    id="modal"
    class="flex items-center justify-center overflow-hidden fixed top-0 left-0 z-10 w-full h-full backdrop-blur bg-black/40"
    @click.stop
  >
    <div
      ref="modalRef"
      class="m-4 relative w-full max-w-2xl max-h-full bg-white border border-neutral-400/40 rounded-lg dark:bg-neutral-900 shadow z-50"
    >
      <slot />
      <slot name="footer">
        <div class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
          <AppButton
            type="button"
            class="bg-primary text-white hover:text-black"
            @click="closeModal"
          >
            Close
          </AppButton>
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
