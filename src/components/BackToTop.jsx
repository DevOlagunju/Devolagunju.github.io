import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const CIRCUMFERENCE = 2 * Math.PI * 20

const BackToTop = () => {
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShow(scrollY > 300)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollY / docHeight : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
        >
          <svg className="back-to-top-progress" width="52" height="52" viewBox="0 0 44 44" aria-hidden="true">
            <circle cx="22" cy="22" r="20" stroke="rgba(147,51,234,0.15)" strokeWidth="2.5" fill="none" />
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="2.5"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              style={{ transition: 'stroke-dashoffset 0.15s ease' }}
            />
          </svg>
          <FaArrowUp className="back-to-top-icon" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
