<template>
    <nav id="navMenu" class="bg-brand-primary fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-0">
            <div class="flex items-center justify-between h-24">
                <div class="flex-shrink-0">
                    <NuxtLink :to="'/'">
                        <img
                            class="block h-16 w-auto"
                            src="/img/logos/DevEdmonton-Logo-Light.svg"
                            alt="Dev Edmonton logo"
                        />
                    </NuxtLink>
                </div>
                <div class="hidden lg:flex lg:ml-6 space-x-4">
                    <div
                        v-for="link in menuLinks"
                        :key="link.name"
                        class="relative group"
                    >
                        <NuxtLink
                            :to="link.href"
                            class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
                        >
                            {{ link.name }}
                        </NuxtLink>
                        <!-- Submenu -->
                        <div
                            v-if="link.subMenu && link.subMenu.length"
                            class="absolute left-0 top-5 mt-2 w-48 rounded-md shadow-lg z-10 bg-white hidden group-hover:block"
                        >
                            <div
                                v-for="subLink in link.subMenu"
                                :key="subLink.name"
                                class="py-1"
                            >
                                <NuxtLink
                                    :to="subLink.href"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary-dark hover:text-white transition duration-150 ease-in-out"
                                >
                                    {{ subLink.name }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block lg:ml-2 flex-shrink-0">
                    <SocialLinks class="px-2 justify-left space-x-2" />
                </div>
                <div class="-mr-2 flex lg:hidden">
                    <button
                        id="mobile-btn"
                        class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-primary-dark focus:outline-none focus:bg-brand-primary-dark transition duration-150 ease-in-out"
                        aria-label="Main menu"
                        aria-expanded="false"
                        @click="toggleMobileMenu"
                    >
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
            <div v-show="isMobileMenuOpen" id="mobile-menu" class="lg:hidden">
                <ul class="px-2 pt-2 pb-3">
                    <li v-for="link in menuLinks" :key="link.name">
                        <NuxtLink
                            :to="link.href"
                            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-brand-primary-dark focus:outline-none focus:text-white focus:bg-brand-primary-dark transition duration-150 ease-in-out"
                            @click="closeMobileMenu"
                        >
                            {{ link.name }}
                        </NuxtLink>
                        <!-- Submenu for mobile -->
                        <ul v-if="link.subMenu && link.subMenu.length">
                            <li
                                v-for="subLink in link.subMenu"
                                :key="subLink.name"
                            >
                                <NuxtLink
                                    :to="subLink.href"
                                    class="block px-4 py-2 ml-4 text-sm text-white hover:bg-brand-primary-dark hover:text-white transition duration-150 ease-in-out"
                                    @click="closeMobileMenu"
                                >
                                    {{ subLink.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <SocialLinks
                        class="px-3 pt-4 pb-2 justify-left space-x-4"
                        img-class="h-8 w-8 svg-invert"
                    />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import SocialLinks from "/components/SocialLinks.vue";

export default {
    components: {
        SocialLinks,
    },
    data: function () {
        return {
            isMobileMenuOpen: false,
            menuLinks: [
                {
                    name: "Home",
                    href: "/",
                    subMenu: [
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
                    ],
                },
                {
                    name: "Events",
                    href: "/events",
                },
                {
                    name: "Resources",
                    href: "/resources",
                },
                {
                    name: "Newsletter",
                    href: "/#newsletter",
                },
                {
                    name: "Contact",
                    href: "/contact",
                },
            ],
        };
    },
    methods: {
        toggleMobileMenu: function () {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        },
    },
};
</script>
