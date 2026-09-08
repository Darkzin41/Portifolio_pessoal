CRIE UM PORTFÓLIO PROFISSIONAL DE ALTO NÍVEL PARA ARIEL ASAFE RABELO.

Não quero um template genérico de desenvolvedor.
Não quero aparência de currículo transformado em website.
Não quero excesso de neon, glassmorphism ou elementos "tech" clichês.

Quero um portfólio memorável, cinematográfico, moderno, editorial e altamente interativo, capaz de comunicar engenharia de software, inteligência artificial, criatividade e capacidade de resolver problemas reais.

O resultado deve parecer um produto digital premium criado especificamente para Ariel.

==================================================
01. OBJETIVO DO PORTFÓLIO
==================================================

O portfólio deve posicionar Ariel Asafe como:

Desenvolvedor de Software
Python & Inteligência Artificial
Full Stack em formação
Web Developer
Engenharia de Software
Automação
Dados
UX/UI como competência complementar

A mensagem central deve ser:

"Eu construo sistemas, automações e experiências digitais que transformam problemas reais em soluções inteligentes."

O portfólio precisa funcionar para:

- recrutadores;
- empresas de tecnologia;
- oportunidades de estágio/júnior;
- projetos de desenvolvimento;
- pesquisadores;
- professores;
- potenciais colaboradores;
- clientes ou parceiros futuros.

A primeira impressão precisa ser:

"Esse desenvolvedor não está apenas estudando linguagens. Ele está construindo sistemas, pesquisando, experimentando IA e resolvendo problemas reais."

==================================================
02. REFERÊNCIA VISUAL PRINCIPAL
==================================================

Use o portfólio de Perry Wang como PRINCIPAL REFERÊNCIA CONCEITUAL:

https://www.figma.com/pt-br/resource-library/exemplos-sites-portfolio/#exemplo-3-perry-wang

IMPORTANTE:

Não copie o website.

Absorva os princípios:

- hierarquia tipográfica extremamente forte;
- layout editorial;
- dark mode sofisticado;
- grandes espaços negativos;
- poucas informações competindo simultaneamente;
- navegação minimalista;
- projetos apresentados como histórias;
- screenshots grandes;
- textos curtos e precisos;
- mistura entre tipografia sans-serif e serif editorial;
- microinterações sofisticadas;
- foco absoluto nos projetos;
- sensação de produto premium;
- case studies mostrando problema, processo, decisões e resultado.

O portfólio deve possuir identidade própria de Ariel.

==================================================
03. DIREÇÃO ARTÍSTICA
==================================================

Conceito visual:

"SOFTWARE × SPACE × SYSTEMS"

A estética pode evocar:

- sistemas;
- órbitas;
- arquitetura;
- dados;
- partículas;
- conexões;
- interfaces;
- camadas;
- profundidade;
- movimento.

Mas sem cair em estética gamer ou cyberpunk exagerada.

Dark mode será a experiência principal.

Sugestão de base:

Background principal:
#08090C ou próximo disso.

Surface:
#101217

Surface elevated:
#151820

Texto primário:
#F5F6F8

Texto secundário:
#9CA3AF

Bordas:
rgba(255,255,255,0.08)

A cor de destaque NÃO deve ser hardcoded.

Criar sistema de Accent Colors usando CSS variables/tokens.

Possíveis temas:

- Electric Blue
- Cosmic Violet
- Emerald
- Solar Amber

O usuário poderá trocar a accent color.

Também deve existir:

Dark Mode
Light Mode

O dark mode deve ser o default.

O light mode não deve parecer uma versão invertida preguiçosamente.
Ele precisa continuar editorial, elegante e sofisticado.

==================================================
04. TIPOGRAFIA
==================================================

Criar contraste semelhante ao portfolio de Perry Wang.

Sugestão:

Principal:
Geist / Neue Montreal-like / Inter moderna.

Editorial:
Gloock ou serif equivalente.

