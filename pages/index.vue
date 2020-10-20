<template>
    <div class="">
        <page-section bg="dim">
            <div class="flex flex-col md:flex-row justify-center items-center">
                <div class="flex-1 px-2 md:pr-0 md:pr-8">
                    <h1 class="text-4xl">Dev Edmonton Society</h1>
                    <h3 class="text-2xl"
                        >Fostering a stronger software development community in
                        Edmonton.</h3
                    >
                    <p class="mt-8 measure"
                        >We are made up of people who believe that an impactful,
                        diverse, and collaborative developer community enriches
                        us all. We realize this vision by sharing knowledge and
                        ideas, understanding the community and its needs,
                        promoting events and initiatives, and supporting
                        technology meetups and organizations.
                    </p>
                </div>
                <div class="slack relative md:max-w-30 order-2 mt-4">
                    <div class="slack-content relative p-4 text-center">
                        <p class="text-xl">Join our community on Slack</p>
                        <img src="~assets/logos/Slack_RGB.svg" />
                        <a
                            href="https://devedmonton-invite.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <v-button appearance="inverted"
                                >Join</v-button
                            >
                        </a>
                    </div>
                </div>
            </div>
        </page-section>
        <page-section bg="dark">
            <h2 class="text-4xl text-center">What We Do</h2>
            <div class="flex items-start justify-center mt-4 -mx-4">
                <div class="mx-4">
                    <v-card>
                        <template v-slot:image>
                            <img
                                class="w-full"
                                src="https://placem.at/things?w=320&h=170"
                                alt=""
                            />
                        </template>

                        <h4 class="font-bold text-xl mb-2">Support Meetups & Events</h4>
                        <p class="text-grey-700 text-base">
                            If you're a technology meetup or event organizers, we've
                            got your back!
                        </p>
                        <p class="text-grey-700 text-base">
                            From online streaming tools, equipment and training,
                            to event support, organizer training, and venues we're
                            here to help developers run awesome events about the
                            tools they love; without having to start from scratch
                            on their own.
                        </p>
                    </v-card>
                </div>
                <div class="mx-4">
                    <v-card>
                        <template v-slot:image>
                            <img
                                class="w-full"
                                src="https://placem.at/things?w=320&h=170"
                                alt=""
                            />
                        </template>

                        <h4 class="font-bold text-xl mb-2">Connect Community</h4>
                        <p class="text-grey-700 text-base">
                            Technology changes faster everyday, and a great
                            technology community needs to stay connected if we
                            want to keep us.
                        </p>
                        <p class="text-grey-700 text-base">
                            Through our active Slack, mailing list, events,
                            and online outreach we provide many ways for the
                            Edmonton technology community to come together.
                        </p>
                    </v-card>
                </div>
                <div class="mx-4">
                    <v-card>
                        <template v-slot:image>
                            <img
                                class="w-full"
                                src="https://placem.at/things?w=320&h=170"
                                alt=""
                            />
                        </template>

                        <h4 class="font-bold text-xl mb-2">Provide A Platform</h4>
                        <p class="text-grey-700 text-base">
                            Beyond just connecting meetup and event orgranizers
                            with great online and in-person venues and resources
                            we provide access to a variety of supports to help
                            local technologists build the community they want to
                            see, wherever that may be. Share your ideas on our Slack!
                        </p>
                    </v-card>
                </div>
            </div>
        </page-section>
        <page-section>
            <h2 class="text-4xl text-center">Get Involved</h2>
            <div class="flex items-start justify-center mt-4 -mx-4">
                <div class="mx-4">
                    <v-card>
                        <template v-slot:image>
                            <img
                                class="w-full"
                                src="https://placem.at/things?w=320&h=170"
                                alt=""
                            />
                        </template>

                        <h4 class="font-bold text-xl mb-2">As A Developer</h4>
                        <p class="text-grey-700 text-base">
                            There so many ways to get involved in the Edmonton developer community!
                        </p>
                        <p class="text-grey-700 text-base">
                            <a href="https://devedmonton-invite.herokuapp.com/">Get started by joining our Slack</a> and make sure to say hello in our <code>#introductions</code> channel where one of our friendly community members will help you find your way.
                        </p>
                        <p class="text-grey-700 text-base">
                            From there, <a href="https://youtube.com/devedmonton">subscribe to the Dev Edmonton YouTube channel</a> to be part of our regular livestreams, and see recordings of past events. We also host regular online mixers and hackathons. <a href="https://devedmonton-invite.herokuapp.com/">Join out Slack for the latest news</a>.
                        </p>
                        <a
                            href="https://devedmonton-invite.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <v-button appearance="inverted"
                                >Join Slack</v-button
                            >
                        </a>
                    </v-card>
                </div>
                <div class="mx-4">
                    <v-card>
                        <template v-slot:image>
                            <img
                                class="w-full"
                                src="https://placem.at/things?w=320&h=170"
                                alt=""
                            />
                        </template>

                        <h4 class="font-bold text-xl mb-2">As An Event Organizers</h4>
                        <p class="text-grey-700 text-base">
                            If you're like us you're probably a developer keen to start a meetup or organize and event for your favourite language or technologies. We've been there, and want to help!
                        </p>
                        <p class="text-grey-700 text-base">
                            Whether it's sharing best practices, streaming and recording resources, fundraising, or just lending a friendly ear we want to share the lessons we've learned and let you focus on running successful and engaging events!
                        </p>
                        <a
                            href="mailto:organizer-support@devedmonton.com?subject=I'm%20interested%20in%20help%20organizing%20an%20Edmonton%20technology%20event"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <v-button appearance="inverted"
                                >Organize An Event</v-button
                            >
                        </a>
                    </v-card>
                </div>
                <div class="mx-4">
                    <v-card>
                        <template v-slot:image>
                            <img
                                class="w-full"
                                src="https://placem.at/things?w=320&h=170"
                                alt=""
                            />
                        </template>

                        <h4 class="font-bold text-xl mb-2">As A Business</h4>
                        <p class="text-grey-700 text-base">
                            Whether you're a growing startup or an established player the Dev Edmonton Society can help your understand the tools and technologies shaping your business.
                        </p>
                        <p class="text-grey-700 text-base">
                            Supporting and growning the Edmonton tech community takes many shapes, from simple financial donations to direct engagemenent by providing speakers, venues, resources and donations of employee time. We want to help your business grow and find a community of technologists passionate about the tools you need to succeed!
                        </p>
                        <a
                            href="mailto:community-support@devedmonton.com?subject=Supporting%20Dev%20Edmonton%20Society"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <v-button appearance="inverted"
                                >Support Local Tech</v-button
                            >
                        </a>
                    </v-card>
                </div>
            </div>
        </page-section>
        <page-section>
            <h2 class="mt-16 text-4xl text-center">Meetups this Week</h2>
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
import VButton from '~/components/VButton.vue'

export default {
    components: {
        ButtonLink,
        PageSection,
        VCard,
        VFlag,
        VButton,
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
