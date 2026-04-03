// src/components/About.jsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="storia" aria-label="La nostra storia" style={{ padding: '10rem 0', background: 'var(--cream)' }}>
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw', alignItems: 'center' }}>
          {/* Testo */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.span className="section-label" variants={fadeUp}>L'Essenza</motion.span>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              Un'Istituzione<br />Ligure
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Dal 1800, le antiche mura di Casella custodiscono il segreto di un impasto inimitabile. Camugin non è solo una pizzeria — è un luogo di famiglia, dove la tecnica si unisce all'amore per la materia prima.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Ricotta fresca, trofie al pesto, piatti al forno e un tiramisù inimitabile. Tutto con la cura e il calore di chi cucina per la propria famiglia.
            </motion.p>
            <motion.a href="#menu" className="btn-outline" variants={fadeUp}>
              Scopri il Menu <ArrowRight size={16} aria-hidden={true} />
            </motion.a>
          </motion.div>

          {/* Immagini sovrapposte */}
          <div className="about-images" style={{ position: 'relative', height: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '65%', overflow: 'hidden' }}>
              <img src="images/camugin-storia1.webp" alt="Interno del locale Camugin" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              style={{ position: 'absolute', bottom: 0, left: 0, width: '60%', height: '50%', overflow: 'hidden', border: '12px solid var(--cream)', boxShadow: '0 20px 60px rgba(44,24,16,0.15)' }}>
              <img src="images/camugin-storia2.webp" alt="Pizza artigianale Camugin" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
