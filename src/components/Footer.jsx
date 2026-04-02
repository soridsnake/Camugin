// src/components/Footer.jsx
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text-main)', padding: '6rem 0 0', position: 'relative', overflow: 'hidden' }}>
      {/* Nome gigante in background */}
      <div
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(8rem, 22vw, 20rem)',
          fontWeight: 400,
          color: 'rgba(245,240,225,0.05)',
          lineHeight: 0.8,
          textAlign: 'center',
          letterSpacing: '-0.04em',
          pointerEvents: 'none',
          userSelect: 'none',
          marginBottom: '-8%',
        }}>
        Camugin
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(245,240,225,0.1)',
        padding: '2rem 5vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,225,0.4)' }}>
          © {new Date().getFullYear()} Pizzeria Camugin · Casella, Genova
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,225,0.4)' }}>
          Via Casella 15 · Mar–Dom 15:00–23:00
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }} aria-label="Social media links">
          {[
            { Icon: Instagram, label: 'Instagram' },
            { Icon: Facebook, label: 'Facebook' },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              style={{ color: 'rgba(245,240,225,0.4)', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--terracotta)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,225,0.4)'}>
              <Icon size={18} strokeWidth={1.5} aria-hidden={true} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
