import { useCookie } from '#imports'

export default function useAnimation() {
  const hasAnimation = useCookie<boolean>('hasAnimation', {
    default: () => true,
    watch: true,
    maxAge: 60 * 60 * 24 * 365,
  })

  function toggleAnimation() {
    hasAnimation.value = !hasAnimation.value
    console.log('Animation enabled:', hasAnimation.value)
  }

  return {
    hasAnimation,
    toggleAnimation,
  }
}
