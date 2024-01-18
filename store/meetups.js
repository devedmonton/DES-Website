import { defineStore } from "pinia";

export const useMeetupsStore = defineStore("meetups", {
    state: () => ({
        meetups: [
            {
                name: "YEGrb",
                logoImg: "/meetups/ruby-240px.png",
                linkTo: "https://exchangejs.com/",
                slack: "#meetup-ruby",
                description: ` YEGRB is Edmonton’s local Ruby Meetup. Ruby is a
                    dynamic, open source programming language with a focus
                    on simplicity and productivity. It has an elegant syntax
                    that is natural to read and easy to write.`,
            },
            {
                name: "Exchange.js",
                logoImg: "/meetups/JavaScript-logo-240px.png",
                linkTo: "https://exchangejs.com/",
                slack: "#meetup-javascript",
                description: `Exchange.js is an open community of local developers and
                    designers, who meet monthly to discuss a wide range of
                    topics within the JavaScript ecosystem.`,
            },
            {
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
            {
                name: "Edmonton .NET User Group",
                logoImg: "/meetups/dotNet_logo.png",
                linkTo: "https://www.meetup.com/Edmonton-NET-User-Group/",
                slack: "#meetup-dotnet-edmug",
                description: ` The Edmonton .NET User Group is a non-profit
                    organization which empowers the IT Professionals and
                    Developers using the Microsoft .NET Framework.`,
            },
            {
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
            {
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
            {
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
            {
                name: "Edmonton Data Science Community",
                logoImg: "/meetups/DataScience_Nvpcx6-aY",
                linkTo: "https://www.meetup.com/edmonton-data-science-community/",
                slack: "#data-science",
                description: `The Edmonton Data Community aims to build a safe 
                    space for folks in the data space to connect, share knowledge 
                    and grow together. Whether you want to talk about Python 
                    for Data Analytics or how to transform business requirements 
                    into data science products, this will be the place for you.`,
            },
        ],
    }),

    getters: {
        getAllMeetups: (state) => state.meetups,
        // Used to get a limited number of meetups for the home page based on the card limit
        getLimitedMeetups: (state) => (cardLimit) =>
            state.meetups.slice(0, cardLimit),
    },
});
