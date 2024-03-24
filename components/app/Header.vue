<script setup lang="ts">
import { onClickOutside, useEventListener } from '@vueuse/core'

const y = ref(0)
const target = ref()
const open = ref(false)

const scrolling = computed(() => y.value > 3)

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (scrolling.value) return 'scrolling'
      return ''
    }),
  },
});

onClickOutside(target, () => open.value = false)
useEventListener('scroll', () => y.value = window.scrollY)
</script>

<template>
  <header
    ref="target"
    class="sticky top-0 z-50 backdrop-blur-lg dark:bg-neutral-900/50"
  >
    <NuxtScrollIndicator color="" />
    <nav
      class="relative z-50 px-4 py-2 transition-all duration-300"
      :class="scrolling ? open ? 'bg-white dark:bg-neutral-900' : 'border-b border-neutral-400/20' : 'bg-primary'"
    >
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NuxtLink
          title="Dev Edmonton Society"
          to="/"
        >
          <AppLogo
            :scrolling="scrolling"
            class="h-20 py-2"
          />
        </NuxtLink>
        <div class="flex items-center gap-2 lg:order-2">
          <AppButton
            v-for="social of socials"
            :key="social.name"
            :icon="social.icon"
            :to="social.to"
            :title="social.name"
            :target="social.to?.startsWith('http') ? '_blank' : undefined"
            class="lg:block hidden"
            :class="scrolling ? 'text-neutral-700 dark:text-neutral-300 hover:text-black' : 'text-white'"
          />
          <AppColorMode :class="scrolling ? 'text-neutral-700 dark:text-neutral-300 hover:text-black' : 'text-white'" />
          <AppButton
            :icon="open ? 'i-ph-x' : 'i-ph-list'"
            title="Menu"
            class="lg:hidden block"
            :class="scrolling ? 'text-neutral-700 dark:text-neutral-300 hover:text-black' : 'text-white'"
            @click="open = !open"
          />
        </div>
        <div class="lg:flex hidden flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
          <NuxtLink
            v-for="menu of navigation"
            :key="menu.to"
            :to="menu.to"
            :title="menu.name"
            class="flex items-center gap-2 py-1.5 px-4 rounded-lg"
            exact-active-class="text-primary bg-gray-400/20"
            :class="scrolling ? 'text-neutral-800 dark:text-neutral-300' : '!text-white'"
            :prefetch="false"
          >
            <Icon
              v-if="menu.icon"
              :name="menu.icon"
            />
            {{ menu.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
    <Transition name="slide">
      <div
      v-if="open"
      class="lg:hidden absolute top-24 right-0 left-0 z-10 py-4 flex flex-col gap-2 transition-all border-y border-neutral-400/20"
      :class="scrolling ? 'bg-white dark:bg-neutral-900' : 'bg-primary'"
    >
      <NuxtLink
        v-for="menu of navigation"
        :key="menu.to"
        :class="{ 'text-white': !scrolling }"
        exact-active-class="bg-gray-200/20"
        class="mx-2 p-2 flex items-center hover:bg-gray-200/20 rounded-lg justify-between"
        :to="menu.to"
        @click="open = false"
      >
        <span class="flex items-center gap-2">
          <Icon
            v-if="menu.icon"
            :name="menu.icon"
          />
          {{ menu.name }}
        </span>
      </NuxtLink>
      <div class="flex justify-between border-t border-neutral-400/20 px-4 pt-4">
        <AppButton
          v-for="social of socials"
          :key="social.name"
          :icon="social.icon"
          :to="social.to"
          :title="social.name"
          :target="social.to?.startsWith('http') ? '_blank' : undefined"
          :class="scrolling ? 'text-neutral-700 dark:text-neutral-300 hover:text-black' : 'text-white'"
        />
      </div>
    </div>
    </Transition>
  </header>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  @apply transition-all duration-300;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>