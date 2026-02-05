import { useState, useEffect } from 'react'

const Counter = ({ end, duration = 2, isInView, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <h3>{count}{suffix}</h3>
}

export default Counter
