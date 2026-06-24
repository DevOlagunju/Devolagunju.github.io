import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaDownload, FaBriefcase, FaUsers, FaCode } from 'react-icons/fa'
import Counter from './Counter'
import SectionHeader from './SectionHeader'

const About = () => {
  const [ref, isInView] = useInView()

  const skills = [
    'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker',
    'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'CI/CD', 'TensorFlow',
    'Next.js', 'Express.js', 'Redis', 'Kubernetes', 'Git', 'Agile',
  ]

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <SectionHeader
          title="About Me"
          subtitle="Passionate about creating impactful solutions through technology"
          isInView={isInView}
        />

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about-image-container">
              <div className="about-avatar">
                <img src="/profile.png" alt="Wasiu Ibrahim" loading="lazy" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-text">
              <h3 className="about-name about-name-3d">
                <span className="about-name-3d-text">Wasiu Ibrahim</span>
              </h3>
              <p className="about-role">Full-Stack Engineer &middot; AI/ML Specialist</p>
              <p>
                With over{' '}
                <span className="about-highlight">11 years of experience</span>
                {' '}in full-stack development and AI/ML engineering,
                I specialize in building scalable, high-performance applications that drive business growth.
              </p>
              <p>
                Currently working as an{' '}
                <span className="about-highlight">AI Engineer at Mercor</span>,
                I&apos;ve led numerous projects from conception
                to deployment, mentored aspiring developers, and contributed to open-source communities.
              </p>
              <p>
                My approach combines technical excellence with business acumen, ensuring every solution
                delivers measurable value.
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Technical Skills</h3>
          <div className="skills-tags">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
