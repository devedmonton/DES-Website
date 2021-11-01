<template>
    <div>
        <div
            id="student-resources"
            class="relative bg-grey-000 pt-8 -mt-8 pb-16 px-4 sm:px-6 lg:pt-12 lg:px-8"
        >
            <div class="absolute inset-0">
                <div class="h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h2
                        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                    >
                        Student Resources
                    </h2>
                </div>
                <div
                    class="mt-8 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
                >
                    <MeetupCard
                        :name="startupEdmonton.name"
                        :logo="startupEdmonton.logo"
                        :link-to="startupEdmonton.linkTo"
                        :event-type="startupEdmonton.eventType"
                    >
                        <span>
                            Startup Edmonton is an organization that helps the
                            startup community in Edmonton. The organization runs
                            working session days, hackathons, meetups, and other
                            tech related events. Attendees from all skill ranges
                            and backgrounds are encouraged to attend. Startup
                            Edmonton also runs student specific events like
                            Devcon to help network industry partners with the
                            con attendees.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="polyglotYEG.name"
                        :logo="polyglotYEG.logo"
                        :link-to="polyglotYEG.linkTo"
                        :event-type="polyglotYEG.eventType"
                    >
                        <span>
                            PolyglotYEG is a programming agnostic unconference
                            style event, held by the members of the Edmonton Dev
                            community. Topics are voted by the attendees the day
                            of and range from covering dives into the latest
                            tech stack, time management skills, how to handle
                            imposter syndrome, and other people focused skills.
                        </span>
                    </MeetupCard>
                    <MeetupCard
                        :name="hackEd.name"
                        :logo="hackEd.logo"
                        :link-to="hackEd.linkTo"
                        :event-type="hackEd.eventType"
                    >
                        <span
                            >Startup Edmonton is an organization that helps the
                            startup community in Edmonton. The organization runs
                            working session days, hackathons, meetups, and other
                            tech related events. Attendees from all skill ranges
                            and backgrounds are encouraged to attend. Startup
                            Edmonton also runs student specific events like
                            Devcon to help network industry partners with the
                            con attendees.
                        </span>
                    </MeetupCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            startupEdmonton: {
                name: "Startup Edmonton",
                logo: require("../assets/logos/startup-edmonton.png"),
                linkTo: "https://www.startupedmonton.com",
                eventType: "Community, Events, Hackathon",
            },
            polyglotYEG: {
                name: "PolyglotYEG",
                logo: require("../assets/logos/polyyeg.jpg"),
                linkTo: "https://polyglotyeg.com/",
                eventType: "Events",
            },
            hackEd: {
                name: "HackEd",
                logo: require("../assets/logos/hacked.png"),
                linkTo: "https://hacked.compeclub.com/",
                eventType: "Events, Hackathon",
            },
        };
    },
};
</script>

<style></style>
