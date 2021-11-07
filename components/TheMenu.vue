<template>
    <nav class="bg-brand-primary fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-0">
            <div class="flex items-center justify-between h-24">
                <div class="flex-shrink-0">
                    <a href="/#">
                        <img
                            class="block h-16 w-auto"
                            src="~/assets/logos/DevEdmonton-Logo-Light.svg"
                            alt="Workflow logo"
                        />
                    </a>
                </div>
                <div class="hidden lg:block lg:ml-6">
                    <div class="flex">
                        <a
                            v-for="link in menuLinks"
                            :key="link.name"
                            :href="link.href"
                            class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
                        >
                            {{ link.name }}
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block lg:ml-2 flex-shrink-0">
                    <SocialLinks class="px-2 justify-left space-x-2" />
                </div>
                <div class="-mr-2 flex lg:hidden">
                    <!-- Mobile menu button -->
                    <button
                        id="mobile-btn"
                        class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-primary-dark focus:outline-none focus:bg-brand-primary-dark transition duration-150 ease-in-out"
                        aria-label="Main menu"
                        aria-expanded="false"
                        @click="toggleMenu"
                    >
                        <!-- Menu open: "hidden", Menu closed: "block" -->
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
                        <!-- Menu open: "block", Menu closed: "hidden" -->
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
        <!-- Menu open: "block", Menu closed: "hidden" -->
        <div id="mobile-menu" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3">
                <a
                    v-for="link in menuLinks"
                    :key="link.name"
                    :href="link.href"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
                    @click="toggleMenu"
                >
                    {{ link.name }}
                </a>
                <SocialLinks
                    class="px-3 pt-4 pb-2 justify-left space-x-4"
                    img-class="h-8 w-8 svg-invert"
                />
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: function () {
        return {
            menuLinks: [
                {
                    name: "What We Do",
                    href: "/#what-we-do",
                },
                {
                    name: "Get Involved",
                    href: "/#get-involved",
                },
                {
                    name: "Meetups",
                    href: "/#meetups",
                },
                {
                    name: "Events",
                    href: "/#community-events",
                },
                {
                    name: "Resources",
                    href: "/#resources",
                },
                {
                    name: "Contact",
                    href: "/contact",
                },
            ],
        };
    },
    computed: {},
    methods: {
        toggleMenu: function () {
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("block");
        },
    },
};
</script>