Use serif SOMENTE em palavras selecionadas.

Exemplo:

"Construindo sistemas que transformam
complexidade em *clareza*."

Onde "clareza" poderia usar a fonte serif.

Não exagerar.

Título principal deve possuir dimensões enormes.

Desktop:

96px a 160px dependendo do viewport.

Mobile:

56px a 72px.

==================================================
05. GRID
==================================================

Desktop:

12-column grid.

Max width:
1440px ou aproximadamente 1600px.

Margens generosas.

Tablet:
8 colunas.

Mobile:
4 colunas.

Usar Auto Layout corretamente.

Todos os componentes precisam ser responsivos.

==================================================
06. NAVEGAÇÃO
==================================================

Criar navbar minimalista e sticky.

Desktop:

[A / símbolo pessoal]

Início
Projetos
Stack

lado direito:

LinkedIn ↗
GitHub ↗
Theme Toggle
Accent Color Toggle

Use comportamento visual parecido com pills minimalistas.

A navbar inicialmente pode ser transparente.

Ao scroll:

aplicar backdrop blur muito leve;
background escuro com baixa opacidade;
border discreta.

Não ocupar espaço demais.

Mobile:

menu compacto e elegante.

==================================================
07. ESTRUTURA DO WEBSITE
==================================================

Criar:

01 — Página Inicial
02 — Projetos
03 — Página individual de cada projeto
04 — Stack & Habilidades

Além disso:

footer global;
contato;
experiência e formação integradas à Home ou Stack.

NÃO é necessária uma página "Sobre mim" separada.

==================================================
08. HERO DA HOME
==================================================

Esta seção precisa causar maior impacto visual.

Layout desktop:

lado esquerdo / centro:
conteúdo textual.

lado direito:
Particle Saturn.

Primeiro pequeno label:

SOFTWARE DEVELOPER / PYTHON & AI

Depois utilizar FLUID TEXT para:

ARIEL
ASAFE

O nome precisa ser enorme.

Utilizar exatamente o componente Originkit Fluid Text.

Use the Originkit MCP to add the "Fluid Text" component to this project.

Run the following MCP tool call:

originkit: get fluid-text

Then wire it into the codebase exactly as the MCP returns it.
Do not recreate or rewrite it from scratch.

O Fluid Text deve ser aplicado principalmente ao nome.

Abaixo:

"Construo sistemas, automações e experiências digitais que transformam problemas reais em soluções inteligentes."

Texto secundário:

"Desenvolvedor de Software com foco em Python, IA e desenvolvimento Full Stack, explorando engenharia de software, automação, dados e experiências digitais."

Adicionar pequena linha:

São Luís, Maranhão · Brasil

Não transformar localização em destaque principal.

==================================================
09. PARTICLE SATURN
==================================================

Usar Saturn como elemento visual central do HERO.

Use the Originkit MCP to add the "Particle Saturn" component to this project.

Run:

originkit: get particle-saturn

Then wire it into the codebase exactly as the MCP returns it.
Do not recreate or rewrite it from scratch.

O Saturn NÃO deve simplesmente ficar solto no fundo.

Dar função narrativa a ele.

Conceito:

Saturn representa o "ecossistema tecnológico" de Ariel.

Ao redor dele podem existir labels muito discretos seguindo a órbita:

SOFTWARE
AI
AUTOMATION
DATA
WEB

Não transformar isso em infográfico literal.

Os labels devem surgir suavemente.

Saturn:

- parcialmente cortado pelo viewport;
- grande;
- escuro;
- partículas sutis;
- brilho de accent color;
- reagir suavemente ao cursor;
- possuir profundidade;
- acompanhar levemente o parallax.

Ao iniciar scroll:

Saturn deve deslocar lentamente para trás enquanto o conteúdo avança.

Isso cria a transição entre Hero e Projetos.

==================================================
10. CTA
==================================================

Primary CTA:

"Explorar projetos"

