<script setup>
const selected = ref(channels[0])

const circles = [
  {
    distance: '3.5cqw',
    items: ['i-logos-c-plusplus', 'i-skill-icons-rust', 'i-logos-c'],
  },
  {
    distance: '7cqw',
    items: ['i-logos-django-icon', 'i-logos-nodejs-icon', 'i-logos-nestjs', 'i-logos-laravel', 'i-logos-spring-icon', 'i-unjs-nitro'],
  },
  {
    distance: '10.5cqw',
    items: ['i-logos-javascript', 'i-logos-python', 'i-logos-ruby', 'i-logos-java', 'i-logos-typescript-icon', 'i-logos-swift', 'i-logos-dart', 'i-logos-php'],
  },
  {
    distance: '14.5cqw',
    items: ['i-logos-vue', 'i-logos-nuxt-icon', 'i-logos-react', 'i-logos-svelte-icon', 'i-logos-angular-icon', 'i-logos-vitejs', 'i-logos-ionic-icon'],
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
          class="w-10 h-10 mb-4"
          name="i-logos-slack-icon"
        />
        <div class="flex flex-col gap-2 items-start">
          <span class="text-white font-bold text-lg">
            Channels to Checkout
          </span>
          <button
            v-for="channel of channels"
            :key="channel"
            class="px-2.5 py-1 rounded-full text-white truncate text-xs hover:bg-[#7F4484] w-full text-start"
            :class="{ 'bg-[#7F4484]': channel.name === selected.name }"
            @click="selected = channel"
          >
            # {{ channel.name }}
          </button>
        </div>
        <NuxtImg
          class="rounded-lg w-10 h-10 object-cover border"
          src="/assets/images/avatar.png"
          alt="avatar"
          loading="lazy"
        />
      </div>
      <div class="relative flex flex-col gap-4 bg-white dark:bg-black rounded-lg justify-between">
        <div>
          <div class="p-4 border-b border-neutral-400/40 flex justify-between items-center">
            <div class="">
              <span class="font-bold"># {{ selected.name }}</span>
            </div>
            <div class="flex gap-2">
              <!-- TODO: go to contributors page -->
              <div class="flex gap-1 items-center border border-neutral-400/40 text-neutral-400 p-1 rounded">
                <Icon
                  class="block text-lg"
                  name="i-ph-users-duotone"
                />
                <!-- TODO: show contributors actual number, dynamically -->
                <span class="text-xs">55</span>
              </div>
              <AppColorMode class="border border-neutral-400/40 text-neutral-400 p-1 !text-sm rounded" />
              <div class="border border-neutral-400/40 text-neutral-400 p-1 rounded">
                <Icon
                  class="block text-lg"
                  name="i-ph-headphones-duotone"
                />
              </div>
            </div>
          </div>
          <div class="p-4">
            <!-- TODO: add more content ? -->
            {{ selected.description }}
          </div>
        </div>

        <div class="flex h-[250px] justify-center">
          <div class="aspect-video w-full overflow-clip">
            <div class="mt-[-5%] grid h-full w-full grid-cols-1 place-items-center [&>*]:[grid-area:1/1]">
              <div class="grid h-full w-full grid-cols-1 place-items-center [&>*]:[grid-area:1/1] slack-orbit-bg">
                <div class="border w-[7cqw] aspect-square rounded-[9999px]" />
                <div class="border w-[14cqw] aspect-square rounded-[9999px]" />
                <div class="border w-[21cqw] aspect-square rounded-[9999px]" />
                <div class="border w-[29cqw] aspect-square rounded-[9999px]" />
                <div class="border w-[36cqw] aspect-square rounded-[9999px]" />
              </div>
              <div class="relative z-10 grid h-full w-full grid-cols-1 place-items-center">
                <template v-for="circle in circles">
                  <Icon
                    v-for="item, idx in circle.items"
                    :key="item"
                    class="absolute h-6 w-6 slack-orbit"
                    :style="{
                      '--distance': circle.distance,
                      '--delay': `${(idx / circle.items.length) * -10}s`,
                    }"
                    :name="item"
                  />
                </template>
              </div>
              <AppLogo
                :scrolling="true"
                class="w-12 h-12 mb-2"
              />
            </div>
          </div>
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
    animation: orbit 10s linear var(--delay, -3s) infinite;
    animation-play-state: running;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateY(var(--distance)) rotate(0deg);
  }
  100% {
    transform: rotate(1turn) translateY(var(--distance)) rotate(-1turn);
  }
}
</style>
