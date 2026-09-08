---
id: CHG-20260908-portfolio-refinement
status: verified
date: 2026-09-08
affected_capabilities: core
---

# Refinamento visual e responsivo do portfólio

## Problema e contexto

Um reset CSS anulava utilitários de espaçamento, a Navbar podia se sobrepor em larguras intermediárias e animações contínuas não separavam todos os estados de pausa. A segunda rodada também exigiu correções de conteúdo e de hierarquia visual.

## Resultado esperado

Entregar as FASES 0–25 com layout previsível, Hero e Navbar sem sobreposição, projetos destacados claros, Saturn responsivo e carrossel contínuo acessível, além dos ajustes editoriais aprovados.

## Escopo

Tokens globais, containers, Hero, Saturn, Navbar, projetos e dados, páginas de projetos e stack, carrossel, texto da formação, CTA de certificados e tema escuro.

## Não escopo

Fases posteriores, publicação, dependências novas, alteração dos contratos públicos de rotas e importação para Figma Design.

## Alternativas e decisão

O código local e o prompt anexado foram usados como referência confirmada. A comparação com a versão online do Figma foi descartada nesta rodada porque a integração atingiu o limite e o navegador exigiu login.

## Solução e fluxo

O reset redundante foi removido, os containers passaram a compartilhar gutters, o Hero separou animação de entrada e parallax, e a Navbar passou a recolher antes do ponto de sobreposição. O carrossel mede o ciclo real, calcula cópias pela viewport, usa tempo decorrido e pausa por cada origem de interação.

## Interfaces e dados afetados

Rotas e slugs foram preservados. O contexto visual mantém somente a cor de destaque. O export `carouselCards` centraliza os 13 itens independentes; dados obsoletos foram removidos das referências executadas.

## Falhas, segurança e compatibilidade

Observers, listeners e RAFs possuem limpeza na desmontagem. DPR do Saturn é limitado a 2. Movimento reduzido remove autoplay, e o menu restaura foco após Escape. A aplicação não manipula dados sensíveis.

## Estratégia de testes

Build, TypeScript e testes nativos validam a base. A prévia local cobre breakpoints, navegação, filtros, detalhe, menu, pausa e teclado do carrossel.

## Critérios de aceite

- Ausência de sobreposição em 375, 430, 768, 1024, 1280, 1440 e 1920 px.
- Nenhum controle de tema claro.
- Dois destaques e contagens de filtro 6/1/1/1/2/1.
- Carrossel a 27 px/s, navegável e sem saltos nos testes de normalização.
- Conteúdo de formação e certificações conforme o pedido aprovado.

## Consolidação na memória viva

O resultado está consolidado em `../capabilities/core.md`, `../system.md`, `../testing.md` e `../history.md`.
