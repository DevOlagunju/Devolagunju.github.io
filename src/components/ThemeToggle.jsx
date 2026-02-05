import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="floating-controls">
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </motion.button>
    </div>
  )
}

export default ThemeToggle
