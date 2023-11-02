<template>
    <div class="max-w-7xl mx-auto spx-6 px-6 lg:px-8 text-lg">
        <Head>
            <Title>Dev Edmonton Society - Board</Title>
            <Meta
                name="description"
                content="Listing all the current members of the Dev Edmonton Society board."
            />
        </Head>
        <h1
            class="py-4 text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
            Dev Edmonton Society Board
        </h1>
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
                        regarding the roles are posted on our
                        <NuxtLink
                            to="/board_recruiting"
                            class="text-brand-primary"
                            >board recruitment page.</NuxtLink
                        >
                    </p>
                    <p class="py-2">
                        Dev Edmonton Society desires to build a board with
                        diverse perspectives that reflect our community.
                    </p>
                    <p class="py-2">
                        A new board was elected at the society’s AGM on January
                        23<sup>rd</sup>
                        2021.
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
                            <SectionBoardMember
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
export default {
    data: function () {
        return {
            members: [
                {
                    id: 1,
                    name: "Lauren Briske",
                    title: "Treasurer",
                    imageLink: "BoardPictures/laurenBriske.jpg",
                    description:
                        "Lauren Briske is a Product Manager at <a class='text-indigo-600' href='https://www.aretolabs.com/'>Areto Labs</a>. She is a passionate supporter of the startup and tech community and knows that a thriving tech ecosystem grows on the shoulders of a strong community.<br /><br />Through the Dev Edmonton Society, her goal is to empower local leaders to contribute to a growing community and to welcome more students, experienced developers, and aspiring developers into this great community.<br /><br />When she’s not working or volunteering, she’s probably riding down a mountain somewhere on skis or bikes.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/lauren-briske-03ba902b/",
                    slackAccount: "laurenbriske",
                },
                {
                    id: 2,
                    name: "Mandy Meindersma",
                    title: "Vice President + Secretary",
                    imageLink: "BoardPictures/mandyMeindersma.jpg",
                    description:
                        "Mandy Meindersma is a Senior Backend Developer at <a class='text-indigo-600' href='https://www.dotdashmeredith.com/'>Dotdash Meredith</a>. She loves web development, teaching kidlets about computing science and hardware (making robots, light up costumes and IoT type of things).<br /><br /> She has loved getting more involved with DES through YEGWIT (Edmonton Women In Tech), CODEVID-19 (COVID-19 Hackathon) and now being able to help with organization and memberships!<br /><br /> Outside of tech she absolutely loves acro yoga, her cat Goose, and writing letters.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/mandy-meindersma/",
                    slackAccount: "Mandy Meindersma",
                },
                {
                    id: 3,
                    name: "Abram Hindle",
                    title: "Member At Large",
                    imageLink: "BoardPictures/abramHindle.jpg",
                    description:
                        "Abram Hindle is an associate professor of Computing Science at the University of Alberta. His research focuses on problems relating to mining software repositories, improving software engineering-oriented information retrieval with contextual information, the impact of software maintenance on software energy consumption, and how software engineering informs computer music.<br /><br /> He likes applying machine learning in music, art, and science. Sadly Abram has no taste in music and produces reprehensible sounding noise using his software development abilities.<br /><br /> Abram received a PhD in computer science from the University of Waterloo, and Masters and Bachelors in Computer Science from the University of Victoria. Contact him at abram.hindle@ualberta.ca <br /><a class='text-indigo-600' href='https://softwareprocess.es'>softwareprocess.es</a>",
                    twitterHandle: "",
                    linkedInAccount: "",
                    slackAccount: "Abram",
                },
                {
                    id: 4,
                    name: "Jeremy Nickurak",
                    title: "Member At Large",
                    imageLink: "BoardPictures/jeremyNickurak.jpeg",
                    description:
                        "Jeremy Nickurak is a Senior Project Manager and Site Reliability Expert for <a class='text-indigo-600' href='https://www.dotdashmeredith.com/'>Dotdash Meredith</a> focused on making the process of stuff going bad go better.<br /><br /> Jeremy loves staying connected virtually and in person with the growing Edmonton development and technology space, meeting new folks, and telling stories of years of technology going well and poorly.<br /><br />Jeremy is passionate about git, python, and outside of tech, loves playing the ukulele.",
                    twitterHandle: "",
                    linkedInAccount: "https://linkedin.com/in/nickurak",
                    slackAccount: "Jeremy",
                },
                {
                    id: 5,
                    name: "Celia Nicholls",
                    title: "Member At Large",
                    imageLink: "BoardPictures/celiaNicholls.jpg",
                    description:
                        "Celia has finished her Web Design and Development in the Digital Media and IT program at NAIT (although she sometimes feels as though she should have gone into pest control, she spends so much time debugging).<br /><br /> Her strengths include UX/UI and responsive design, front-end development and content creation. She is passionate about helping to increase student engagement with Dev Edmonton as a way to pay forward all the mentorship and help she’s received from devs in the community.<br /><br /> In her free time, she enjoys writing and drawing comics and dabbling in esoteric crafts like needlepoint and macramé.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/celia-nicholls/",
                    slackAccount: "Celia Nicholls",
                },
                {
                    id: 6,
                    name: "Salma Ibrahim",
                    title: "Member At Large",
                    imageLink: "BoardPictures/salmaIbrahim.jpg",
                    description:
                        "Salma Ibrahim is an aspiring junior software developer. She got her start in coding with <a class='text-indigo-600' href='https://www.lighthouselabs.ca/'>Lighthouse Labs</a> in the Full Stack Web Development Bootcamp in May of 2022. There she wrote here first lines of code and has loved learning ever since. Salma has recently gotten in involved with DES when she was looking for a way to connect to the developing community in Edmonton!<br /><br /> When she isn’t coding, Salma works at a non-profit called <a class='text-indigo-600' href='https://bgcbigs.ca/'>BGCBigs</a> at a local club enjoying time with the kiddos. Salma also likes watching films, baking, and most of all reading. Her favs include the Ember in the Ashes Quartet, The Book Thief, books by Ruta Sepetys, and her childhood favourite, Lemony Snicket",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/salma-ibrahim-a1275817a/",
                    slackAccount: "Salma Ibrahim",
                },
                {
                    id: 7,
                    name: "Justice Hemming",
                    title: "Member At Large",
                    imageLink: "BoardPictures/justiceHemming.jpg",
                    description:
                        "Justice Hemming is an emerging Junior Web Developer, completed his Web Design and Development degree at NAIT in 2023. He has been active in the community by running events for the Junior Devs group, and looks to continue to help build a community that everyone feels welcome in by getting involved with DES.<br /><br />When it comes to building websites, Justice is more of a jack of all trades focusing on both Front End and Back End development, he loves the aspect of how coding is ever changing with there always being more to learn.<br /><br />When Justice isn’t coding you will still find Justice probably not far from the computer, gaming with friends, or taking on his passion for cooking and baking. His favorite thing to bake is mini cherry cheesecake.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/justice-hemming-ab459559/",
                    slackAccount: "Justice Hemming",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
