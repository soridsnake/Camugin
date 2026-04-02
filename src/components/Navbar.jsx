// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      padding: scrolled ? '1rem 5vw' : '2rem 5vw',
      background: scrolled ? 'rgba(245,240,225,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s ease',
    }}>
      {/* Links sinistra */}
      <div style={{ display: 'flex', gap: '2rem', flex: 1 }} className="nav-links-desktop">
        <a href="#menu" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', transition: 'color 0.3s' }}
          onMouseEnter={e => e.target.style.color = 'var(--clay)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
          Menu
        </a>
        <a href="#storia" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', transition: 'color 0.3s' }}
          onMouseEnter={e => e.target.style.color = 'var(--clay)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
          La Storia
        </a>
      </div>

      {/* Logo centro */}
      <a href="#" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.02em', flex: 1, textAlign: 'center' }}>
        Camugin
      </a>

      {/* Links destra */}
      <div style={{ display: 'flex', gap: '2rem', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }} className="nav-links-desktop">
        <a href="#galleria" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', transition: 'color 0.3s' }}
          onMouseEnter={e => e.target.style.color = 'var(--clay)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
          Galleria
        </a>
        <a href="#prenota" className="btn-clay" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}>
          Prenota
        </a>
      </div>

      {/* Hamburger mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }}
        className="nav-hamburger"
        aria-label="Menu">
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text-main)', transition: 'all 0.3s' }} />
        ))}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          background: 'var(--cream)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2.5rem', zIndex: 200,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '2rem', right: '5vw', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-main)' }}>✕</button>
          {['#menu', '#storia', '#galleria', '#prenota'].map((href, i) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '3rem', color: 'var(--text-main)' }}>
              {['Menu', 'La Storia', 'Galleria', 'Prenota'][i]}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
