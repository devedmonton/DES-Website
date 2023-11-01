<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Head>
            <Title>Dev Edmonton Society - Contact us</Title>
            <Meta
                name="description"
                content="A form for people to contact us if they have any questions or thoughts to share."
            />
        </Head>
        <div class="max-w-3xl mx-auto py-4 sm:py-8">
            <form name="contact" method="POST" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <div>
                        <h3
                            class="py-4 text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                        >
                            Contact Us
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            Send us a note.
                        </p>
                    </div>
                    <div
                        class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                    >
                        <div class="sm:col-span-3">
                            <label
                                for="first_name"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                First name
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <InputStyled
                                    id="first_name"
                                    name="first_name"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                for="last_name"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Last name
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <InputStyled id="last_name" name="last_name" />
                            </div>
                        </div>

                        <div class="sm:col-span-6">
                            <label
                                for="email"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Email address
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <InputStyled
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-6">
                            <label
                                for="about"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Message
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <TextAreaStyled
                                    id="message"
                                    name="message"
                                    rows="6"
                                />
                            </div>
                            <p class="mt-2 text-sm text-gray-500">
                                We love getting messages.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-200 pt-5">
                    <div class="flex justify-end">
                        <span class="ml-3 inline-flex rounded-md shadow-sm">
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
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
