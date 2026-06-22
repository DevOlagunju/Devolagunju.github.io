import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaEnvelope, FaLinkedin, FaCheckCircle, FaRocket, FaCode, FaBolt } from 'react-icons/fa'

const CallToAction = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const features = [
    { icon: <FaCode />, text: 'Scalable & maintainable code' },
    { icon: <FaBolt />, text: 'Agile development approach' },
    { icon: <FaCheckCircle />, text: 'Regular communication & updates' },
    { icon: <FaRocket />, text: 'Free initial consultation' }
  ]

  return (
    <section className="cta-section cta-rich" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Background Decoration */}
          <div className="cta-bg-decoration">
            <div className="cta-circle cta-circle-1"></div>
            <div className="cta-circle cta-circle-2"></div>
            <div className="cta-circle cta-circle-3"></div>
          </div>

          <div className="cta-content">
            {/* Badge */}
            <motion.div
              className="cta-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaRocket /> Available for Projects
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to Start Your Next Project?
            </motion.h2>
            
            <motion.p
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's transform your ideas into reality. I bring 11+ years of expertise in AI, 
              full-stack development, and cloud solutions to deliver exceptional results.
            </motion.p>

            {/* Features Grid */}
            <div className="cta-features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="cta-feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="cta-feature-icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a href="mailto:wasiu-ibrahim@outlook.com" className="btn btn-primary btn-large cta-btn-primary">
                <FaEnvelope /> Start a Conversation
              </a>
              <a href="https://www.linkedin.com/in/wasiu-ibrahim-28497a137/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-large">
                <FaLinkedin /> View LinkedIn Profile
              </a>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              className="cta-trust"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p>🚀 Trusted by startups and enterprises worldwide • 💼 11+ years experience • ⚡ Fast turnaround</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
