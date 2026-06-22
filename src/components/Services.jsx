import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaCode, FaMobile, FaRobot, FaCloud, FaSearch, FaCog } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const services = [
    {
      icon: <FaCode />,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications using modern frameworks like React, Node.js, and cloud technologies.'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Creating responsive, cross-platform mobile applications that deliver seamless user experiences.'
    },
    {
      icon: <FaRobot />,
      title: 'AI/ML Solutions',
      description: 'Developing intelligent systems using machine learning, natural language processing, and computer vision.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Architecture',
      description: 'Designing and implementing scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform.'
    },
    {
      icon: <FaSearch />,
      title: 'Technical Consulting',
      description: 'Providing expert guidance on technology strategy, architecture decisions, and best practices.'
    },
    {
      icon: <FaCog />,
      title: 'DevOps & CI/CD',
      description: 'Streamlining development workflows with automated testing, deployment pipelines, and monitoring.'
    }
  ]

  return (
    <section id="services" className="services section section-alt" ref={ref}>
      <div className="container">
        <SectionHeader
          title="Services"
          subtitle="Comprehensive solutions tailored to your business needs"
          isInView={isInView}
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="service-card service-card-rich" intensity={8}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
