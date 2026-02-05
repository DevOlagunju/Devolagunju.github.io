import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-section footer-about">
            <h3>Wasiu Ibrahim</h3>
            <p className="footer-tagline">Full-Stack Software Engineer</p>
            <p className="footer-description">
              Building innovative solutions with 11+ years of experience in AI/ML and full-stack development.
            </p>
            <div className="footer-socials">
              <a href="https://www.github.com/DevOlagunju/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/wasiu-ibrahim-28497a137/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:wasiu-ibrahim@outlook.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section footer-links-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <FaEnvelope />
                <a href="mailto:wasiu-ibrahim@outlook.com">wasiu-ibrahim@outlook.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+447733678297">+44 7733 678297</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Sheffield, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Wasiu Ibrahim. All rights reserved.
            </p>
            <p className="footer-built">
              Built with <FaHeart className="heart-icon" /> using React & Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
