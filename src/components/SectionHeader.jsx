import { motion } from 'framer-motion'

const SectionHeader = ({ title, subtitle, isInView }) => (
  <motion.div
    className="section-header section-header-rich"
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <h2 className="section-title">
      <span className="section-title-text">{title}</span>
    </h2>
    {subtitle && (
      <p className="section-subtitle section-subtitle-rich">{subtitle}</p>
    )}
    <div className="section-header-glow" aria-hidden="true" />
  </motion.div>
)

export default SectionHeader
