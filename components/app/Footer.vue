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
    <div class="w-full max-w-screen-xl mx-auto border-t border-neutral-400/20">
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
              :to="item._path"
              exact-active-class="text-primary dark:text-secondary bg-gray-400/20"
              class="hover:underline py-1.5 px-4 rounded-lg"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
          <li class="mb-4">
            <NuxtLink
              to="/contact"
              exact-active-class="text-primary dark:text-secondary bg-gray-400/20"
              class="hover:underline py-1.5 px-4 rounded-lg"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
