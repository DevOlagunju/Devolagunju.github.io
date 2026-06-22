import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'
import { projectFilters } from '../data/site'

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Enterprise-grade analytics dashboard with real-time data processing and ML-driven insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      category: 'AI/ML',
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online marketplace with payment integration, inventory management, and analytics.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full-Stack',
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com',
    },
    {
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant patient management system with appointment scheduling and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      tags: ['React', 'Express', 'PostgreSQL', 'WebRTC'],
      category: 'Full-Stack',
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com',
    },
    {
      title: 'Social Media Analytics Tool',
      description: 'Cross-platform social media monitoring and analytics dashboard for brands and influencers.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
      tags: ['Vue.js', 'FastAPI', 'Redis', 'Docker'],
      category: 'Cloud',
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com',
    },
    {
      title: 'Financial Trading Bot',
      description: 'Automated trading system with ML-based price prediction and risk management algorithms.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      tags: ['Python', 'Scikit-learn', 'API Integration', 'Cloud Functions'],
      category: 'AI/ML',
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com',
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'Team collaboration platform with real-time editing, video conferencing, and project management.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
      tags: ['React', 'Socket.io', 'Node.js', 'Kubernetes'],
      category: 'Mobile',
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com',
    },
  ]

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="projects section section-rich" ref={ref}>
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="Showcasing innovative solutions and technical expertise"
          isInView={isInView}
        />

        <div className="project-filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`project-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {activeFilter === filter && (
                <motion.span
                  className="project-filter-pill"
                  layoutId="projectFilterPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span>{filter}</span>
            </button>
          ))}
        </div>

        <motion.div className="projects-grid projects-bento" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                className={index === 0 ? 'project-bento-featured' : ''}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className="project-card project-card-rich" intensity={6}>
                  <span className="project-category-badge">{project.category}</span>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
