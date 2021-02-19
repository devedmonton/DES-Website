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

            <!-- <p class="py-2">
                    A new board was elected at the society’s AGM on January
                    23<sup>rd</sup>
                    2021. The following members were elected to the board.
                </p>
                <ul class="list-disc">
                    <li>Abram Hindle</li>
                    <li>Alyssa Diehl</li>
                    <li>Celia Nicholls</li>
                    <li>Ian Phillipchuk</li>
                    <li>Lauren Briske</li>
                    <li>Mandy Meindersma</li>
                    <li>Mark Bennett</li>
                </ul>
                <p class="pt-2">
                    The positions to be filled by each new board member will be
                    confirmed at a later date.
                </p>
            </li> -->
        </ol>

        <div>
            <div>
                <h2 class="text-xl py-2 font-bold border-b border-lightgrey">
                    Current Board
                </h2>
            </div>
            <div class="bg-white">
                <div
                    class="mx-auto py-10 px-4 max-w-7xl sm:px-4 lg:px-6 lg:py-8"
                >
                    <div class="space-y-4">
                        <ul
                            class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
                        >
                            <BoardMember
                                v-for="member in members"
                                :key="member.id"
                                :name="member.name"
                                :title="member.title"
                                :description="member.description"
                                :image-link="member.imageLink"
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
                    name: "Mark Bennet",
                    title: "President",
                    description:
                        "When starting with Ruby on Rails in 2009, Mark joined an amazing meetup in Sydney, Australia. Once home, he saw the value of a meetup community to developers, and founded YEGrb, Edmonton’s Ruby Meetup. Over the years he has helped with Exchange.js, BarCamp, and others. These experiences led him to establish DES in 2016, so developers could have a place where they could succeed and grow together. Mark is passionate about the developer community, and its role in Edmonton. His hope is to see more developers succeeding in bigger challenges in the future. When not busy with DES he’s herding bits with Burmis Studio, chasing after his kids, or out for a run. Say hi on Slack or Twitter!",
                },
                {
                    id: 2,
                    name: "Ian Phillipchuck",
                    title: "Vice-President",
                    imageLink: "~/assets/boardPictures/IanPhillipchuck.jpg",
                    description:
                        "Ian Phillipchuk is a Team Lead and Senior Developer at Punchcard Systems. Professionally, he does Software Consulting, Mobile and Web Development, as well as managing software teams and client projects. At Dev Edmonton, he wants to grow the society to do more to help all the Devs in Edmonton, from providing resources for Meetups and Conferences for veteran developers, and helping new devs find their way and their first opportunities. Personally, he's probably getting fragged in Destiny 2 PVP for the bajillionth time, or building Lego with his kids.",
                },
                {
                    id: 3,
                    name: "Lauren Briske",
                    title: "Treasurer",
                    description:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem error praesentium repudiandae labore dolores veritatis deleniti laudantium eos, nemo debitis, odit voluptates rerum sapiente quidem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem error praesentium repudiandae labore dolores veritatis deleniti laudantium eos, nemo debitis, odit voluptates rerum sapiente quidem?",
                },
                {
                    id: 4,
                    name: "Mandy Meindersma",
                    title: "Secretary",
                    imageLink: "~/assets/boardPictures/mandy Meindersma.jpg",
                    description:
                        "Mandy Meindersma is a Backend Developer at Dotdash. She loves web development, teaching kidlets about computing science and hardware (making robots, light up costumes and IoT type of things). She has loved getting more involved with DES through YEGWIT (Edmonton Women In Tech), CODEVID-19 (COVID-19 Hackathon) and now being able to help with organization and memberships! Outside of tech she absolutely loves acro yoga, her cat Goose, and writing letters.",
                },
                {
                    id: 5,
                    name: "Abram Hindle",
                    title: "Member at large",
                    description:
                        "Abram Hindle is an associate professor of Computing Science at the University of Alberta. His research focuses on problems relating to mining software repositories, improving software engineering-oriented information retrieval with contextual information, the impact of software maintenance on software energy consumption, and how software engineering informs computer music. He likes applying machine learning in music, art, and science. Sadly Abram has no taste in music and produces reprehensible sounding noise using his software development abilities. Abram received a PhD in computer science from the University of Waterloo, and Masters and Bachelors in Computer Science from the University of Victoria. Contact him at abram.hindle@ualberta.ca",
                },
                {
                    id: 6,
                    name: "Alyssa Diehl",
                    title: "Member at large",
                    imageLink: "~/assets/boardPictures/alyssaDiehl.jpg",
                    description:
                        "Alyssa has been working in the field of Career Development, Recruitment & HR for +7 years. She is interested in the tech & innovation industry here in Alberta and seeing a diverse labour market & workforce. Her passion lies in assisting job seekers find their future career path and loves to connect with job seekers from any field and experience level.  Alyssa is always available to give assistance on market insights, resume review or LinkedIn tips! ",
                },
                {
                    id: 7,
                    name: "Celia Nicholls",
                    title: "Member at large",
                    description:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem error praesentium repudiandae labore dolores veritatis deleniti laudantium eos, nemo debitis, odit voluptates rerum sapiente quidem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem error praesentium repudiandae labore dolores veritatis deleniti laudantium eos, nemo debitis, odit voluptates rerum sapiente quidem?",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
