import { motion } from 'framer-motion'

const HeroDecor = () => (
  <div className="hero-decor" aria-hidden="true">
    <div className="hero-mesh" />
    <motion.div
      className="hero-orb hero-orb-a"
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="hero-orb hero-orb-b"
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <svg className="hero-lines" viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="180" stroke="url(#heroGrad)" strokeWidth="0.5" opacity="0.3" />
      <circle cx="200" cy="200" r="140" stroke="url(#heroGrad)" strokeWidth="0.5" opacity="0.2" />
      <circle cx="200" cy="200" r="100" stroke="url(#heroGrad)" strokeWidth="0.5" opacity="0.15" />
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="400">
          <stop stopColor="#9333ea" />
          <stop offset="1" stopColor="#c026d3" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export default HeroDecor
