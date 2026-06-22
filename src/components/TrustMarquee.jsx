import { motion } from 'framer-motion'
import { trustBrands } from '../data/site'

const TrustMarquee = () => {
  const items = [...trustBrands, ...trustBrands]

  return (
    <section className="trust-marquee" aria-label="Companies and technologies">
      <div className="trust-marquee-label">
        <span>Trusted experience with</span>
      </div>
      <div className="trust-marquee-track-wrap">
        <motion.div
          className="trust-marquee-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {items.map((brand, i) => (
            <span key={`${brand}-${i}`} className="trust-marquee-item">
              {brand}
              <span className="trust-marquee-sep" aria-hidden="true">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustMarquee
