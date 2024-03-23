<!--
name: slug
description: this a page for dynamic content, in Nuxt we can use dynamic routes to create pages that match a pattern.
  this page will match any pattern as it has `...` in it. This is a catch-all routes and it used for `@nuxt/content`
-->

<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

const minHeight = computed(() => {
  // TODO: fix dehydration issue
  // const footerHeight = document?.querySelector('footer')?.clientHeight ?? 0
  return `calc(100vh - ${125 * 2}px)`
},
)

if (page.value) {
  const title = page.value?.title ?? 'Dev Edmonton Society'
  const description = page.value.data?.description ?? 'A community of developers in Edmonton.'
  useSeoMeta({
    title,
    description,
  })
  
  defineOgImage({
    component: 'AppOgImageFrame',
    icon: page.value.data?.icon ?? 'i-ph-terminal',
  })
}
</script>

<template>
  <main
    class="md-content mt-12 max-w-7xl mx-auto px-8"
    :style="{ minHeight }"
  >
    <ContentRenderer
      v-if="page"
      :value="page"
    >
      <ContentRendererMarkdown :value="page" />
      <template #empty>
        <p>
          No content found.
        </p>
      </template>
    </ContentRenderer>
    <div v-else>
      404
    </div>
  </main>
</template>
