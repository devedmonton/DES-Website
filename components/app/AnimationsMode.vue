<script lang="ts" setup>
import { inject, computed, onMounted } from 'vue'

// Reactive state
const animationsEnabled = inject('animationsEnabled', ref(true))

const animationCookie = ref('')

//  Icons for play/pause toggle
const Icons = [
  {
    name: 'play',
    icon: 'line-md:pause-to-play-filled-transition',
    value: 'true',
  },
  {
    name: 'pause',
    icon: 'line-md:play-filled-to-pause-transition',
    value: 'false',
  },
]

// Computed icon based on current animationCookie
const setIcon = computed(() => Icons.find(icon => icon.value === animationCookie.value) || Icons[0])

// Set cookie function
function setCookie(cname: string, cvalue: string | boolean, exdays: number) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  document.cookie = `${cname}=${cvalue};${expires};path=/`
}

//  Get cookie function
function getCookie(cname: string) {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

// Toggle animations fxn
function toggleAnimations() {
  animationsEnabled.value = !animationsEnabled.value

  if (animationsEnabled.value) {
    document.body.classList.remove('no-animations')
    setCookie('animations_enabled', true, 365)
    animationCookie.value = 'true'
  }
  else {
    document.body.classList.add('no-animations')
    setCookie('animations_enabled', false, 365)
    animationCookie.value = 'false'
  }
}

onMounted(() => {
  const cookie = getCookie('animations_enabled')
  if (cookie) {
    animationCookie.value = cookie

    if (cookie === 'false') {
      animationsEnabled.value = false
      document.body.classList.add('no-animations')
    }
    else {
      animationsEnabled.value = true
      document.body.classList.remove('no-animations')
    }
  }
  else {
    /// as default- enabled animations
    animationsEnabled.value = true
    animationCookie.value = 'true'
    document.body.classList.remove('no-animations')
  }

  console.log('Animation Cookie Loaded:', animationCookie.value)
})
</script>

<template>
  <!-- Animations toggle btn -->

  <AppButton
    :title="animationsEnabled ? 'Disable Animations' : 'Enable Animations'"
    class="text-xl"
    @click="toggleAnimations"
  >
    <Icon
      class="!block"
      :name="setIcon.icon"
    />
  </AppButton>
</template>

<style>
/* Disabling all animations class except orbit class that will be paused inherently*/
.no-animations *:not(.allow-animation) {
  animation: none !important;
  transition: none !important;
}
</style>
