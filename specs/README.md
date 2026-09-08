# Memória técnica do projeto

Este diretório registra o contrato necessário para compreender e modificar o portfólio.

## Ordem de leitura

1. Leia este índice.
2. Abra `capabilities/core.md` para o contrato do portfólio.
3. Consulte `system.md` para confirmar o implementado.
4. Consulte `testing.md` antes de alterar a validação.
5. Leia `open-decisions.md` e o design relacionado quando a tarefa tocar uma pendência.
6. Consulte `docs/state.md` para o handoff local.

## Autoridade

| Documento | Autoridade |
|---|---|
| `capabilities/*.md` | Contrato e estado de entrega |
| `system.md` | Arquitetura realmente implementada |
| `testing.md` | Estratégia e mapa de evidências |
| `open-decisions.md` | Questões que não podem ser inventadas |
| `changes/*.md` | Escopo e critérios de mudanças complexas |
| `history.md` | Marcos; Git preserva o detalhe quando disponível |

## Roteamento por tarefa

| Tema | Ler |
|---|---|
| Página inicial, projetos, stack e navegação | `capabilities/core.md` |
| Arquitetura, rotas ou integrações | `system.md` |
| Movimento e validação responsiva | `testing.md` |

## Manutenção

- Mudança funcional atualiza a capability.
- Mudança de evidência atualiza `testing.md`.
- Decisão duradoura cria ou substitui ADR.
- Marco relevante atualiza `history.md`.
