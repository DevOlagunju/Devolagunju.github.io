import { motion } from 'framer-motion'

import { FaCheckCircle, FaMapMarkerAlt, FaCode, FaProjectDiagram, FaUsers, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import RoleRotator from './RoleRotator'

import MagneticButton from './MagneticButton'

import HeroDecor from './HeroDecor'



const Hero = () => {

  const containerVariants = {

    hidden: { opacity: 0 },

    visible: {

      opacity: 1,

      transition: { staggerChildren: 0.15, delayChildren: 0.4 },

    },

  }



  const itemVariants = {

    hidden: { opacity: 0, y: 24 },

    visible: {

      opacity: 1,

      y: 0,

      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },

    },

  }



  const badgeVariants = {

    animate: {

      y: [0, -12, 0],

      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },

    },

  }



  return (

    <section id="home" className="hero hero-rich">

      <HeroDecor />

      <div className="hero-content">

        <motion.div

          className="hero-text"

          variants={containerVariants}

          initial="hidden"

          animate="visible"

        >

          <motion.div className="hero-greeting-badge" variants={itemVariants}>

            <span className="pulse-dot" />

            Available for new projects

          </motion.div>



          <motion.p className="hero-greeting" variants={itemVariants}>

            Hello, I&apos;m

          </motion.p>

          <motion.h1 className="hero-name hero-name-3d" variants={itemVariants}>

            <span className="hero-name-3d-text">Wasiu Ibrahim</span>

          </motion.h1>

          <motion.div variants={itemVariants}>

            <RoleRotator />

          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>

            A seasoned Full-Stack Software Engineer with expertise in AI/ML, offering a comprehensive

            background in software development, project management, and team leadership.

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

            <MagneticButton href="#projects" className="btn btn-primary">

              View My Work

            </MagneticButton>

            <MagneticButton href="#contact" className="btn btn-secondary">

              Get In Touch

            </MagneticButton>

          </motion.div>



          <motion.div className="hero-socials" variants={itemVariants}>

            <a href="https://www.github.com/DevOlagunju/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">

              <FaGithub />

            </a>

            <a href="https://www.linkedin.com/in/wasiu-ibrahim-28497a137/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">

              <FaLinkedin />

            </a>

            <a href="mailto:wasiu-ibrahim@outlook.com" aria-label="Email">

              <FaEnvelope />

            </a>

          </motion.div>

        </motion.div>



        <motion.div

          className="hero-image"

          initial={{ opacity: 0, scale: 0.92 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}

        >

          <div className="hero-image-container">

            <motion.div

              className="hero-avatar"

              animate={{ y: [0, -8, 0] }}

              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}

            >

              <img src="/profile.png" alt="Wasiu Ibrahim - Software Engineer" loading="eager" className="loaded" />

            </motion.div>



            <motion.div className="floating-badge badge-1" variants={badgeVariants} animate="animate">

              <FaCode />

              <span>11+ Years</span>

            </motion.div>

            <motion.div className="floating-badge badge-2" variants={badgeVariants} animate="animate" transition={{ delay: 0.7 }}>

              <FaProjectDiagram />

              <span>100+ Projects</span>

            </motion.div>

            <motion.div className="floating-badge badge-3" variants={badgeVariants} animate="animate" transition={{ delay: 1.4 }}>

              <FaUsers />

              <span>50+ Mentees</span>

            </motion.div>

          </div>

        </motion.div>

      </div>



      <motion.a

        href="#about"

        className="scroll-indicator"

        initial={{ opacity: 0, y: -20 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8, delay: 1.2 }}

        onClick={(e) => {

          e.preventDefault()

          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

        }}

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

      </motion.a>

    </section>

  )

}



export default Hero


