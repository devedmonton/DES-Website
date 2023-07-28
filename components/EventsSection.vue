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
                    :name="events.gdg.name"
                    :logo="events.gdg.logo"
                    :link-to="events.gdg.linkTo"
                >
                    <span>
                        Google Developer Groups has an Edmonton chapter! Their
                        vision is to foster an engaging and inclusive
                        developer's community. A place where you can meet your
                        fellow developers, career mentors, and boost your
                        technical skills. Whether you are an advanced developer,
                        or you just start to pivot your way in the tech
                        industry, we welcome you to the community. They mostly
                        focus on Google Technologies, such as Google Cloud
                        Computing, Firebase, Flutter, Andirod, Machine Learning,
                        and Earth Engine.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :logo="events.clc.logo"
                    :link-to="events.clc.linkTo"
                >
                    <span>
                        Canada Learning Code designs, delivers, and partners on
                        technology education for people in Canada. They have
                        workshops for kids, teens, girls, and adults. They are
                        always looking for mentors, teachers and coordinators.
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
            gdg: {
                    name: "Google Developer Groups",
                    logo: require("../assets/logos/gdgLogo.png"),
                    linkTo: "https://gdg.community.dev/gdg-cloud-edmonton",
                },
                clc: {
                    logo: require("../assets/logos/clc.png"),
                    linkTo:
                        "https://www.canadalearningcode.ca/chapters/edmonton",
                },
        },
    }),
};
</script>

<style></style>
