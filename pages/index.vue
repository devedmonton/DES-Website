<template>
    <div class="container">
        <page-section bg="grey-100">
            <h1 class="text-5xl">Dev Edmonton Society</h1>
            <h3 class="text-2xl"
                >Fostering a stronger software development community in
                Edmonton.</h3
            >
            <p class="measure"
                >Corporate-grade mimetic cable paranoia pyrolitic synthetic
                trace Chinese consciousness. Fiberglass Chinese feral Tokyo
                vatgrown futon street futon vatgrown Harajuku prototype
                microprocessor quicksilver jockey agency.</p
            >
        </page-section>
        <page-section>
            <div>
                <figure>
                    <img src="https://placem.at/things" alt="" />
                </figure>
            </div>
            <div>
                <h2 class="text-4xl">Communities & Tech Groups</h2>
                <button-link>View all</button-link>
            </div>
        </page-section>
        <page-section bg="grey-100">
            <div>
                <figure>
                    <img src="https://placem.at/things" alt="" />
                </figure>
            </div>
            <div>
                <h2 class="text-4xl">Developer Resources</h2>
                <button-link>View all</button-link>
            </div>
        </page-section>
        <page-section>
            <h2 class="text-4xl">Community Engagement</h2>
        </page-section>
        <page-section bg="grey-200">
            <h2 class="text-4xl">Upcoming Events</h2>
            <div> </div>
            <h2 class="text-4xl">Meetups this Week</h2>
        </page-section>
        <page-section>
            <h2 class="text-4xl">Voices From the Ground</h2>
            <h3 class="text-2xl">Special Thanks to our Community Partners</h3>
        </page-section>
    </div>
</template>

<script>
import ButtonLink from '~/components/ButtonLink.vue'
import PageSection from '~/components/PageSection.vue'

export default {
    components: {
        ButtonLink,
        PageSection,
    },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
}

.title {
    display: block;
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    font-size: 100px;
    font-weight: 300;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    padding-bottom: 15px;
    font-size: 42px;
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
}

.links {
    padding-top: 15px;
}
</style>
