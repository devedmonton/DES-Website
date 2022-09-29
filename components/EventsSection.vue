<template>
    <div
        class="relative bg-grey-000 pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
    >
        <a id="community-events" href="/#community-events" class="anchor"></a>
        <div class="absolute inset-0">
            <div class="h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2
                    class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                >
                    Community Events
                </h2>
            </div>
            <div
                class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
            >
                <MeetupCard
                    :name="events.coffee.name"
                    :logo="events.coffee.logo"
                    :slack="events.coffee.slack"
                    :link-to="events.coffee.linkTo"
                    :duration-info="events.coffee.durationInfo"
                    :slack-link="events.coffee.slackLink"
                >
                    <span>
                        #random_coffees is a weekly chance for you to meet other
                        people in the Dev Edmonton community. Every week you
                        will get randomly assigned to another person to have
                        coffee with (virtually or in person if you are
                        comfortable). Join the Slack workspace to participate.
                    </span>
                </MeetupCard>
            </div>
        </div>
    </div>
</template>

<script>
import MeetupCard from "./MeetupCard.vue";

export default {
    components: {
        MeetupCard,
    },
    data: () => ({
        events: {
            coffee: {
                name: "Random Coffees",
                logo: require("../assets/logos/coffee-192px.png"),
                linkTo: "https://join.slack.com/t/devedmonton/shared_invite/zt-1h0s5j0g4-ntARRvWGapJcnckM34jdZw",
                slack: "#random_coffees",
                slackLink: "https://join.slack.com/t/devedmonton/shared_invite/zt-1h0s5j0g4-ntARRvWGapJcnckM34jdZw",
                durationInfo: "Duration: Ongoing (weekly)",
            },
        },
    }),
};
</script>

<style></style>
