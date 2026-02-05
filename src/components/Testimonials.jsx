import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content: 'Wasiu is an exceptional engineer who consistently delivers high-quality solutions. His expertise in AI/ML transformed our product capabilities.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at InnovateLabs',
      content: 'Working with Wasiu was a game-changer for our project. His technical skills and problem-solving abilities are outstanding.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=13'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO at StartupHub',
      content: 'Wasiu built our entire platform from scratch. His attention to detail and commitment to excellence exceeded all expectations.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  ]

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
