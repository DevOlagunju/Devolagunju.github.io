import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Willie',
    content:
      'Excellent job done. Coding piece of project was better than expected. Extra touch was webex mid-way through to ensure all aspects were being completed.',
    rating: 5,
  },
  {
    name: 'José',
    content:
      'Fastest developer ever! He builded a complex project in a few days. And then he found a better solution and optimized it a lot. Better than I was ever imagine.',
    rating: 5,
  },
  {
    name: 'Andy',
    content:
      'Wasiu was very informative and worked quickly to refurbish an old php website and did amazing, clean work. Highly recommend for learning sessions and projects!',
    rating: 5,
  },
  {
    name: 'Yasin',
    content:
      'He is AMAZING! Super kind and helpful to someone like I who has very little coding experience. He walked me through the process and I would go back to him for all my future concerns. 10/10 recommend!',
    rating: 5,
  },
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="testimonial-slide-rating" aria-label={`${current.rating} out of 5 stars`}>
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} aria-hidden="true" />
              ))}
              <span>5.0</span>
            </div>

            <blockquote className="testimonial-slide-text">
              <p>{current.content}</p>
            </blockquote>

            <footer className="testimonial-slide-author">
              <div className="testimonial-avatar" aria-hidden="true">
                {getInitials(current.name)}
              </div>
              <div className="testimonial-author-meta">
                <h4>{current.name}</h4>
                <p>Verified Client</p>
              </div>
            </footer>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="testimonial-slider-controls">
        <button type="button" onClick={() => paginate(-1)} aria-label="Previous review">
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
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => paginate(1)} aria-label="Next review">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlider
