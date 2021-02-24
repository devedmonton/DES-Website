<template>
    <div class="max-w-7xl mx-auto spx-6 px-6 lg:px-8 text-lg">
        <h1 class="text-2xl font-bold py-4">Dev Edmonton Society Board</h1>
        <ol>
            <li>
                <h2 class="text-xl font-bold py-2 border-b border-lightgrey">
                    Board Compostion
                </h2>
                <div class="text-gray-500">
                    <p class="py-2">
                        The Dev Edmonton Board consists of 7 members filling
                        three year terms. Every year at the Annual General
                        Meeting (AGM) elections will be held for any open
                        positions. Details on how to apply and other information
                        regarding the open roles will be posted on our
                        <NuxtLink
                            to="/board_recruiting"
                            class="text-brand-primary"
                            >board recruitment page</NuxtLink
                        >
                        prior to the AGM.
                    </p>
                    <p>
                        Dev Edmonton Society desires to build a board with
                        diverse perspectives that reflect our community.
                    </p>
                    <p>
                        A new board was elected at the society’s AGM on January
                        23<sup>rd</sup>
                        2021. The following members were elected to the board.
                    </p>
                </div>
            </li>
        </ol>

        <div>
            <div>
                <h2 class="text-xl py-2 font-bold border-b border-lightgrey">
                    Current Board
                </h2>
            </div>
            <div class="bg-white">
                <div class="mx-auto py-2 px-4 max-w-7xl lg:px-6 lg:py-8">
                    <div class="space-y-4">
                        <ul
                            class="md:grid md:grid-cols-2 md:items-start md:gap-x-6 md:gap-y-6 md:space-y-0"
                        >
                            <BoardMember
                                v-for="member in members"
                                :key="member.id"
                                :name="member.name"
                                :title="member.title"
                                :description="member.description"
                                :image-link="member.imageLink"
                                :twitter-handle="member.twitterHandle"
                                :linked-in-account="member.linkedInAccount"
                                :slack-account="member.slackAccount"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BoardMember from "../components/BoardMember";

