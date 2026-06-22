import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const AmbientBackground = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 })

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 60)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 60)
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-aurora" />
      <div className="ambient-grid" />
      <div className="ambient-noise" />
      <div className="ambient-vignette" />
      <motion.div
        className="ambient-orb ambient-orb-1"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="ambient-orb ambient-orb-2"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="ambient-orb ambient-orb-3"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="ambient-orb ambient-orb-4"
        style={{ x: springX, y: springY }}
      />
    </div>
  )
}

export default AmbientBackground
