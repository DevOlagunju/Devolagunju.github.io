import { motion } from 'framer-motion'
import { FaCheckCircle, FaMapMarkerAlt, FaCode, FaProjectDiagram, FaUsers, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const badgeVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I'm
          </motion.p>
          <motion.h1 className="hero-name" variants={itemVariants}>
            Wasiu Ibrahim
          </motion.h1>
          <motion.h2 className="hero-title" variants={itemVariants}>
            Full-Stack Software Engineer
          </motion.h2>
          <motion.p className="hero-description" variants={itemVariants}>
            A seasoned Full-Stack Software Engineer with expertise in AI/ML, offering a comprehensive 
            background in software development, project management, and team leadership. I develop 
            applications that align with business objectives and exceed client expectations.
          </motion.p>

          <motion.div className="hero-highlights" variants={itemVariants}>
            <div className="highlight-item">
              <FaCheckCircle />
              <span>Available for Freelance</span>
            </div>
            <div className="highlight-item">
              <FaMapMarkerAlt />
              <span>Sheffield, UK</span>
            </div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="mailto:wasiu-ibrahim@outlook.com" className="btn btn-secondary">Get In Touch</a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <a href="https://www.github.com/DevOlagunju/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/wasiu-ibrahim-28497a137/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:wasiu-ibrahim@outlook.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-image-container">
            <div className="hero-avatar">
              <img src="/profile.png" alt="Wasiu Ibrahim - Software Engineer" loading="eager" />
            </div>

            <motion.div className="floating-badge badge-1" variants={badgeVariants} animate="animate">
              <FaCode />
              <span>11+ Years</span>
            </motion.div>
            <motion.div className="floating-badge badge-2" variants={badgeVariants} animate="animate" transition={{ delay: 0.5 }}>
              <FaProjectDiagram />
              <span>100+ Projects</span>
            </motion.div>
            <motion.div className="floating-badge badge-3" variants={badgeVariants} animate="animate" transition={{ delay: 1 }}>
              <FaUsers />
              <span>50+ Mentees</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
