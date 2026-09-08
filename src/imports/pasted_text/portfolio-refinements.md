==================================================
57. REFINAMENTO FINAL DA COMPOSIÇÃO
==================================================

A principal correção visual desta etapa é fazer o portfólio parecer
CENTRALIZADO COMO COMPOSIÇÃO,
e não simplesmente aplicar text-align: center em todos os elementos.

IMPORTANTE:

Não centralizar parágrafos longos, cases ou conteúdos técnicos.

Centralizar:

- Hero;
- títulos;
- introduções;
- frases editoriais;
- transições;
- CTAs;
- headings das páginas.

Manter alinhado à esquerda:

- conteúdo técnico;
- descrições maiores;
- listas;
- informações dos projetos;
- experiência;
- case studies.

O objetivo é criar um website editorial e equilibrado.

==================================================
58. GEOMETRIA GLOBAL DA PÁGINA
==================================================

Criar uma estrutura visual semelhante a:

VIEWPORT

        ┌────────────────────────────────────┐
        │                                    │
        │       CONTAINER PRINCIPAL          │
        │                                    │
        │       conteúdo organizado          │
        │                                    │
        └────────────────────────────────────┘

O container deve permanecer centralizado independentemente da resolução.

Evitar o comportamento atual:

| conteúdo conteúdo conteúdo                          espaço vazio |
| conteúdo conteúdo                                  espaço vazio |
| conteúdo                                           espaço vazio |

O resultado esperado:

          |         CONTAINER CENTRAL          |

                 heading da seção

          conteúdo              conteúdo

                 conteúdo

Em telas 1920px:

não aumentar infinitamente a largura do conteúdo.

Usar aproximadamente:

max-width: 1360px - 1440px.

==================================================
59. CONTENT WIDTH SYSTEM
==================================================

Nem todo conteúdo deve possuir a mesma largura.

Criar três larguras semânticas.

NARROW:

max-width: 680px;

Para:

- parágrafos;
- descrições;
- conteúdo editorial.

MEDIUM:

max-width: 900px;

Para:

- Hero copy;
- headlines;
- introduções;
- manifestos.

WIDE:

max-width: 1400px;

Para:

- grids;
- projetos;
- imagens;
- carousel;
- componentes visuais.

Sempre:

margin-inline: auto.

Isso ajuda a criar hierarquia visual.

==================================================
60. HERO — COMPOSIÇÃO DEFINITIVA
==================================================

Quero que o Hero tenha aproximadamente esta organização visual:

                SOFTWARE DEVELOPER / PYTHON & AI


                          ARIEL
                         Asafe


              Construo sistemas, automações
           e experiências digitais que transformam
                problemas em soluções.


             [ Explorar projetos ]   GitHub ↗


                São Luís · Maranhão · Brasil


O conteúdo deve ocupar aproximadamente:

max-width: 900px;

margin-inline: auto.

Pode existir variação editorial de alinhamento,
mas a MASSA VISUAL precisa estar próxima ao centro da tela.

==================================================
61. SATURN COMO CAMADA
==================================================

Saturn não deve parecer uma imagem colocada ao lado do texto.

Ele deve funcionar como CAMADA VISUAL.

Hierarquia:

Layer 01:
background.

Layer 02:
glow / partículas.

Layer 03:
Saturn.

Layer 04:
conteúdo Hero.

Layer 05:
navigation.

O Saturn pode ocupar uma grande área da viewport.

Exemplo:

top:
40%;

left:
65%;

transform:
translate(-50%, -50%);

ou composição equivalente.

Mas parte do planeta pode ficar fora da viewport.

Não deixar o planeta completamente isolado em uma coluna.

==================================================
62. PROFUNDIDADE DO HERO
==================================================

Criar profundidade através de três velocidades.

Background:
0.25x

Saturn:
0.55x

Texto:
1x

Durante scroll:

Saturn continua visualmente presente por alguns momentos,
enquanto o texto sobe.

O usuário deve sentir que está avançando através da cena.

==================================================
63. TRANSIÇÃO PARA SELECTED WORK
==================================================

Evitar:

Hero acaba.
Outro bloco começa imediatamente.

Criar área de transição.

Exemplo:

