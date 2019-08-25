<template>
    <div class="">
        <page-section bg="dim">
            <div class="flex flex-col md:flex-row">
                <div class="flex-1 px-2 md:pr-0 md:pr-8">
                    <h1 class="text-5xl">Dev Edmonton Society</h1>
                    <h3 class="text-2xl"
                        >Fostering a stronger software development community in
                        Edmonton.</h3
                    >
                    <p class="mt-8 measure"
                        >Corporate-grade mimetic cable paranoia pyrolitic
                        synthetic trace Chinese consciousness. Fiberglass
                        Chinese feral Tokyo vatgrown futon street futon vatgrown
                        Harajuku prototype microprocessor quicksilver jockey
                        agency. Microprocessor edge verge amalgam Night City
                        sarariman chrome.
                    </p>
                </div>
                <div class="slack relative md:max-w-30 md:order-2">
                    <div
                        class="slack-bg absolute top-0 right-0 bottom-0 left-0 bg-grey-900 opacity-75"
                    ></div>
                    <div class="slack-content relative p-4 text-white">
                        <h3 class="text-2xl">Join our community on Slack</h3>
                        <button-link appearance="inverted" class="mt-4"
                            >Join</button-link
                        >
                    </div>
                </div>
            </div>
        </page-section>
        <page-section>
            <v-flag>
                <template v-slot:image>
                    <img src="https://placem.at/things" alt="" />
                </template>

                <h2 class="text-4xl">Communities & Tech Groups</h2>
                <p class="mt-4 measure"
                    >Agency concrete techno-criminal unfolding Russian software
                    factory. Neon Night City cutting-edge ICE ninja scan
                    microprocessor quicksilver octagon shuriken professional
                    black link man.</p
                >
                <button-link class="mt-4">View all</button-link>
            </v-flag>
        </page-section>
        <page-section bg="dim">
            <v-flag :flip="true">
                <template v-slot:image>
                    <img src="https://placem.at/things" alt="" />
                </template>

                <h2 class="text-4xl">Developer Resources</h2>
                <p class="mt-4 measure"
                    >Chrome link man concrete carapace beam rain-stained
                    software nexus Tokyo hardwired magnetic link man television
                    octagon cowboy. Television link man pyrolitic consciousness
                    précis run Chinese electronic chassis robot orbital.</p
                >
                <button-link class="mt-4">View all</button-link>
            </v-flag>
        </page-section>
        <page-section>
            <h2 class="text-4xl text-center">Community Engagement</h2>
        </page-section>
        <page-section bg="dark">
            <h2 class="text-4xl text-center">Upcoming Events</h2>
            <div class="flex items-start justify-center mt-4 -mx-4">
                <div class="mx-4" v-for="index of [1, 2, 3]" :key="index">
                    <v-card>
                        <template v-slot:image>
                            <img
                                class="w-full"
                                src="https://placem.at/things?w=320&h=170"
                                alt=""
                            />
                        </template>

                        <h4 class="font-bold text-xl mb-2">Event title</h4>
                        <p class="text-grey-700 text-base">
                            Pixel Ninsei polycarbon fieldstrip grid pyrolitic
                            software misinformation intrusion cryptic Russian
                            cyberspace Yakuza bedslab polysaccharide.
                        </p>
                    </v-card>
                </div>
            </div>
            <h2 class="mt-16 text-4xl text-center">Meetups this Week</h2>
        </page-section>
        <page-section>
            <h2 class="text-4xl text-center">Voices From the Ground</h2>
            <h3 class="mt-16 text-2xl text-center"
                >Special Thanks to our Community Partners</h3
            >
        </page-section>
    </div>
</template>

<script>
import ButtonLink from '~/components/ButtonLink.vue'
import PageSection from '~/components/PageSection.vue'
import VCard from '~/components/VCard.vue'
import VFlag from '~/components/VFlag.vue'

export default {
    components: {
        ButtonLink,
        PageSection,
        VCard,
        VFlag,
    },
}
</script>

<style>
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
