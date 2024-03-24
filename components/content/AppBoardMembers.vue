<script setup lang="ts">
</script>

<template>
  <section class="grid lg:grid-cols-2 mx-auto max-w-7xl lg:px-6 lg:py-8 p-4 gap-8">
    <div
      v-for="board of boards"
      :key="board.name"
      class="py-4 md:py-0"
    >
      <div class="md:grid md:grid-cols-3 lg:gap-8 sm:pb-2">
        <div class="md:col-span-3 lg:col-span-1">
          <NuxtImg
            v-if="board.image"
            class="w-full md:max-w-sm md:h-80 lg:h-60 object-cover object-top shadow-lg rounded-lg border border-neutral-400/40"
            :src="board.image"
            provider="imagekit"
            alt="Photo of board member smiling"
            width="400"
          />
        </div>

        <div class="relative md:col-span-3 lg:col-span-2 lg:mt-0 mt-4">
          <div class="space-y-1">
            <div class="text-lg font-medium">
              <h3 class="inline pr-1.5">
                {{ board.name }}
              </h3>
              <span class="text-xs pt-0.5 text-gray-500 inline">
                {{ board.pronouns }}
              </span>

              <div class="text-primary">
                {{ board.title }}
              </div>

              <div
                v-if="board.socials"
                class="flex gap-4 absolute md:right-4 right-2 top-2"
              >
                <NuxtLink
                  v-for="(value, key) in board.socials"
                  :key="key"
                  :to="value?.startsWith('@') ? undefined : value"
                  :title="key"
                  class="group relative flex pb-1 grayscale hover:grayscale-0 cursor-pointer"
                >
                  <Icon :name="iconify(key)" />
                  <p
                    v-if="value?.startsWith('@')"
                    class="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs z-50 bg-primary text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap"
                  >
                    {{ value }}
                  </p>
                </NuxtLink>
              </div>
            </div>
            <div
              class="text-medium text-gray-500"
              v-html="board.bio"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
