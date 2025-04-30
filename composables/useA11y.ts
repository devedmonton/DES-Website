export default function useA11y() {
  const hasAnimation = useCookie<boolean>('hasAnimation', {
    default: () => true,
    watch: true,
    // "hasAnimation" cookie that persists for 1 year
    maxAge: 60 * 60 * 24 * 365,
  })

  function toggleAnimation() {
    hasAnimation.value = !hasAnimation.value
  }

  return {
    hasAnimation,
    toggleAnimation,
  }
}
