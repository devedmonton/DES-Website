<template>
    <div
        class="relative bg-grey-000 pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
    >
        <a id="resources" class="anchor"></a>
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
                    :name="events.startupEdmonton.name"
                    :logo="events.startupEdmonton.logo"
                    :link-to="events.startupEdmonton.linkTo"
                >
                    <p>
                        Whether you’re exploring a new product idea or you’re
                        looking to take your business to the next level, Startup
                        Edmonton has programming designed for you. They offer
                        four stages of programming along with resources and
                        guidance every step of the way.
                    </p>
                    <p class="mt-2">
                        As the economic impact of COVID-19 has been heavily felt
                        by Edmonton’s startup community, Startup Edmonton is
                        offering access to programs delivered ONLINE for $0 to
                        Albertans, powered in-part by Alberta Innovates.
                    </p>
                </MeetupCard>
                <MeetupCard
                    :name="events.remi.name"
                    :logo="events.remi.logo"
                    :link-to="events.remi.linkTo"
                >
                    <span>
                        The Reducing Emissions through Machine Intelligence
                        (REMI) program is designed to help startups, sbuject
                        matter experts, and enterprises use AI technology to
                        make better decisions about how to most effectively
                        reduce greenhouse gases while also improving operations
                        and increasing revenue.
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
                        wisdom and counsel of peers to reach the next level –
                        including high-quality business coaches and mentors. TEC
                        Edmonton, with support from the Edmonton Regional
                        Innovation Network (ERIN), is growing the coaching
                        capacity in Edmonton.
                    </p>
                </MeetupCard>
                <MeetupCard
                    :logo="events.startupTNT.logo"
                    :link-to="events.startupTNT.linkTo"
                    :discord-link="events.startupTNT.discordLink"
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
                    linkTo: "https://isaic.ece.ualberta.ca",
                },
                startupEdmonton: {
                    name: "Startup Edmonton",
                    logo: require("../assets/logos/Startup-Edmonton-Logo-300x116.png"),
                    linkTo: "https://www.startupedmonton.com/programs",
                },
                remi: {
                    name: "REMI at Amii",
                    logo: require("../assets/logos/amii.svg"),
                    linkTo: "https://www.amii.ca/industry-solutions/remi/",
                },
                erin: {
                    name: "Coaching Program from ERIN",
                    logo: require("../assets/logos/ERIN+Logo.jpeg"),
                    linkTo: "https://www.edmontonrin.ca/coaching-program",
                },
                startupTNT: {
                    logo: require("../assets/logos/StartUpTNTLogo.png"),
                    linkTo: "https://www.startuptnt.com/happy-hour",
                },
            },
        };
    },
};
</script>

<style></style>
