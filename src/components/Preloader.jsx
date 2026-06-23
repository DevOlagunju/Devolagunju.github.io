import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Preloader = () => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const duration = 2200
    const start = Date.now()
    let frame

    const tick = () => {
      const elapsed = Date.now() - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setPercent(next)
      if (next < 100) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="preloader-content">
        <motion.div
          className="preloader-logo"
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Full-Stack Software Engineer
        </motion.p>

        <div className="preloader-progress">
          <motion.div
            className="preloader-progress-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <p className="preloader-percent">{percent}%</p>
      </div>
    </motion.div>
  )
}

export default Preloader
