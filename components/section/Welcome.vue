<template>
    <div class="relative mx-4 sm:mx-12 pb-8 lg:my-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
            <h3 class="text-3xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Dev Edmonton Society
            </h3>
            <h4 class="text-lg leading-8 font-bold text-gray-900 tracking-tight sm:text-lg sm:leading-9">
                Fostering a stronger software development community in
                Edmonton.
            </h4>
            <p class="mt-3 text-lg leading-7 text-gray-500">
                We are made up of people who believe that an impactful,
                diverse, and collaborative developer community enriches
                us all. We realize this vision by sharing knowledge and
                ideas, understanding the community and its needs,
                promoting events and initiatives, and supporting
                technology meetups and organizations.
            </p>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0">
            <div class="slack-content relative p-4 text-center">
                <NuxtLink to="#about-our-slack" class="text-xl text-brand-primary">
                    Learn more about our Slack!
                    <img class="w-64 m-auto" src="/img/logos/Slack_RGB.svg" alt="slack logo" />
                </NuxtLink>
                <a href="#about-our-slack">
                    <AppButton appearance="inverted">About Our Slack</AppButton>
                </a>
            </div>
        </div>
    </div>
</template>
