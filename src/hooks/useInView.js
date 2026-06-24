import { useState, useEffect, useRef } from 'react'

const isElementVisible = (element) => {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top < viewportHeight && rect.bottom > 0
}

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const { threshold = 0, rootMargin = '0px', ...observerOptions } = options

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return undefined

    let hasTriggered = false

    const markInView = () => {
      if (!hasTriggered) {
        hasTriggered = true
        setIsInView(true)
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        markInView()
      }
    }, {
      threshold,
      rootMargin,
      ...observerOptions
    })

    const checkVisibility = () => {
      if (isElementVisible(currentRef)) {
        markInView()
      }
    }

    checkVisibility()
    observer.observe(currentRef)

    window.addEventListener('scroll', checkVisibility, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [threshold, rootMargin])

  return [ref, isInView]
}
