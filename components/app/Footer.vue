<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation:footer', () => fetchContentNavigation({
  where: {
    footer: true,
  },
}))
</script>

<template>
  <footer
    id="footer"
    class="container mx-auto"
  >
    <div class="w-full max-w-screen-xl mx-auto py-4 md:py-8 border-t border-neutral-400/20">
      <div class="flex md:flex-row flex-col gap-8 items-center justify-between py-4">
        <NuxtLink
          title="Dev Edmonton Society"
          to="/"
          class="flex justify-center md:order-1 order-2"
        >
          <AppLogo
            :scrolling="true"
            class="h-12"
          />
        </NuxtLink>
        <ul class="flex flex-wrap justify-center gap-4 items-center text-sm font-medium text-gray-600 dark:text-gray-400 md:mx-0 mx-2 order-1">
          <li
            v-for="item of navigation"
            :key="item.title"
            class="mb-4"
          >
            <NuxtLink
              :title="item.title"
              :prefetch="false"
              :to="item._path"
              exact-active-class="text-primary bg-gray-400/20"
              class="hover:underline py-1.5 px-4 rounded-lg bg-gray-400/20"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
