import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import AmbientBackground from './components/AmbientBackground'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/ProjectsList'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import TrustMarquee from './components/TrustMarquee'

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const markLoaded = (img) => img.classList.add('loaded')
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      if (img.complete) markLoaded(img)
      else img.addEventListener('load', () => markLoaded(img), { once: true })
    })
  }, [loading])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const ThemeIcon = theme === 'dark' ? <FaSun /> : <FaMoon />

  return (
    <div className="App">
      <CustomCursor />
      <AmbientBackground />

      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ScrollProgress />
          <Navbar theme={theme} toggleTheme={toggleTheme} ThemeIcon={ThemeIcon} />
          <Hero />
          <TrustMarquee />
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
