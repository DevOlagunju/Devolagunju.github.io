import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  'Full-Stack Software Engineer',
  'AI / ML Engineer',
  'Cloud Architect',
  'Technical Mentor',
]

const RoleRotator = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <h2 className="hero-title hero-title-rotator">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          className="hero-title-word"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </h2>
  )
}

export default RoleRotator
