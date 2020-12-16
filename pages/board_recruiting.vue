<template>
    <div class="max-w-7xl mx-auto spx-6 px-6 lg:px-8">
        <h1 class="text-2xl font-bold py-4">Board Recruiting</h1>
        <div class="flex justify-center mt-4">
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdDInY8Qr0IYbZtLwE1pApZPSihh3J-mteO0DsjabH6PUAgQA/viewform"
            >
                <v-Button appearance="inverted">Apply Now</v-Button>
            </a>
        </div>
        <ol>
            <li>
                <h2 class="text-xl font-bold py-2 border-b border-lightgrey">
                    Board Compostion
                </h2>
                <p class="py-2">
                    The Dev Edmonton Board consists of 7 members filling three
                    year terms. Every year at the annual meeting elctions will
                    be held for any open positions. Dev Edmonton Society is
                    desires to build a board with a diversity of perspectives
                    that reflect our community.
                </p>
                <div class="py-2">
                    <span><strong>Roles</strong></span>
                    <ul class="list-disc">
                        <li>President</li>
                        <li>Secretary</li>
                        <li>Treasurer</li>
                        <li>Member at large</li>
                    </ul>
                </div>
            </li>
            <li>
                <h2 class="text-xl font-bold py-2 border-b border-lightgrey">
                    Why Join the Board?
                </h2>
                <p class="py-2">
                    There are many great reasons to join the Dev Edmonton
                    Society Board, including but not limited to:
                </p>
                <ul class="list-disc">
                    <li>Giving back to the community</li>
                    <li>Board Experience</li>
                    <li>Fellowship</li>
                    <li>Networking</li>
                    <li>Having an impact</li>
                </ul>
            </li>
            <li>
                <h2 class="text-xl font-bold py-2 border-b border-lightgrey">
                    Key Compentencies
                </h2>
                <p class="py-2">
                    DES is looking to build a board that, as a collective body,
                    excercises essential competencies. We have identified the
                    following compentencies that the board needs to possess.
                </p>
                <p class="py-2">
                    <em>Visonary</em>: strong belief in our Mission: “Dev
                    Edmonton Society is made up of people who believe that an
                    impactful, diverse, and collaborative developer community
                    enriches us all. We realize this vision by sharing knowledge
                    and ideas, understanding the community and its needs,
                    promoting events and initiatives, and supporting technology
                    meetups and organizations.”
                </p>
                <p class="py-2">
                    <em>Connector</em>: ability to identify and develop
                    relationships to support our society.
                </p>
                <p class="py-2">
                    <em>Accountability</em>: To accept responsibility for
                    actions, decisions and policies and to transparently report
                    back to the members of our society as well as knowing our
                    bylaws and procedures.
                </p>
            </li>
            <li>
                <h2 class="text-xl font-bold py-2 border-b border-lightgrey">
                    Responsibilities
                </h2>
                <h3>Board Members</h3>
                <div class="py-2">
                    <ul class="list-disc">
                        <li>Understand the society’s mission and values</li>
                        <li>
                            Act as advocates and ambassadors for the society and
                            be active participants in advancing the society’s
                            mission
                        </li>
                        <li>
                            Prepare for, attend and participate in board
                            meetings
                        </li>
                        <li>Participate in one or more committees</li>
                        <li>3 Year commitment</li>
                    </ul>
                </div>
                <h3 class="text-lg font-bold py-1 border-b border-lightgrey">President</h3>
                <div class="py-2">
                    <ul class="list-disc">
                        <li>Member of the Board</li>
                        <li>Serves as the Chief Volunteer of Dev Edmonton</li>
                        <li>Provides leadership to the board</li>
                        <li>
                            Chairs board meetings and is responsible for setting
                            the agenda
                        </li>
                        <li>
                            Monitors financial planning and financial reports
                        </li>
                        <li>
                            Evaluates the performance of the society in
                            achieving its mission
                        </li>
                        <li>Steer the strategic and organizational planning</li>
                    </ul>
                </div>
                <h3 class="text-lg font-bold py-1 border-b border-lightgrey">Secretary</h3>
                <div class="py-2">
                    <ul class="list-disc">
                        <li>Member of the board</li>
                        <li>Maintains records of the board</li>
                        <li>Takes minutes of board meetings</li>
                        <li>
                            Ensure that the minutes are distributed to members
                            after meetings
                        </li>
                        <li>
                            Is familiar with the society’s by-laws and raise
                            applicable by-laws when appropriate
                        </li>
                    </ul>
                </div>
                <h3 class="text-lg font-bold py-1 border-b border-lightgrey">Treasurer</h3>
                <div class="py-2">
                    <ul class="list-disc">
                        <li>Member of the board</li>
                        <li>Manages finances of the organization</li>
                        <li>Financial background</li>
                        <li>Balances the bank accounts</li>
                        <li>
                            Yearly financial statement submitted to the board
                            for approval
                        </li>
                    </ul>
                </div>
                <h3 class="text-lg font-bold py-1 border-b border-lightgrey">Community Director</h3>
                <div class="py-2">
                    <ul class="list-disc">
                        <li>Member of the board</li>
                        <li>Coordinates community and student outreach activities</li>
                        <li>Manages DES social media accounts</li>
                        <li>Provides marketing copy and resources for DES community to share</li>
                    </ul>
                </div>
            </li>
            <li>
                <h2 class="text-xl font-bold py-2 border-b border-lightgrey">
                    Apply Today!
                </h2>
                <p class="py-2">
                    If you are interested in joining the board please let us
                    know by filling out this form, and don't forget to stop by
                    the dev edmonton slack channel and say hi!
                </p>
                <div class="flex justify-center mt-4">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdDInY8Qr0IYbZtLwE1pApZPSihh3J-mteO0DsjabH6PUAgQA/viewform"
                    >
                        <v-Button appearance="inverted">Apply Now</v-Button>
                    </a>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
import VButton from "~/components/VButton.vue";

export default {
    components: {
        VButton,
    },
};
</script>

<style lang="scss" scoped></style>
