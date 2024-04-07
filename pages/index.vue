<script setup lang="ts">
const sections = [
  {
    name: 'Meetups We Support',
    to: 'meetups',
    items: randomize(meetups, 5)
  },
  {
    name: 'Community Events',
    to: 'events',
    items: randomize(events, 5)
  },
  {
    name: 'Resources',
    to: 'resources',
    items: randomize(resources, 5)
  }
];

const title = 'Dev Edmonton Society';
const description =
  'Fostering a stronger software development community in Edmonton. We are made up of people who believe that an impactful, diverse, and collaborative developer community enriches us all. We realize this vision by sharing knowledge and ideas, understanding the community and its needs, promoting events and initiatives, and supporting technology meetups and organizations.';

useServerSeoMeta({
  title,
  description,
  titleTemplate: ''
});

defineOgImage({
  component: 'AppOgImageFrame',
  icon: 'i-ph-terminal'
});
</script>

<template>
  <main>
    <section class="relative lg:p-10 p-4 h-screen mb-20">
      <AppBackground />
      <div
        class="flex flex-col gap-4 items-center h-full justify-center max-w-6xl mx-auto text-center"
      >
        <span class="text-lg font-medium"> Dev Edmonton Society </span>
        <h1 class="md:text-6xl text-5xl font-bold">
          Fostering a stronger software <br >
          development community in Edmonton.
        </h1>
        <p class="mt-6 max-w-4xl">
          We are made up of people who believe that an impactful, diverse, and collaborative
          developer community enriches us all. We realize this vision by sharing knowledge and
          ideas, understanding the community and its needs, promoting events and initiatives, and
          supporting technology meetups and organizations.
        </p>
        <div class="flex gap-4 mt-4">
          <AppButton
            title="About our Slack"
            to="/#about-our-slack"
            class="bg-primary px-5 py-2.5 text-white rounded-full flex gap-2 items-center hover:border-primary hover:text-primary hover:bg-transparent"
          >
            <Icon class="w-5 h-5" name="i-simple-icons-slack" />
            About our Slack
          </AppButton>
          <AppButton
            title="Learn more about what we do"
            to="/#what-we-do"
            class="border border-neutral-800 dark:border-neutral-400/40 hover:bg-gray-100 dark:hover:bg-neutral-950 px-5 py-2.5 rounded-full flex gap-2 items-center"
          >
            Learn More
            <Icon class="w-5 h-5" name="i-ph-arrow-right" />
          </AppButton>
        </div>
      </div>
      <AppSponsorCarousel />
    </section>

    <section id="what-we-do">
      <div class="py-20 px-8 rounded-xl max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8">What We Do</h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
          <AppCardVertical
            v-for="service of services.slice(0, 3)"
            :key="service.name"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <section id="about-our-slack" class="relative min-h-screen">
      <div class="py-10 lg:px-32 px-8">
        <h2 class="text-center text-4xl font-bold pb-24">About Our Slack</h2>
        <div class="grid lg:grid-cols-8 lg:gap-28 grid-cols-1 gap-4">
          <div class="relative col-span-3">
            <div
              class="absolute -left-10 top-0 w-1 bottom-0"
              style="
                background: linear-gradient(0deg, #36c5f0 25%, #2eb67d 50%, #ecb22e 75%, #e01e5a);
              "
            />
            <h2 class="mb-4 text-xl font-medium">Welcome Friend!</h2>
            <p class="text-start">
              We have a Slack workspace to connect people who are involved with the Edmonton (YEG)
              tech scene. The people here range from being developers, designers, PM's, students,
              hobbists and more who love to talk about code. We also do events and network across
              Alberta.
              <br ><br >
              There are several channels that you can check out on the card. They range from being
              about a specific meetup, tech news, tech help, finding new opportunities, casual
              chatting and more. We have 80+ other channels! If there's any channels we're missing
              all members are free to create any they want. If they're inactive for a few months,
              then they'll be deleted. Connect with other members of the community by joining the
              workspace.
              <br ><br >
              By joining the Slack you agree to abide by our
              <NuxtLink to="/code_of_conduct" class="text-primary"> Code of Conduct. </NuxtLink>
              Looking forward to chatting!
            </p>
            <div class="mt-12">
              <AppButton
                :to="SLACK_URL"
                class="bg-primary hover:bg-secondary dark:hover:bg-secondary text-white px-4 py-1 rounded-lg flex items-center justify-center gap-2 w-full max-w-xs mx-auto"
              >
                <Icon class="w-4 h-4" name="i-simple-icons-slack" />
                Join our community on Slack
              </AppButton>

              <div
                class="text-xs bg-red-400/20 p-2 rounded-lg flex items-center gap-4 max-w-lg mt-4"
              >
                <Icon class="w-4 h-4" name="i-ph-info" />
                <span>
                  If you get an "invalid link" error our Slack invite link has expired. Please email
                  <NuxtLink to="mailto:board@devedmonton.com" class="underline">
                    board@devedmonton.com
                  </NuxtLink>
                  and let us know!
                </span>
              </div>
            </div>
          </div>
          <LazyAppSlack class="col-span-5" />
        </div>
      </div>
    </section>

    <section id="get-involved">
      <div class="py-10 px-8 rounded-xl max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8">Get Involved</h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
          <AppCardVertical
            v-for="service of services.slice(3, 6)"
            :key="service.name"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <LazyAppSection v-for="group of sections" :key="group.name" :group="group" />

    <LazyAppNewsletter />
  </main>
</template>
