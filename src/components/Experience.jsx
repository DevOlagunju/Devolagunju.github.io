import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const experiences = [
    {
      title: 'AI Engineer',
      company: 'Mercor',
      period: '2023 - Present',
      description: 'Leading AI/ML projects, developing intelligent systems, and implementing cutting-edge machine learning solutions for enterprise clients.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
    },
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc',
      period: '2020 - 2023',
      description: 'Architected and developed scalable web applications, led a team of 8 developers, and improved system performance by 60%.',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB', 'Microservices']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations',
      period: '2017 - 2020',
      description: 'Built responsive web applications, integrated third-party APIs, and implemented CI/CD pipelines for automated deployments.',
      skills: ['JavaScript', 'Express', 'PostgreSQL', 'Docker', 'Jenkins']
    },
    {
      title: 'Software Engineer',
      company: 'StartupHub',
      period: '2014 - 2017',
      description: 'Developed features for B2B SaaS platform, collaborated with cross-functional teams, and mentored junior developers.',
      skills: ['React', 'Python', 'Django', 'REST APIs', 'MySQL']
    }
  ]

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            A decade of delivering excellence in software engineering
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
