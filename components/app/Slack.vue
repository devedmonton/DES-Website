<script setup>
const selected = ref(channels[0])
</script>

<template>
  <section class="relative">
    <div
      class="absolute lg:-left-10 lg:-right-10 -left-4 -right-4 top-10 bottom-10 bg-gray-100 dark:bg-neutral-950 p-20 rounded-xl border border-neutral-400/20 shadow-xl"
    />
    <div
      class="relative z-10 grid grid-cols-[100px_1fr] gap-4 bg-gradient-to-t from-[#5E2362] to-[#78327D] p-4 rounded-xl h-full"
    >
      <div class="flex flex-col gap-4 justify-center text-center items-center p-4">
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
      <div class="relative flex flex-col gap-4 bg-white dark:bg-neutral-900 p-8 rounded-lg">
        <div class="border-b border-neutral-400/20 pb-2">
          <span class="font-bold"># {{ selected.name }}</span>
          <span class="text-sm font-light ml-1">
            {{ selected.description }}
          </span>
        </div>
        <div class="relative flex items-center justify-center h-full">
          <div class="relative md:flex hidden justify-center">
            <!-- bottom -->
            <div class="">
              <div
                class="relative h-[30rem] w-[30rem] rounded-full rotating-2 border-x border-[#FDCDCD]"
                style="background: radial-gradient(50% 50% at 50% 50%, #FDCDCD 0%, var(--color-bg-dark) 80%, #FDCDCD15);"
              >
                <Icon
                  class="absolute top-10 right-20 w-6 h-6"
                  name="i-logos-javascript"
                />

                <Icon
                  class="absolute top-6 left-24 w-6 h-6"
                  name="i-logos-ruby"
                />

                <Icon
                  class="absolute bottom-10 left-20 w-6 h-6"
                  name="i-logos-typescript-icon"
                />

                <Icon
                  class="absolute bottom-10 right-20 w-6 h-6"
                  name="i-logos-python"
                />

                <Icon
                  class="absolute -bottom-2 left-56 w-6 h-6"
                  name="i-logos-java"
                />

                <Icon
                  class="absolute top-56 -left-3 w-6 h-6"
                  name="i-logos-swift"
                />

                <Icon
                  class="absolute top-56 -right-3 w-6 h-6"
                  name="i-logos-c-plusplus"
                />
              </div>
            </div>

            <!-- middle -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                class="relative h-[22rem] w-[22rem] rounded-full rotating-3 border-x border-[#37C5F0]"
                style="background: radial-gradient(50% 50% at 50% 50%, #37C5F0 0%, var(--color-bg-dark) 85%);"
              >
                <Icon
                  class="absolute bottom-10 left-10 w-6 h-6 rounded"
                  name="i-logos-nodejs-icon-alt"
                />

                <Icon
                  class="absolute bottom-8 right-10 w-7 h-7 rounded"
                  name="i-logos-laravel"
                />

                <Icon
                  class="absolute top-10 left-10 w-6 h-6 rounded"
                  name="i-logos-django-icon"
                />

                <Icon
                  class="absolute top-10 right-10 w-6 h-6 rounded"
                  name="i-logos-spring-icon"
                />
              </div>
            </div>

            <!-- top -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                class="relative h-[15rem] w-[15rem] rounded-full rotating border-x border-[#00DC82]"
                style="background: radial-gradient(50% 50% at 50% 50%, #00DC82 0%, var(--color-bg-dark) 85%);"
              >
                <Icon
                  class="absolute bottom-10 right-4 w-6 h-6"
                  name="i-logos-nuxt-icon"
                />

                <Icon
                  class="absolute -bottom-3 right-1/2 w-6 h-6"
                  name="i-logos-vue"
                />

                <Icon
                  class="absolute bottom-20 -left-2 w-6 h-6"
                  name="i-logos-svelte-icon"
                />


                <Icon
                  class="absolute top-20 -right-2 w-6 h-6"
                  name="i-logos-angular-icon"
                />

                <Icon
                  class="absolute -top-1.5 left-36 w-6 h-6"
                  name="i-logos-react"
                />

                <Icon
                  class="absolute top-10 left-2 w-6 h-6"
                  name="i-logos-vitejs"
                />
              </div>
            </div>

            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 p-4 rounded-full shadow-xl"
            >
              <AppLogo
                :scrolling="true"
                class="w-14 h-14"
              />
            </div>
          </div>
          <AppLogo
            :scrolling="true"
            class="md:hidden w-40 h-40"
          />
        </div>
        <div class="absolute bottom-4">
          <AppButton
            :to="SLACK_URL"
            class="bg-primary text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:text-primary hover:border-primary"
          >
            <Icon
              class="w-4 h-4"
              name="i-simple-icons-slack"
            />
            Join Slack
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
:root {
  --color-bg-dark: white;
}

.dark {
  --color-bg-dark: #131313;
}

.rotating {
  animation: rotating 7s linear infinite
}

.rotating-2 {
  animation: rotating 25s linear infinite
}

.rotating-3 {
  animation: rotating 13s linear infinite
}

@keyframes rotating {
  0% {
    transform: rotate(0)
  }

  to {
    transform: rotate(1turn)
  }
}
</style>
