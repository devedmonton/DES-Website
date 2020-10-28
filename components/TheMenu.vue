<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <nav class="bg-brand-primary fixed w-full z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-0">
      <div class="flex items-center justify-between h-24">
        <div class="flex-shrink-0">
          <a href="/">
            <img
              class="block h-16 w-auto"
              src="~/assets/logos/DevEdmonton-Logo-Light.svg"
              alt="Workflow logo"
            />
          </a>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex">
            <a
              href="/#what-we-do"
              class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
              >What We Do</a
            >
            <a
              href="/#get-involved"
              class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
              >Get Involved</a
            >
            <a
              href="/board_recruiting"
              class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
              >Board</a
            >
            <a
              href="/contact"
              class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
              >Contact</a
            >
          </div>
        </div>

        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <button
            id="mobile-btn"
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-primary-dark focus:outline-none focus:bg-brand-primary-dark transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
    <div id="mobile-menu" class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3">
        <a
          @click="toggleMenu"
          href="/#what-we-do"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
          >What We Do</a
        >
        <a
          @click="toggleMenu"
          href="/#get-involved"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
          >Get Involved</a
        >
        <a
          @click="toggleMenu"
          href="/board_recruiting"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
          >Board</a
        >
        <a
          @click="toggleMenu"
          href="/contact"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu: function () {
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("block");
    },
  },
};
</script>