Secondary:

"GitHub ↗"

Opcional:

"Falar comigo"

Primary buttons devem utilizar Starfield Button.

Use the Originkit MCP to add the "Starfield Button" component to this project.

Run:

originkit: get starfield-button

Then wire it into the codebase exactly as the MCP returns it.
Do not recreate or rewrite it from scratch.

NÃO usar Starfield Button em todos os lugares.

Somente CTAs importantes.

Botões secundários devem ser minimalistas.

==================================================
11. PARALLAX
==================================================

O website inteiro deve possuir uma experiência de scroll cinematográfica.

Instalar:

pnpm dlx shadcn add @skiper-ui/skiper29

Usar Skiper29 / Siena Parallax como fundação/referência do comportamento de parallax.

Preservar:

- suavidade;
- profundidade;
- scroll cinematográfico;
- image scaling;
- movimento em diferentes velocidades;
- Lenis smooth scrolling;
- Framer Motion.

Personalizar os assets e conteúdo para o portfolio.

Não transformar cada seção em um efeito diferente.

O parallax deve parecer parte de um único sistema visual.

==================================================
12. FEATURED WORK
==================================================

Logo após o Hero:

pequeno label:

SELECTED WORK
ou
PROJETOS EM DESTAQUE

Headline:

"Problemas reais.
Sistemas reais."

Criar exatamente dois grandes projetos destacados.

Eles são os projetos mais importantes do portfólio.

================================
PROJETO 01
AGILIZA TRANSPARÊNCIA — STC/MA
================================

Título:

Agiliza Transparência

Categoria:

GovTech · Full Stack · Software Engineering

Contexto:

Plataforma web proposta para a Secretaria de Estado da Transparência e Controle do Maranhão.

Objetivo:

modernizar e centralizar o fluxo de coleta, validação e gerenciamento de dados entre a STC/MA e órgãos estaduais.

Função de Ariel:

Desenvolvedor de Software Full Stack Jr.

Atuação:

- desenvolvimento da plataforma;
- modelagem e estruturação de banco de dados;
- automações;
- atualização de status;
- sincronização de dados;
- mecanismos de autenticação;
- verificação de informações;
- OCR e processamento de documentos com Google Vision API;
- definição de fluxos;
- melhoria de UX;
- reuniões de alinhamento e validação com equipes da STC.

Estado técnico atual conhecido do frontend:

Next.js 16
React 19
TypeScript

Dados reais disponíveis no protótipo/documentação:

49 objetos
276 campos
484 associações
31 campos multitema

41 objetos manuais elegíveis
8 objetos automatizados

417 testes comportamentais
38 testes E2E cadastrados

IMPORTANTE:

O frontend atual possui protótipo client-side e o backend é tratado separadamente.

NÃO inventar que integrações ainda não implementadas estão em produção.

Não expor informações confidenciais.

Se o repositório for privado:
NÃO apresentar botão público falso de GitHub.

Mostrar:

[Ver Case Study →]

Adicionar tag:

Em desenvolvimento

Visual:

mockups amplos do dashboard;
fluxos;
arquitetura;
planilhas;
cards institucionais;
interfaces do sistema.

================================
PROJETO 02
ARQUIVO DIGITAL DE HISTÓRIA INDÍGENA
DE SÃO JOSÉ DE RIBAMAR
================================

Categoria:

Research · Open Education · Web Development

Projeto desenvolvido no contexto do IFMA.

Objetivo:

criar um acervo digital dedicado à preservação, organização e disponibilização de documentos históricos relacionados à história indígena de São José de Ribamar.

Apresentar como:

tecnologia aplicada à preservação histórica, educação e acesso à informação.

Projeto publicado nos Anais do Universo IF.

Autores:

Ariel Asafe Durans Rabelo
João Pedro Mendes Alves

Área:

Ciências Humanas

Projeto associado a iniciação científica e tecnológica.

Possíveis stacks e frentes:

