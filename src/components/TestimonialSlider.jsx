import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'Wasiu is an exceptional engineer who consistently delivers high-quality solutions. His expertise in AI/ML transformed our product capabilities and accelerated our roadmap significantly.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at InnovateLabs',
    content: 'Working with Wasiu was seamless — he delivered scalable, production-ready systems that boosted performance and streamlined our entire product experience.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO at StartupHub',
    content: 'Wasiu built our platform from scratch with exceptional attention to detail. His ability to merge engineering excellence with business outcomes made a huge difference.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
}

const TestimonialSlider = ({ isInView }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const paginate = useCallback((dir) => {
    setDirection(dir)
    setIndex((prev) => {
      const next = prev + dir
      if (next < 0) return testimonials.length - 1
      if (next >= testimonials.length) return 0
      return next
    })
  }, [])

  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => paginate(1), 6000)
    return () => clearInterval(timer)
  }, [isInView, paginate])

  const current = testimonials[index]

  return (
    <div className="testimonial-slider">
      <div className="testimonial-slider-stage">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={index}
            className="testimonial-slide-card"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <FaQuoteLeft className="testimonial-slide-quote" />
            <p className="testimonial-slide-text">{current.content}</p>
            <div className="testimonial-slide-rating">
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span>5.0</span>
            </div>
            <div className="testimonial-slide-author">
              <img src={current.avatar} alt={current.name} />
              <div>
                <h4>{current.name}</h4>
                <p>{current.role}</p>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="testimonial-slider-controls">
        <button type="button" onClick={() => paginate(-1)} aria-label="Previous testimonial">
          <FaChevronLeft />
        </button>
        <div className="testimonial-slider-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? 'active' : ''}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => paginate(1)} aria-label="Next testimonial">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlider
