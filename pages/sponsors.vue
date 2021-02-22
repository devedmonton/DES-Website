<template>
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold py-4">Sponsors</h1>
        <div class="cards-grid">
            <SponsorCard>
                <template #image>
                    <a href="https://tailwindcss.com">
                        <img
                            class="h-10"
                            src="~/assets/logos/tailwindcss-logo.svg"
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
                            src="~/assets/logos/1P-logo-word.png"
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
                    for providing a team account for DES members to manage our
                    passwords.
                </p>
            </SponsorCard>
        </div>
    </div>
</template>

<script>
import SponsorCard from "../components/SponsorCard";
export default {
    components: {
        SponsorCard,
    },
};
</script>

<style>
.cards-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
}
</style>
