CORRIJA A COMPOSIÇÃO DO HERO E DA NAVBAR DO PORTFÓLIO ATUAL.

IMPORTANTE:
NÃO recrie o portfólio.
NÃO altere a identidade visual.
NÃO mude os textos.
NÃO troque os componentes principais.
Ajuste apenas estrutura visual, alinhamento e espaçamento.

==================================================
1. CORREÇÃO PRINCIPAL DO HERO
==================================================

A implementação atual do Hero está incorreta em relação ao alinhamento visual.

Atualmente os elementos estão desalinhados entre si.
O título "Ariel Asafe", a descrição, os botões e a localização não compartilham a mesma linha-guia vertical.

EU QUERO EXATAMENTE A LÓGICA DA SEGUNDA REFERÊNCIA:

- tudo alinhado à esquerda;
- tudo começando no mesmo eixo X;
- tudo agrupado como um único bloco;
- composição visual limpa e organizada.

IMPORTANTE:

Não centralizar o texto.
Não centralizar os botões individualmente.
Não deixar o título deslocado para a direita.
Não deixar a localização desalinhada.

Quero um único bloco de conteúdo alinhado à esquerda.

==================================================
2. TODOS OS ELEMENTOS DO HERO DEVEM COMPARTILHAR O MESMO EIXO
==================================================

Os seguintes elementos devem iniciar exatamente na mesma linha vertical à esquerda:

- "SOFTWARE DEVELOPER / PYTHON & AI"
- "ARIEL"
- "Asafe"
- "Construo sistemas, automações e experiências digitais que transformam problemas reais em soluções inteligentes."
- botão "Explorar projetos"
- botão "GitHub"
- "São Luís · Maranhão · Brasil"

Todos esses elementos devem começar no mesmo eixo X.

Se necessário:
- aplicar text-align: left;
- align-items: flex-start;
- justify-content: flex-start nos grupos adequados;
- remover centralizações internas do bloco.

==================================================
3. COMPOSIÇÃO CORRETA DO HERO
==================================================

Quero esta estrutura visual:

SOFTWARE DEVELOPER / PYTHON & AI

ARIEL
Asafe

Construo sistemas, automações e experiências digitais
que transformam problemas reais em soluções inteligentes.

[ Explorar projetos ] [ GitHub ↗ ]

São Luís · Maranhão · Brasil

Ou seja:

- o eyebrow azul deve iniciar no mesmo eixo da descrição;
- o nome deve iniciar no mesmo eixo da descrição;
- os botões devem iniciar no mesmo eixo da descrição;
- a localização deve iniciar no mesmo eixo da descrição.

==================================================
4. POSICIONAMENTO DO BLOCO NO HERO
==================================================

O bloco inteiro do conteúdo deve ficar bem posicionado no Hero.

IMPORTANTE:
Quando digo alinhado à esquerda, NÃO significa colado na borda da tela.

Quero:
- o bloco contido no container principal;
- visualmente bem distribuído;
- alinhado à esquerda ENTRE SI;
- com boa presença no lado esquerdo da composição;
- Saturn permanecendo à direita como contrapeso visual.

O Hero deve parecer uma composição em duas partes:

lado esquerdo:
conteúdo

lado direito:
Saturn / espaço visual

==================================================
5. SPACING INTERNO DO HERO
==================================================

Aplicar melhor espaçamento entre os elementos do Hero.

Sugestão:

eyebrow
↓ 24px

nome
↓ 28px a 32px

descrição
↓ 28px a 32px

botões
↓ 24px a 32px

localização

Não deixar os elementos apertados.

==================================================
6. BOTÕES DO HERO
==================================================

Os botões:
- Explorar projetos
- GitHub

devem ficar na MESMA LINHA no desktop.

Devem começar no mesmo eixo à esquerda do bloco.

Usar:
- justify-content: flex-start;
- gap entre botões: 12px a 16px.

Não centralizar os botões sob a descrição.
Eles devem ficar alinhados à esquerda junto do resto.

==================================================
7. LOCALIZAÇÃO
==================================================

A linha:
"São Luís · Maranhão · Brasil"

deve ficar alinhada à esquerda,
no mesmo eixo dos botões, da descrição e do título.

