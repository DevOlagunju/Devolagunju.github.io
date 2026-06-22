import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'
import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="testimonials" className="testimonials section section-alt section-rich" ref={ref}>
      <div className="container">
        <SectionHeader
          title="Testimonials"
          subtitle="What clients and colleagues say about working with me"
          isInView={isInView}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TestimonialSlider isInView={isInView} />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
