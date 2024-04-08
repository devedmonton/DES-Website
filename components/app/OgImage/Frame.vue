<!--
  name: AppOgImageFrame
  description: the component responsible for rendering the Open Graph image.
  preview: http://localhost:3000/__og-image__/image/meetups/og.png
    -> replace `meetups` with any other page path to see the preview for that page.
-->

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  bg?: string
  icon?: string
  image?: string
  username?: string
}>(), {
  username: '@devedmonton',
  bg: 'linear-gradient(to bottom right, #265DAD, #37C5F0)',
  image: '/assets/images/edmonton.jpg',
})
</script>

<template>
  <div
    class="relative h-full w-full flex items-center text-center justify-center border-2 border-white text-white"
    :style="{ backgroundImage: bg }"
  >
    <div
      v-if="image"
      class="absolute inset-0 w-full h-full bg-center opacity-10"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div class="flex flex-col items-center text-center">
      <h1 class="flex items-center gap-4 text-7xl font-bold">
        <Icon
          v-if="icon"
          :name="icon"
        />
        {{ title }}
      </h1>
      <p class="text-2xl max-w-3xl">
        {{ description }}
      </p>
    </div>

    <AppLogo
      class="absolute bottom-0 left-0 p-5"
      style="height: 125px; width: 153px;"
    />

    <div class="absolute bottom-5 right-5 flex gap-4">
      <div
        v-if="username"
        class="absolute bottom-12 right-8 font-bold"
      >
        {{ username }}
      </div>
      <Icon
        v-for="social of socials"
        :key="social.name"
        :name="social.icon!"
        class="w-7 h-7"
      />
    </div>
  </div>
</template>
