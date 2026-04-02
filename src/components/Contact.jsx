// src/components/Contact.jsx
import { motion } from 'framer-motion'
import { MapPin, Clock, MessageCircle } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

export default function Contact() {
  return (
    <section id="prenota" aria-label="Contatti e prenotazioni" style={{ padding: '10rem 0', background: 'var(--warm-paper)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw', alignItems: 'start' }} className="contact-grid">
          {/* Dettagli */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.span className="section-label" variants={fadeUp}>La Tua Visita</motion.span>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500, marginBottom: '3rem' }}>
              Il Tuo Tavolo<br />ti Aspetta.
            </motion.h2>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
              <MapPin size={22} strokeWidth={1.5} style={{ color: 'var(--terracotta)', marginTop: '3px', flexShrink: 0 }} aria-hidden={true} />
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>Via Casella 15, 16015</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Casella (GE), Italia</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.25rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
              <Clock size={22} strokeWidth={1.5} style={{ color: 'var(--terracotta)', marginTop: '3px', flexShrink: 0 }} aria-hidden={true} />
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>Mar – Dom: 15:00 – 23:00</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--clay)', fontWeight: 600 }}>Lunedì: Chiuso</p>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/3900000000?text=Ciao%20Pizzeria%20Camugin,%20vorrei%20informazioni%20e%20prenotare%20un%20tavolo!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clay"
              variants={fadeUp}
              style={{ fontSize: '1rem', padding: '1.25rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <MessageCircle size={20} aria-hidden={true} />
              Prenota via WhatsApp
            </motion.a>
          </motion.div>

          {/* Mappa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.1234567890!2d9.0123456!3d44.5432100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPizzeria+Camugin!5e0!3m2!1sit!2sit!4v1680000000000"
              width="100%"
              height="480"
              style={{ border: 'none', filter: 'sepia(20%) contrast(1.1) saturate(0.9)', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Pizzeria Camugin"
            />
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              ⚠ Sostituire l'URL src della mappa con quello reale da Google Maps
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