export default {
    components: {
        BoardMember,
    },
    data: function () {
        return {
            members: [
                {
                    id: 1,
                    name: "Mark Bennett",
                    title: "President",
                    imageLink: require("~/assets/boardPictures/markBennet.jpg"),
                    description:
                        "When starting with Ruby on Rails in 2009, Mark joined an amazing meetup in Sydney, Australia. Once home, he saw the value of a meetup community to developers, and founded YEGrb, Edmonton’s Ruby Meetup. Over the years he has helped with Exchange.js, BarCamp, and others. These experiences led him to establish DES in 2016, so developers could have a place where they could succeed and grow together. <br /><br />Mark is passionate about the developer community, and its role in Edmonton. His hope is to see more developers succeeding in bigger challenges in the future.<br /><br /> When not busy with DES he’s herding bits with <a class='text-indigo-600' href='https://burmis.ca/'>Burmis Studio</a>, chasing after his kids, or out for a run. Say hi on Slack or Twitter!",
                    twitterHandle: "MarkBennett",
                    linkedInAccount: "",
                    slackAccount: "Mark",
                },
                {
                    id: 2,
                    name: "Ian Phillipchuck",
                    title: "Vice-President",
                    imageLink: require("~/assets/boardPictures/ianPhillipchuck.jpg"),
                    description:
                        "Ian Phillipchuk is a Team Lead and Senior Developer at <a class='text-indigo-600' href='https://punchcard.io/'>Punchcard</a>. Professionally, he does Software Consulting, Mobile and Web Development, as well as managing software teams and client projects.<br /><br /> At Dev Edmonton, he wants to grow the society to do more to help all the Devs in Edmonton, from providing resources for Meetups and Conferences for veteran developers, and helping new devs find their way and their first opportunities.<br /><br />Personally, he's probably getting fragged in Destiny 2 PVP for the bajillionth time, or building Lego with his kids.",
                    twitterHandle: "Protagorist",
                    linkedInAccount: "",
                    slackAccount: "Ian Phillipchuck",
                },
                {
                    id: 3,
                    name: "Lauren Briske",
                    title: "Treasurer",
                    imageLink: require("~/assets/boardPictures/laurenBriske.jpg"),
                    description:
                        "Lauren Briske is the Interim Director at <a class='text-indigo-600' href='https://startupedmonton.com/'>Startup Edmonton</a>. She is a passionate supporter of the startup and tech community and knows that a thriving tech ecosystem grows on the shoulders of a strong community.<br /><br />Through the Dev Edmonton Society, her goal is to empower local leaders to contribute to a growing community and to welcome more students, experienced developers, and aspiring developers into this great community.<br /><br />When she’s not working or volunteering, she’s probably riding down a mountain somewhere on skis or bikes.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/lauren-briske-03ba902b/",
                    slackAccount: "laurenbriske",
                },
                {
                    id: 4,
                    name: "Mandy Meindersma",
                    title: "Secretary",
                    imageLink: require("~/assets/boardPictures/mandyMeindersma.jpg"),
                    description:
                        "Mandy Meindersma is a Backend Developer at <a class='text-indigo-600' href='https://dotdash.com/'>Dotdash</a>. She loves web development, teaching kidlets about computing science and hardware (making robots, light up costumes and IoT type of things).<br /><br /> She has loved getting more involved with DES through YEGWIT (Edmonton Women In Tech), CODEVID-19 (COVID-19 Hackathon) and now being able to help with organization and memberships!<br /><br /> Outside of tech she absolutely loves acro yoga, her cat Goose, and writing letters.",
                    twitterHandle: "",
                    linkedInAccount: "",
                    slackAccount: "Mandy Meindersma",
                },
                {
                    id: 5,
                    name: "Abram Hindle",
                    title: "Member at large",
                    imageLink: require("~/assets/boardPictures/abramHindle.jpg"),
                    description:
                        "Abram Hindle is an associate professor of Computing Science at the University of Alberta. His research focuses on problems relating to mining software repositories, improving software engineering-oriented information retrieval with contextual information, the impact of software maintenance on software energy consumption, and how software engineering informs computer music.<br /><br /> He likes applying machine learning in music, art, and science. Sadly Abram has no taste in music and produces reprehensible sounding noise using his software development abilities.<br /><br /> Abram received a PhD in computer science from the University of Waterloo, and Masters and Bachelors in Computer Science from the University of Victoria. Contact him at abram.hindle@ualberta.ca <br /><a class='text-indigo-600' href='https://softwareprocess.es'>softwareprocess.es</a>",
                    twitterHandle: "",
                    linkedInAccount: "",
                    slackAccount: "Abram",
                },
                {
                    id: 6,
                    name: "Alyssa Diehl",
                    title: "Member at large",
                    imageLink: require("~/assets/boardPictures/alyssaDiehl.jpg"),
                    description:
                        "Alyssa has been working in the field of Career Development, Recruitment & HR for +7 years. She is interested in the tech & innovation industry here in Alberta and seeing a diverse labour market & workforce.<br /><br /> Her passion lies in assisting job seekers find their future career path and loves to connect with job seekers from any field and experience level.<br /><br />  Alyssa is always available to give assistance on market insights, resume review or LinkedIn tips! <br /><a class='text-indigo-600' href='https://manpowerab.com/development/'>Manpower</a>",
                    twitterHandle: "Lyss_diehl",
                    linkedInAccount: "https://ca.linkedin.com/in/alyssajdiehl",
                    slackAccount: "Alyssa Diehl",
                },
                {
                    id: 7,
                    name: "Celia Nicholls",
                    title: "Member at large",
                    imageLink: require("~/assets/boardPictures/celiaNicholls.jpg"),
                    description:
                        "Celia is in her final semester of Web Design and Development in the Digital Media and IT program at NAIT (although she sometimes feels as though she should have gone into pest control, she spends so much time debugging).<br /><br /> Her strengths include UX/UI and responsive design, front-end development and content creation. She is passionate about helping to increase student engagement with Dev Edmonton as a way to pay forward all the mentorship and help she’s received from devs in the community.<br /><br /> In her free time, she enjoys writing and drawing comics and dabbling in esoteric crafts like needlepoint and macramé.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/celia-nicholls/",
                    slackAccount: "Celia Nicholls",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
