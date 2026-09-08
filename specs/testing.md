# Estratégia e mapa de testes

**Última verificação:** 2026-09-08

## Gates

| Comando | Evidência |
|---|---|
| `npm run build` | Bundle de produção e transformação dos componentes |
| `npx tsc --noEmit` | Contratos TypeScript |
| `node --experimental-strip-types --test src/lib/carouselMotion.test.ts` | Cópias, normalização e velocidade do carrossel |
| `python validate_specs.py .` | Estrutura e links da memória técnica |

## Responsabilidade por camada

| Comportamento | Local |
|---|---|
| Movimento determinístico do carrossel | `src/lib/carouselMotion.ts` e `src/lib/carouselMotion.test.ts` |
| UI, rotas e dados | Build, TypeScript e inspeção na prévia local |
| Responsividade | Prévia local em 375, 430, 768, 1024, 1280, 1440 e 1920 px |
| Acessibilidade interativa | Menu por teclado, Escape, foco, filtros e controle do carrossel |

## Mapa por capacidade

| Capability | Arquivos ou globs | Situação |
|---|---|---|
| `core` | `src/**/*`, `src/lib/carouselMotion.test.ts` | Implementada e verificada localmente |

## Lacunas

Não há suíte E2E persistida no repositório. A troca de aba e o gesto touch real dependem do navegador/dispositivo; o código trata `visibilitychange`, foco, Pointer Events e `touch-action: pan-y`, e o fluxo foi inspecionado na prévia local.
