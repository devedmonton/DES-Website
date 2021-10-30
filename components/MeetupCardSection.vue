<template>
    <div
        id="meetups"
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
                    Meetups We Support
                </h2>
            </div>
            <div
                class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
            >
                <MeetupCard
                    :name="meetups.ruby.name"
                    :logo="meetups.ruby.logo"
                    :link-to="meetups.ruby.linkTo"
                    :slack-link="meetups.ruby.slackLink"
                    :slack="meetups.ruby.slack"
                >
                    <span>
                        YEGRB is Edmonton’s local Ruby Meetup. Ruby is a
                        dynamic, open source programming language with a focus
                        on simplicity and productivity. It has an elegant syntax
                        that is natural to read and easy to write.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="meetups.javascript.name"
                    :logo="meetups.javascript.logo"
                    :link-to="meetups.javascript.linkTo"
                    :slack-link="meetups.javascript.slackLink"
                    :slack="meetups.javascript.slack"
                >
                    <span>
                        Exchange.js is an open community of local developers and
                        designers, who meet monthly to discuss a wide range of
                        topics within the JavaScript ecosystem.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="meetups.mobileDev.name"
                    :logo="meetups.mobileDev.logo"
                    :link-to="meetups.mobileDev.linkTo"
                    :slack="meetups.mobileDev.slack"
                    :slack-link="meetups.mobileDev.slackLink"
                    logo-bg="bg-blue-100"
                >
                    <span>
                        Edmonton Mobile Developers is a community of
                        programmers, designers, and hackers interested in mobile
                        development. We discuss a broad range of topics and
                        technologies relevant to the mobile ecosystem while
                        sharing knowledge and experience.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="meetups.edmontonPy.name"
                    :logo="meetups.edmontonPy.logo"
                    :link-to="meetups.edmontonPy.linkTo"
                    :slack-link="meetups.edmontonPy.slackLink"
                    :slack="meetups.edmontonPy.slack"
                >
                    <span>
                        We hope to foster a strong, supportive, and proficient
                        Python community in the Edmonton area. Everyone
                        interested in any aspect of Python development is
                        welcome to join.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="meetups.go.name"
                    :logo="meetups.go.logo"
                    :link-to="meetups.go.linkTo"
                    :slack-link="meetups.go.slackLink"
                    :slack="meetups.go.slack"
                >
                    <span>
                        Go is an open source programming language that enables
                        the production of simple, efficient, and reliable
                        software at scale. Edmonton Go is a meetup to
                        collaborate, discuss, and learn Go.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="meetups.dotNet.name"
                    :logo="meetups.dotNet.logo"
                    :link-to="meetups.dotNet.linkTo"
                    :slack-link="meetups.dotNet.slackLink"
                    :slack="meetups.dotNet.slack"
                >
                    <span>
                        The Edmonton .NET User Group is a non-profit
                        organization which empowers the IT Professionals and
                        Developers using the Microsoft .NET Framework.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="meetups.devOps.name"
                    :logo="meetups.devOps.logo"
                    :link-to="meetups.devOps.linkTo"
                    :slack="meetups.devOps.slack"
                    :slack-link="meetups.devOps.slackLink"
                    logo-bg="bg-blue-100"
                >
                    <span>
                        DevOps YEG is a platform for DevOps enthusiasts and
                        professionals to share best practises and knowledge
                        around managing modern software development operations.
                    </span>
                </MeetupCard>
                <!-- Cog svg icon provided by FontAwesome https://fontawesome.com/license/free -->
                <MeetupCard
                    :name="meetups.yegRug.name"
                    :logo="meetups.yegRug.logo"
                    :link-to="meetups.yegRug.linkTo"
                    :slack="meetups.yegRug.slack"
                    :slack-link="meetups.yegRug.slackLink"
                    logo-bg="bg-blue-100"
                >
                    <span>
                        The Edmonton R User Group (YEGRUG) is an R-enthusiast
                        group hosting events on data wrangling to visualization
                        and web development with R. Learn R, hone your skills,
                        network, all skill levels are welcome.
                    </span>
                </MeetupCard>
                <MeetupCard
                    :name="meetups.yegwit.name"
                    :logo="meetups.yegwit.logo"
                    :link-to="meetups.yegwit.linkTo"
                    :slack-link="meetups.yegwit.slackLink"
                    logo-bg="bg-blue-100"
                >
                    <span>
                        YEGWIT aims to build a strong and safe group for women,
                        diverse genders, and allies in tech with the goal of
                        fostering engagement and opportunity, providing
                        mentorship, and creating community. We are establishing
                        a group that allows individuals to share ideas,
                        concerns, thoughts and actions, to create an equitable
                        environment within the industry.
                    </span>
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
            meetups: {
                ruby: {
                    name: "YEGrb",
                    logo: require("../assets/logos/ruby-240px.png"),
                    linkTo: "https://yegrb.com/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-ruby",
                },
                javascript: {
                    name: "Exchange.js",
                    logo: require("../assets/logos/JavaScript-logo-240px.png"),
                    linkTo: "https://exchangejs.com/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-javascript",
                },
                mobileDev: {
                    name: "Mobile Dev Meetup",
                    logo: require("../assets/logos/mobile-dev.svg"),
                    linkTo:
                        "https://www.meetup.com/startupedmonton/events/knjqbsyccfbgc/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-mobile-dev",
                },
                edmontonPy: {
                    name: "Edmonton.Py",
                    logo: require("../assets/logos/python-logo.svg"),
                    linkTo: "http://edmontonpy.com/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-edmontonpy",
                },
                go: {
                    name: "Go Meetup",
                    logo: require("../assets/logos/Go-Logo_Blue.svg"),
                    linkTo: "https://edmontongo.org/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-go",
                },
                dotNet: {
                    name: "Edmonton .NET User Group",
                    logo: require("../assets/logos/dotNet_logo.png"),
                    linkTo: "http://edmug.net/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-dotnet-edmug",
                },
                devOps: {
                    name: "Meetup Dev Ops",
                    logo: require("../assets/logos/cogs-solid.svg"),
                    linkTo:
                        "https://www.meetup.com/startupedmonton/events/pxlrmqyzdbxb/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-devops",
                },
                yegRug: {
                    name: "Edmonton R User Group",
                    logo: require("../assets/logos/r-logo.svg"),
                    linkTo:
                        "https://www.meetup.com/edmonton-r-user-group-yegrug",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-r",
                },
                yegwit: {
                    name: "Edmonton Women In Tech",
                    logo: require("../assets/logos/yegwit.png"),
                    linkTo: "https://yegwit.com/",
                    slackLink: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#meetup-r",
                },
            },
        };
    },
};
</script>

<style></style>
