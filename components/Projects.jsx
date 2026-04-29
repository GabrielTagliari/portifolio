function ArchNode({ node, accent }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding: '18px 20px',
        border: `1px solid ${hover ? accent : 'var(--border)'}`,
        borderRadius: 3,
        background: hover ? 'rgba(161,227,38,0.04)' : 'var(--surface2)',
        transition: 'all 0.25s ease', cursor: 'default'
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: accent, fontWeight: 500 }}>{node.node}</span>
      </div>
      <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{node.role}</p>
      <p style={{ fontSize: 13, color: hover ? 'var(--text)' : 'var(--muted)', lineHeight: 1.6, transition: 'color 0.25s' }}>{node.detail}</p>
    </div>
  );
}

function Projects({ accent }) {
  const [ref, visible] = useReveal();
  const [open, setOpen] = React.useState(false);
  const project = PROJECTS[0];

  return (
    <section id="projects" ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,8vw,96px)', position: 'relative', zIndex: 1 }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accent, letterSpacing: '0.15em' }}>02 — BUILDING BLOCKS</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <div style={{ border: `1px solid ${open ? accent : 'var(--border)'}`, borderRadius: 4, overflow: 'hidden', background: 'var(--surface)', transition: 'border-color 0.3s ease' }}>
          {/* Header */}
          <div
            onClick={() => setOpen(!open)}
            style={{ padding: '32px 40px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: open ? 'rgba(161,227,38,0.04)' : 'transparent', transition: 'background 0.3s' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accent, letterSpacing: '0.12em', background: 'rgba(161,227,38,0.1)', padding: '4px 10px', borderRadius: 2 }}>{project.code}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em' }}>{project.status}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 600, lineHeight: 1.2, marginBottom: 8, letterSpacing: '-0.02em' }}>{project.title}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>{project.subtitle}</p>
                <a href={project.url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accent, letterSpacing: '0.06em' }}>q8rn.com →</a>
              </div>
            </div>
            <div style={{ width: 40, height: 40, border: `1px solid ${open ? accent : 'var(--border)'}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s', transform: open ? 'rotate(45deg)' : 'none', marginLeft: 24 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="7" y1="1" x2="7" y2="13" stroke={open ? accent : 'var(--muted)'} strokeWidth="1.5" />
                <line x1="1" y1="7" x2="13" y2="7" stroke={open ? accent : 'var(--muted)'} strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Expanded content */}
          <div style={{ maxHeight: open ? '2000px' : '0', overflow: 'hidden', transition: 'max-height 0.6s ease' }}>
            <div style={{ padding: '0 40px 40px', borderTop: '1px solid var(--border)' }}>
              <div style={{ marginBottom: 40 }}>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img src={project.preview} alt={`${project.code} preview`}
                    style={{ width: '100%', maxHeight: 260, objectFit: 'cover', objectPosition: 'top', borderRadius: 4, border: '1px solid var(--border)', display: 'block', transition: 'opacity 0.2s', marginTop: 32 }}
                    onMouseEnter={e => e.target.style.opacity = '0.85'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                  />
                </a>
              </div>

              <div style={{ marginBottom: 40 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: accent, letterSpacing: '0.15em', display: 'block', marginBottom: 12 }}>PROBLEM</span>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 680 }}>{project.problem}</p>
              </div>

              <div style={{ marginBottom: 40, padding: '24px 28px', background: 'rgba(161,227,38,0.06)', border: '1px solid rgba(161,227,38,0.25)', borderRadius: 4 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#a1e326', letterSpacing: '0.15em', display: 'block', marginBottom: 12 }}>SHIPPED → IMPACTO</span>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text)' }}>{project.ship}</p>
              </div>

              <div style={{ marginBottom: 40 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: accent, letterSpacing: '0.15em', display: 'block', marginBottom: 20 }}>ARQUITETURA</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                  {project.architecture.map((a, i) => <ArchNode key={i} node={a} accent={accent} />)}
                </div>
              </div>

              <div style={{ marginBottom: 36 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: accent, letterSpacing: '0.15em', display: 'block', marginBottom: 20 }}>DECISÕES-CHAVE</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {project.decisions.map((d, i) =>
                    <div key={i} style={{ padding: '20px 24px', background: 'var(--surface2)', borderRadius: 3, borderLeft: `3px solid ${accent}` }}>
                      <p style={{ fontWeight: 600, marginBottom: 8, fontSize: 15 }}>{d.title}</p>
                      <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{d.body}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: accent, letterSpacing: '0.15em', display: 'block', marginBottom: 14 }}>TECNOLOGIAS</span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {project.stack.map((s) =>
                    <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 12px', border: '1px solid var(--border)', borderRadius: 2, color: 'var(--muted)' }}>{s}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
