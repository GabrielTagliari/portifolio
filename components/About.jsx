function PrincipleRow({ p, accent, delay, visible }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', gap: 20, padding: '20px 0',
        borderBottom: '1px solid var(--border)', cursor: 'default',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
      }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: hover ? accent : 'var(--muted2)', flexShrink: 0, transition: 'color 0.2s', paddingTop: 3 }}>{p.n}</span>
      <div>
        <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>{p.title}</p>
        <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{p.body}</p>
      </div>
    </div>
  );
}

function About({ accent }) {
  const [ref, visible] = useReveal();

  const principles = [
    { n: '01', title: 'Ship first, refine forever', body: 'Entregar algo real nas mãos do usuário vale mais que meses de planejamento. Itero rápido, aprendo com produção, construo com consistência.' },
    { n: '02', title: 'Arquitetura é decisão de produto', body: 'Cada escolha técnica tem impacto direto no usuário final. Não separo engenharia de produto — são a mesma coisa.' },
    { n: '03', title: 'Ownership end-to-end', body: 'Do problema ao deploy. Não delego o que não entendo e não entrego o que não testei. A responsabilidade fica comigo.' },
    { n: '04', title: 'Clareza sem cerimônia', body: 'Sem burocracia, sem reuniões que poderiam ser um commit. O trabalho feito fala mais alto que qualquer processo.' }
  ];

  return (
    <section id="about" ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,8vw,96px)', position: 'relative', zIndex: 1 }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accent, letterSpacing: '0.15em' }}>01 — HOW I BUILD</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: 36, display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ width: 88, height: 88, borderRadius: '50%', flexShrink: 0, border: `2px solid ${accent}`, overflow: 'hidden', boxShadow: '0 0 20px rgba(161,227,38,0.2)' }}>
                <img src="img/gabriel.png" alt="Gabriel Tagliari Rodrigo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>Gabriel Tagliari Rodrigo</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: accent }}>Product Builder</p>
              </div>
            </div>

            <p style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 24 }}>
              Não gerencio sistemas.{' '}
              <span style={{ color: accent }}>Eu os construo.</span>
            </p>
            <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
              Sou um builder: arquiteto, codifico, faço o deploy e observo o impacto. Meu foco não é como o processo foi gerenciado — é o que foi entregue, como funciona e o que mudou para o usuário final.
            </p>
            <a href="https://www.linkedin.com/in/gabrieltagliari/" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.06em', opacity: 0.75, transition: 'opacity 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = accent; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.75'; e.currentTarget.style.color = 'var(--muted)'; }}>
              ↗ linkedin/gabrieltagliari
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {principles.map((p, i) =>
              <PrincipleRow key={i} p={p} accent={accent} delay={i * 60} visible={visible} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
