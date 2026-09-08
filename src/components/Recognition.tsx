import { useScrollReveal, revealStyle } from "../hooks/useScrollReveal";

const recognitions = [
  {
    title: "Universo IF",
    subtitle: "Anais — Iniciação Científica e Tecnológica",
    year: "2024",
    type: "Pesquisa",
  },
  {
    title: "Hackathon MGEST",
    subtitle: "Maratona de Gestão Pública",
    year: "2026",
    type: "Competição",
  },
];

const certifications = [
  { name: "Data Analytics",          issuer: "Google / Coursera" },
  { name: "Generative AI & AI Agents", issuer: "Google / Deeplearning.ai" },
  { name: "UX/UI Design",            issuer: "Google" },
  { name: "JavaScript",              issuer: "Curso em Vídeo" },
  { name: "Google Gemini",           issuer: "Google Cloud" },
];

export default function Recognition() {
  const { ref: r1, visible: v1 } = useScrollReveal();
  const { ref: r2, visible: v2 } = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });
  const { ref: manifestoRef, visible: manifestoVisible } = useScrollReveal({ threshold: 0.12 });

  return (
    <section className="py-32" style={{ background: "var(--surface)" }}>
      <div className="w-wide">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Recognitions */}
          <div ref={r1 as React.RefObject<HTMLDivElement>} style={revealStyle(v1, 0, "left")}>
            <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-10"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
              Recognition
            </p>
            <div className="flex flex-col gap-4">
              {recognitions.map((rec, i) => (
                <div key={i} className="p-6 rounded-xl"
                  style={{ background: "var(--surface-el)", border: "1px solid var(--border)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{rec.title}</p>
                      <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>{rec.subtitle}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[10px] mb-1.5" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)", opacity: 0.45 }}>
                        {rec.year}
                      </p>
                      <p className="text-[9px] px-2 py-0.5 rounded-full"
                        style={{ background: "var(--accent-soft)", color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
                        {rec.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div ref={r2 as React.RefObject<HTMLDivElement>} style={revealStyle(v2, 0.1, "right")}>
            <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-10"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
              Certificações selecionadas
            </p>
            <div className="flex flex-col">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{cert.name}</p>
                  <p className="text-[10px]" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)", opacity: 0.45 }}>
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/in/ariel-asafedev"
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[52px] items-center gap-3 rounded-xl px-5 text-sm font-semibold transition-all duration-300 group hover:scale-[1.02]"
              style={{
                color: "#fff",
                background: "var(--accent)",
                boxShadow: "0 10px 28px var(--accent-glow)",
                border: "1px solid color-mix(in srgb, var(--accent) 82%, white)",
              }}
            >
              <span>Consultar certificados no LinkedIn</span>
              <svg className="transition-transform group-hover:translate-x-1.5"
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Manifesto */}
        <div
          ref={manifestoRef as React.RefObject<HTMLDivElement>}
          className="mt-24 pt-16 border-t"
          style={{ borderColor: "var(--border)", ...revealStyle(manifestoVisible) }}
        >
          <div style={{ maxWidth: "640px" }}>
            <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-6"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)", opacity: 0.4 }}>
              /about
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ color: "var(--text-primary)" }}>
              Curioso por sistemas, inteligência artificial e pela forma como tecnologia pode{" "}
              <span className="font-serif italic" style={{ color: "var(--accent)" }}>
                simplificar problemas complexos.
              </span>
            </p>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)", opacity: 0.75 }}>
              Meu trabalho vive entre código, arquitetura, automação, dados e produto.
              Quando não estou construindo alguma coisa, provavelmente estou estudando tecnologia,
              treinando ou jogando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
