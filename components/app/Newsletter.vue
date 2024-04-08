<script setup>
const form = reactive({
  name: '',
  email: '',
})

const error = ref()
const data = ref()
const disabled = ref(false)

async function signUp() {
  if (disabled.value) {
    return
  }

  const res = await $fetch('/api/newsletter', {
    method: 'POST',
    body: form,
  })
  if (res.statusCode === 500) {
    error.value = res.message
    setTimeout(() => {
      error.value = undefined
    }, 3000)
    return
  }
  if (res.statusCode === 200) {
    disabled.value = true
    data.value = res.email
    setTimeout(() => {
      data.value = undefined
    }, 3000)
  }
}
</script>

<template>
  <section
    id="newsletter"
    class="relative mb-10"
  >
    <div class="max-w-7xl mx-auto px-4 pt-8 pb-8 sm:px-6 lg:px-12">
      <div
        class="px-6 py-4 bg-primary rounded-lg md:py-8 md:px-8 lg:py-8 lg:px-16 sm:flex sm:flex-col sm:items-center sm:text-center"
      >
        <div class="">
          <h2
            class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            Keep up to date with DES?
          </h2>
          <p class="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
            Enter your email below to sign up to our mailing list
            and get information on DES news and events in your
            inbox.
          </p>
        </div>
        <div class="mt-8 sm:w-full sm:max-w-2xl">
          <form class="sm:flex">
            <input
              id="firstName"
              v-model="form.name"
              name="firstName"
              type="text"
              autocomplete="given-name"
              required
              class="w-full sm:w-48 px-4 py-2 mr-4 mb-4 sm:mb-0 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
              placeholder="First Name"
            >
            <input
              id="emailAddress"
              v-model="form.email"
              name="emailAddress"
              type="email"
              autocomplete="email"
              required
              class="w-full px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
              placeholder="Enter your email"
            >
            <!-- TODO: change ui base on disabled -->
            <button
              class="mt-3 w-full flex items-center justify-center px-4 py-2 shadow text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              type="button"
              :disabled="disabled"
              @click.prevent="signUp"
            >
              Sign Up
            </button>
          </form>
        </div>
        <!-- TODO: replace with toast -->
        <div
          v-if="data"
          class="pt-4 text-lg text-blue-100"
        >
          <p>We have sent an email to {{ data }} with a link to confirm your subscription.</p>
          <p>Check your spam folder if you don't see it</p>
        </div>
        <div
          v-if="error"
          class="pt-4 text-lg text-blue-100"
        >
          <span>{{ error }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
