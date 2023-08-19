import { defineStore } from "pinia";

export const useResourcesStore = defineStore("resources", {
    state: () => ({
        resources: {
            isaic: {
                name: "ISAIC",
                logo: "/img/logos/isaic-icon-logo.png",
                linkTo: "https://www.isaic.ca",
                description:
                    "ISAIC provides local high-performance computing infrastructure that is affordable, tailorable and scalable. Their data sandboxes allow you to experiment and collaborate easily and securely. Through their partnerships and supports, ISAIC connects you to applied knowledge and resources to help move your AI journey forward. ISAIC is enabling experimentation, scale, and powering the A.I.mbition of Western Canadian businesses pursuing AI/ML adoption.",
            },
            amii: {
                name: "Training at Amii",
                logo: "/img/logos/amii.svg",
                linkTo: "https://www.amii.ca",
                description:
                    "Amii (Alberta Machine Intelligence Institute) works to connect with the community to Alberta's growing AI ecosystem, offer training and advanced education and gives your company tools to harness the potential of artificial intelligence.",
            },
            startupEdmonton: {
                name: "Startup Edmonton",
                logo: "/img/logos/Startup-Edmonton-Logo-300x116.png",
                linkTo: "https://www.startupedmonton.com/programs",
                description:
                    "FYI Startup Edmonton has become Edmonton Unlimited and has a new space! See card the next card.",
            },
            edmontonUnlimited: {
                name: "Edmonton Unlimited",
                logo: "/img/logos/edmontonUnlimited.svg",
                linkTo: "https://edmontonunlimited.com",
                description:
                    "Edmonton Unlimited provides free programming and resources that Edmonton's innovators, big thinkers and problem solvers need to turn their ideas into solutions.",
            },
            erin: {
                name: "Mentoring from ERIN",
                logo: "/img/logos/ERIN+Logo.jpeg",
                linkTo: "https://www.edmontonrin.ca",
                description:
                    "Any business, whether a freshly-launched start-up or a midsize firm scaling up its offerings, depends on the wisdom and counsel of peers to reach the next level, including high-quality business coaches and mentors.",
            },
            startupTNT: {
                logo: "/img/logos/StartUpTNTLogo.jpg",
                linkTo: "https://www.startuptnt.com/happy-hour",
                description:
                    "Startup TNT believes that having fun together is the starting point for community building. Whether you are in Edmonton, Calgary or Saskatoon, grab a drink (on us) and join us at our weekly Thursday Night Tradition - Happy Hour.",
                meetingTime: "Every Thursday 6-9pm.",
            },
            techAlberta: {
                name: "Technology Alberta",
                logo: "/img/logos/techAlberta.png",
                linkTo: "https://technologyalberta.com",
                description:
                    "Technology Alberta exists to nurture a dedicated community of people and organizations whose coordinated and collaborative efforts help to make Alberta's entrepreneurial advanced technology companies the global vendors of choice. We achieve our goal through entrepreneur led and community driven events, programs, and initiatives.",
            },
        },
    }),

    getters: {
        getAllResources: (state) => state.resources,
        // Used to get a limited number of events for the home page based on the card limit
        getLimitedResources: (state) => (cardLimit) =>
            Object.values(state.resources).slice(0, cardLimit),
    },
});
