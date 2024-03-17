<script setup lang="ts">
import { SLACK_JOIN_LINK } from "~/constants"
</script>

<template>
    <div>
        <div class="relative bg-white pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8">
            <a id="about-our-slack" href="/#about-our-slack" class="anchor"></a>
            <div class="absolute inset-0">
                <div class="h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h1
                        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        About Our Slack
                    </h1>
                </div>
                <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
                    <div id="slack-message-block" class="flex flex-col justify-around px-8">
                        <h2 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            Welcome Friend!
                        </h2>
                        <p class="text-gray-500">
                            We have a Slack workspace to connect people who are
                            involved with the Edmonton (YEG) tech scene. The
                            people here range from being developers, designers,
                            PM's, students, hobbists and more who love to talk
                            about code. We also do events and network across
                            Alberta.
                        </p>
                        <p class="text-gray-500">
                            There are several channels that you can check out on
                            the card. They range from being about a specific
                            meetup, tech news, tech help, finding new
                            opportunities, casual chatting and more. We have 80+
                            other channels! If there's any channels we're
                            missing all members are free to create any they
                            want. If they're inactive for a few months, then
                            they'll be deleted. Connect with other members of
                            the community by joining the workspace.
                        </p>

                        <p class="text-gray-500">
                            By joining the Slack you agree to abide by our
                            <a class="text-brand-primary" href="/code_of_conduct/">Code of Conduct</a>. Looking forward
                            to chatting!
                        </p>
                    </div>

                    <div>
                        <div class="flex flex-col justify-between p-6">
                            <div class="mt-10 -mx-4 relative lg:mt-0">
                                <div class="slack-content relative p-4 text-center">
                                    <p class="text-xl text-brand-primary">
                                        <a :href="SLACK_JOIN_LINK">
                                            Join our community on Slack
                                        </a>
                                    </p>
                                    <img class="w-64 m-auto" src="/img/logos/Slack_RGB.svg" alt="slack logo" />
                                    <a :href="SLACK_JOIN_LINK">
                                        <AppButton appearance="inverted">Join the Slack</AppButton>
                                    </a>

                                    <p class="text-gray-500 italic font-bold p-4">
                                        If you get an "invalid link" error our
                                        Slack invite link has expired. Please
                                        email
                                        <a
href="mailto:board@devedmonton.com?subject=Your Slack Invite link is broken!&body=Heads up that someone needs to contact Slack support for a fresh one. ~ A friendly DES member."
                                            class="text-brand-primary">board@devedmonton.com</a>
                                        and let us know!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between p-6 rounded-lg shadow-md overflow-hidden">
                            <h2 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Channels to Checkout
                            </h2>
                            <ul class="text-l p-6 text-gray-500 list-disc">
                                <li>
                                    <span class="slack-channel-text">#introductions</span>
                                    to say "Hi"
                                </li>
                                <li>
                                    Several
                                    <span class="slack-channel-text">#meetup</span>
                                    specific channels listed in the home page
                                    languages or tech stacks you're interested
                                    in
                                </li>
                                <li>
                                    <span class="slack-channel-text">#random</span>
                                    for casual conversations
                                </li>
                                <li>
                                    <span class="slack-channel-text">#dev-talk</span>
                                    and
                                    <span class="slack-channel-text">#dev-help</span>
                                    for more tech focused conversations
                                </li>
                                <li>
                                    <span class="slack-channel-text">#opportunities</span>
                                    where people can post and look for jobs,
                                    internships, volunteer positions or more
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#slack-message-block {
    border-left: 5px solid;
    border-image: linear-gradient(to top,
            #36c5f0 25%,
            #2eb67d 50%,
            #ecb22e 75%,
            #e01e5a 100%) 5;
}

.slack-channel-text {
    background-color: #fafafa;
    color: black;
}
</style>