HTML
CSS
JavaScript
estruturação web
metadados
busca
acessibilidade
banco de dados relacional
evolução de backend

Não inventar funcionalidades concluídas.

Separar claramente:

implementado;
em evolução;
planejado.

CTAs:

[Ver Case Study →]
[Ver publicação ↗]

==================================================
13. DESIGN DOS FEATURED PROJECTS
==================================================

Não usar cards pequenos.

Cada projeto deve parecer quase uma landing page dentro da Home.

Desktop:

imagem grande;
metadata;
título;
descrição;
tags;
arrow.

Alternar composição.

Projeto 01:
texto esquerdo + visual grande.

Projeto 02:
visual grande + texto.

Hover:

- imagem escala 1.02;
- arrow desliza;
- border ganha leve brilho;
- accent color aparece sutilmente.

No scroll:

imagem entra com reveal;
texto se move em velocidade ligeiramente diferente.

==================================================
14. TODOS OS PROJETOS
==================================================

Criar página:

/projects

Headline:

"Projetos, experimentos
e sistemas."

Adicionar filtros:

Todos
Software
AI & Data
Automation
UX/UI
Research

Projetos sugeridos:

1. Agiliza Transparência — STC/MA
2. Arquivo Digital de História Indígena
3. Plataforma Inteligente EDX / TechX
4. Automations Lab — n8n
5. Computer Vision Lab
6. Sistema de Recomendação KNN
7. Basquete Brasileiro
8. Conscious Product — UX/User Flow

==================================================
15. PROJETO — EDX / TECHX
==================================================

Apresentar como projeto/desafio acadêmico.

Foco:

plataforma baseada em agentes de inteligência artificial aplicada a análise energética.

Contextos estudados:

UFV
BESS
sistemas integrados

Possíveis capacidades:

- agentes de IA especializados;
- processamento de dados;
- padronização;
- relatórios técnico-econômicos;
- apoio à análise.

Não apresentar como produto comercial publicado se não houver confirmação.

Tags:

AI Agents
Python
Data
Automation
Energy Tech

==================================================
16. AUTOMATIONS LAB
==================================================

Criar case/project collection agrupando experimentos com n8n.

Mostrar visualmente workflows em nodes.

Exemplos:

- automação de RH;
- Google Drive;
- Google Sheets;
- Gmail;
- extração de informações de PDFs;
- classificação;
- notificações;
- resumo automático;
- chatbot;
- agentes LLM.

Título:

Automation Lab

Descrição:

"Experimentos de automação e agentes conectando IA, documentos, dados e processos."

Stack:

n8n
APIs
LLMs
Google Workspace
JSON
Webhooks

==================================================
17. COMPUTER VISION LAB
==================================================

Projeto experimental.

Mostrar:

YOLO
OpenCV
Python

Experimentos envolvendo:

detecção de objetos;
reconhecimento visual;
webcam;
gestos;
faces;
objetos.

Visual:

bounding boxes;
frames;
interface dark;
dados de inferência.

Não inventar acurácia.

==================================================
18. KNN RECOMMENDER
==================================================

Projeto de aprendizado de Machine Learning.

Sistema de recomendação utilizando KNN.

Possível contexto:

filmes / TMDB.

Mostrar:

pipeline:

Dados
↓
Pré-processamento
↓
Features
↓
KNN
↓
Recomendação

Stack:

Python
Pandas
Scikit-learn
Data Processing
Machine Learning

==================================================
19. BASQUETE BRASILEIRO
==================================================

Projeto anterior mostrando fundamentos web.

Buscador de informações sobre basquete brasileiro.

Tecnologias:

HTML
CSS
JavaScript

Funcionalidades:

- pesquisa;
- dataset JavaScript;
- manipulação do DOM;
- exibição dinâmica de resultados.

Apresentar dentro de:

"Foundations / Early Work"

O objetivo não é fingir que ele possui a mesma complexidade dos projetos atuais.

