<template>
    <div
        id="community-events"
        class="relative bg-grey-000 pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
    >
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
                        scalable. Our data sandboxes allow you to experiment and
                        collaborate easily and securely. Through our
                        partnerships and supports, ISAIC connects you to applied
                        knowledge and resources to help move your AI journey
                        forward. ISAIC is enabling experimentation, scale, and
                        powering the A.I.mbition of Western Canadian businesses
                        pursuing AI/ML adoption.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="events.propel.name"
                    :logo="events.propel.logo"
                    :link-to="events.propel.linkTo"
                >
                    <span>
                        Ready to boost your startup? Propel is our 12-week
                        pre-accelerator program designed to support
                        Alberta-based, early-stage, scalable digital technology
                        startup founders by offering hands-on, individual
                        support from expert mentors who have been there, a
                        roadmap to build sales strategies, investment education
                        and support as well as programming to find
                        product-market fit or prepare to scale.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="events.remi.name"
                    :logo="events.remi.logo"
                    :link-to="events.remi.linkTo"
                >
                    <span>
                        The REMI program is designed to help startups, SMEs, and
                        enterprises use AI technology to make better decisions
                        about how to most effectively reduce greenhouse gases
                        while also improving operations and increasing revenue.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="events.erin.name"
                    :link-to="events.erin.linkTo"
                >
                    <p>
                        Any business, whether a freshly-launched start-up or a
                        midsize firm scaling up its offerings, depends on the
                        wisdom and counsel of peers to reach the next level –
                        including high-quality business coaches and mentors. TEC
                        Edmonton, with support from ERIN, is growing the
                        coaching capacity in Edmonton.
                    </p>
                    <p>
                        TEC Edmonton (TEC) is seeking visionary business coaches
                        to help guide promising growth-stage companies to the
                        next milestones in their development.
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
                    linkTo: "https://isaic.ece.ualberta.ca",
                },
                propel: {
                    name: "Propel at Startup Edmonton",
                    logo: require("../assets/logos/Startup-Edmonton-Logo-300x116.png"),
                    linkTo: "https://www.startupedmonton.com/propel",
                },
                remi: {
                    name: "REMI at Amii",
                    logo: require("../assets/logos/amii.svg"),
                    linkTo: "https://www.amii.ca/industry-solutions/remi/",
                },
                erin: {
                    name: "Coaching Program from E-RIN",
                    linkTo: "https://www.edmontonrin.ca/coaching-program",
                },
            },
        };
    },
};
</script>

<style></style>
