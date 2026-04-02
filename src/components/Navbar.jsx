// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#storia', label: 'La Storia' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#prenota', label: 'Prenota' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        padding: scrolled ? '1rem 5vw' : '2rem 5vw',
        background: scrolled ? 'rgba(245,240,225,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, padding 0.4s ease, border-bottom 0.4s ease',
      }}>
        {/* Links sinistra */}
        <div style={{ display: 'flex', gap: '2rem', flex: 1 }} className="nav-links-desktop">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#storia" className="nav-link">La Storia</a>
        </div>

        {/* Logo centro */}
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.02em', flex: 1, textAlign: 'center' }}>
          Camugin
        </a>

        {/* Links destra */}
        <div style={{ display: 'flex', gap: '2rem', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }} className="nav-links-desktop">
          <a href="#galleria" className="nav-link">Galleria</a>
          <a href="#prenota" className="btn-clay" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}>
            Prenota
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }}
          className="nav-hamburger"
          aria-label="Menu">
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text-main)', transition: 'all 0.3s' }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay via Portal */}
      {menuOpen && createPortal(
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          background: 'var(--cream)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2.5rem', zIndex: 200,
        }}>
          <button onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: '2rem', right: '5vw', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-main)' }}
            aria-label="Chiudi menu">✕</button>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '3rem', color: 'var(--text-main)' }}>
              {label}
            </a>
          ))}
        </div>,
        document.body
      )}
    </>
  )
}
