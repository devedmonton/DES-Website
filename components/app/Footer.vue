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
      <div class="sm:flex sm:items-center sm:justify-between">
        <NuxtLink
          title="Dev Edmonton Society"
          to="/"
          class="flex items-center mb-4 ml-4 sm:m-0"
        >
          <AppLogo
            :scrolling="true"
            class="h-12"
          />
        </NuxtLink>
        <ul class="flex flex-wrap gap-2 items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-400">
          <li
            v-for="item of navigation"
            :key="item.title"
          >
            <NuxtLink
              :title="item.title"
              :prefetch="false"
              :to="item._path"
              exact-active-class="text-primary bg-gray-400/20"
              class="hover:underline py-1.5 px-4 rounded-lg"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
