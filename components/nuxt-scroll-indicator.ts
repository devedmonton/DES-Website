import { defineComponent, h, onBeforeUnmount, ref } from 'vue'
import { useNuxtApp } from '#app'

export default defineComponent({
  name: 'NuxtScrollIndicator',
  props: {
    height: {
      type: Number,
      default: 3,
    },
    color: {
      type: String,
      default: 'linear-gradient(to right, #00dc82 0%,#34cdfe 50%,#0047e1 100%)',
      required: false,
    },
    background: {
      type: String,
      default: 'transparent',
    },
    shadow: {
      type: String,
      default: 'none',
    },
    borderRadius: {
      type: Number,
      default: 0,
    },
    elementId: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const indicator = useScrollIndicator(props.elementId)

    const nuxtApp = useNuxtApp()
    nuxtApp.hook('app:mounted', indicator.init)
    onBeforeUnmount(() => indicator.clear())

    return () =>
      h(
        'div',
        {
          class: 'nuxt-scroll-indicator-wrapper',
          style: {
            position: 'absolute',
            zIndex: 999998,
            right: 0,
            left: 0,
            bottom: '-1px',
            pointerEvents: 'none',
            height: `${props.height}px`,
            background: props.background,
          },
        },
        [
          h(
            'div',
            {
              class: 'nuxt-scroll-indicator',
              style: {
                height: '100%',
                background: props.color,
                boxShadow: props.shadow,
                borderRadius: `0 ${props.borderRadius}px ${props.borderRadius}px 0`,
                width: `${indicator.width.value}%`,
              },
            },
            slots,
          ),
        ],
      )
  },
})

function useScrollIndicator(element?: string) {
  const width = ref<number>(0)
  const content = ref<number>(0)

  function onScroll() {
    const { documentElement, body } = document
    const windowScroll
      = documentElement.scrollTop - content.value || body.scrollTop
    const height
      = documentElement.scrollHeight
        - (documentElement.clientHeight + content.value)
    if (windowScroll > 0)
      width.value = (windowScroll / height) * 100

    else
      width.value = 0
  }

  function init() {
    if (element !== undefined) {
      const elementTarget = document.getElementById(element)
      const TargetTop = elementTarget?.offsetTop || 0

      // TODO: Add breakpoints for mobile
      content.value = TargetTop
    }
    window.addEventListener('scroll', onScroll)
  }

  function clear() {
    window.removeEventListener('scroll', onScroll)
  }

  return {
    width,
    init,
    clear,
  }
}
