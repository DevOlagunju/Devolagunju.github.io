import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaBriefcase } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const experiences = [
    {
      title: 'AI Engineer',
      company: 'Mercor',
      period: 'Jan 2025 - Present',
      description: 'Improved AI model training stability, consistency, and throughput, resulting in more reliable development cycles. Enabled deployment of key LLM-driven features by designing and implementing robust MCP integrations. Designed and implemented MCP (Model Context Protocol) servers enabling LLMs and AI agents to safely interact with simulated real-world tools. Built high-fidelity application simulations that replicate real app behavior, outputs, and workflows for agent tool-use learning.',
      skills: ['Python', 'PyTorch', 'LLM', 'OpenAI', 'Claude', 'MCP', 'AI/ML', 'TensorFlow']
    },
    {
      title: 'Senior Software Engineer',
      company: 'NABTECH LTD',
      period: 'Apr 2022 - Dec 2024',
      description: 'Led a team of Engineers to develop a Virtual Health On Demand Application (VHOD) for Common Spirit Health, allowing patients to request virtual visits with appropriate providers. Worked on mobile app projects with React Native, Expo, and EAS including Fixy app, Common Spirit app, sports metrics, and Clerestory. Spearheaded the development of the Twilio Provider app enabling patients and providers to connect using Twilio Video.',
      skills: ['React Native', 'Expo', 'EAS', 'Node.js', 'GraphQL', 'Next.js', 'AWS', 'Twilio']
    },
    {
      title: 'Freelancer and Expert Mentor',
      company: 'CodeMentor',
      period: 'Dec 2017 - Dec 2022',
      description: 'Leveraged coding expertise to mentor and instruct working developers on programming languages, tools, and concepts including Python, JavaScript, Node.js, C#, and respective frameworks (Express, React, GraphQL, Next.js, Angular, .Net Core). Assisted developers in resolving issues and challenges while performing day-to-day software-related tasks. Conducted in-depth code reviews in support of developers and projects.',
      skills: ['Python', 'JavaScript', 'Node.js', 'C#', 'React', 'Express', 'Next.js', 'GraphQL']
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Andela Nigeria, Lagos',
      period: 'Feb 2014 - May 2019',
      description: 'Oversaw developing and maintaining new and old software owned by Andela/Andela Partners. Managed the codebase and supported new & innovative projects with most applications built with React JS, Node JS, and Material UI. Played a vital role as a team member in building the Andela Learning Map to guide Andela developers in selecting career paths and tracking growth using React JS and Material Design for the front end and Flask and SQLAlchemy for the back end. Promoted the development of a positive and knowledgeable work environment by training and mentoring junior developers and development boot camp participants.',
      skills: ['React', 'Node.js', 'Python', 'Flask', 'Material UI', 'SQLAlchemy', 'TypeScript']
    }
  ]

  return (
    <section id="experience" className="experience section section-rich" ref={ref}>
      <div className="container">
        <SectionHeader
          title="Experience"
          subtitle="A decade of delivering excellence in software engineering"
          isInView={isInView}
        />

        <div className={`timeline timeline-animated ${isInView ? 'in-view' : ''}`}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="timeline-tags">
                  {exp.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
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