Mostrar a evolução técnica de Ariel.

==================================================
20. UX / CONSCIOUS PRODUCT
==================================================

Projeto de UX/UI.

Aplicativo para ajudar usuários a escolher produtos de maneira mais consciente.

Mostrar:

User Flow
wireframes
decisões
comparação de produtos
avaliações
relatórios
filtros

Pode servir como demonstração de pensamento de produto e UX.

==================================================
21. PROJECT DETAIL TEMPLATE
==================================================

Cada projeto deve possuir rota individual:

/projects/[slug]

Criar template consistente.

Estrutura:

01 HERO

Título
Categoria
Ano
Role
Status
Stack

Visual principal enorme.

02 CONTEXTO

"O problema"

Explique por que o projeto existe.

03 DESAFIO

Qual problema precisava ser resolvido?

04 MINHA ATUAÇÃO

Exatamente o que Ariel realizou.

05 PROCESSO

Discovery
Planning
Architecture
Implementation
Testing
Iteration

Não mostrar todas as etapas se não fizeram parte daquele projeto.

06 ARQUITETURA / FLOW

Diagramas técnicos.

07 DECISÕES

Criar cards:

"Decision 01"
"Decision 02"
"Decision 03"

Explicar trade-offs.

08 TECNOLOGIA

Stack utilizada.

09 RESULTADO / IMPACTO

Use números APENAS quando existirem.

Jamais inventar:

+40% efficiency
+60% speed
1000 users

etc.

Se não houver métrica:

usar impacto qualitativo.

10 APRENDIZADOS

"What I learned"

11 NEXT

"Próximo projeto"

Criar transição visual para o próximo case study.

==================================================
22. STACK SECTION NA HOME
==================================================

Criar uma transição:

"Tools change.
The way I solve problems doesn't."

ou em português:

"Ferramentas mudam.
A forma de resolver problemas evolui."

Depois:

STACK

Usar Grainy Carousel.

Use the Originkit MCP to add the "Grainy Carousel" component to this project.

Run:

originkit: get grainy-carousel

Then wire it into the codebase EXACTLY as the MCP returns it.

DO NOT recreate the component.
DO NOT rewrite it from scratch.

Usar o movimento/interação original.

Caso o MCP não esteja disponível:

utilizar o código GrainyCarousel fornecido junto ao projeto como fallback.

Preservar:

- canvas;
- WebGL;
- efeito grain;
- drag;
- flick;
- click-to-step;
- infinite looping;
- fallback 2D.

Não transformar o componente em um carousel comum.

==================================================
23. CONTEÚDO DO GRAINY CAROUSEL
==================================================

Criar cards visuais para:

Python
JavaScript
TypeScript
React
Next.js
PHP
Laravel
HTML
CSS
SQL
MySQL
Git
GitHub
n8n
OpenCV
YOLO
Scikit-learn
Pandas
Power BI
Figma
APIs
LLMs

Não colocar 20 cards iguais.

Agrupar visualmente.

Exemplo:

PYTHON / AI
FRONTEND
BACKEND
DATA
AUTOMATION
DEV TOOLS
DESIGN

O Grainy Carousel pode utilizar posters/imagens gráficas geradas especificamente para as stacks.

Cada poster deve possuir:

logo;
nome;
background minimalista;
accent glow.

Não utilizar logos gigantes e coloridos de forma caótica.

==================================================
24. STACK & SKILLS PAGE
==================================================

Criar rota:

/stack

Headline:

"Technology is the toolkit.
Problem solving is the skill."

ou versão em português equivalente.

Organizar por categorias.

FRONTEND

HTML
CSS
JavaScript
TypeScript
React
Next.js

BACKEND

Python
PHP
Laravel
APIs
SQL
MySQL

AI & DATA

Python
Pandas
Scikit-learn
KNN
OpenCV
YOLO
LLMs
Data Analysis
Power BI

AUTOMATION

