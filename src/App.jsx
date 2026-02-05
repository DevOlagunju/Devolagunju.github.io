import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './styles/App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Apply theme
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Testimonials />
          <CallToAction />
          <Contact />
          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </div>
  )
}

export default App