Hero
↓
120px espaço visual
↓
pequeno label
SELECTED WORK
↓
24px
Problemas reais.
Sistemas reais.
↓
72px
primeiro projeto.

Saturn ainda pode aparecer parcialmente no começo desta área.

Depois desaparecer gradualmente.

==================================================
64. PROJETOS COMO PEÇAS EDITORIAIS
==================================================

Os Featured Projects não devem parecer componentes de dashboard.

Remover sensação de:

card + card + card.

Cada Featured Project deve parecer uma composição editorial grande.

Exemplo:

┌─────────────────────────────────────────────────────────┐

       PROJECT VISUAL / MOCKUP

└─────────────────────────────────────────────────────────┘

GOVTECH · 2026

AGILIZA
TRANSPARÊNCIA

Plataforma para modernização dos fluxos
de coleta e validação da STC/MA.

Next.js · React · TypeScript

Ver case study →

O visual é prioridade.

O texto apenas contextualiza.

==================================================
65. FEATURED PROJECT — PROPORÇÃO
==================================================

Desktop:

imagem / mockup:

height:
500-700px.

Texto:

max-width:
520-600px.

Espaço entre projeto e projeto:

140-200px.

Não colocar dois Featured Projects quase colados.

Quero sensação de exposição / galeria.

==================================================
66. REDUZIR METADATA
==================================================

Nos cards da página Projects:

máximo:

1 categoria;
1 status;
3 stacks.

Não mostrar simultaneamente:

Professional
Software
Full Stack
GovTech
2026
React
Next.js
TypeScript
Automation
Database
Active
View project

Simplificar.

Exemplo:

GOVTECH · 2026

Agiliza Transparência

Next.js · TypeScript · React

Ver projeto →

==================================================
67. PROJECT PAGE — PRIMEIRA DOBRA
==================================================

Página individual do projeto deve possuir impacto.

Estrutura:

categoria / ano

TÍTULO GRANDE

descrição curta

metadata:

ROLE
STACK
STATUS

visual grande.

Não começar o projeto com um bloco gigante de texto.

==================================================
68. STACK — EXPERIÊNCIA MAIS VISUAL
==================================================

O carousel de stacks não deve parecer:

[Python / AI]
Python
Pandas
Scikit...
OpenCV...

apenas texto.

Criar cards gráficos.

Exemplo:

┌───────────────────────┐
│                       │
│        ◉ PYTHON       │
│                       │
│     PYTHON / AI       │
│                       │
│ Python                │
│ Pandas                │
│ OpenCV                │
│ YOLO                  │
│                       │
└───────────────────────┘

Mas utilizar o SVG/logo oficial de Python.

O ícone deve ser imediatamente reconhecível.

==================================================
69. ÍCONES COMO SISTEMA VISUAL
==================================================

No carousel:

Python:
logo Python.

Frontend:
React ou Next.js.

Backend:
PHP / server icon.

Automation:
n8n.

AI:
spark/network icon ou tecnologia relacionada.

Data:
Pandas / chart icon.

Tools:
Git.

Não colocar todos os logos de todas as tecnologias em cada card.

Escolher UM ícone principal por categoria.

==================================================
70. SCAN GRID BUTTON — HIERARQUIA
==================================================

Scan Grid Button deve se tornar uma assinatura interativa do site.

Usar apenas em ações de alto valor.

HOME:

Explorar projetos

PROJECT:

Ver Case Study

PROJECT DETAIL:

Próximo projeto

FOOTER:

Entrar em contato

Não utilizar Scan Grid Button em:

GitHub;
LinkedIn;
theme toggle;
navbar;
tags;
filters;
small actions.

Esses elementos devem permanecer minimalistas.

==================================================
71. BOTÃO PRIMÁRIO — DIMENSÕES
==================================================

Quero CTAs com presença visual.

Desktop:

min-height:
52px;

padding-inline:
26-30px;

padding-block:
14-16px;

font-size:
15-16px;

font-weight:
500-600.

Ícone:

18px.

Mobile:

min-height:
50px.

Área mínima clicável:
44x44px.

==================================================
72. GRUPOS DE BOTÕES
==================================================

Quando houver dois CTAs:

