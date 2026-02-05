import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaEnvelope, FaLinkedin, FaCheckCircle } from 'react-icons/fa'

const CallToAction = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const features = [
    'Scalable & maintainable code',
    'Agile development approach',
    'Regular communication',
    'Free initial consultation'
  ]

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Start Your Next Project?</h2>
          <p>
            Let's transform your ideas into reality. I'm available for freelance projects 
            and consulting opportunities.
          </p>

          <div className="cta-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cta-feature"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <FaCheckCircle />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="mailto:wasiu-ibrahim@outlook.com" className="btn btn-primary btn-large">
              <FaEnvelope /> Get In Touch
            </a>
            <a href="https://www.linkedin.com/in/wasiu-ibrahim-28497a137/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
