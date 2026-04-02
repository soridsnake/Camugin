// src/components/Hero.jsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" aria-label="Hero" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Immagine di sfondo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/images/camugin-hero.webp" alt="Pizzeria Camugin" fetchpriority="high" loading="eager" width="1920" height="1080" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Vignetta calda */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(44,24,16,0.55) 100%), linear-gradient(to bottom, transparent 40%, rgba(245,240,225,0.95) 100%)',
      }} />

      {/* Testo */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 5vw' }}>
        <motion.span
          className="section-label"
          style={{ color: 'rgba(245,240,225,0.8)' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          Casella, Genova · Dal 1800
        </motion.span>

        <motion.h1
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(5rem, 15vw, 13rem)', fontWeight: 400, color: 'var(--cream)', letterSpacing: '-0.03em', lineHeight: 0.85, marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
          Camugin
        </motion.h1>

        <motion.p
          style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(245,240,225,0.75)', letterSpacing: '0.1em', marginBottom: '3rem' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.8 }}>
          La Vera Pizza Napoletana
        </motion.p>

        <motion.div
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }}>
          <a href="#prenota" className="btn-clay">
            Prenota un Tavolo
          </a>
          <a href="#menu" className="btn-outline" style={{ color: 'var(--cream)', borderColor: 'rgba(245,240,225,0.6)' }}>
            Esplora il Menu <ArrowRight size={16} aria-hidden={true} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'rgba(245,240,225,0.5)', textTransform: 'uppercase' }}>Scorri</span>
          <div style={{ width: '1px', height: '60px', background: 'rgba(245,240,225,0.2)', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%', background: 'var(--terracotta)' }}
              animate={{ y: ['-100%', '250%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