[ PRIMARY ]   Secondary →

Gap:

12-16px.

Nunca colocar três ou quatro CTAs equivalentes lado a lado.

Se houver terceira ação:

colocar como link textual abaixo ou remover.

==================================================
73. GROUPING / PROXIMITY
==================================================

Aplicar explicitamente o princípio de proximidade visual.

Elementos semanticamente relacionados devem ficar próximos.

Exemplo incorreto:

Título

40px

Descrição

60px

Tags

20px

CTA

Exemplo correto:

Título
12px
Descrição
20px
Tags

32px

CTA

Usar distância para indicar agrupamentos.

==================================================
74. SECTION HEADER SYSTEM
==================================================

Criar um componente padrão:

SectionHeader

Possíveis propriedades:

eyebrow
title
description
alignment

Exemplo:

STACK & TOOLS

Ferramentas mudam.
A forma de resolver problemas evolui.

Descrição opcional.

Usar o mesmo padrão em:

Projects;
Stack;
Experience;
Recognition.

Isso cria consistência.

==================================================
75. ESPAÇAMENTO COMO PARTE DO DESIGN
==================================================

Não preencher espaços vazios apenas porque existem.

Whitespace é intencional.

O portfolio deve respirar.

Entre grandes seções:

mínimo 120px desktop.

Em algumas transições:

160-200px.

O conteúdo deve parecer cuidadosamente colocado,
não apenas empilhado verticalmente.

==================================================
76. PROJECT GRID — DENSIDADE
==================================================

Na página Projects:

cards não precisam conter muitas informações.

Priorizar:

imagem;
título;
contexto;
categoria.

Exemplo:

┌─────────────────────────────┐
│                             │
│        PROJECT IMAGE        │
│                             │
└─────────────────────────────┘

ACADEMIC EXPERIMENT

Automation Lab

Automação, APIs e agentes de IA.

n8n · LLMs · APIs

→

==================================================
77. CLASSIFICAÇÃO VISUAL DOS PROJETOS
==================================================

Criar badges discretos.

PROFESSIONAL

RESEARCH

ACADEMIC EXPERIMENT

EARLY WORK

Não usar cores extremamente diferentes.

Utilizar principalmente:

borders;
opacity;
accent subtle.

A diferença deve ser semântica,
não carnavalesca.

==================================================
78. AUTOMATION LAB
==================================================

Apresentar explicitamente:

ACADEMIC EXPERIMENT

Título:

Automation Lab

Descrição curta:

Experimentos acadêmicos explorando automações,
APIs, agentes de IA e integração entre serviços.

Stack:

n8n
APIs
LLMs
Google Workspace

Não mencionar clientes.

Não mencionar produção.

Não mencionar números de usuários.

==================================================
79. COMPUTER VISION LAB
==================================================

Apresentar:

ACADEMIC EXPERIMENT

Descrição:

Experimentos acadêmicos com visão computacional,
detecção de objetos e processamento de imagens.

Stack:

Python
YOLO
OpenCV

Visual possível:

frame de câmera;
bounding boxes;
object labels;
confidence;
interface experimental.

Mas não inventar benchmarks.

==================================================
80. BASQUETE BRASILEIRO
==================================================

Apresentar como:

EARLY WORK

Isso deve comunicar evolução.

Não esconder o fato de ser projeto inicial.

Descrição:

Projeto web desenvolvido durante a formação,
explorando busca, JavaScript e manipulação do DOM.

Stack:

HTML
CSS
JavaScript.

==================================================
81. VISUAL DA EXPERIÊNCIA
==================================================

Experience não deve parecer LinkedIn copiado.

Criar composição simples.

Exemplo:

EXPERIENCE

2026 — PRESENT

Full Stack Software Developer Jr.

Secretaria de Estado da
Transparência e Controle

Desenvolvimento de sistemas, automações
e fluxos digitais voltados à gestão de dados.

                                              ↗

Não listar 8 responsabilidades na Home.

Esses detalhes podem existir no LinkedIn.

==================================================
82. TEXTO E LEGIBILIDADE
==================================================

Manter comprimento confortável de linha.

Body:

max-width:
60-70 characters.

