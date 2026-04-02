# Camugin Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Riscrivere completamente il sito Pizzeria Camugin da zero con estetica calda/artigianale (terracotta, crema, Cormorant + Karla) al posto del design dark awwwards attuale.

**Architecture:** Single-page React app (Vite). I file sorgente sono corrotti (null bytes) e vanno riscritti per intero. Otto componenti autonomi montati in `App.jsx`, stili centralizzati in `index.css` con CSS custom properties. Framer Motion per animazioni scroll-triggered.

**Tech Stack:** React 18, Vite, framer-motion, lucide-react, Google Fonts (Cormorant + Karla)

---

## File Map

| File | Azione | Responsabilità |
|------|--------|----------------|
| `src/index.css` | Riscrivere | Design system: CSS vars, reset, classi base |
| `src/App.jsx` | Riscrivere | Root: importa e monta tutti i componenti |
| `src/App.css` | Riscrivere | Svuotare (stili vanno in index.css) |
| `src/components/Navbar.jsx` | Creare | Navbar fissa con scroll effect |
| `src/components/Hero.jsx` | Creare | Full-viewport hero con foto + CTA |
| `src/components/Marquee.jsx` | Creare | Striscia animata infinita |
| `src/components/About.jsx` | Creare | Storia + immagini sovrapposte |
| `src/components/Menu.jsx` | Creare | Lista menu con tab Pizze/Antipasti/Dolci |
| `src/components/Gallery.jsx` | Creare | Grid foto del locale |
| `src/components/Contact.jsx` | Creare | Contatti + mappa + CTA WhatsApp |
| `src/components/Footer.jsx` | Creare | Footer con nome gigante in background |
| `index.html` | Modificare | Aggiornare Google Fonts link |

---

## Task 1: Design System (index.css + index.html)

**Files:**
- Riscrivere: `src/index.css`
- Riscrivere: `src/App.css`
- Modificare: `index.html`

- [ ] **Step 1: Riscrivere `src/index.css`**

```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Karla:wght@300;400;500;600&display=swap');

:root {
  --cream: #F5F0E1;
  --warm-paper: #EDE5D0;
  --terracotta: #C67B5C;
  --clay: #8B3A2A;
  --gold: #A16207;
  --text-main: #2C1810;
  --text-muted: #7A6358;
  --border: rgba(139, 58, 42, 0.15);
  --font-display: 'Cormorant', serif;
  --font-body: 'Karla', sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--cream);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

/* Grain texture */
body::before {
  content: '';
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  z-index: 9999;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.1;
}

a { color: inherit; text-decoration: none; }

img { display: block; width: 100%; height: 100%; object-fit: cover; }

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5vw;
}

.section-label {
  display: block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
}

.btn-clay {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--clay);
  color: var(--cream);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-clay:hover {
  background: var(--text-main);
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--terracotta);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--terracotta);
  padding-bottom: 0.25rem;
  transition: gap 0.3s ease, color 0.3s ease;
}

.btn-outline:hover {
  gap: 1rem;
  color: var(--clay);
  border-color: var(--clay);
}
```

- [ ] **Step 2: Svuotare `src/App.css`**

```css
/* src/App.css — stili globali in index.css */
```

- [ ] **Step 3: Aggiornare `index.html` — rimuovere vecchi Google Fonts**

Nel file `index.html` trovare le righe:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,600;1,600&display=swap" rel="stylesheet">
```
E sostituire con:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
(I font Cormorant+Karla vengono importati via CSS in index.css)

- [ ] **Step 4: Creare cartella componenti**

```bash
mkdir -p /Users/lucasoriano/Documents/GitHub/Camugin/src/components
```

- [ ] **Step 5: Verificare visivamente**

```bash
cd /Users/lucasoriano/Documents/GitHub/Camugin && npm run dev
```
Aprire `http://localhost:5173` — lo schermo deve essere crema `#F5F0E1`, niente di dark.

- [ ] **Step 6: Commit**