Não centralizar essa linha.

==================================================
8. NAVBAR — ESPAÇAMENTO ENTRE OS ITENS
==================================================

Corrigir a navbar.

Atualmente:
"Início", "Projetos", "Habilidades", "Experiência" e "Contato"
estão muito juntos.

Eu quero:
- mais espaçamento entre os itens;
- cada item visualmente como um botão/pill individual;
- área clicável separada para cada item.

Estrutura desejada:

[ Início ] [ Projetos ] [ Habilidades ] [ Experiência ] [ Contato ]

Usar aproximadamente:
- gap: 8px a 12px
- padding horizontal de cada item: 16px a 20px
- padding vertical: 9px a 11px
- border-radius alto/pill

==================================================
9. NAVBAR — BRAND À ESQUERDA
==================================================

O bloco "Ariel Asafe" da navbar está muito centralizado.

Quero ele claramente posicionado à esquerda da navbar.

Estrutura correta:

esquerda:
Ariel Asafe

centro:
Início / Projetos / Habilidades / Experiência / Contato

direita:
ações/controles

Usar distribuição de três zonas.
O brand não deve parecer centralizado junto com o menu.

==================================================
10. PROJETOS — ESPAÇAMENTO INTERNO
==================================================

Na seção de projetos, manter a estrutura atual.

Não redesenhar.

Apenas aumentar o espaçamento interno entre:
- título;
- subtítulo;
- descrição;
- stacks;
- botão "Explorar projeto".

Aplicar isso em:
- Agiliza Transparência
- Arquivo Digital de História Indígena

==================================================
11. PROJETOS — CENTRALIZAÇÃO DENTRO DO CONTAINER
==================================================

Atualmente um projeto parece puxado mais para a esquerda e o outro mais para a direita.

Quero que ambos fiquem visualmente centralizados dentro dos seus respectivos containers.

Não quero sensação de desequilíbrio lateral.

Cada projeto deve parecer centrado no seu espaço,
mesmo que a composição alternada continue existindo.

==================================================
12. MORE PROJECTS CTA
==================================================

Centralizar melhor:
- "IA, automação, visão computacional e experimentos acadêmicos."
- botão "Explorar todos os projetos"

A descrição deve ficar centralizada.
O botão deve parecer claramente um botão principal.

Aumentar:
- padding do botão;
- presença visual;
- clareza de ação.

==================================================
13. HABILIDADES / CARROSSEL
==================================================

Na seção de skills/habilidades:

- manter a seção;
- melhorar spacing;
- melhorar organização.

IMPORTANTE:
No carrossel, remover visual de card/retângulo.

Quero apenas os ícones/logos das tecnologias,
sem grandes containers visuais ao redor.

Pode existir uma div técnica para layout,
mas visualmente o usuário deve ver apenas os ícones.

==================================================
14. EXPERIENCE / CONTATO / FOOTER
==================================================

Nessas seções, o principal problema é espaçamento.

Aumentar:
- espaçamento interno;
- respiro entre títulos e descrições;
- espaço entre botões e blocos;
- padding vertical das seções.

O botão "Ver no LinkedIn" em Experiência
deve ficar visualmente mais claro e mais clicável.

==================================================
15. PÁGINA DE PROJETOS
==================================================

Na página /projects e nas páginas individuais dos projetos,
não alterar a estrutura nem o conteúdo.

Apenas aumentar:
- espaçamento tipográfico;
- espaço entre imagem e texto;
- espaço entre título, subtítulo e descrição;
- espaço entre stacks e CTA;
- espaço entre os cards.

==================================================
16. REGRA FINAL
==================================================

NÃO reimaginar o projeto.
NÃO trocar a identidade.
NÃO mudar o conteúdo.

Esta rodada é apenas para:

- alinhar;
- espaçar;
- organizar;
- melhorar a visualização;
- fazer o Hero seguir exatamente a lógica da segunda imagem de referência.

O resultado final deve ter:

- Hero com bloco único alinhado à esquerda;
- todos os elementos do Hero começando no mesmo eixo X;
- navbar com melhor espaçamento;
- projetos com mais respiro;
- CTA mais claro;
- carrossel com apenas ícones;
- mais organização visual em todas as seções.