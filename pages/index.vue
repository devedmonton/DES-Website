<template>
    <div>
        <div
            id="about"
            class="py-8 bg-white overflow-hidden max-w-7xl mx-auto sm:px-4"
        >
            <div
                class="relative mx-8 sm:mx-12 pb-8 lg:my-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
            >
                <div class="relative">
                    <h3
                        class="text-3xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                    >
                        Dev Edmonton Society
                    </h3>
                    <h4
                        class="text-lg leading-8 font-bold text-gray-900 tracking-tight sm:text-lg sm:leading-9"
                    >
                        Fostering a stronger software development community in
                        Edmonton.
                    </h4>
                    <p class="mt-3 text-lg leading-7 text-gray-500">
                        We are made up of people who believe that an impactful,
                        diverse, and collaborative developer community enriches
                        us all. We realize this vision by sharing knowledge and
                        ideas, understanding the community and its needs,
                        promoting events and initiatives, and supporting
                        technology meetups and organizations.
                    </p>
                </div>

                <div class="mt-10 -mx-4 relative lg:mt-0">
                    <div class="slack-content relative p-4 text-center">
                        <p class="text-xl text-brand-primary">
                            <a href="https://devedmonton-invite.herokuapp.com/">
                                Join our community on Slack
                            </a>
                        </p>
                        <img
                            class="w-64 m-auto"
                            src="~assets/logos/Slack_RGB.svg"
                        />
                        <a href="https://devedmonton-invite.herokuapp.com/">
                            <VButton appearance="inverted">Join Slack</VButton>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div
            id="what-we-do"
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
                        What We Do
                    </h2>
                </div>
                <div
                    class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
                >
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="~/assets/homepage/meetups-and-events.jpg"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <div class="block">
                                    <h3
                                        class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                    >
                                        Support Meetups & Events
                                    </h3>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        If you're a technology meetup or event
                                        organizers, we've got your back!
                                    </p>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        From online streaming tools, equipment
                                        and training, to event support,
                                        organizer training, and venues we're
                                        here to help developers run awesome
                                        events about the tools they love;
                                        without having to start from scratch on
                                        their own.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="~/assets/homepage/connect-community.jpg"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <div class="block">
                                    <h3
                                        class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                    >
                                        Connect Community
                                    </h3>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        Technology changes faster everyday, and
                                        a great technology community needs to
                                        stay connected if we want to keep us.
                                    </p>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        Through our active Slack, mailing list,
                                        events, and online outreach we provide
                                        many ways for the Edmonton technology
                                        community to come together.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="~/assets/homepage/provide-a-platform.jpg"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <div class="block">
                                    <h3
                                        class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                    >
                                        Provide A Platform
                                    </h3>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        Beyond just connecting meetup and event
                                        orgranizers with great online and
                                        in-person venues and resources we
                                        provide access to a variety of supports
                                        to help local technologists build the
                                        community they want to see, wherever
                                        that may be. Share your ideas on our
                                        Slack!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            id="get-involved"
            class="relative bg-white pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
        >
            <div class="absolute inset-0">
                <div class="h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h2
                        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                    >
                        Get Involved
                    </h2>
                </div>
                <div
                    class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
                >
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="~/assets/homepage/get-involved-dev.jpg"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1 flex flex-col">
                                <div class="block flex-grow">
                                    <h3
                                        class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                    >
                                        As A Developer
                                    </h3>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        There so many ways to get involved in
                                        the Edmonton developer community!
                                    </p>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        <a
                                            class="text-brand-primary"
                                            href="https://devedmonton-invite.herokuapp.com/"
                                            >Get started by joining our Slack</a
                                        >
                                        and make sure to say hello in our
                                        <code>#introductions</code> channel
                                        where one of our friendly community
                                        members will help you find your way.
                                    </p>
                                </div>
                                <div class="flex justify-center mt-4">
                                    <a
                                        href="https://devedmonton-invite.herokuapp.com/"
                                    >
                                        <VButton appearance="inverted"
                                            >Join Slack</VButton
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="~/assets/homepage/get-involved-meetups.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1 flex flex-col">
                                <div class="block flex-grow">
                                    <h3
                                        class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                    >
                                        As An Event Organizer
                                    </h3>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        If you're like us you're probably a
                                        developer keen to start a meetup or
                                        organize an event for your favourite
                                        language or technologies. We've been
                                        there, and want to help!
                                    </p>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        Whether it's sharing best practices,
                                        streaming and recording resources,
                                        fundraising, or just lending a friendly
                                        ear we want to share the lessons we've
                                        learned and let you focus on running
                                        successful and engaging events!
                                    </p>
                                </div>
                                <div class="flex justify-center mt-4">
                                    <a
                                        class="m-auto"
                                        href="mailto:board@devedmonton.com?subject=I'm%20interested%20in%20help%20organizing%20an%20Edmonton%20technology%20event"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <VButton appearance="inverted"
                                            >Organize An Event</VButton
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1 flex flex-col">
                                <div class="block flex-grow">
                                    <h3
                                        class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                    >
                                        As A Business
                                    </h3>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        Whether you're a growing startup or an
                                        established player the Dev Edmonton
                                        Society can help your understand the
                                        tools and technologies shaping your
                                        business.
                                    </p>
                                    <p
                                        class="mt-3 text-base leading-6 text-gray-500"
                                    >
                                        Supporting and growning the Edmonton
                                        tech community takes many shapes, from
                                        simple financial donations to direct
                                        engagemenent by providing speakers,
                                        venues, resources and donations of
                                        employee time. We want to help your
                                        business grow and find a community of
                                        technologists passionate about the tools
                                        you need to succeed!
                                    </p>
                                </div>
                                <div class="flex justify-center mt-4">
                                    <a
                                        href="mailto:board@devedmonton.com?subject=Supporting%20Dev%20Edmonton%20Society"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <VButton appearance="inverted"
                                            >Support Local Tech</VButton
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                        :slack="meetups.ruby.slack"
                    >
                        <span>
                            YEGRB is Edmonton’s local Ruby Meetup. Ruby is a
                            dynamic, open source programming language with a
                            focus on simplicity and productivity. It has an
                            elegant syntax that is natural to read and easy to
                            write.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="meetups.javascript.name"
                        :logo="meetups.javascript.logo"
                        :link-to="meetups.javascript.linkTo"
                        :slack="meetups.javascript.slack"
                    >
                        <span>
                            Exchange.js is an open community of local developers
                            and designers, who meet monthly to discuss a wide
                            range of topics within the JavaScript ecosystem.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="meetups.mobileDev.name"
                        :logo="meetups.mobileDev.logo"
                        :link-to="meetups.mobileDev.linkTo"
                        :slack="meetups.mobileDev.slack"
                        logo-bg="bg-blue-100"
                    >
                        <span>
                            Edmonton Mobile Developers is a community of
                            programmers, designers, and hackers interested in
                            mobile development. We discuss a broad range of
                            topics and technologies relevant to the mobile
                            ecosystem while sharing knowledge and experience.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="meetups.edmontonPy.name"
                        :logo="meetups.edmontonPy.logo"
                        :link-to="meetups.edmontonPy.linkTo"
                        :slack="meetups.edmontonPy.slack"
                    >
                        <span>
                            We hope to foster a strong, supportive, and
                            proficient Python community in the Edmonton area.
                            Everyone interested in any aspect of Python
                            development is welcome to join.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="meetups.go.name"
                        :logo="meetups.go.logo"
                        :link-to="meetups.go.linkTo"
                        :slack="meetups.go.slack"
                    >
                        <span>
                            Go is an open source programming language that
                            enables the production of simple, efficient, and
                            reliable software at scale. Edmonton Go is a meetup
                            to collaborate, discuss, and learn Go.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="meetups.dotNet.name"
                        :logo="meetups.dotNet.logo"
                        :link-to="meetups.dotNet.linkTo"
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
                        logo-bg="bg-blue-100"
                    >
                        <span>
                            DevOps YEG is a platform for DevOps enthusiasts and
                            professionals to share best practises and knowledge
                            around managing modern software development
                            operations.
                        </span>
                    </MeetupCard>
                    <!-- Cog svg icon provided by FontAwesome https://fontawesome.com/license/free -->
                    <MeetupCard
                        :name="meetups.yegRug.name"
                        :logo="meetups.yegRug.logo"
                        :link-to="meetups.yegRug.linkTo"
                        :slack="meetups.yegRug.slack"
                        logo-bg="bg-blue-100"
                    >
                        <span>
                            The Edmonton R User Group (YEGRUG) is an
                            R-enthusiast group hosting events on data wrangling
                            to visualization and web development with R. Learn
                            R, hone your skills, network, all skill levels are
                            welcome.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="meetups.yegwit.name"
                        :logo="meetups.yegwit.logo"
                        :link-to="meetups.yegwit.linkTo"
                        logo-bg="bg-blue-100"
                    >
                        <span>
                            YEGWIT aims to build a strong and safe group for
                            women, diverse genders, and allies in tech with the
                            goal of fostering engagement and opportunity,
                            providing mentorship, and creating community. We are
                            establishing a group that allows individuals to
                            share ideas, concerns, thoughts and actions, to
                            create an equitable environment within the industry.
                        </span>
                    </MeetupCard>
                </div>
            </div>
        </div>
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
                    >
                        <span>
                            #random_coffees is a weekly chance for you to meet
                            other people in the Dev Edmonton community. Every
                            week you will get randomly assigned to another
                            person to have coffee with (virtually or in person
                            if you are comfortable). Join the Slack workspace to
                            participate.
                        </span>
                    </MeetupCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "~/components/VButton.vue";

