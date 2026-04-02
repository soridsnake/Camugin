# Pizzeria Camugin — Redesign Spec
**Date:** 2026-04-03  
**Stack:** React + Vite (invariato)  
**Skill usata:** UI/UX Pro Max 2.5.0 (Nature Distilled + Restaurant palette)

---

## Obiettivo

Sostituire completamente il design dark/awwwards attuale con un'estetica calda, familiare e autentica che rifletta la natura del locale: una pizzeria storica (dal 1800) a Casella, GE — un posto di famiglia, non un ristorante stellato.

Target: locali che prenotano + turisti che scoprono il posto.

---

## Design System

### Palette colori
```css
--cream:       #F5F0E1   /* sfondo principale */
--warm-paper:  #EDE5D0   /* sfondo sezioni alternate */
--terracotta:  #C67B5C   /* accent primario */
--clay:        #8B3A2A   /* rosso profondo, CTA */
--gold:        #A16207   /* prezzi, dettagli oro */
--text-main:   #2C1810   /* testo principale */
--text-muted:  #7A6358   /* testo secondario */
--border:      rgba(139, 58, 42, 0.15)
```

### Tipografia (Cormorant + Karla — Google Fonts)
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Karla:wght@300;400;500;600&display=swap');
--font-display: 'Cormorant', serif;   /* titoli, italic elegante */
--font-body:    'Karla', sans-serif;  /* corpo, leggibile */
```

### Texture
- Grain SVG inline su `body::before`, `opacity: 0.04`, `pointer-events: none`
- Dà sensazione di carta/materiale senza appesantire

### Animazioni
- `ease-out` naturale per scroll-triggered
- Framer Motion già presente nel bundle — utilizzare `whileInView` con `once: true`
- Nessun custom cursor (rimosso)
- Durata: 0.6–0.9s, niente di più veloce di 0.4s

---

## Struttura pagina (single page)

### 1. Navbar
- Sfondo trasparente → crema/blur su scroll
- Logo centrato (font Cormorant, italic)
- Link sinistri: "Menu", "La Storia"
- Link destri: "Galleria", "Prenota"
- Mobile: hamburger con menu a tendina

### 2. Hero
- Full viewport, foto del locale come sfondo (già disponibile in `/public/images/`)
- Vignetta calda (gradiente crema in basso) — non nera
- Titolo: `"Camugin"` in Cormorant italic gigante, colore crema
- Sottotitolo: `"Dal 1800 · Casella, Genova"` in Karla, letterspacing ampio
- CTA primario: `"Prenota un Tavolo"` — bottone clay (`#8B3A2A`)
- CTA secondario: `"Esplora il Menu"` — link con freccia, colore terracotta
- Scroll indicator: linea verticale animata, terracotta

### 3. Marquee
- Sfondo `--warm-paper`
- Testo: `"Pizza Napoletana · Casella · Dal 1800 · Impasto Artigianale · Materie Prime"`
- Font Cormorant italic, colore `--terracotta`
- Animazione scroll infinita

### 4. La Storia (About)
- Layout 2 colonne: testo sinistra, immagini destra (stacked, overlap)
- Label: `"DAL 1800"` in Karla uppercase, colore gold
- Titolo: `"Un'Istituzione Ligure"` in Cormorant italic
- Testo: storia del locale, atmosfera familiare, ingredienti
- Immagine principale + seconda sovrapposta con bordo crema spesso (effetto polaroid caldo)

### 5. Menu (Capolavori di Gusto)
- Sfondo `--warm-paper`
- Struttura a lista come ora, ma con stile diverso:
  - Numero progressivo in Cormorant italic, colore terracotta
  - Titolo piatto in Cormorant bold
  - Descrizione in Karla muted
  - Prezzo in gold
  - Su hover: separatore colorato che cresce, nessuna immagine flottante (rimossa)
- Sezioni: Pizze, Antipasti, Dolci (tab o accordion semplice)

### 6. Galleria
- Grid responsiva 3 colonne (2 mobile)
- Foto del locale e dei piatti (da `/public/images/` e `Immagini/`)
- Hover: leggero zoom + overlay crema semitrasparente
- Nessun lightbox complesso — click apre immagine full nativa del browser

### 7. Prenota / Contatti
- Sfondo crema
- 2 colonne: dettagli contatto + mappa
- Indirizzo, orari (con lunedì chiuso evidenziato)
- CTA enorme: `"Prenota via WhatsApp"` — bottone clay, icona WhatsApp
- Mappa Google Maps embed, filtro sepia caldo (non grigio invertito come ora)

### 8. Footer
- Sfondo `--text-main` (marrone scuro)
- Testo crema
- Nome enorme in background: `"CAMUGIN"` in Cormorant, opacity bassa
- Copyright, social links

---

## Componenti React

```
src/
├── App.jsx                  # root, import componenti
├── index.css                # design system (CSS variables, reset, base)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Marquee.jsx
│   ├── About.jsx
│   ├── Menu.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
```

Ogni componente è autonomo con i propri stili inline o CSS module.  
`framer-motion` già installato — usare per animazioni scroll.  
`lucide-react` già installato — usare per icone (MapPin, Clock, ArrowRight, etc.)

---

## Note implementative

- I file sorgente (`src/App.jsx`, `src/index.css`, etc.) risultano corrotti (null bytes). Vanno **riscritti completamente** da zero.
- Le immagini sono disponibili in `/public/images/` — usare quelle esistenti.
- Il `dist/` ha il bundle compilato — non modificare, viene rigenerato da `npm run build`.
- SEO metadata e Schema.org nell'`index.html` restano invariati (già ottimizzati).
- WhatsApp link già presente: `https://wa.me/3900000000` — da mantenere.
