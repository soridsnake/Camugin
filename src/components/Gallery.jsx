// src/components/Gallery.jsx
import { motion } from 'framer-motion'

const photos = [
  { src: 'images/camugin-hero.webp', alt: 'Pizzeria Camugin' },
  { src: 'images/camugin-pizza-1.webp', alt: 'Pizza Napoletana' },
  { src: 'images/camugin-pesto.webp', alt: 'Trofie al pesto' },
  { src: 'images/camugin-storia1.webp', alt: 'Interno del locale' },
  { src: 'images/camugin-tiramisu.webp', alt: 'Tiramisù Camugin' },
  { src: 'images/camugin-storia2.webp', alt: 'Dettagli del locale' },
]

export default function Gallery() {
  return (
    <section id="galleria" aria-label="Galleria fotografica" style={{ padding: '10rem 0', background: 'var(--cream)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}>
          <span className="section-label">Il Locale</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500, textAlign: 'left' }}>
            La Nostra Casa
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="gallery-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: i === 0 || i === 3 ? '4/3' : '1/1',
              }}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
