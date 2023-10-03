<template>
    <Head>
      <Title>Dev Edmonton Society - 404</Title>
    </Head>
    <div
        class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-1 flex-col justify-center"
    >
        <h1 class="text-5xl text-brand-primary font-bold">
            Uh Oh! There is a 404!
        </h1>

        <p class="text-2xl">
            This error means the page not found. Here are some common reasons
            why you are seeing this 404.
        </p>

        <div
            class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
        >
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <NuxtImg
                        class="h-48 w-full object-cover"
                        src="/404/magnifying-glass-800.jpg"
                        alt="A magnifying glass and pencil on top of a sketchbook filled with notes"
                        width="400"
                    />
                </div>

                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex-1 flex flex-col">
                        <div class="block flex-grow">
                            <h2
                                class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                            >
                                Typo in the URL?
                            </h2>

                            <p class="mt-3 text-base leading-6 text-gray-500">
                                There might be a typo in the url. Please check
                                that the url is entered correctly and try again
                                to navigate to your page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <NuxtImg
                        class="h-48 w-full object-cover"
                        src="/404/css-800.jpg"
                        alt="Macbook laptop open to a text editor with CSS code"
                        width="400"
                    />
                </div>

                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex-1 flex flex-col">
                        <div class="block flex-grow">
                            <h2
                                class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                            >
                                Bug in the code?
                            </h2>
                            <p class="mt-3 text-base leading-6 text-gray-500">
                                It's possible there is a bug in our code. If you
                                think this page should exist you can file a bug
                                to the Dev Edmonton Society's Github Issue
                                Tracker and one of the contributors can help
                                take a look.
                            </p>
                        </div>

                        <div class="flex justify-center mt-4">
                            <a
                                href="https://github.com/devedmonton/devedmonton.com/issues/"
                                target="_blank"
                            >
                                <VButton appearance="inverted">
                                    Go to the Issue Tracker
                                </VButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <NuxtImg
                        class="h-48 w-full object-cover"
                        src="/404/google-800.jpg"
                        alt="Laptop open to the Google Search home page"
                        width="400"
                    />
                </div>

                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex-1 flex flex-col">
                        <div class="block flex-grow">
                            <h3
                                class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                            >
                                The page is gone?
                            </h3>
                            <p class="mt-3 text-base leading-6 text-gray-500">
                                Maybe the page has been removed or moved. You
                                can go back to the home page with the button
                                below.
                            </p>
                        </div>
                        <div class="flex justify-center mt-4">
                            <a href="/">
                                <VButton appearance="inverted">
                                    Go to home page
                                </VButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "../components/VButton.vue";

export default {
    components: {
        VButton,
    },
};
</script>

<style></style>
