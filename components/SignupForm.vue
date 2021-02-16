<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 pt-0 pb-8 sm:px-6 lg:px-12">
            <div
                class="px-6 py-4 bg-brand-primary rounded-lg md:py-8 md:px-8 lg:py-8 lg:px-16 sm:flex sm:flex-col sm:items-center sm:text-center"
            >
                <div class="">
                    <h2
                        class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
                    >
                        Keep up to date with DES?
                    </h2>
                    <p class="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                        Enter your email below to sign up to our mailing list
                        and get information on DES news and events in your
                        inbox.
                    </p>
                </div>
                <div class="mt-8 sm:w-full sm:max-w-md">
                    <div class="sm:flex" name="newsletter-signup">
                        <input
                            id="emailAddress"
                            v-model="signUpEmail"
                            name="emailAddress"
                            type="email"
                            autocomplete="email"
                            required
                            class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                            placeholder="Enter your email"
                        />
                        <button
                            class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            @click="emailSignUp"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div v-if="signUpSuccess" class="pt-4">
                        <span class="text-white">{{ signUpSuccess }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            signUpEmail: "",
            signUpSuccess: null,
            signUpError: null,
        };
    },
    methods: {
        emailSignUp: async function () {
            const self = this;
            fetch("/.netlify/functions/test", {
                method: "POST",
                body: JSON.stringify({ email: this.signUpEmail }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    self.signUpSuccess = data.message;
                    setTimeout(() => {
                        self.signUpSuccess = null;
                    }, 3000);
                })
                .catch((err) => console.error(err));
        },
    },
};
</script>

<style lang="scss"></style>
