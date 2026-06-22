import { motion } from 'framer-motion'

const revealVariants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const ScrollReveal = ({ children, className = '', delay = 0, isInView }) => (
  <motion.div
    className={className}
    variants={revealVariants}
    custom={delay}
    initial="hidden"
    animate={isInView ? 'visible' : 'hidden'}
  >
    {children}
  </motion.div>
)

export default ScrollReveal
