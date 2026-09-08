# Sistema implementado

**Última verificação:** 2026-09-08  
**Referência:** `working-tree`

## Finalidade e unidade executável

O projeto entrega um portfólio pessoal responsivo como aplicação React de página única. A aplicação inicia em `src/main.tsx`, monta `src/App.tsx` e é servida pelo Vite.

## Stack e entrypoints

- React 19 e React Router;
- Vite 8 e TypeScript 5.7;
- Tailwind CSS 4, com tokens e regras globais em `src/index.css`;
- `src/data/projects.ts` e `src/data/stack.ts` como fontes locais de conteúdo estruturado.

## Fronteiras e fluxo

- `src/pages/Home.tsx` compõe as seções editoriais da página inicial.
- `src/pages/Projects.tsx` filtra os seis projetos locais.
- `src/pages/ProjectDetail.tsx` resolve detalhes por slug.
- `src/pages/Stack.tsx` apresenta a matriz completa de tecnologias.
- Navbar, Hero, projetos destacados, Saturn e carrossel encapsulam suas próprias interações.

## Estado, persistência e integrações

Não há backend. A única preferência persistida é a cor de destaque em `localStorage`; o tema visual é sempre escuro. Links externos apontam para GitHub, LinkedIn e e-mail.

## Restrições e lacunas

- A versão online do Figma Make não foi confirmada nesta rodada porque a integração atingiu o limite e a página exigiu autenticação.
- O Vite emite avisos preexistentes sobre o futuro carregador nativo da configuração.
- Publicação e importação para Figma Design permanecem fora desta entrega.
