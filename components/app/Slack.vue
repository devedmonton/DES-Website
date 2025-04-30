<script setup>
import { ref } from 'vue'

const { hasAnimation } = useA11y()

const selected = ref(channels[0])

const circles = [
  {
    distance: '3.5cqw',
    speed: 11,
    items: (['i-logos-c-plusplus', 'i-skill-icons-rust', 'i-logos-c', 'i-logos-git-icon', 'i-logos-nginx']),
  },
  {
    distance: '7cqw',
    speed: 9,
    items: (['i-logos-django-icon', 'i-unjs-nitro', 'i-logos-nodejs-icon', 'i-logos-nestjs', 'i-logos-spring-icon', 'i-logos-laravel', 'i-logos-dotnet']),
  },
  {
    distance: '10.5cqw',
    speed: 11,
    items: (['i-logos-javascript', 'i-logos-ruby', 'i-logos-python', 'i-logos-go', 'i-logos-java', 'i-logos-typescript-icon', 'i-logos-swift', 'i-logos-dart']),
  },
  {
    distance: '14.5cqw',
    speed: 10,
    items: (['i-logos-vitejs', 'i-logos-vue', 'i-logos-react', 'i-logos-nuxt-icon', 'i-logos-svelte-icon', 'i-logos-nextjs-icon', 'i-logos-angular-icon', 'i-logos-ionic-icon', 'i-logos-tailwindcss-icon', 'i-logos-vitest', 'i-logos-playwright']),
  },
]
</script>

<template>
  <section class="relative">
    <div
      class="absolute lg:-left-10 lg:-right-10 -left-4 -right-4 top-10 bottom-10 bg-gray-100 dark:bg-neutral-900 p-20 rounded-xl border border-neutral-400/40 shadow-xl"
    />
    <div
      class="relative z-10 grid grid-cols-[100px_1fr] gap-4 bg-gradient-to-t from-[#5E2362] to-[#78327D] p-4 rounded-xl h-full"
    >
      <div class="flex flex-col gap-4 justify-between text-center items-center p-4">
        <Icon
          class="lg:w-10 lg:h-10 h-5 w-5 mb-4"
          name="i-logos-slack-icon"
        />
        <div class="flex flex-col gap-2 items-start">
          <span class="text-white font-bold md:text-lg text-xs">
            Channels to Checkout
          </span>
          <button
            v-for="channel of channels"
            :key="channel"
            class="px-2.5 py-1 rounded-full text-white truncate text-xs hover:bg-[#7F4484] w-full "
            :class="{ 'bg-[#7F4484]': channel.name === selected.name }"
            @click="selected = channel"
          >
            # {{ channel.name }}
          </button>
        </div>
        <NuxtImg
          class="rounded-lg lg:w-10 lg:h-10 h-5 w-5 object-cover border"
          src="/assets/images/avatar.png"
          alt="avatar"
          loading="lazy"
        />
      </div>
      <div class="relative flex flex-col gap-4 bg-white dark:bg-black rounded-lg justify-between overflow-auto">
        <div>
          <div class="p-4 border-b border-neutral-400/40 flex justify-between items-center gap-2">
            <div class="whitespace-nowrap">
              <span class="font-bold"># {{ selected.name }}</span>
            </div>
            <div class="flex gap-2">
              <!-- only show ColorMode in client side because of hydration mismatch -->
              <ClientOnly>
                <AppColorMode class="border border-neutral-400/40 text-neutral-400 px-2 py-1 !text-sm rounded" />
              </ClientOnly>
              <!-- TODO: go to contributors page -->
              <div class="flex gap-1 items-center border border-neutral-400/40 text-neutral-400 px-2 py-1 rounded">
                <Icon
                  class="block text-lg"
                  name="i-ph-users-duotone"
                />
                <!-- TODO: show contributors actual number, dynamically -->
                <span class="text-xs">55</span>
              </div>
              <div class="border border-neutral-400/40 text-neutral-400 px-2 py-1 rounded">
                <Icon
                  class="block text-lg"
                  name="i-ph-headphones-duotone"
                />
              </div>
            </div>
          </div>
          <div class="p-4">
            {{ selected.description }}
          </div>
        </div>

        <div class="mt-[-5%] sm:grid hidden h-full w-full grid-cols-1 place-items-center [&>*]:[grid-area:1/1]">
          <div class="grid h-full w-full grid-cols-1 place-items-center [&>*]:[grid-area:1/1] slack-orbit-bg">
            <div class="slack-orbit-circle w-[7cqw]" />
            <div class="slack-orbit-circle w-[14cqw]" />
            <div class="slack-orbit-circle w-[21cqw]" />
            <div class="slack-orbit-circle w-[29cqw]" />
            <div class="slack-orbit-circle w-[36cqw]" />
          </div>
          <div class="relative z-10 grid h-full w-full grid-cols-1 place-items-center">
            <template v-for="circle in circles">
              <Icon
                v-for="item, idx in circle.items"
                :key="item"
                class="allow-animation absolute xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:w-4 md:h-4 sm:w-3 sm:h-3 w-2 h-2 slack-orbit"
                :style="{
                  '--orbit-distance': circle.distance,
                  '--orbit-speed': `${circle.speed}s`,
                  '--orbit-delay': `${(idx / circle.items.length) * -circle.speed}s`,
                  'animation-play-state': hasAnimation?'running':'paused',
                }"
                :name="item"
              />
            </template>
          </div>
          <AppLogo
            :scrolling="true"
            class="xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-5 h-5"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.slack-orbit-bg {
  mask-image: radial-gradient(70% 50% at center,#000 var(--fade-start,25%),transparent 100%);
  -webkit-mask-image: radial-gradient(70% 50% at center,#000 var(--fade-start,25%),transparent 100%);
}

.slack-orbit {
    animation: orbit var(--orbit-speed, 10s) linear var(--orbit-delay, -3s) infinite;
    animation-play-state: running;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateY(var(--orbit-distance)) rotate(0deg);
  }
  100% {
    transform: rotate(1turn) translateY(var(--orbit-distance)) rotate(-1turn);
  }
}

.slack-orbit-circle {
  @apply border border-neutral-400/40 aspect-square rounded-[9999px] transition-all duration-300;
  @apply shadow-[rgba(0,0,0,0.2)_0px_0px_10px_0px] dark:shadow-[rgba(255,255,255,0.3)_0px_0px_30px_0px];
}
</style>
