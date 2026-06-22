import { useRef } from 'react'
import { motion } from 'framer-motion'

const MagneticButton = ({ children, className = '', href, strength = 0.2, ...props }) => {
  const ref = useRef(null)
  const Tag = href ? motion.a : motion.button

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) * strength
    const y = (e.clientY - top - height / 2) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <Tag
      ref={ref}
      href={href}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span className="magnetic-btn-inner">{children}</span>
    </Tag>
  )
}

export default MagneticButton
