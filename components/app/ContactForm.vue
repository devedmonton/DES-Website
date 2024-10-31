<template>
  <div class="max-w-3xl mx-auto py-4 sm:py-8">
    <form
      name="contact"
      method="POST"
      netlify
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
      >
      <div>
        <div>
          <h3
            class="py-4 text-3xl leading-9 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10"
          >
            Contact Us
          </h3>
          <p class="mt-1 text-sm leading-5">
            Send us a note.
          </p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 text-neutral-700 dark:text-white">
          <div class="sm:col-span-3">
            <label
              for="first_name"
              class="block text-sm font-medium leading-5"
            >
              First name
            </label>
            <div class="mt-1 rounded-md">
              <AppFormInput
                id="first_name"
                name="first_name"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="last_name"
              class="block text-sm font-medium leading-5"
            >
              Last name
            </label>
            <div class="mt-1 rounded-md">
              <AppFormInput
                id="last_name"
                name="last_name"
              />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label
              for="email"
              class="block text-sm font-medium leading-5"
            >
              Email address
            </label>
            <div class="mt-1 rounded-md">
              <AppFormInput
                id="email"
                name="email"
                type="email"
              />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label
              for="message"
              class="block text-sm font-medium leading-5"
            >
              Message
            </label>
            <div class="mt-1 rounded-md">
              <AppFormTextArea
                id="message"
                name="message"
                rows="6"
              />
            </div>
            <p class="mt-2 text-sm">
              We love getting messages.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-neutral-400/40 pt-5">
        <div class="flex justify-end">
          <span class="ml-3 inline-flex rounded-md">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Send
            </button>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>
