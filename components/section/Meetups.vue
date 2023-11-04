<template>
    <div
        class="relative bg-white pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
    >
        <a id="meetups" href="/#meetups" class="anchor"></a>
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
                <ExternalInfoCard
                    v-for="(meetup, index) in meetups"
                    v-bind="meetup"
                    :key="index"
                >
                </ExternalInfoCard>
            </div>
        </div>
    </div>
</template>

<script>
// imports SVG`s

export default {
    data() {
        return {
            meetups: {
                ruby: {
                    name: "YEGrb",
                    logoImg: "/meetups/ruby-240px.png",
                    linkTo: "https://exchangejs.com/",
                    slack: "#meetup-ruby",
                    description: ` YEGRB is Edmonton’s local Ruby Meetup. Ruby is a
                        dynamic, open source programming language with a focus
                        on simplicity and productivity. It has an elegant syntax
                        that is natural to read and easy to write.`,
                },
                javascript: {
                    name: "Exchange.js",
                    logoImg: "/meetups/JavaScript-logo-240px.png",
                    linkTo: "https://exchangejs.com/",
                    slack: "#meetup-javascript",
                    description: `Exchange.js is an open community of local developers and
                        designers, who meet monthly to discuss a wide range of
                        topics within the JavaScript ecosystem.`,
                },
                edmontonPy: {
                    name: "Edmonton.Py",
                    logoSvg: "/img/logos/meetups/python-logo.svg",
                    linkTo: "https://exchangejs.com/",
                    slack: "#meetup-edmontonpy",
                    description: `We hope to foster a strong, supportive, and proficient
                        Python community in the Edmonton area. Everyone
                        interested in any aspect of Python development is
                        welcome to join.
                    `,
                },
                dotNet: {
                    name: "Edmonton .NET User Group",
                    logoImg: "/meetups/dotNet_logo.png",
                    linkTo: "https://www.meetup.com/Edmonton-NET-User-Group/",
                    slack: "#meetup-dotnet-edmug",
                    description: ` The Edmonton .NET User Group is a non-profit
                        organization which empowers the IT Professionals and
                        Developers using the Microsoft .NET Framework.`,
                },
                yegRug: {
                    name: "Edmonton R User Group",
                    logoSvg: "/img/logos/meetups/r-logo.svg",
                    linkTo: "https://www.meetup.com/edmonton-r-user-group-yegrug",
                    slack: "#meetup-r",
                    description: `
                    The Edmonton R User Group (YEGRUG) is an R-enthusiast
                        group hosting events on data wrangling to visualization
                        and web development with R. Learn R, hone your skills,
                        network, all skill levels are welcome.`,
                },
                yegwit: {
                    name: "Edmonton Women In Tech",
                    logoImg: "/meetups/yegwit.png",
                    linkTo: "https://yegwit.com/",
                    description: ` YEGWIT aims to build a strong and safe group for women,
                        diverse genders, and allies in tech with the goal of
                        fostering engagement and opportunity, providing
                        mentorship, and creating community. We are establishing
                        a group that allows individuals to share ideas,
                        concerns, thoughts and actions, to create an equitable
                        environment within the industry.`,
                },
                weeklydevchat: {
                    name: "Weekly Dev Chat",
                    logoSvg: "/img/logos/meetups/weeklydevchat-logo.svg",
                    linkTo: "https://weeklydevchat.com/",
                    description: `Weekly Dev Chat is a place to ask questions, hear
                        different view points, and get to know your fellow
                        developers. Every week there is an initial topic posted
                        to get the discussion started. Sometimes we discuss the
                        initial topic the entire chat, other times the topic
                        changes several times through the natural flow of the
                        conversation. Everyone and anyone is welcome to join as
                        long as you are kind, supportive, and respectful of
                        others.`,
                },
                dataScience: {
                    name: "Edmonton Data Science Community",
                    logoSvg: "https://ik.imagekit.io/des/meetups/DataScience_Nvpcx6-aY?updatedAt=1698789157558",
                    linkTo: "https://www.meetup.com/edmonton-data-science-community/",
                    description: `The Edmonton Data Community aims to build a safe space
                        for folks in the data space to connect, share knowledge and grow
                        together. Whether you want to talk about Python for Data 
                        Analytics or how to transform business requirements into data 
                        science products, this will be the place for you.`,
                },
            },
        };
    },
};
</script>
