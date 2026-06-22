import { motion } from 'framer-motion'

const SkillsMarquee = ({ skills }) => {
  const doubled = [...skills, ...skills]

  return (
    <div className="skills-marquee" aria-hidden="true">
      <motion.div
        className="skills-marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((skill, i) => (
          <span key={`${skill}-${i}`} className="skills-marquee-item">
            {skill}
            <span className="skills-marquee-dot" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsMarquee
