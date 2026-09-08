import { stackCategories } from "../data/stack";
import Tag from "../components/ui/Tag";
import Footer from "../components/Footer";
import { useScrollReveal, revealStyle } from "../hooks/useScrollReveal";

const levelMeta: Record<string, { label: string; color: string; bg: string }> = {
  "uso em projetos":    { label: "Uso em projetos",    color: "var(--accent)",  bg: "var(--accent-soft)" },
  "em desenvolvimento": { label: "Em desenvolvimento", color: "#F59E0B",        bg: "rgba(245,158,11,0.1)" },
  "explorando":         { label: "Explorando",         color: "#9CA3AF",        bg: "rgba(156,163,175,0.08)" },
};

function CategorySection({ cat, delay }: { cat: typeof stackCategories[number]; delay: number }) {
  const { ref, visible } = useScrollReveal({ rootMargin: "0px 0px -60px 0px" });
  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} style={revealStyle(visible, delay)}>
      <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-8"
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
        {cat.label}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {cat.items.map(item => {
          const meta = levelMeta[item.level];
          return (
            <div key={item.name}
              className="p-5 rounded-xl transition-all hover:border-[var(--border-hover)] hover:-translate-y-0.5 duration-200"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="flex items-start justify-between gap-2 mb-3">
                <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                  {item.name}
                </p>
                <span className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                  style={{ background: meta.color }}
                  title={meta.label} />
              </div>
              <p className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full inline-block"
                style={{ background: meta.bg, color: meta.color, fontFamily: "var(--font-mono)" }}>
                {meta.label}
              </p>
              {item.usedIn && item.usedIn.length > 0 && (
                <div className="mt-3">
                  <p className="text-[9px] uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)", opacity: 0.4 }}>
                    Used in
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.usedIn.map(p => (
                      <span key={p} className="text-[9px] px-1.5 py-0.5 rounded"
                        style={{ background: "var(--surface-el)", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Stack() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: legendRef, visible: legendVisible } = useScrollReveal();

  return (
    <>
      <main className="min-h-screen pt-28" style={{ background: "var(--bg)" }}>
        <div className="w-wide">

          {/* Header */}
          <div ref={headerRef as React.RefObject<HTMLDivElement>} className="mb-16" style={revealStyle(headerVisible)}>
            <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
              /stack
            </p>
            <h1 className="font-semibold leading-tight"
              style={{ fontSize: "var(--type-h1)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
              Technology is the toolkit.
              <br />
              <span className="font-serif font-normal italic" style={{ color: "var(--text-secondary)" }}>
                Problem solving is the skill.
              </span>
            </h1>
            <p className="mt-6 text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Ferramentas organizadas por contexto — com honestidade sobre o nível de uso em cada uma.
            </p>
          </div>

          {/* Legend */}
          <div ref={legendRef as React.RefObject<HTMLDivElement>}
            className="flex flex-wrap gap-5 mb-16 pb-8"
            style={{ borderBottom: "1px solid var(--border)", ...revealStyle(legendVisible, 0.1) }}>
            {Object.values(levelMeta).map(m => (
              <div key={m.label} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                <span className="text-xs" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-16 mb-24">
            {stackCategories.map((cat, i) => (
              <CategorySection key={cat.id} cat={cat} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
