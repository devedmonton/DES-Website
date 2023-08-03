<template>
    <div class="relative pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8">
        <a id="resources" href="/#resources" class="anchor"></a>
        <div class="absolute inset-0">
            <div class="h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2
                    class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                >
                    Resources
                </h2>
            </div>
            <div
                class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
            >
                <MeetupCard
                    :name="events.isaic.name"
                    :logo="events.isaic.logo"
                    :link-to="events.isaic.linkTo"
                >
                    <span>
                        ISAIC provides local high-performance computing
                        infrastructure that is affordable, tailorable and
                        scalable. Their data sandboxes allow you to experiment
                        and collaborate easily and securely. Through their
                        partnerships and supports, ISAIC connects you to applied
                        knowledge and resources to help move your AI journey
                        forward. ISAIC is enabling experimentation, scale, and
                        powering the A.I.mbition of Western Canadian businesses
                        pursuing AI/ML adoption.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="events.amii.name"
                    :logo="events.amii.logo"
                    :link-to="events.amii.linkTo"
                >
                    <span>
                        Amii (Alberta Machine Intelligence Institute) works to
                        connect with the community to Alberta's growing AI
                        ecosystem, offer training and advanced education and
                        gives your company tools to harness the potential of
                        artificial intelligence.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="events.startupEdmonton.name"
                    :logo="events.startupEdmonton.logo"
                    :link-to="events.startupEdmonton.linkTo"
                >
                    <p>
                        FYI Startup Edmonton has become Edmonton Unlimited and
                        has a new space! See card the next card.
                    </p>
                </MeetupCard>
                <MeetupCard
                    :name="events.edmontonUnlimited.name"
                    :logo="events.edmontonUnlimited.logo"
                    :link-to="events.edmontonUnlimited.linkTo"
                >
                    <span>
                        Edmonton Unlimited provides free programming and
                        resources that Edmonton's innovators, big thinkers and
                        problem solvers need to turn their ideas into solutions.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="events.erin.name"
                    :logo="events.erin.logo"
                    :link-to="events.erin.linkTo"
                >
                    <p>
                        Any business, whether a freshly-launched start-up or a
                        midsize firm scaling up its offerings, depends on the
                        wisdom and counsel of peers to reach the next level,
                        including high-quality business coaches and mentors.
                    </p>
                </MeetupCard>
                <MeetupCard
                    :logo="events.startupTNT.logo"
                    :link-to="events.startupTNT.linkTo"
                >
                    <p>
                        Startup TNT believes that having fun together is the
                        starting point for community building. Whether you are
                        in Edmonton, Calgary or Saskatoon, grab a drink (on us)
                        and join us at our weekly Thursday Night Tradition -
                        Happy Hour.
                    </p>
                    <p class="mt-2">Every Thursday 6-9pm.</p>
                </MeetupCard>
                <MeetupCard
                    :name="events.techAlberta.name"
                    :logo="events.techAlberta.logo"
                    :link-to="events.techAlberta.linkTo"
                >
                    <p>
                        Technology Alberta exists to nurture a dedicated
                        community of people and organizations whose coordinated
                        and collaborative efforts help to make Alberta's
                        entrepreneurial advanced technology companies the global
                        vendors of choice. We achieve our goal through
                        entrepreneur led and community driven events, programs,
                        and initiatives.
                    </p>
                </MeetupCard>
            </div>
        </div>
    </div>
</template>

<script>
import MeetupCard from "./MeetupCard.vue";
export default {
    components: { MeetupCard },
    data() {
        return {
            events: {
                isaic: {
                    name: "ISAIC",
                    logo: require("../assets/logos/isaic-icon-logo.png"),
                    linkTo: "https://www.isaic.ca",
                },
                amii: {
                    name: "Training at Amii",
                    logo: require("../assets/logos/amii.svg"),
                    linkTo: "https://www.amii.ca",
                },
                startupEdmonton: {
                    name: "Startup Edmonton",
                    logo: require("../assets/logos/Startup-Edmonton-Logo-300x116.png"),
                    linkTo: "https://www.startupedmonton.com/programs",
                },
                edmontonUnlimited: {
                    name: "Edmonton Unlimited",
                    logo: require("../assets/logos/edmontonUnlimited.svg"),
                    linkTo: "https://edmontonunlimited.com",
                },
                erin: {
                    name: "Mentoring from ERIN",
                    logo: require("../assets/logos/ERIN+Logo.jpeg"),
                    linkTo: "https://www.edmontonrin.ca",
                },
                startupTNT: {
                    logo: require("../assets/logos/StartUpTNTLogo.jpg"),
                    linkTo: "https://www.startuptnt.com/happy-hour",
                },
                techAlberta: {
                    name: "Technology Alberta",
                    logo: require("../assets/logos/techAlberta.png"),
                    linkTo: "https://technologyalberta.com",
                },
            },
        };
    },
};
</script>

<style></style>
