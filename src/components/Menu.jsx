// src/components/Menu.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menuData = {
  pizze: [
    { nr: '01', name: 'Margherita', desc: 'Fior di latte, pomodoro San Marzano, basilico fresco, olio EVO', price: '€ 9' },
    { nr: '02', name: 'Marinara', desc: 'Pomodoro, aglio, origano, olio EVO — la classica napoletana', price: '€ 8' },
    { nr: '03', name: 'Camugin', desc: 'Fiordilatte, nduja calabrese, provola affumicata, friarielli', price: '€ 14' },
    { nr: '04', name: 'Pesto Ligure', desc: 'Pesto genovese DOP, patate, fagiolini, fior di latte', price: '€ 13' },
    { nr: '05', name: 'Diavola', desc: 'Salame piccante, fior di latte, pomodoro, peperoncino', price: '€ 12' },
  ],
  antipasti: [
    { nr: '01', name: 'Bruschette al Pomodoro', desc: 'Pane casereccio, pomodori freschi, basilico, aglio', price: '€ 7' },
    { nr: '02', name: 'Ricotta Fresca', desc: 'Ricotta di giornata con miele e noci', price: '€ 8' },
    { nr: '03', name: 'Trofie al Pesto', desc: 'Pasta fresca, pesto genovese DOP, patate e fagiolini', price: '€ 12' },
    { nr: '04', name: 'Piatti al Forno', desc: 'Selezione del giorno — chiedere al cameriere', price: '€ 10' },
  ],
  dolci: [
    { nr: '01', name: 'Tiramisù Camugin', desc: "L'inimitabile. Ricetta di casa, dal 1800.", price: '€ 7' },
    { nr: '02', name: 'Panna Cotta', desc: 'Con coulis di frutti di bosco freschi', price: '€ 6' },
    { nr: '03', name: 'Torta della Casa', desc: 'Selezione del giorno', price: '€ 6' },
  ],
}

const tabs = [
  { key: 'pizze', label: 'Le Pizze' },
  { key: 'antipasti', label: 'Antipasti' },
  { key: 'dolci', label: 'Dolci' },
]

export default function Menu() {
  const [active, setActive] = useState('pizze')

  return (
    <section id="menu" aria-label="Il nostro menu" style={{ padding: '10rem 0', background: 'var(--warm-paper)' }}>
      <div className="container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <span className="section-label">La Collezione</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500, textAlign: 'left', marginBottom: '2.5rem' }}>
            Capolavori di Gusto
          </h2>

          {/* Tab bar */}
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0' }} role="tablist" aria-label="Categorie menu">
            {tabs.map(tab => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={active === tab.key}
                onClick={() => setActive(tab.key)}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.75rem 1.5rem', background: 'none', border: 'none',
                  cursor: 'pointer', color: active === tab.key ? 'var(--clay)' : 'var(--text-muted)',
                  borderBottom: active === tab.key ? '2px solid var(--clay)' : '2px solid transparent',
                  marginBottom: '-1px', transition: 'all 0.3s',
                }}>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lista voci */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}>
            {menuData[active].map((item, i) => (
              <motion.div
                key={item.nr}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="menu-item"
                style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'center', padding: '2rem 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--terracotta)' }}>{item.nr}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 500, color: 'var(--text-main)', marginBottom: '0.4rem' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--gold)', letterSpacing: '0.05em', paddingLeft: '2rem', whiteSpace: 'nowrap' }}>{item.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
