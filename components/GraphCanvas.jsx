function GraphCanvas({ density }) {
  const GRAPH_COLOR = '#a1e326';
  const canvasRef = React.useRef(null);
  const stateRef = React.useRef({ nodes: [], mouse: { x: -9999, y: -9999 }, raf: null, w: 0, h: 0 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const S = stateRef.current;

    function resize() {
      S.w = canvas.width = window.innerWidth;
      S.h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    S.nodes = Array.from({ length: density }, () => ({
      x: Math.random() * S.w,
      y: Math.random() * S.h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 2.5 + 1,
      pulse: Math.random() * Math.PI * 2,
      bright: Math.random() > 0.85
    }));

    const onMove = (e) => { S.mouse.x = e.clientX; S.mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMove);

    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    }

    function draw() {
      ctx.clearRect(0, 0, S.w, S.h);
      const rgb = hexToRgb(GRAPH_COLOR);
      const MAX_DIST = 160;

      S.nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = S.w + 20;
        if (n.x > S.w + 20) n.x = -20;
        if (n.y < -20) n.y = S.h + 20;
        if (n.y > S.h + 20) n.y = -20;
        n.pulse += 0.018;
      });

      for (let i = 0; i < S.nodes.length; i++) {
        for (let j = i + 1; j < S.nodes.length; j++) {
          const a = S.nodes[i], b = S.nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb},${(1 - d / MAX_DIST) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      S.nodes.forEach((n) => {
        const dx = n.x - S.mouse.x, dy = n.y - S.mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${rgb},${(1 - d / 120) * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(S.mouse.x, S.mouse.y);
          ctx.stroke();
        }
      });

      S.nodes.forEach((n) => {
        const pulse = 0.5 + 0.5 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${n.bright ? 0.7 + pulse * 0.3 : 0.2 + pulse * 0.15})`;
        ctx.fill();
        if (n.bright) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${pulse * 0.06})`;
          ctx.fill();
        }
      });

      S.raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(S.raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