Evitar parágrafos atravessando quase toda a tela.

Principalmente em resoluções desktop.

==================================================
83. TEXT CONTRAST
==================================================

Criar três níveis.

Primary:
100%

Secondary:
65-75%

Muted:
40-50%

Não deixar todo texto branco.

Isso atualmente aumenta sensação de poluição.

Títulos:
primary.

Descrições:
secondary.

Metadata:
muted.

==================================================
84. TAGS
==================================================

Simplificar visual das tags.

Evitar pills grandes em todo lugar.

Preferir:

React · Next.js · TypeScript

ou small badges discretos.

Pills devem ser reservadas para:

status;
filters;
categorias importantes.

==================================================
85. HOVERS
==================================================

Criar linguagem coerente.

LINK:

arrow translateX.

CARD:

image scale + border.

BUTTON:

Scan Grid.

NAV:

underline/reveal.

ICON:

opacity.

Não colocar todos os efeitos em todos os elementos.

==================================================
86. SCROLL REVEAL
==================================================

Usar reveal elegante.

Headings:

opacity 0 → 1
y 24 → 0

duration:
500-700ms.

Cards:

opacity 0 → 1
y 30 → 0.

Stagger:
60-100ms.

Não usar stagger muito longo.

==================================================
87. HOME FINAL — ORDEM
==================================================

A Home deve ficar exatamente nesta lógica:

01 NAVIGATION

02 HERO
Ariel Asafe
headline
Saturn
CTA

03 SELECTED WORK INTRO

04 AGILIZA TRANSPARÊNCIA

05 ARQUIVO DIGITAL INDÍGENA

06 MORE PROJECTS CTA

07 STACK & TOOLS
Grainy Carousel

08 EXPERIENCE

09 EDUCATION / RECOGNITION

10 CONTACT

11 FOOTER

Não adicionar outras grandes seções nesta etapa.

==================================================
88. MAIS PROJETOS
==================================================

Depois dos dois Featured Projects:

não mostrar imediatamente todos os outros projetos.

Criar pequena transição.

Exemplo:

MORE WORK

"IA, automação, visão computacional
e experimentos acadêmicos."

[ Explorar todos os projetos → ]

Isso deixa a Home mais limpa.

==================================================
89. MOBILE — REDUÇÃO INTELIGENTE
==================================================

Mobile não deve tentar replicar tudo.

Reduzir:

partículas;
parallax;
background effects;
stagger;
grandes glows.

Manter:

tipografia;
hierarquia;
projects;
carousel;
Scan Grid;
identity.

==================================================
90. TESTE VISUAL FINAL
==================================================

Testar visualmente:

375px
430px
768px
1024px
1280px
1440px
1920px.

Em 1920px:

o site NÃO pode parecer deslocado à esquerda.

Em 375px:

não pode existir:

horizontal scroll;
nome cortado;
buttons cortados;
carousel quebrado.

==================================================
91. REGRA FINAL DE QUALIDADE
==================================================

Ao revisar cada seção pergunte:

1. Qual elemento deve ser visto primeiro?
2. Qual deve ser visto depois?
3. Existe informação competindo com ele?
4. Existe espaço suficiente para respirar?
5. O efeito ajuda a narrativa?
6. O alinhamento pertence ao mesmo sistema?
7. Isso parece portfolio ou dashboard?

Se parecer dashboard:

simplificar.

Se parecer template:

personalizar.

Se parecer vazio:

melhorar composição,
não adicionar informação.

Se parecer poluído:

remover informação,
não diminuir simplesmente a fonte.

==================================================
92. RESULTADO DESEJADO
==================================================

A versão final deve transmitir:

precisão;
tecnologia;
personalidade;
profundidade;
clareza;
movimento.

Quero que o visitante sinta que existe uma identidade visual única.

ARIEL ASAFE deve ser imediatamente memorável.

Os projetos devem provar capacidade.

As stacks devem complementar os projetos.

As animações devem conectar tudo.

O resultado final deve parecer:

EDITORIAL SOFTWARE PORTFOLIO
×
INTERACTIVE EXPERIENCE
×
ENGINEERING CASE STUDIES

e não:

CV ONLINE
ou
TECH DASHBOARD.