n8n
Webhooks
Google APIs
Gmail
Google Drive
Google Sheets
API integrations

TOOLS

Git
GitHub
VS Code
Figma

Não utilizar barras como:

Python 95%
React 87%

Isso é artificial.

Utilizar níveis mais honestos:

"Uso em projetos"
"Em desenvolvimento"
"Explorando"

Melhor ainda:

relacionar skills com projetos.

Exemplo:

Python
Used in:
Computer Vision
KNN
Automation
AI experiments

==================================================
25. EXPERIENCE
==================================================

Adicionar seção compacta na Home.

Título:

EXPERIENCE

Secretaria de Estado da Transparência e Controle
Desenvolvedor de Software Full Stack Jr.
2026 — presente

Resumo em 2-3 linhas.

Não transformar em currículo enorme.

Usar timeline minimalista.

==================================================
26. EDUCATION
==================================================

Adicionar:

Universidade Ceuma

CST em Análise e Desenvolvimento de Sistemas
2026 — 2028

IFMA — Instituto Federal do Maranhão

Técnico em Informática para Internet
2023 — 2025

INCODE — Tech School

Formação
2025

==================================================
27. RECOGNITION
==================================================

Criar seção pequena:

RECOGNITION

Exemplos:

Universo IF
Pesquisa / iniciação científica e tecnológica

Hackathon MGEST 2026

Certificações selecionadas relacionadas a:

Data Analytics
Generative AI
AI Agents
UX/UI
Google Gemini
JavaScript

Não transformar isso em parede de certificados.

Mostrar apenas os mais relevantes.

Criar CTA:

"Ver LinkedIn ↗"

==================================================
28. ABOUT / PERSONALIDADE
==================================================

O site pode mostrar personalidade sem virar diário pessoal.

Adicionar pequeno manifesto:

"Curioso por sistemas, inteligência artificial e pela forma como tecnologia pode simplificar problemas complexos.

Meu trabalho vive entre código, arquitetura, automação, dados e produto."

Opcionalmente:

"Quando não estou construindo alguma coisa, provavelmente estou estudando tecnologia, treinando ou jogando."

Manter curto.

==================================================
29. THEME TOGGLE
==================================================

Instalar:

pnpm dlx shadcn add @skiper-ui/skiper4

Usar Skiper4 para o visual animado do botão.

IMPORTANTE:

Skiper4 sozinho representa o ícone/animation.

Implementar a troca REAL de tema utilizando provider de tema e useThemeToggle/next-themes.

Se necessário instalar e integrar o mecanismo do Skiper26.

Dark:
default.

Light:
available.

Persistir preferência.

Respeitar system theme se apropriado.

==================================================
30. ACCENT COLOR TOGGLE
==================================================

Criar segundo controle.

Ícone:

pequeno círculo/asterisco.

Clique:

abrir palette popover.

Temas:

Electric Blue
Cosmic Violet
Emerald
Solar Amber

Toda interface deve reagir via design tokens:

--accent
--accent-soft
--accent-glow

Alterar:

buttons;
selection;
hover;
links;
Saturn;
small glows;
focus ring.

Não mudar o background inteiro.

==================================================
31. MICROINTERAÇÕES
==================================================

Implementar:

links com underline animado;
arrows deslocando 4-8px;
cards com scale muito leve;
imagens com parallax;
text reveal;
fade;
mask reveal;
cursor response;
number reveal;
scroll progress discreto.

Evitar:

bouncing exagerado;
efeitos aleatórios;
animação em cada palavra;
glow em tudo.

O site deve parecer caro, não barulhento.

==================================================
32. TRANSIÇÕES DE PÁGINA
==================================================

Ao abrir um projeto:

card selecionado deve expandir ou haver transição de continuidade.

Se isso for inviável:

fade + translate suave.

Tempo:

300-600ms.

==================================================
33. RESPONSIVIDADE
==================================================

Desktop recebe a experiência completa.

Tablet:

