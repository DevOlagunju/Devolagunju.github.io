import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const experiences = [
    {
      title: 'AI Engineer',
      company: 'Mercor',
      period: 'Jan 2025 - Present',
      description: 'Leading AI/ML projects, developing intelligent systems, and implementing cutting-edge machine learning solutions for enterprise clients.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
    },
    {
      title: 'Senior Software Engineer',
      company: 'NABTECH LTD',
      period: 'Apr 2022 - Dec 2024',
      description: 'Led a team of Engineers to develop a Virtual Health On Demand Application (VHOD) for Common Spirit Health. Worked on mobile app projects with React Native, Expo, and EAS including Fixy app, Common Spirit app, sports metrics, and Clerestory.',
      skills: ['React Native', 'Expo', 'EAS', 'Node.js', 'GraphQL', 'AWS', 'Twilio']
    },
    {
      title: 'Freelancer and Expert Mentor',
      company: 'CodeMentor',
      period: 'Dec 2017 - Dec 2022',
      description: 'Mentored and instructed working developers on programming languages, tools, and concepts. Conducted in-depth code reviews and assisted developers in resolving issues and challenges.',
      skills: ['Python', 'JavaScript', 'Node.js', 'C#', 'React', 'Express', 'Next.js']
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Andela Nigeria',
      period: 'Feb 2014 - May 2019',
      description: 'Developed and maintained software for Andela and partners. Built the Andela Learning Map using React JS and Material Design for the frontend and Flask and SQLAlchemy for the backend. Trained and mentored junior developers.',
      skills: ['React', 'Node.js', 'Python', 'Flask', 'Material UI', 'SQLAlchemy']
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
