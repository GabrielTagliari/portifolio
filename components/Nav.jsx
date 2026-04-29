function Nav({ accent }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(7,7,10,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(30,30,46,0.8)' : '1px solid transparent',
      transition: 'all 0.4s ease'
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: accent, letterSpacing: '0.08em' }}>GTR</span>
      <div style={{ display: 'flex', gap: 32 }}>
        {[['Builder', 'about'], ['Work', 'projects']].map(([label, anchor]) =>
          <a key={label} href={`#${anchor}`}
            style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.target.style.color = accent}
            onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>
            {label}
          </a>
        )}
      </div>
    </nav>
  );
}
