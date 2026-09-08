---
id: core
contract_status: confirmed
implementation_status: verified
last_verified: 2026-09-08
last_verified_ref: working-tree
---

# Portfólio pessoal

## Finalidade e limites

Apresentar a atuação, os projetos, a stack, a experiência, a formação e os meios de contato de Ariel Asafe. A entrega atual abrange as FASES 0–25 e os ajustes editoriais solicitados na segunda rodada; publicação e edição do arquivo Figma não pertencem a esta capacidade nesta etapa.

## Atores, permissões, entradas e resultados

Qualquer visitante pode navegar pelas seções, filtrar projetos, abrir detalhes, consultar links externos, escolher a cor de destaque e explorar o carrossel por mouse, touch ou teclado. Não há autenticação nem entrada de dados pessoais.

## Contrato comportamental e critérios de aceite

- O tema é sempre escuro e não expõe controle de modo claro.
- A Navbar usa três zonas em desktop a partir de 1280 px e menu recolhível abaixo disso.
- O Hero mantém conteúdo e Saturn separados, inclusive em 375–1024 px.
- Somente Agiliza Transparência e Arquivo Digital de História Indígena aparecem como projetos destacados.
- A grade completa mantém seis projetos e filtros com contagens 6/1/1/1/2/1.
- O carrossel apresenta Python, HTML, CSS, JavaScript, React, Next.js, PHP, Laravel, SQL, n8n, Power BI, Git/GitHub e VS Code como itens independentes.
- Com movimento reduzido, o carrossel apresenta uma sequência navegável sem autoplay.
- O curso INCODE aparece como “Curso de programação — módulo 1 concluído”.
- O CTA de certificados comunica que o LinkedIn contém os certificados.

## Invariantes e regras de negócio

- Slugs, rotas e conteúdo profissional dos seis projetos permanecem estáveis.
- Scikit-learn permanece no nível “explorando”, sem vínculo com projeto.
- KNN e Conscious Product não aparecem nos dados executados pela aplicação.
- O carrossel avança a 27 px/s e preserva o restante ao normalizar nos dois sentidos.
- Alvos principais da Navbar e do carrossel mantêm operação por teclado e foco visível.

## Estado atual e lacunas

O contrato está implementado e verificado na prévia local. A fidelidade contra a versão atualizada em outra conta do Figma não foi confirmada por falta de acesso autenticado nesta rodada.

## Evidências de implementação e teste

- Implementação: `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/ParticleSaturn.tsx`, `src/components/FeaturedProjects.tsx`, `src/components/StackCarousel.tsx`, `src/data/projects.ts` e `src/data/stack.ts`.
- Teste reproduzível: `npm run build`.
- Tipos: `npx tsc --noEmit`.
- Movimento: `node --experimental-strip-types --test src/lib/carouselMotion.test.ts`.
- Validação manual: prévia local nos sete breakpoints definidos, menu por Escape, filtros, detalhe de projeto, pausa e teclado do carrossel.

## Relações

- Design relacionado: `../changes/CHG-20260908-portfolio-refinement.md`.
- Decisões abertas: nenhuma.
- ADR relacionado: nenhum.