reduzir movimento.

Mobile:

- Saturn menor;
- menos partículas;
- parallax reduzido;
- grandes títulos responsivos;
- cards empilhados;
- Grainy Carousel touch-friendly;
- buttons com mínimo 44px;
- navbar compacta.

Não tentar replicar todos os efeitos desktop no mobile.

==================================================
34. PERFORMANCE
==================================================

Particle Saturn, WebGL e parallax não podem destruir performance.

Implementar:

lazy loading;
dynamic imports quando apropriado;
image optimization;
particle reduction mobile;
requestAnimationFrame corretamente;
evitar re-render desnecessário;
GPU transforms;
prefers-reduced-motion.

Objetivo:

60 FPS quando possível.

==================================================
35. ACCESSIBILITY
==================================================

WCAG AA.

Adicionar:

semantic HTML;
keyboard navigation;
focus visible;
ARIA labels;
alt text;
contraste correto;
buttons reais;
links reais.

Respeitar:

prefers-reduced-motion.

Quando ativo:

reduzir/desativar:

parallax intenso;
Saturn motion;
complex scroll animations.

O conteúdo deve continuar perfeito sem animação.

==================================================
36. IMAGENS DOS PROJETOS
==================================================

NÃO usar imagens genéricas de Unsplash para representar projetos de software.

Prioridade:

1. screenshots reais;
2. mockups construídos a partir das screenshots;
3. diagramas;
4. wireframes;
5. visualizações abstratas derivadas do sistema.

Se screenshot ainda não estiver disponível:

mostrar placeholder claramente substituível.

Exemplo:

[PROJECT SCREENSHOT]

Não inventar uma interface que pareça ser produção real.

==================================================
37. GITHUB
==================================================

Perfil correto:

https://github.com/Darkzin41

NÃO utilizar:

https://github.com/?locale=pt-br

pois esse endereço é apenas a página geral do GitHub.

Para projetos públicos:

mostrar GitHub ↗

Para privados:

não mostrar link falso.

Pode mostrar:

Private Repository
ou
Code under project restrictions

de maneira discreta.

==================================================
38. LINKEDIN
==================================================

Utilizar:

https://www.linkedin.com/in/ariel-asafedev

Adicionar no:

navbar;
footer;
Recognition.

==================================================
39. CONTACT
==================================================

Footer cinematográfico.

Grande frase:

"Let's build something useful."

ou:

"Vamos transformar uma ideia em sistema."

Mostrar:

arielasafe09@gmail.com

LinkedIn ↗
GitHub ↗

Primary CTA pode usar Starfield Button.

==================================================
40. FOOTER
==================================================

Estrutura:

ARIEL ASAFE

Software Developer
Python & AI
Full Stack

São Luís · Maranhão · Brasil

Links.

Pequeno texto:

Designed & built with curiosity, code and too many open tabs.

ou versão equivalente em português.

Adicionar ano automaticamente.

==================================================
41. SEO / METADATA
==================================================

Title:

Ariel Asafe — Software Developer | Python & AI

Description:

"Portfólio de Ariel Asafe, desenvolvedor de software focado em Python, inteligência artificial, desenvolvimento Full Stack, automação e sistemas digitais."

OpenGraph preparado.

Structured metadata quando disponível.

==================================================
42. PRINCÍPIOS DE CONTEÚDO
==================================================

REGRA ABSOLUTA:

Não inventar conquistas.

Não inventar métricas.

Não inventar usuários.

Não inventar clientes.

Não inventar tecnologias.

Não inventar features.

Não inventar deployment.

Não chamar protótipo de produto em produção.

Projetos experimentais devem ser apresentados como experimentais.

Projetos acadêmicos devem ser apresentados como acadêmicos.

Projetos profissionais devem indicar o contexto profissional correto.

Isso aumenta a credibilidade do portfólio.

==================================================
43. PRINCÍPIOS DE DESIGN
==================================================

