<script setup lang="ts">
const props = defineProps<{
    name: string
    pronouns?: string
    title: string
    image: string
    socials?: {
        twitter?: string
        linkedin?: string
        github?: string
        slack?: string
    }
}>()


const socialIcons = {
    twitter: {
        icon: 'i-logos-twitter',
    },
    linkedin: {
        icon: 'i-logos-linkedin-icon',
    },
    github: {
        icon: 'i-logos-github-icon',
    },
    slack: {
        icon: 'i-logos-slack-icon',
    }
}

const socialLinks = computed(() => {
    return Object.entries(props.socials || {}).map(([key, value]) => {
        return {
            title: key,
            icon: socialIcons[key].icon,
            to: value.startsWith('@') ? undefined : value,
            link: value.startsWith('@') ? value : undefined,
        }
    })
})
</script>

<template>
    <div class="py-4 md:py-0">
        <div class="md:grid md:grid-cols-3 lg:gap-8 sm:pb-2">
            <div class="md:col-span-3 lg:col-span-1">
                <NuxtImg v-if="image"
                    class="w-full max-w-sm object-cover object-top shadow-lg rounded-lg md:h-80 lg:h-60" :src="image"
                    alt="Photo of board member smiling" width="400" />
            </div>

            <div class="relative md:col-span-3 lg:col-span-2 lg:mt-0 mt-4">
                <div class="space-y-1">
                    <div class="text-lg font-medium">
                        <h3 class="inline pr-1.5">{{ name }}</h3>
                        <span class="text-xs pt-0.5 text-gray-500 inline">
                            {{ pronouns }}
                        </span>

                        <div class="text-indigo-600">
                            {{ title }}
                        </div>

                        <div v-if="socialLinks" class="flex gap-4 absolute md:right-4 right-14 top-2">
                            <NuxtLink v-for="social in socialLinks" :key="social.link" :to="social.to"
                                :title="social.link" class="group relative flex pb-1 grayscale hover:grayscale-0">
                                <Icon :name="social.icon" />
                                <!-- TODO: replace with floating component -->
                                <p v-if="social.link"
                                    class="absolute -top-10 left-1/2 transform  -translate-x-1/2 text-xs z-50 bg-brand-primary text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    {{ social.link }}
                                </p>
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="text-medium text-gray-500">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
