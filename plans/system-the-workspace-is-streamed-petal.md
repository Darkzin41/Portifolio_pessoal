# Plano de Refinamento — Portfólio Ariel Asafe

## Contexto

O portfólio já existe com estrutura React + Vite + Tailwind v4. O objetivo desta etapa é **refinar o que existe** — sem reconstruir do zero. Os problemas a resolver:

- Navbar usa rotas de página (`/projects`, `/stack`) mas o brief exige âncoras de scroll (`#projetos`, `#habilidades`, `#experiencia`, `#contato`)
- Nome "ARIEL / Asafe" está grande demais (clamp até 172px) e com espaço vertical excessivo entre as duas linhas
- Carousel não tem auto-scroll — apenas drag manual
- Nenhuma seção tem atributos `id` para âncoras
- `w-wide` está em 1400px, deve ser ~1248px para margens de 96px em viewport de 1440px
- KNN e Conscious Product ainda existem nos dados — devem ser removidos
- Filtros da página Projects usam categorias internas (`software`, `ai`) — devem virar `Profissional | Pesquisa | Acadêmico | Experimental | Early Work`
- Classificações dos projetos precisam atualizar
- CTA dos projetos diz "Ver case study" — deve dizer "Explorar projeto"
- Fundo das seções é uniforme (#08090C) sem alternância perceptível
- Botão primário não tem efeito Scan Grid no hover
- Carousel cards são 210×280px — devem ser mais compactos (~240×200px)
- Fonte é Inter puro; brief pede Geist como primária com Inter como fallback
- Contact section (`Footer`) não tem `id="contato"`

---

## Abordagem

Trabalhar sobre os arquivos existentes. Nenhum componente é descartado — apenas refinados.

---

## Arquivos a modificar

### 1. `src/index.css`
- Trocar `@import` do Google Fonts: adicionar Geist (`family=Geist:wght@300;400;500;600;700`) antes de Inter e Gloock
- Atualizar `--font-sans` para `'Geist', 'Inter', system-ui, sans-serif`
- Ajustar `.w-wide`: `max-width: 1248px` (de 1400px) com `padding-inline: 1.5rem` mobile / `clamp(1.5rem, 6vw, 6rem)` desktop
- Adicionar tokens de fundo por seção:
  ```css
  --bg-hero:       #07090D;
  --bg-projects:   #0A0C11;
  --bg-stack:      #080A0F;
  --bg-experience: #0B0D12;
  --bg-contact:    #07090D;
  ```
- Adicionar classe `.section-py` com `padding-block: 96px` (mobile: 64px) para padronizar espaçamento

### 2. `src/data/projects.ts`
- **Remover** entradas: `knn-recommender` e `conscious-product`
- Adicionar campo `classification: string` à interface `Project`
- Atualizar classificações:
  | slug | classification | filterCategory |
  |------|---------------|----------------|
  | `agiliza-transparencia` | `"PROFESSIONAL"` | `"professional"` |
  | `arquivo-digital-indigena` | `"RESEARCH"` | `"research"` |
  | `edx-techx` | `"ACADEMIC PROJECT"` | `"academic"` |
  | `automation-lab` | `"ACADEMIC EXPERIMENT"` | `"experimental"` |
  | `computer-vision-lab` | `"ACADEMIC EXPERIMENT"` | `"experimental"` |
  | `basquete-brasileiro` | `"EARLY WORK"` | `"earlywork"` |
- Atualizar tipo `filterCategory` na interface para incluir os novos valores
- Rearranjar array para manter ordem: Agiliza → Arquivo → EDX → Automation → CV → Basquete

### 3. `src/components/Navbar.tsx`
- Substituir `navLinks` de React Router `<Link to="...">` para âncoras `<a href="#...">` com `scrollIntoView({behavior: "smooth"})`
- Novos itens:
  ```
  { href: "#inicio",     label: "Início" }
  { href: "#projetos",   label: "Projetos" }
  { href: "#habilidades", label: "Habilidades" }
  { href: "#experiencia", label: "Experiência" }
  { href: "#contato",    label: "Contato" }
  ```
- Adicionar `IntersectionObserver` para detectar seção ativa e atualizar estado `activeSection`
- Estilo pill ativo: `background: var(--surface-el)`, `color: var(--text-primary)` — idem ao atual
- Aumentar padding interno dos pills: `px-4 py-2` → `px-5 py-2.5`
- Manter logo, theme toggle, accent toggle, mobile menu intactos
- Quando o usuário está em `/projects` ou `/stack`, os links de âncora navegam para `/?#projetos` etc (ou simplesmente para `/`)

### 4. `src/components/Hero.tsx`
- Adicionar `id="inicio"` à `<section>`
- **Reduzir tamanho do nome:**
  - ARIEL: `clamp(64px, 7vw, 96px)` (era `clamp(80px, 14vw, 172px)`)
  - Asafe: `clamp(56px, 6.5vw, 88px)` (era `clamp(68px, 12vw, 148px)`)
  - `marginTop` entre os dois: `-0.06em` para mantê-los colados como assinatura
- **Fluid Text effect**: implementar componente `<FluidText>` com SVG feTurbulence + feDisplacementMap. Aplicar ao bloco nome. Parâmetros:
  - `baseFrequency="0.008 0.006"`, `scale="4"` (escala baixa = sutil)
  - Animar `baseFrequency` e `seed` com `requestAnimationFrame` lentamente
  - Wrapper: `position: relative`, filtro SVG invisível `position: absolute`
  - Verificar que texto permanece legível (displacement ≤ 6px)
  - Respeitar `prefers-reduced-motion`: desativar animação do filtro
- **Tagline**: limitar a `max-width: 540px`
- **Espaçamentos hero** (gap entre blocos — seguir §12):
  - Eyebrow → Nome: `mb-6` (24px)
  - Nome → Tagline: `mt-8` (32px)
  - Tagline → Descrição: `mt-4` (16px)
  - Descrição → CTAs: `mt-8` (32px)
  - CTAs → Location: `mt-10` (40px)
- Atualizar fundo da section para `var(--bg-hero)` (`#07090D`)

### 5. `src/components/FeaturedProjects.tsx`
- Adicionar `id="projetos"` ao `<section>`
- Alterar texto CTA de `"Ver case study"` → `"Explorar projeto"`
- Limitar stack display a 3 itens: `project.stack.slice(0, 3).join(" · ")`
- Alterar `shortDescription` display: máximo 2–3 linhas de texto, sem pill de status duplicado
- Atualizar fundo da section para `var(--bg-projects)` (`#0A0C11`)
- Manter estrutura editorial existente (visual top, text below, gap-36/44 entre projetos)

### 6. `src/components/StackCarousel.tsx`
- Adicionar `id="habilidades"` ao `<section>`
- **Auto-scroll infinito**: implementar com `requestAnimationFrame`:
  - Manter `posRef` (número que incrementa em `~0.4px/frame` = ~24px/s)
  - Cada frame: `track.scrollLeft = posRef.current`
  - Quando `scrollLeft >= metade do width dos cards` → resetar para 0 (infinite loop com cards duplicados)
  - `pausedRef` (bool): true quando mouse está sobre o carousel → parar incremento
  - Drag: ao iniciar drag, setar `pausedRef = true` até mouseup
  - Resumir suavemente após hover out (sem parada abrupta)
- **Compactar cards**: de `210×280px` → `240×200px`
  - Remover o grupo de `items` listados no body do card
  - Mostrar apenas: ícone SVG (maior, em destaque), nome da categoria, 3 techs em texto pequeno
- Atualizar fundo da section para `var(--bg-stack)` (`#080A0F`)

### 7. `src/components/Experience.tsx`
- Adicionar `id="experiencia"` ao `<section>`
- Atualizar fundo da section para `var(--bg-experience)` (`#0B0D12`)

### 8. `src/components/Footer.tsx`
- Adicionar `id="contato"` ao elemento que contém a seção de contato (o `<footer>` ou o `.w-wide` interno)
- Atualizar fundo da footer para `var(--bg-contact)` (`#07090D`)
- Alterar CTA primário: `<StarfieldButton>` label muda de `"arielasafe09@gmail.com"` → `"Entrar em contato"` (href mantém `mailto:`)

### 9. `src/components/ui/ScanGridButton.tsx` *(novo componente)*
- Implementar o botão primário com efeito Scan Grid no hover
- **Forma**: `border-radius: 12px`, `min-height: 52px`, `padding: 16px 24px`, `font-size: 14px`, `font-weight: 600`
- **Hover effect**: grid scanline animado. No `<canvas>` overlay (hidden por default), ao `mouseenter`: mostrar canvas com linhas horizontais e verticais animadas que varrrem o botão (scan grid). Canvas usa `--accent-rgb` com baixa opacidade para as linhas. Animação: 200–350ms ease-out
- **Arrow**: `translateX(4px)` no hover
- **Glow**: sutil `box-shadow: 0 0 16px var(--accent-glow)` no hover
- Não usar em botões secundários
- Substituir `<StarfieldButton>` pelo `<ScanGridButton>` nos CTAs primários de: Hero, MoreProjectsCta, Footer

### 10. `src/pages/Projects.tsx`
- Atualizar filtros:
  ```ts
  { id: "all",          label: "Todos" }
  { id: "professional", label: "Profissional" }
  { id: "research",     label: "Pesquisa" }
  { id: "academic",     label: "Acadêmico" }
  { id: "experimental", label: "Experimental" }
  { id: "earlywork",    label: "Early Work" }
  ```
- Atualizar lógica de filtragem para usar novo `filterCategory`
- A lista agora tem 6 projetos (KNN e Conscious Product removidos dos dados)
- CTA dos cards: já diz "Ver projeto" — manter ou atualizar para "Explorar projeto"

### 11. `src/pages/Home.tsx`
- Sem alterações estruturais — as seções já têm a ordem correta
- Os `id` são adicionados nos próprios componentes

---

## Novos arquivos

| Arquivo | Propósito |
|---------|-----------|
| `src/components/ui/ScanGridButton.tsx` | Botão primário com scan grid hover effect |
| `src/components/ui/FluidText.tsx` | SVG displacement text fluid effect |

---

## Reutilização de código existente

- `src/hooks/useScrollReveal.ts` — reutilizar para reveals em todas as seções
- `src/contexts/theme.tsx` — sem alterações
- `src/components/ParticleSaturn.tsx` — sem alterações
- `src/components/ui/Tag.tsx`, `SectionHeader.tsx` — sem alterações

---

## Verificação

1. `pnpm build` deve completar sem erros
2. Checar checklist do brief §61:
   - ARIEL e Asafe próximos (visualmente assinatura)
   - Fluid Text suave e legível
   - Hero centralizado, Saturn não atrapalha texto
   - Navbar: 5 links de âncora funcionando com smooth scroll
   - Seção ativa destacada discretamente
   - Botões com ~52px de altura e padding correto
   - Primary usa ScanGrid no hover; Secondary não usa
   - Seções com espaçamento correto (96-128px)
   - Alternância de fundo visível durante scroll
   - Featured Projects: menos info, CTA "Explorar projeto"
   - Apenas Agiliza e Arquivo Digital como Featured
   - KNN e Conscious Product removidos
   - Carousel auto-scroll com pause no hover
   - Cards de stack compactos (vários visíveis simultaneamente)
   - Experience limpa, Contact com id correto
   - 1920px centralizado (w-wide: 1248px)
   - Mobile: sem horizontal scroll, nome não cortado
