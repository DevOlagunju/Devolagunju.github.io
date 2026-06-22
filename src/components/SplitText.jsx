import { motion } from 'framer-motion'

const SplitText = ({ text, className = '', delay = 0.5 }) => (
  <span className={`split-text ${className}`} aria-label={text}>
    {text.split('').map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        className="split-char"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          delay: delay + i * 0.035,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
)

export default SplitText