```bash
git add src/index.css src/App.css index.html
git commit -m "feat: design system — warm palette, Cormorant+Karla, grain texture"
```

---

## Task 2: App.jsx (root)

**Files:**
- Riscrivere: `src/App.jsx`

- [ ] **Step 1: Riscrivere `src/App.jsx`**

```jsx
// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verificare che il dev server non crashi**

```bash
npm run dev
```
Atteso: pagina crema, nessun errore in console (i componenti non esistono ancora — React darà errori di import, va bene in questa fase).

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: App root — monta tutti gli 8 componenti"
```

---

## Task 3: Navbar

**Files:**
- Creare: `src/components/Navbar.jsx`

- [ ] **Step 1: Creare `src/components/Navbar.jsx`**

```jsx
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
```

- [ ] **Step 2: Aggiungere stili responsive in `src/index.css`** (append in fondo)

```css
/* Navbar responsive */
@media (max-width: 768px) {
  .nav-links-desktop { display: none !important; }
  .nav-hamburger { display: flex !important; }
}
```

- [ ] **Step 3: Verificare**

```bash
npm run dev
```
Aprire `http://localhost:5173` — navbar trasparente in cima, diventa crema/blur su scroll. Su mobile appare hamburger.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/index.css
git commit -m "feat: Navbar — transparent/blur on scroll, mobile hamburger"
```

---

## Task 4: Hero

**Files:**
- Creare: `src/components/Hero.jsx`

- [ ] **Step 1: Creare `src/components/Hero.jsx`**

```jsx
// src/components/Hero.jsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Immagine di sfondo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/images/camugin-hero.webp" alt="Pizzeria Camugin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            Esplora il Menu <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', zIndex: 2 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'rgba(245,240,225,0.5)', textTransform: 'uppercase' }}>Scorri</span>
        <div style={{ width: '1px', height: '60px', background: 'rgba(245,240,225,0.2)', position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%', background: 'var(--terracotta)' }}
            animate={{ y: ['−100%', '250%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Verificare**

```bash
npm run dev
```
Atteso: hero full-screen con foto di sfondo, titolo "Camugin" in corsivo gigante crema, vignetta calda in basso.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: Hero — full-viewport con foto, titolo Cormorant, CTA"
```

---

## Task 5: Marquee

**Files:**
- Creare: `src/components/Marquee.jsx`

- [ ] **Step 1: Creare `src/components/Marquee.jsx`**

```jsx
// src/components/Marquee.jsx
const items = ['Pizza Napoletana', 'Casella', 'Dal 1800', 'Impasto Artigianale', 'Materie Prime', 'Liguria', 'Forno a Legna']

export default function Marquee() {
  const repeated = [...items, ...items, ...items]

  return (
    <div style={{
      background: 'var(--warm-paper)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '1.75rem 0',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'marquee-scroll 30s linear infinite',
      }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: 'var(--terracotta)',
            paddingRight: '3vw',
          }}>
            {item} <span style={{ color: 'var(--gold)', fontSize: '0.6em' }}>✦</span>&nbsp;
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Aggiungere keyframe in `src/index.css`** (append in fondo)

```css
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-33.333%); }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Marquee.jsx src/index.css
git commit -m "feat: Marquee — striscia animata terracotta"
```

---

## Task 6: About

**Files:**
- Creare: `src/components/About.jsx`

- [ ] **Step 1: Creare `src/components/About.jsx`**

```jsx
// src/components/About.jsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="storia" style={{ padding: '10rem 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw', alignItems: 'center' }}>
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
              Scopri il Menu <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Immagini sovrapposte */}
          <div style={{ position: 'relative', height: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '65%', overflow: 'hidden' }}>
              <img src="/images/camugin-storia1.webp" alt="Interno Camugin" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              style={{ position: 'absolute', bottom: 0, left: 0, width: '60%', height: '50%', overflow: 'hidden', border: '12px solid var(--cream)', boxShadow: '0 20px 60px rgba(44,24,16,0.15)' }}>
              <img src="/images/camugin-storia2.webp" alt="Pizza Camugin" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Aggiungere responsive in `src/index.css`** (append)

```css
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/About.jsx src/index.css
git commit -m "feat: About — storia, immagini sovrapposte, animazioni scroll"
```

---

## Task 7: Menu

**Files:**
- Creare: `src/components/Menu.jsx`

- [ ] **Step 1: Creare `src/components/Menu.jsx`**

```jsx
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
    <section id="menu" style={{ padding: '10rem 0', background: 'var(--warm-paper)' }}>
      <div className="container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <span className="section-label">La Collezione</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500, textAlign: 'left', marginBottom: '2.5rem' }}>
            Capolavori di Gusto
          </h2>

          {/* Tab bar */}
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0' }}>
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setActive(tab.key)} style={{
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
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
            {menuData[active].map((item, i) => (
              <motion.div key={item.nr} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}
                style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'center', padding: '2rem 0',
                  borderBottom: '1px solid var(--border)',
                  transition: 'padding-left 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = '1rem'}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}>
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Menu.jsx
git commit -m "feat: Menu — tab Pizze/Antipasti/Dolci, lista animata"
```

---

## Task 8: Gallery

**Files:**
- Creare: `src/components/Gallery.jsx`

- [ ] **Step 1: Creare `src/components/Gallery.jsx`**

```jsx
// src/components/Gallery.jsx
import { motion } from 'framer-motion'

const photos = [
  { src: '/images/camugin-hero.webp', alt: 'Pizzeria Camugin' },
  { src: '/images/camugin-pizza-1.webp', alt: 'Pizza Napoletana' },
  { src: '/images/camugin-pesto.webp', alt: 'Trofie al pesto' },
  { src: '/images/camugin-storia1.webp', alt: 'Interno del locale' },
  { src: '/images/camugin-tiramisu.webp', alt: 'Tiramisù Camugin' },
  { src: '/images/camugin-storia2.webp', alt: 'Dettagli del locale' },
]

export default function Gallery() {
  return (
    <section id="galleria" style={{ padding: '10rem 0', background: 'var(--cream)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <span className="section-label">Il Locale</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500, textAlign: 'left' }}>
            La Nostra Casa
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="gallery-grid">
          {photos.map((photo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }} viewport={{ once: true }}
              style={{ position: 'relative', overflow: 'hidden', aspectRatio: i === 0 || i === 3 ? '4/3' : '1/1', cursor: 'pointer' }}>
              <img src={photo.src} alt={photo.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(245,240,225,0)',
                transition: 'background 0.4s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,240,225,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,240,225,0)'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Aggiungere responsive in `src/index.css`** (append)

```css
@media (max-width: 768px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Gallery.jsx src/index.css
git commit -m "feat: Gallery — grid 3 colonne, hover zoom"
```

---

## Task 9: Contact

**Files:**
- Creare: `src/components/Contact.jsx`

- [ ] **Step 1: Creare `src/components/Contact.jsx`**

```jsx
// src/components/Contact.jsx
import { motion } from 'framer-motion'
import { MapPin, Clock, MessageCircle } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

export default function Contact() {
  return (
    <section id="prenota" style={{ padding: '10rem 0', background: 'var(--warm-paper)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw', alignItems: 'start' }} className="contact-grid">
          {/* Dettagli */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.span className="section-label" variants={fadeUp}>La Tua Visita</motion.span>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500, marginBottom: '3rem' }}>
              Il Tuo Tavolo<br />ti Aspetta.
            </motion.h2>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
              <MapPin size={22} strokeWidth={1.5} style={{ color: 'var(--terracotta)', marginTop: '3px', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>Via Casella 15, 16015</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Casella (GE), Italia</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.25rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
              <Clock size={22} strokeWidth={1.5} style={{ color: 'var(--terracotta)', marginTop: '3px', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>Mar – Dom: 15:00 – 23:00</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--clay)', fontWeight: 600 }}>Lunedì: Chiuso</p>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/3900000000?text=Ciao%20Pizzeria%20Camugin,%20vorrei%20informazioni%20e%20prenotare%20un%20tavolo!"
              target="_blank" rel="noopener noreferrer"
              className="btn-clay"
              variants={fadeUp}
              style={{ fontSize: '1rem', padding: '1.25rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <MessageCircle size={20} />
              Prenota via WhatsApp
            </motion.a>
          </motion.div>

          {/* Mappa */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.1234567890!2d9.0123456!3d44.5432100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPizzeria+Camugin!5e0!3m2!1sit!2sit!4v1680000000000"
              width="100%" height="480"
              style={{ border: 'none', filter: 'sepia(20%) contrast(1.1) saturate(0.9)', display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Pizzeria Camugin" />
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              ⚠ Sostituire l'URL src della mappa con quello reale da Google Maps
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Aggiungere responsive in `src/index.css`** (append)

```css
@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 3: Nota importante — URL mappa**

L'URL della mappa Google Maps è un placeholder. Per ottenere quello reale:
1. Cercare "Pizzeria Camugin Casella" su Google Maps
2. Cliccare "Condividi" → "Incorpora una mappa"
3. Copiare l'URL `src` dall'iframe
4. Incollarlo nel componente Contact.jsx al posto del placeholder

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.jsx src/index.css
git commit -m "feat: Contact — indirizzo, orari, CTA WhatsApp, mappa"
```

---

## Task 10: Footer

**Files:**
- Creare: `src/components/Footer.jsx`

- [ ] **Step 1: Creare `src/components/Footer.jsx`**

```jsx
// src/components/Footer.jsx
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text-main)', padding: '6rem 0 0', position: 'relative', overflow: 'hidden' }}>
      {/* Nome gigante in background */}
      <div style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic',
        fontSize: 'clamp(8rem, 22vw, 20rem)', fontWeight: 400,
        color: 'rgba(245,240,225,0.05)', lineHeight: 0.8,
        textAlign: 'center', letterSpacing: '-0.04em',
        pointerEvents: 'none', userSelect: 'none',
        marginBottom: '-8%',
      }}>
        Camugin
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'relative', zIndex: 10,
        borderTop: '1px solid rgba(245,240,225,0.1)',
        padding: '2rem 5vw',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,225,0.4)' }}>
          © {new Date().getFullYear()} Pizzeria Camugin · Casella, Genova
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,225,0.4)' }}>
          Via Casella 15 · Mar–Dom 15:00–23:00
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[Instagram, Facebook].map((Icon, i) => (
            <a key={i} href="#" style={{ color: 'rgba(245,240,225,0.4)', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--terracotta)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,225,0.4)'}>
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: Footer — nome gigante, copyright, social links"
```

---

## Task 11: Build finale e verifica

- [ ] **Step 1: Avviare dev server e verificare tutte le sezioni**

```bash
npm run dev
```

Checklist visiva:
- [ ] Navbar trasparente → crema/blur su scroll
- [ ] Hero: foto sfondo, titolo "Camugin" italic gigante, vignetta calda
- [ ] Marquee: striscia terracotta animata
- [ ] About: testo + due immagini sovrapposte
- [ ] Menu: 3 tab (Pizze/Antipasti/Dolci), lista con numeri terracotta
- [ ] Gallery: grid 3 colonne, hover zoom
- [ ] Contact: indirizzo + orari + bottone WhatsApp + mappa
- [ ] Footer: nome gigante in bg, bottom bar
- [ ] Nessun cursore custom (rimosso)
- [ ] Nessuna pagina dark

- [ ] **Step 2: Build di produzione**

```bash
npm run build
```
Atteso: nessun errore, cartella `dist/` aggiornata.

- [ ] **Step 3: Aggiornare l'URL della mappa Google Maps**

Sostituire il placeholder in `src/components/Contact.jsx` con l'URL reale (vedi nota nel Task 9).

- [ ] **Step 4: Commit finale**

```bash
git add -A
git commit -m "feat: redesign completo Camugin — warm artisan aesthetic, 8 componenti"
```
