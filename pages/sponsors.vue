<template>
    <div class="w-full h-full bg-grey-000">
        <Head>
            <Title>Dev Edmonton Society - Sponsors</Title>
            <Meta
                name="description"
                content="The wonderful companies that help us to continue our meetups, events and initiatives."
            />
        </Head>
        <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h1
                class="py-4 text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
            >
                Sponsors
            </h1>
            <h3
                class="py-2 text-3xl leading-9 tracking-tight font-bold text-gray-900 sm:text-2xl sm:leading-10"
            >
                Terabyte Tier
            </h3>
            <div class="cards-grid py-2">
                <SponsorCard>
                    <template #image>
                        <a href="https://getjobber.com">
                            <img
                                class="h-10"
                                src="/img/logos/jobber-logo.png"
                                alt="jobber"
                            />
                        </a>
                    </template>
                    <p class="text-lg text-grey-600">
                        Thanks to
                        <a
                            class="text-brand-primary underline"
                            href="https://getjobber.com"
                            >Jobber</a
                        >
                        for allowing us to have a space for meet ups for the
                        next year! Couldn't happen without them!
                    </p>
                </SponsorCard>

                <SponsorCard>
                    <template #image>
                        <a href="https://www.dotdashmeredith.com">
                            <img
                                class="h-10"
                                src="/img/logos/dotdash-meredith-logo.svg"
                                alt="dotdashmeredith"
                            />
                        </a>
                    </template>
                    <p class="text-lg text-grey-600">
                        Thanks to
                        <a
                            class="text-brand-primary underline"
                            href="https://www.dotdashmeredith.com"
                            >Dotdash Meredith</a
                        >
                        for providing us with pizza and swag to help our meetups
                        off the ground.
                    </p>
                </SponsorCard>
            </div>
            <h3
                class="py-2 text-3xl leading-9 tracking-tight font-bold text-gray-900 sm:text-2xl sm:leading-10"
            >
                Byte Tier
            </h3>
            <div class="cards-grid py-2">
                <SponsorCard>
                    <template #image>
                        <a href="https://place.com">
                            <img
                                class="h-10"
                                src="/img/logos/place-logo.png"
                                alt="place"
                            />
                        </a>
                    </template>
                    <p class="text-lg text-grey-600">
                        Thanks to
                        <a
                            class="text-brand-primary underline"
                            href="https://place.com"
                            >Place</a
                        >
                        for providing us with funding for events and providing
                        job shadow opportunities to our hackathon winners.
                    </p>
                </SponsorCard>
            </div>
            <h3
                class="py-2 text-3xl leading-9 tracking-tight font-bold text-gray-900 sm:text-2xl sm:leading-10"
            >
                Bit Tier
            </h3>
            <div class="cards-grid py-2">
                <SponsorCard>
                    <template #image>
                        <a href="https://tailwindcss.com">
                            <img
                                class="h-10"
                                src="/img/logos/tailwindcss-logo.svg"
                                alt="tailwindcss"
                            />
                        </a>
                    </template>
                    <p class="text-lg text-grey-600">
                        Thanks to
                        <a
                            class="text-brand-primary underline"
                            href="https://tailwindcss.com"
                            >Tailwind CSS</a
                        >
                        for providing a team account for
                        <a
                            class="text-brand-primary underline"
                            href="https://tailwindui.com"
                            >Tailwind UI</a
                        >
                        which we used to help develop this site.
                    </p>
                </SponsorCard>
                <SponsorCard>
                    <template #image>
                        <a href="https://1password.com/">
                            <img
                                class="h-10"
                                src="/img/logos/1P-wordmark.svg"
                                alt="1 Password"
                            />
                        </a>
                    </template>
                    <p class="text-lg text-grey-600">
                        Thanks to
                        <a
                            class="text-brand-primary underline"
                            href="https://1password.com/"
                            >1Password</a
                        >
                        for providing a team account for DES members to manage
                        our passwords.
                    </p>
                </SponsorCard>
                <SponsorCard>
                    <template #image>
                        <a href="https://shortcut.com/">
                            <img
                                class="h-10"
                                src="/img/logos/Shortcut_full_color.svg"
                                alt="shortcut"
                            />
                        </a>
                    </template>
                    <p class="text-lg text-grey-600">
                        Thanks to
                        <a
                            class="text-brand-primary underline"
                            href="https://shortcut.com/"
                            >Shortcut.</a
                        >
                        The project management platform we use to help organise
                        our team.
                    </p>
                </SponsorCard>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.cards-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
}
</style>
