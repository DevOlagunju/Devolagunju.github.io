import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Enterprise-grade analytics dashboard with real-time data processing and ML-driven insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online marketplace with payment integration, inventory management, and analytics.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant patient management system with appointment scheduling and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      tags: ['React', 'Express', 'PostgreSQL', 'WebRTC'],
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Social Media Analytics Tool',
      description: 'Cross-platform social media monitoring and analytics dashboard for brands and influencers.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
      tags: ['Vue.js', 'FastAPI', 'Redis', 'Docker'],
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Financial Trading Bot',
      description: 'Automated trading system with ML-based price prediction and risk management algorithms.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      tags: ['Python', 'Scikit-learn', 'API Integration', 'Cloud Functions'],
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'Team collaboration platform with real-time editing, video conferencing, and project management.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
      tags: ['React', 'Socket.io', 'Node.js', 'Kubernetes'],
      github: 'https://github.com/DevOlagunju',
      demo: 'https://demo.example.com'
    }
  ]

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
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
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem'}}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{padding: '0.375rem 0.875rem', background: 'rgba(147, 51, 234, 0.08)', color: '#9333ea', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', border: '1px solid rgba(147, 51, 234, 0.2)', transition: 'all 0.2s ease'}}>{tag}</span>
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

export default Projects
