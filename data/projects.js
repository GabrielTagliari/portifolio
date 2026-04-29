var PROJECTS = [
  {
    id: 'q8rn',
    code: 'Q8RN',
    title: 'Q8RN - Questionário dos Oito Remédios Naturais',
    subtitle: 'Vue 3 · Firebase · Zero DevOps',
    status: 'Entregue',
    url: 'https://q8rn.com',
    preview: 'img/q8rn-preview.png',
    problem: 'Um grupo de pesquisa não tinha plataforma para coletar dados estruturados de saúde em campo — respondentes usando mobile com conectividade ruim, zero orçamento para infraestrutura, zero capacidade de DevOps. O problema era real e sem solução existente que se encaixasse.',
    ship: 'Plataforma em produção com múltiplos pesquisadores ativos, coleta de dados em tempo real e zero incidentes de infraestrutura desde o lançamento.',
    architecture: [
      { node: 'Vue 3 SPA', role: 'Framework frontend', detail: 'Composition API + estado reativo, UI responsiva para pesquisadores em campo no mobile e desktop' },
      { node: 'Firebase Auth', role: 'Camada de autenticação', detail: 'Email/senha + sessões anônimas para respondentes, controle de acesso por função para pesquisadores' },
      { node: 'Realtime DB', role: 'Sincronização em tempo real', detail: 'Latência abaixo de 100ms para envios simultâneos de formulários; sem necessidade de provisionar servidores' },
      { node: 'Cloud Storage', role: 'Camada de ativos', detail: 'Armazena anexos de mídia e datasets exportados; CDN global para acesso rápido' },
      { node: 'Analytics', role: 'Camada de insights', detail: 'Eventos customizados rastreando taxa de conclusão, pontos de abandono e duração da sessão por pergunta' },
      { node: 'Hosting', role: 'Entrega', detail: 'CI/CD zero-config via Firebase Hosting; CDN global com SSL incluso' }
    ],
    decisions: [
      { title: 'Por que Firebase e não um backend próprio?', body: 'O grupo de pesquisa não tinha capacidade de DevOps. O Firebase entregou auth, storage, sincronização em tempo real e hosting como um único serviço gerenciado — reduzindo o overhead operacional a quase zero, atendendo todos os requisitos de dados.' },
      { title: 'Por que Vue 3 e não React?', body: 'Para fins de estudos e por ser uma linguagem que na época eu gostava mais, simples assim :)' }
    ],
    stack: ['Vue 3', 'Firebase Auth', 'Realtime Database', 'Cloud Storage', 'Analytics', 'Firebase Hosting', 'CSS3']
  }
];
