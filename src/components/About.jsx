import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaDownload, FaBriefcase, FaUsers, FaCode } from 'react-icons/fa'
import Counter from './Counter'

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const skills = [
    'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker',
    'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'CI/CD', 'TensorFlow',
    'Next.js', 'Express.js', 'Redis', 'Kubernetes', 'Git', 'Agile'
  ]

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating impactful solutions through technology
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-container">
              <div className="about-avatar">
                <img src="/profile.png" alt="Wasiu Ibrahim" loading="lazy" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about-text">
              <p>
                With over 11 years of experience in full-stack development and AI/ML engineering, 
                I specialize in building scalable, high-performance applications that drive business growth.
              </p>
              <p>
                Currently working as an AI Engineer at Mercor, I've led numerous projects from conception 
                to deployment, mentored aspiring developers, and contributed to open-source communities.
              </p>
              <p>
                My approach combines technical excellence with business acumen, ensuring that every solution 
                not only works flawlessly but also delivers measurable value to stakeholders.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <FaBriefcase className="stat-icon" />
                <Counter end={11} duration={2} isInView={isInView} />
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <FaCode className="stat-icon" />
                <Counter end={100} duration={2} isInView={isInView} suffix="+" />
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <FaUsers className="stat-icon" />
                <Counter end={50} duration={2} isInView={isInView} suffix="+" />
                <p>Developers Mentored</p>
              </div>
            </div>

            <a href="/WASIU_IBRAHIM.pdf" download className="btn btn-primary">
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Technical Skills</h3>
          <div className="skills-tags">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