Sempre perguntar visualmente:

"Isso ajuda a mostrar Ariel ou só é um efeito bonito?"

Se for apenas efeito:
reduzir ou remover.

Prioridade:

1. conteúdo;
2. projetos;
3. narrativa;
4. tipografia;
5. interação;
6. decoração.

==================================================
44. COMPONENT SYSTEM
==================================================

Criar componentes reutilizáveis:

Navbar
Hero
FluidTitle
StarfieldCTA
ProjectCard
FeaturedProject
ProjectMetadata
Tag
SectionHeader
StackPoster
StackCarousel
ExperienceItem
RecognitionItem
Footer
ThemeToggle
AccentToggle
ProjectNext
CaseStudySection

Utilizar variants.

Auto Layout.

Variables.

Tokens.

Não criar 40 componentes visualmente diferentes para a mesma finalidade.

==================================================
45. DESIGN TOKENS
==================================================

Criar variables para:

background
surface
surface-elevated
text-primary
text-secondary
border
accent
accent-soft
accent-glow

Spacing:

4
8
12
16
24
32
48
64
96
128

Radius:

8
12
16
24
999

Typography tokens.

==================================================
46. FINAL EXPERIENCE
==================================================

A experiência ideal:

O visitante abre o site.

Vê:

ARIEL ASAFE

Um Saturn formado por partículas aparece ao lado.

A mensagem deixa claro imediatamente que se trata de software + IA.

Ele rola.

O planeta lentamente se afasta.

Aparece:

"Problemas reais. Sistemas reais."

Agiliza Transparência surge ocupando quase toda a tela.

Depois:

Arquivo Digital de História Indígena.

O usuário percebe que Ariel possui atuação profissional + pesquisa.

Depois:

os projetos experimentais mostram IA, visão computacional, automação e dados.

O Grainy Carousel mostra o arsenal técnico.

Timeline mostra experiência e formação.

Recognition mostra pesquisa, hackathons e certificações.

Footer finaliza com contato.

O visitante deve sair pensando:

"Ele ainda está construindo sua carreira, mas já pensa e apresenta trabalho como alguém que constrói produtos e sistemas de verdade."

==================================================
47. MCP COMPONENTS — ORDEM DE IMPLEMENTAÇÃO
==================================================

Primeiro:

Originkit Fluid Text

originkit: get fluid-text

Segundo:

Originkit Particle Saturn

originkit: get particle-saturn

Terceiro:

Originkit Starfield Button

originkit: get starfield-button

Quarto:

Originkit Grainy Carousel

originkit: get grainy-carousel

REGRA:

Wire each component exactly as returned by the MCP.

Do not rebuild or approximate the components manually.

Depois:

pnpm dlx shadcn add @skiper-ui/skiper29

para Siena Parallax.

Depois:

pnpm dlx shadcn add @skiper-ui/skiper4

para Theme Toggle.

Se Skiper4 não implementar a mudança efetiva de tema sozinho,
integrar corretamente o mecanismo de theme state/provider.

==================================================
48. RESULTADO ESPERADO
==================================================

Entregar:

Desktop 1440px
Tablet
Mobile

Com:

Página Inicial
Projetos
Project Detail
Stack & Skills

Criar protótipo navegável.

Todas as interações principais precisam funcionar.

A hierarquia deve estar completa.

Não entregue apenas wireframes.

Quero UI high-fidelity.

Comece pela HOME.

Antes de adicionar detalhes decorativos, finalize:

layout;
hierarquia;
tipografia;
narrativa;
projetos principais;
responsividade.

Somente depois implemente:

parallax;
Particle Saturn;
Fluid Text;
Grainy Carousel;
Starfield Buttons;
toggles;
microinterações.

O produto final deve parecer a interseção entre:

software engineering portfolio
×
interactive product website
×
editorial case study
×
cinematic digital experience.

Ele deve ser reconhecível como o portfólio de ARIEL ASAFE.