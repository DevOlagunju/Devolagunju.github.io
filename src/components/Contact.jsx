import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    console.log('🚀 Form submitted!')
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    const form = e.target
    const formDataToSend = new FormData(form)
    
    console.log('📝 Form data:', {
      name: formDataToSend.get('name'),
      email: formDataToSend.get('email'),
      subject: formDataToSend.get('subject'),
      message: formDataToSend.get('message')
    })

    try {
      console.log('📤 Sending to Formspree...')
      
      const response = await fetch('https://formspree.io/f/xwvnkknr', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })

      console.log('📥 Response status:', response.status)
      
      const data = await response.json()
      console.log('📄 Response data:', data)

      if (response.ok) {
        console.log('✅ Success!')
        setStatus({ 
          type: 'success', 
          message: '✅ Message sent successfully! I\'ll get back to you within 24 hours.' 
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
        form.reset()
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' })
        }, 5000)
      } else {
        console.log('❌ Error response')
        // Handle Formspree specific errors
        if (data.errors) {
          const errorMsg = data.errors.map(err => err.message).join(', ')
          console.log('Error details:', errorMsg)
          setStatus({ 
            type: 'error', 
            message: `❌ Error: ${errorMsg}` 
          })
        } else {
          setStatus({ 
            type: 'error', 
            message: '❌ Oops! Something went wrong. Please try again or email me directly.' 
          })
        }
      }
    } catch (error) {
      console.error('💥 Formspree Error:', error)
      setStatus({ 
        type: 'error', 
        message: '❌ Network error. Please check your connection and try again.' 
      })
    }

    setLoading(false)
    console.log('✨ Form submission complete')
  }

  return (
    <section id="contact" className="contact section section-rich" ref={ref}>
      <div className="container">
        <SectionHeader
          title="Let's Build Something Great Together"
          subtitle="I'm always open to discussing new opportunities, innovative projects, or partnerships that drive meaningful impact"
          isInView={isInView}
        />

        <div className="contact-wrapper">
          <motion.div
            className="contact-cards"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>
              <div className="contact-card-content">
                <h3>Email Communication</h3>
                <p>Professional inquiries and project discussions</p>
                <a href="mailto:wasiu-ibrahim@outlook.com" className="contact-link">
                  wasiu-ibrahim@outlook.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaPhone />
              </div>
              <div className="contact-card-content">
                <h3>Direct Line</h3>
                <p>Schedule a consultation or technical discussion</p>
                <a href="tel:+447733678297" className="contact-link">
                  +44 7733 678297
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-card-content">
                <h3>Location</h3>
                <p>Available for remote work and UK-based collaborations</p>
                <span className="contact-location">
                  Sheffield, United Kingdom
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-header">
              <h3>Start the Conversation</h3>
              <p>Share your project details or ideas, and I'll respond within 24 hours to discuss how we can work together</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xwvnkknr" method="POST">
              {/* Hidden field for Formspree reply-to */}
              <input type="hidden" name="_replyto" value={formData.email} />
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  autoComplete="off"
                  required
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  className={`form-status ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.div>
              )}

              <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
                {loading ? (
                  <>
                    <span className="btn-spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>

            <div className="contact-social-section">
              <p className="social-title">Or connect with me on</p>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/wasiu-ibrahim-28497a137/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.github.com/DevOlagunju/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
