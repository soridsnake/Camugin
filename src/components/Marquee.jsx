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
