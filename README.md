Portfólio — Ariel Asafe

Portfólio pessoal de **Ariel Asafe**, desenvolvedor de software com atuação em desenvolvimento Full Stack, Python, automação e inteligência artificial.

O projeto apresenta trabalhos profissionais, pesquisas, experimentos acadêmicos, tecnologias, experiência e formação em uma interface editorial responsiva, com animações e interações acessíveis.

## Funcionalidades

- Página inicial com apresentação, projetos destacados, stack, experiência e contato;
- Tema escuro com cores de destaque configuráveis;
- Hero responsivo com visual Saturn renderizado em Canvas;
- Projetos organizados por classificação e filtros;
- Páginas individuais para cada projeto;
- Carrossel contínuo de tecnologias com suporte a mouse, touch e teclado;
- Pausa automática das animações fora da viewport ou quando a aba fica inativa;
- Suporte a `prefers-reduced-motion`;
- Navegação responsiva e acessível;
- Layout validado de 375 px a 1920 px.

## Projetos destacados

### Agiliza Transparência — STC/MA

Plataforma em desenvolvimento para centralizar a coleta, a validação e a gestão de dados entre a Secretaria de Estado da Transparência e Controle do Maranhão e órgãos estaduais.

### Arquivo Digital de História Indígena

Acervo digital dedicado à preservação e ao acesso à história indígena de São José de Ribamar, publicado nos Anais do Universo IF.

## Tecnologias

- React 19;
- TypeScript;
- React Router;
- Vite;
- Tailwind CSS 4;
- Canvas API;
- HTML, CSS e JavaScript.

O portfólio também apresenta tecnologias utilizadas ou estudadas, como Python, Next.js, PHP, Laravel, SQL, n8n, Power BI, Git/GitHub e VS Code.

## Executando localmente

### Requisitos

- Node.js compatível com o projeto;
- npm.

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação será disponibilizada pelo Vite no endereço exibido no terminal.

### Build de produção

```bash
npm run build
```

### Verificação TypeScript

```bash
npx tsc --noEmit
```

### Testes do movimento do carrossel

```bash
node --experimental-strip-types --test src/lib/carouselMotion.test.ts
```

## Estrutura principal

```text
src/
├── components/          # Seções, navegação, efeitos e componentes reutilizáveis
│   └── ui/              # Elementos básicos de interface
├── contexts/            # Preferência de cor de destaque
├── data/                # Projetos e tecnologias
├── hooks/               # Comportamentos reutilizáveis
├── lib/                 # Regras e testes do carrossel
├── pages/               # Home, projetos, detalhes e stack
├── App.tsx              # Rotas e composição global
├── index.css            # Tailwind, tokens e estilos globais
└── main.tsx             # Entrada da aplicação
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Página inicial |
| `/projects` | Relação e filtros de projetos |
| `/projects/:slug` | Detalhes de um projeto |
| `/stack` | Tecnologias e níveis de experiência |

## Acessibilidade e movimento

- Alvos interativos adequados para dispositivos móveis;
- Foco visível e navegação por teclado;
- Menu móvel com suporte à tecla `Escape` e restauração de foco;
- Carrossel com controles de pausa, setas, `Home` e `End`;
- Cópias decorativas ocultadas das tecnologias assistivas;
- Redução ou interrupção de movimento conforme a preferência do sistema;
- Animações pausadas quando estão fora da tela ou quando a página fica inativa.

## Contato

- [LinkedIn](https://www.linkedin.com/in/ariel-asafedev)
- [GitHub](https://github.com/Darkzin41)
- E-mail: `arielasafe09@gmail.com`

---

Desenvolvido por **Ariel Asafe**.
