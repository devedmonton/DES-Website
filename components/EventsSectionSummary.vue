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
          v-for="(event, index) in limitedEvents"
          v-bind="event"
          :key="index"
        >
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
  props: {
    cardLimit: {
      type: Number,
      default: 5,
    },
  },
  data: () => ({
    events: {
      gdg: {
        name: "Google Developer Groups",
        logo: require("../assets/logos/gdgLogo.png"),
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
      clc: {
        name: "Canada Learning Code",
        logo: require("../assets/logos/clc.png"),
        linkTo: "https://www.canadalearningcode.ca/chapters/edmonton",
        description: ` Canada Learning Code designs, delivers, and partners on
                        technology education for people in Canada. They have
                        workshops for kids, teens, girls, and adults. They are
                        always looking for mentors, teachers and coordinators.`,
      },
      rac: {
        name: "Rainforest Alberta",
        logo: require("../assets/logos/rac.png"),
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
      elug: {
        name: "Edmonton Linux Users Group",
        logo: require("../assets/logos/elug.png"),
        linkTo: "https://elug.ca",
        description: ` The Edmonton Linux User Group (ELUG) is a group of
                        enthusiasts interested in sharing knowledge of Linux and
                        GNU/Linux-based operating systems, experiences (and
                        beer?), and enjoy the freedom and adventure of using
                        free and open source software. Everybody is welcome.
                        They virtually meet every 4th Thursday of the month.`,
      },
      ohm: {
        name: "Open Hardware Meetup",
        logo: require("../assets/logos/ohm.png"),
        linkTo:
          "https://www.meetup.com/edmontonunlimited/events/pcwlzsyfchbpb/",
        description: ` The Open Hardware Meetup is a place where all kinds of
                        people can share an interest in the intersection of
                        hardware, software, connectivity, and user experience.
                        Everyone is welcome. Some of their work examples from
                        past includes: learn to solder, basics of arduino,
                        automated basketball robots from high school team,
                        magnetic computer displays for the virtually impaired.
                        They meet every 2nd Thursday of every month.`,
      },
      bcyeg: {
        name: "Beta City YEG",
        logo: require("../assets/logos/bcyeg.png"),
        linkTo: "https://betacity.ca/",
        description: ` Beta City YEG is Edmonton’s citizen driven meetup with a
                        mandate to connect citizens with opportunities to learn
                        about, provide feedback for, and participate in projects
                        that improve their community through connection and
                        technology. They meet every 4th Wednesday of the month.`,
      },
      yegTechWednesdays: {
        name: "Edmonton Tech Wednesdays",
        logo: require("../assets/logos/yeg-tech-wed.png"),
        linkTo:
          "https://www.eventbrite.ca/e/edmonton-tech-wednesdays-tickets-662082084337",
        description: `Edmonton Tech Wednesdays is a weekly event where anyone who loves tech 
                can mingle and connect with others in the tech sector in a casual and relaxed environment. Whether you're a developer, marketer, entrepreneur, or simply have an interest in tech, this is the perfect opportunity to network with like-minded individuals, exchange ideas, and build meaningful relationships.`,
      },
    },
  }),
  computed: {
    limitedEvents() {
      console.log(Array.from(this.events).slice(0, this.cardLimit));
      return Array.from(this.events).slice(0, this.cardLimit);
    },
  },
};
</script>
