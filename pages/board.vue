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
                        27<sup>th</sup>
                        2024.
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
                                :pronouns="member.pronouns"
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
                    name: "Mandy Meindersma",
                    pronouns: "She/Her",
                    title: "President",
                    imageLink: "BoardPictures/mandyMeindersma.jpg",
                    description:
                        "Mandy Meindersma is a Senior Backend Developer at <a class='text-indigo-600' href='https://www.dotdashmeredith.com/'>Dotdash Meredith</a>. She loves web development, teaching kidlets about computing science and hardware (making robots, light up costumes and IoT type of things).<br /><br /> She has loved getting more involved with DES through YEGWIT (Edmonton Women In Tech), CODEVID-19 (COVID-19 Hackathon) and now being able to help with organization and memberships!<br /><br /> Outside of tech she absolutely loves acro yoga, her cat Goose, and writing letters.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/mandy-meindersma/",
                    slackAccount: "Mandy Meindersma",
                },
                {
                    id: 2,
                    name: "Leslie Tshuma",
                    pronouns: "He/Him",
                    title: "Vice President",
                    imageLink: "BoardPictures/LeslieTshuma.jpg",
                    description:
                        "Leslie is a Mobility Services Analyst II at <a class='text-indigo-600' href='https://www.albertahealthservices.ca/'>Alberta Health Services</a>. He is passionate about community and loves welcoming folks to the Dev Edmonton Society Slack.<br /><br /> He has a fascination for DevOps and has a couple of HP Servers in his home lab. He also runs a new-ish YouTube channel.<br /><br />In his personal time, he enjoys outdoor activities such as walking, hiking, cycling, and going on day trips and excursions with his family. Music plays a significant role in his life, both in singing and listening.",
                    twitterHandle: "",
                    linkedInAccount:
                        "https://www.linkedin.com/in/leslietshuma/",
                    slackAccount: "Leslie Tshuma",
                },

                {
                    id: 3,
                    name: "Abram Hindle",
                    pronouns: "He/Him",
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
                    pronouns: "He/Him",
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
                    name: "Salma Ibrahim",
                    pronouns: "She/Her",
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
                    id: 6,
                    name: "Justice Hemming",
                    pronouns: "He/Him",
                    title: "Treasurer",
                    imageLink: "BoardPictures/justiceHemming.jpg",
                    description:
                        "Justice Hemming is a Junior Web Developer, who completed his Web Design and Development degree at NAIT in 2023. He has been active in the community by running events for the Junior Devs group, and looks to continue to help build a community that everyone feels welcome in by getting involved with DES.<br /><br />When Justice isn’t coding you will still probably find Justice not far from the computer, gaming with friends, or taking on his passion for cooking and baking. His favorite thing to bake is mini cherry cheesecake.",
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
