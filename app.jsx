function App() {
  const accent = 'rgb(161, 227, 38)';

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-dim', 'rgba(161,227,38,0.12)');
    document.documentElement.style.setProperty('--accent-glow', 'rgba(161,227,38,0.35)');
  }, []);

  return (
    <>
      <GraphCanvas density={87} />
      <Nav accent={accent} />
      <Hero accent={accent} />
      <About accent={accent} />
      <Projects accent={accent} />
      <Footer accent={accent} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
