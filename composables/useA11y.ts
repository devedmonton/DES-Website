export default function useA11y() {
  // "hasAnimation" cookie that persists for 1 year
  const hasAnimation = useCookie<boolean>('hasAnimation', {
    default: () => true,
    watch: true,
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
