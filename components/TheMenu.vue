<template>
    <nav class="bg-brand-primary">
        <div
            class="container text-white flex items-center justify-between flex-wrap mx-auto px-4 py-8"
        >
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img class="h-16 sm:h-24" src="~/assets/logos/DevEdmonton-Logo-Light.svg"/>
            </div>
            <div class="block hidden">
                <button
                    class="flex items-center px-3 py-2 border rounded hover:text-brand-light hover:border-brand-light"
                >
                    <svg
                        class="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="block">
                <div class="text-md">
                    <nuxt-link
                        to="/"
                        class="block mt-4 text-white hover:text-brand-light mr-4"
                    >
                        Home
                    </nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>
