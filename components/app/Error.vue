<script lang="ts" setup>
withDefaults(defineProps<{
  code: string
  title: string
  message: string
  icon?: string
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'orange'
}>(), {
  color: 'blue',
})

const colors = {
  blue: {
    100: 'bg-blue-100',
    200: 'bg-blue-200',
    500: 'text-blue-500',
  },
  red: {
    100: 'bg-red-100',
    200: 'bg-red-200',
    500: 'text-red-500',
  },
  green: {
    100: 'bg-green-100',
    200: 'bg-green-200',
    500: 'text-green-500',
  },
  yellow: {
    100: 'bg-yellow-100',
    200: 'bg-yellow-200',
    500: 'text-yellow-500',
  },
  orange: {
    100: 'bg-orange-100',
    200: 'bg-orange-200',
    500: 'text-orange-500',
  },
}
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <div class="text-center">
      <div
        v-if="icon"
        class="inline-flex rounded-full p-8"
        :class="colors[color]['100']"
      >
        <div
          :class="colors[color]['200']"
          class="rounded-full p-8"
        >
          <Icon
            :class="colors[color]['500']"
            class="w-20 h-20"
            :name="icon"
          />
        </div>
      </div>
      <h1 class="mt-4 font-medium text-4xl">
        <strong :class="colors[color]['500']">{{ code }}</strong> | {{ title }}
      </h1>
      <p class="text-neutral-400 mt-4 lg-text-xl">
        {{ message }}
      </p>
    </div>
  </div>
</template>
