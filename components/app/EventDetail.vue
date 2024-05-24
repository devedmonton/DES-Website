<script setup lang="ts">
defineProps<{
  event: any
  show: boolean
}>()

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <div
    v-if="show"
    id="event-detail"
    class="flex items-center justify-center overflow-hidden fixed top-0 left-0 z-10 w-full h-full bg-slate-400 bg-opacity-30"
    @click="close"
  >
    <div
      class="m-4 relative w-full max-w-2xl max-h-full bg-white border border-neutral-400/20 rounded-lg dark:bg-neutral-800 shadow z-50"
      @click.stop
    >
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ event.title }}
        </h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          @click="close"
        >
          <Icon
            class="w-6 h-6"
            name="i-ph-x-light"
          />
          <span class="sr-only">Close dialog</span>
        </button>
      </div>
      <div class="p-4 space-y-4">
        <p class="text-sm text-gray-500">
          {{ event.start.format('DD/MM/YYYY') }}
        </p>
        <p
          class="content-full"
          v-html="event.contentFull"
        />
        <div>
          <strong>Event details:</strong>
          <ul>
            <li>Event starts at: {{ event.start.formatTime() }} MT</li>
            <li>Event ends at: {{ event.end.formatTime() }} MT</li>
          </ul>
        </div>
      </div>
      <div class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          type="button"
          class="duration-300 transition-all hover:bg-gray-200/30 dark:hover:bg-transparent border border-transparent rounded-lg bg-primary text-white px-3 py-1 hover:border-primary hover:text-primary flex items-center"
          @click="close"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<style>
  #event-detail .content-full a{
    @apply hover:underline text-gray-600 dark:text-gray-400;
  }
</style>