export default {
    components: {
        VButton,
    },
    data: () => {
        return {
            events: {
                coffee: {
                    name: "Random Coffees",
                    logo: require("../assets/logos/coffee-192px.png"),
                    linkTo: "https://devedmonton-invite.herokuapp.com/",
                    slack: "#random_coffees",
                    durationInfo: "Duration: Ongoing (weekly)",
                },
            },
            meetups: {
                ruby: {
                    name: "YEGrb",
                    logo: require("../assets/logos/ruby-240px.png"),
                    linkTo: "https://yegrb.com/",
                    slack: "#meetup-ruby",
                },
                javascript: {
                    name: "Exchange.js",
                    logo: require("../assets/logos/JavaScript-logo-240px.png"),
                    linkTo: "https://exchangejs.com/",
                    slack: "#meetup-javascript",
                },
                mobileDev: {
                    name: "Mobile Dev Meetup",
                    logo: require("../assets/logos/mobile-dev.svg"),
                    linkTo:
                        "https://www.meetup.com/startupedmonton/events/knjqbsyccfbgc/",
                    slack: "#meetup-mobile-dev",
                },
                edmontonPy: {
                    name: "Edmonton.Py",
                    logo: require("../assets/logos/python-logo.svg"),
                    linkTo: "http://edmontonpy.com/",
                    slack: "#meetup-edmontonpy",
                },
                go: {
                    name: "Go Meetup",
                    logo: require("../assets/logos/Go-Logo_Blue.svg"),
                    linkTo: "https://edmontongo.org/",
                    slack: "#meetup-go",
                },
                dotNet: {
                    name: "Edmonton .NET User Group",
                    logo: require("../assets/logos/dotNet_logo.png"),
                    linkTo: "http://edmug.net/",
                    slack: "#meetup-dotnet-edmug",
                },
                devOps: {
                    name: "Meetup Dev Ops",
                    logo: require("../assets/logos/cogs-solid.svg"),
                    linkTo:
                        "https://www.meetup.com/startupedmonton/events/pxlrmqyzdbxb/",
                    slack: "#meetup-devops",
                },
                yegRug: {
                    name: "Edmonton R User Group",
                    logo: require("../assets/logos/r-logo.svg"),
                    linkTo:
                        "https://www.meetup.com/edmonton-r-user-group-yegrug",
                    slack: "#meetup-r",
                },
                yegwit: {
                    name: "Edmonton Women In Tech",
                    logo: require("../assets/logos/yegwit.png"),
                    linkTo: "https://yegwit.com/",
                    slack: "#meetup-r",
                },
            },
        };
    },
};
</script>

<style>
.title {
    display: block;
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
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
