export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  tags: string[];
  year: string;
  role: string;
  status: "em desenvolvimento" | "concluído" | "experimental" | "acadêmico";
  repoPublic: boolean;
  repoUrl?: string;
  publicationUrl?: string;
  shortDescription: string;
  longDescription: string;
  context: string;
  challenge: string;
  myRole: string;
  stack: string[];
  impact: string;
  learnings: string;
  featured: boolean;
  filterCategory: "professional" | "research" | "academic" | "experimental" | "earlywork";
  classification: "PROFESSIONAL" | "RESEARCH" | "ACADEMIC PROJECT" | "ACADEMIC EXPERIMENT" | "EARLY WORK";
}

export const projects: Project[] = [
  {
    slug: "agiliza-transparencia",
    title: "Agiliza Transparência",
    subtitle: "STC/MA",
    category: "GovTech · Full Stack · Software Engineering",
    tags: ["Next.js", "React", "TypeScript", "Python", "OCR", "Full Stack"],
    year: "2026",
    role: "Desenvolvedor de Software Full Stack Jr.",
    status: "em desenvolvimento",
    repoPublic: false,
    shortDescription:
      "Plataforma web proposta para a Secretaria de Estado da Transparência e Controle do Maranhão — modernizando o fluxo de coleta, validação e gerenciamento de dados entre a STC/MA e órgãos estaduais.",
    longDescription:
      "Sistema full stack para centralizar e modernizar a gestão de dados entre a STC/MA e órgãos estaduais do Maranhão, reduzindo dependência de processos manuais e aumentando a rastreabilidade das informações.",
    context:
      "A Secretaria de Estado da Transparência e Controle do Maranhão necessitava modernizar seus processos de coleta e validação de dados provenientes de múltiplos órgãos estaduais. O fluxo existente era fragmentado, dependente de planilhas e comunicação manual.",
    challenge:
      "Criar uma plataforma que centralizasse o fluxo de dados, oferecesse mecanismos robustos de autenticação e verificação, suportasse processamento de documentos via OCR, e fosse extensível para múltiplos órgãos estaduais com diferentes requisitos.",
    myRole:
      "Desenvolvimento da plataforma frontend em Next.js 16 + React 19 + TypeScript. Modelagem e estruturação de banco de dados relacional. Implementação de automações de atualização de status e sincronização de dados. Integração com Google Vision API para OCR e processamento de documentos. Definição de fluxos, mecanismos de autenticação e verificação de informações. Participação em reuniões de alinhamento e validação com equipes da STC.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Python", "Google Vision API", "SQL", "MySQL"],
    impact:
      "Projeto em desenvolvimento ativo com protótipo client-side estruturado contendo 49 objetos de dados, 276 campos definidos, 484 associações mapeadas e 417 testes comportamentais cadastrados. O sistema ainda está sendo validado em ambiente de desenvolvimento.",
    learnings:
      "Trabalhar em contexto GovTech exige rigor na modelagem de dados, atenção a fluxos de validação complexos e comunicação constante com stakeholders não-técnicos. A integração de OCR adicionou uma camada de processamento que demandou tratamento cuidadoso de edge cases.",
    featured: true,
    filterCategory: "professional",
    classification: "PROFESSIONAL",
  },
  {
    slug: "arquivo-digital-indigena",
    title: "Arquivo Digital de História Indígena",
    subtitle: "São José de Ribamar",
    category: "Research · Open Education · Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Acessibilidade", "Metadados", "IFMA"],
    year: "2024",
    role: "Desenvolvedor & Pesquisador",
    status: "acadêmico",
    repoPublic: false,
    publicationUrl: undefined,
    shortDescription:
      "Acervo digital dedicado à preservação, organização e disponibilização de documentos históricos relacionados à história indígena de São José de Ribamar — publicado nos Anais do Universo IF.",
    longDescription:
      "Projeto de iniciação científica e tecnológica desenvolvido no IFMA. Combina pesquisa histórica com desenvolvimento web para criar um sistema de acesso aberto ao patrimônio histórico indígena da região.",
    context:
      "A história indígena de São José de Ribamar era pouco acessível digitalmente. Documentos históricos estavam dispersos, sem organização e sem um ponto centralizado de acesso público.",
    challenge:
      "Criar uma estrutura digital capaz de preservar, organizar e disponibilizar documentos históricos com metadados corretos, busca funcional e acessibilidade como requisito fundamental, não como afterthought.",
    myRole:
      "Desenvolvimento da estrutura web. Definição de schema de metadados para documentos históricos. Implementação de funcionalidade de busca e filtros. Atenção a critérios de acessibilidade web. Pesquisa e curadoria de conteúdo histórico junto ao co-autor João Pedro.",
    stack: ["HTML", "CSS", "JavaScript", "SQL", "Metadados", "Acessibilidade Web"],
    impact:
      "Projeto publicado nos Anais do Universo IF. Contribui para preservação e acesso à memória histórica indígena regional. O sistema foi apresentado como projeto de iniciação científica e tecnológica.",
    learnings:
      "Trabalhar com preservação digital requer pensar além da interface — metadados corretos, estrutura semântica e acessibilidade são fundamentais quando o objetivo é garantir acesso de longo prazo à informação.",
    featured: true,
    filterCategory: "research",
    classification: "RESEARCH",
  },
  {
    slug: "edx-techx",
    title: "Plataforma Inteligente EDX/TechX",
    category: "AI Agents · Energy Tech · Academic",
    tags: ["AI Agents", "Python", "Data", "Automation", "Energy Tech"],
    year: "2026",
    role: "Pesquisador & Desenvolvedor",
    status: "experimental",
    repoPublic: false,
    shortDescription:
      "Plataforma baseada em agentes de IA aplicada à análise energética — explorando UFV, BESS e sistemas integrados. Projeto/desafio acadêmico.",
    longDescription:
      "Investigação e prototipação de agentes de inteligência artificial especializados para análise e geração de relatórios técnico-econômicos no contexto de sistemas de energia.",
    context:
      "Análise de sistemas energéticos como UFV e BESS envolve grandes volumes de dados técnicos e econômicos. A hipótese do projeto é que agentes de IA especializados podem acelerar e padronizar esse processo analítico.",
    challenge:
      "Definir a arquitetura de agentes, criar pipelines de processamento de dados energéticos e gerar outputs técnico-econômicos estruturados e úteis para tomada de decisão.",
    myRole:
      "Pesquisa sobre arquiteturas de agentes de IA. Prototipação de pipelines de processamento de dados. Estudo de contextos de UFV, BESS e sistemas integrados. Exploração de modelos LLM para geração de relatórios.",
    stack: ["Python", "AI Agents", "LLMs", "Data Processing", "Pandas"],
    impact:
      "Projeto experimental acadêmico em fase de exploração. Ainda não existe produto ou sistema em produção.",
    learnings:
      "Sistemas de agentes de IA para domínios especializados exigem curadoria cuidadosa de contexto e validação constante dos outputs para que sejam tecnicamente úteis.",
    featured: false,
    filterCategory: "academic",
    classification: "ACADEMIC PROJECT",
  },
  {
    slug: "automation-lab",
    title: "Automation Lab",
    category: "Automation · n8n · AI Workflows",
    tags: ["n8n", "APIs", "LLMs", "Google Workspace", "Webhooks"],
    year: "2025–2026",
    role: "Engenheiro de Automação",
    status: "experimental",
    repoPublic: false,
    shortDescription:
      "Coleção de experimentos de automação e agentes conectando IA, documentos, dados e processos — usando n8n como orquestrador.",
    longDescription:
      "Laboratório pessoal de automação explorando workflows de RH, integração com Google Drive/Sheets/Gmail, extração de informações de PDFs, chatbots e agentes LLM com n8n.",
    context:
      "Processos repetitivos consomem tempo que poderia ser dedicado a trabalho criativo e técnico. O Automation Lab é um espaço de experimentação contínua para reduzir fricção em fluxos comuns.",
    challenge:
      "Criar automações confiáveis que integrem múltiplos sistemas heterogêneos (APIs, documentos, emails, planilhas) com tratamento de erros e monitoramento adequados.",
    myRole:
      "Design e implementação de workflows em n8n. Integração com APIs externas. Configuração de agentes LLM para classificação e resumo automático. Extração de dados de PDFs. Notificações e chatbots.",
    stack: ["n8n", "Google Workspace APIs", "OpenAI/LLMs", "Webhooks", "JSON", "HTTP Request"],
    impact:
      "Conjunto de workflows funcionais para casos de uso práticos: automação de RH, processamento de documentos, notificações inteligentes e agentes conversacionais.",
    learnings:
      "Automação robusta não é apenas conectar sistemas — é prever falhas, criar fallbacks e garantir observabilidade do que está acontecendo em cada etapa do fluxo.",
    featured: false,
    filterCategory: "experimental",
    classification: "ACADEMIC EXPERIMENT",
  },
  {
    slug: "computer-vision-lab",
    title: "Computer Vision Lab",
    category: "AI · Computer Vision · Python",
    tags: ["YOLO", "OpenCV", "Python", "Detecção", "Webcam"],
    year: "2025",
    role: "Pesquisador & Desenvolvedor",
    status: "experimental",
    repoPublic: false,
    shortDescription:
      "Experimentos com visão computacional utilizando YOLO e OpenCV — detecção de objetos, reconhecimento de gestos, faces e análise em tempo real via webcam.",
    longDescription:
      "Laboratório de experimentos com computer vision explorando capacidades de detecção e reconhecimento visual em tempo real usando Python, OpenCV e modelos YOLO.",
    context:
      "Visão computacional é uma das fronteiras mais aplicáveis da IA. O Computer Vision Lab é um espaço de aprendizado prático com experimentos reais rodando via webcam.",
    challenge:
      "Implementar pipelines de inferência em tempo real que rodem eficientemente em hardware convencional, mantendo FPS aceitável e resultados de detecção úteis.",
    myRole:
      "Implementação de pipelines com YOLO e OpenCV. Experimentos com detecção de objetos, reconhecimento de gestos e faces. Análise de dados de inferência em tempo real.",
    stack: ["Python", "OpenCV", "YOLO", "NumPy", "Webcam API"],
    impact:
      "Conjunto de experimentos funcionais demonstrando aplicação prática de visão computacional. Projeto experimental de aprendizado — não é produto em produção.",
    learnings:
      "Computer vision exige equilíbrio entre precisão e performance. O ajuste de threshold de confiança e a escolha do modelo certo para o contexto são críticos para resultados úteis.",
    featured: false,
    filterCategory: "experimental",
    classification: "ACADEMIC EXPERIMENT",
  },
  {
    slug: "basquete-brasileiro",
    title: "Basquete Brasileiro",
    category: "Web Development · Foundations",
    tags: ["HTML", "CSS", "JavaScript", "DOM", "Dataset"],
    year: "2023",
    role: "Desenvolvedor Frontend",
    status: "concluído",
    repoPublic: true,
    repoUrl: "https://github.com/Darkzin41",
    shortDescription:
      "Buscador de informações sobre basquete brasileiro com pesquisa dinâmica, dataset JavaScript e manipulação de DOM — projeto de fundamentos web.",
    longDescription:
      "Aplicação web para pesquisa de dados sobre o basquete brasileiro, construída com fundamentos sólidos de HTML, CSS e JavaScript sem frameworks.",
    context:
      "Projeto desenvolvido durante a fase de aprendizado dos fundamentos do desenvolvimento web, explorando manipulação de DOM, eventos e estruturação de dados em JavaScript puro.",
    challenge:
      "Criar uma experiência de busca fluida e organizada apenas com HTML, CSS e JavaScript vanilla, sem depender de frameworks ou bibliotecas externas.",
    myRole:
      "Desenvolvimento completo da aplicação: estrutura HTML semântica, estilização CSS responsiva, lógica de pesquisa em JavaScript, estruturação do dataset e manipulação dinâmica do DOM.",
    stack: ["HTML", "CSS", "JavaScript"],
    impact:
      "Projeto de fundamentos concluído. Demonstra sólida compreensão dos princípios base do desenvolvimento web antes da adoção de frameworks.",
    learnings:
      "Trabalhar com JavaScript puro antes de frameworks cria uma base muito mais sólida. Entender como o DOM funciona de fato muda a forma como você usa React ou Vue depois.",
    featured: false,
    filterCategory: "earlywork",
    classification: "EARLY WORK",
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const allProjects = projects;
