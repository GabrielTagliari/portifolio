function Footer({ accent }) {
  return (
    <footer style={{
      padding: 'clamp(48px,6vw,80px) clamp(24px,8vw,96px)',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24,
      position: 'relative', zIndex: 1
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>© 2026 Gabriel Tagliari Rodrigo</span>
      <a href="https://www.linkedin.com/in/gabrieltagliari/" target="_blank" rel="noreferrer"
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted2)', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 6, opacity: 0.5, transition: 'opacity 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.5'}>
        linkedin
      </a>
    </footer>
  );
}
