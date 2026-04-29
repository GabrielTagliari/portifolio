function Hero({ accent }) {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const lines = [
    { text: 'Gabriel Tagliari Rodrigo', size: 'clamp(40px,6vw,88px)', weight: 700, delay: 0 },
    { text: 'Product Builder', size: 'clamp(18px,2.5vw,32px)', weight: 300, delay: 120, mono: true, color: accent },
    { text: 'End-to-end — do whiteboard ao deploy.', size: 'clamp(14px,1.5vw,20px)', weight: 400, delay: 240, color: 'var(--muted)' }
  ];

  const tags = ['Arquitetura de Sistema', 'Entrega Full-Stack', 'AWS', 'IA', 'Produto'];

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: 'clamp(80px,10vw,140px) clamp(24px,8vw,96px)',
      position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: 860 }}>
        {lines.map((l, i) =>
          <div key={i} style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(28px)',
            transition: `opacity 0.8s ease ${l.delay}ms, transform 0.8s ease ${l.delay}ms`,
            marginBottom: i === 0 ? 12 : i === 1 ? 24 : 0
          }}>
            <span style={{
              fontFamily: l.mono ? 'var(--font-mono)' : 'var(--font-head)',
              fontSize: l.size, fontWeight: l.weight, lineHeight: 1.1,
              color: l.color || 'var(--text)',
              letterSpacing: l.mono ? '0.06em' : '-0.02em',
              display: 'block'
            }}>{l.text}</span>
          </div>
        )}

        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.8s ease 400ms, transform 0.8s ease 400ms',
          marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap'
        }}>
          {tags.map((tag) =>
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, padding: '6px 14px',
              border: '1px solid var(--border)', borderRadius: 2, color: 'var(--muted)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'rgba(14,14,21,0.6)'
            }}>{tag}</span>
          )}
        </div>

        <div style={{
          opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 600ms',
          marginTop: 64, display: 'flex', alignItems: 'center', gap: 12
        }}>
          <div style={{ width: 32, height: 1, background: accent }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>
            ROLE PARA EXPLORAR
          </span>
        </div>
      </div>

      {/* Decorative graph cluster */}
      <div style={{ position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)', opacity: 0.15, pointerEvents: 'none' }}>
        <svg width="280" height="280" viewBox="0 0 280 280">
          {[[140,140,16],[80,80,8],[200,90,10],[220,180,7],[70,200,9],[160,220,6],[100,160,5],[190,50,7]].map(([x,y,r],i) =>
            <circle key={i} cx={x} cy={y} r={r} fill={accent} opacity={0.6 + i * 0.04} />
          )}
          {[[140,140,80,80],[140,140,200,90],[140,140,220,180],[140,140,70,200],[80,80,100,160],[200,90,190,50],[220,180,200,90],[70,200,100,160]].map(([x1,y1,x2,y2],i) =>
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeWidth="0.8" opacity="0.4" />
          )}
        </svg>
      </div>
    </section>
  );
}
