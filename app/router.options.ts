import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()

    // If history back
    if (savedPosition) {
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce('page:finish', () => {
          setTimeout(() => resolve(savedPosition), 0)
        })
      })
    }

    // Scroll to heading on click
    if (to.hash) {
      setTimeout(() => {
        let heading = document.querySelector(`[id="${to.hash.replace('#', '')}"]`) as HTMLElement

        if (!heading)
          heading = document.querySelector(`[href$="${to.hash}"]`) as HTMLElement

        if (!heading)
          return

        return window.scrollTo({
          // TODO: get header's height
          top: heading.offsetTop - 97,
          behavior: 'smooth',
        })
      })
      return
    }

    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce('page:finish', () => {
        resolve({
          top: 0,
          behavior: 'smooth',
        })
      })
    })
  },
}
