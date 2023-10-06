import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
    state: () => ({
        events: [
            {
                name: "Google Developer Groups",
                logoImg: "/events/gdgLogo.png",
                linkTo: "https://gdg.community.dev/gdg-cloud-edmonton",
                description: ` Google Developer Groups has an Edmonton chapter! Their
              vision is to foster an engaging and inclusive
              developer's community. A place where you can meet your
              fellow developers, career mentors, and boost your
              technical skills. Whether you are an advanced developer,
              or you just start to pivot your way in the tech
              industry, we welcome you to the community. They mostly
              focus on Google Technologies, such as Google Cloud
              Computing, Firebase, Flutter, Android, Machine Learning,
              and Earth Engine.`,
            },
            {
                name: "Canada Learning Code",
                logoImg: "/events/clc.png",
                linkTo: "https://www.canadalearningcode.ca/chapters/edmonton",
                description: ` Canada Learning Code designs, delivers, and partners on
              technology education for people in Canada. They have
              workshops for kids, teens, girls, and adults. They are
              always looking for mentors, teachers and coordinators.`,
            },
            {
                name: "Rainforest Alberta",
                logoImg: "/events/rac.png",
                linkTo: "https://www.rainforestab.ca/edmonton.html",
                description: ` Rainforest Alberta is an informal organization working
              towards improving Alberta's innovation ecosystem. They
              want Albertans to invent, prosper and move their ideas
              forward. Community members can join by signin a provided
              by them Social Contract. Their engagement with the
              Edmonton entrepreneurial community is through 3
              different types of events: Weekly, Monthly & Annual
              Summits.`,
            },
            {
                name: "Edmonton Linux Users Group",
                logoImg: "/events/elug.png",
                linkTo: "https://elug.ca",
                description: ` The Edmonton Linux User Group (ELUG) is a group of
              enthusiasts interested in sharing knowledge of Linux and
              GNU/Linux-based operating systems, experiences (and
              beer?), and enjoy the freedom and adventure of using
              free and open source software. Everybody is welcome.
              They virtually meet every 4th Thursday of the month.`,
            },
            {
                name: "Open Hardware Meetup",
                logoImg: "/events/ohm.png",
                linkTo: "https://www.meetup.com/edmontonunlimited/events/pcwlzsyfchbpb/",
                description: ` The Open Hardware Meetup is a place where all kinds of
              people can share an interest in the intersection of
              hardware, software, connectivity, and user experience.
              Everyone is welcome. Some of their work examples from
              past includes: learn to solder, basics of arduino,
              automated basketball robots from high school team,
              magnetic computer displays for the virtually impaired.
              They meet every 2nd Thursday of every month.`,
            },
            {
                name: "Beta City YEG",
                logoImg: "/events/bcyeg.png",
                linkTo: "https://betacity.ca/",
                description: ` Beta City YEG is Edmonton’s citizen driven meetup with a
              mandate to connect citizens with opportunities to learn
              about, provide feedback for, and participate in projects
              that improve their community through connection and
              technology. They meet every 4th Wednesday of the month.`,
            },
            {
                name: "Edmonton Tech Wednesdays",
                logoImg: "/events/yeg-tech-wed.png",
                linkTo: "https://www.eventbrite.ca/e/edmonton-tech-wednesdays-tickets-662082084337",
                description: `Edmonton Tech Wednesdays is a weekly event where anyone who loves tech
      can mingle and connect with others in the tech sector in a casual and relaxed environment. Whether you're a developer, marketer, entrepreneur, or simply have an interest in tech, this is the perfect opportunity to network with like-minded individuals, exchange ideas, and build meaningful relationships.`,
            },
        ],
    }),

    getters: {
        getAllEvents: (state) => state.events,

        getLimitedEvents: (state) => (cardLimit) =>
            state.events.slice(0, cardLimit),
    },
});
