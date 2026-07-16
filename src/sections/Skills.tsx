import { Braces, CloudCog, MonitorSmartphone, ShieldCheck, BrainCircuit, Cpu } from "lucide-react";
import { Chip, Reveal, SectionHeader, TiltCard } from "../components/ui";
import { skillGroups } from "../data/resume";

const iconMap = {
  Braces,
  MonitorSmartphone,
  BrainCircuit,
  Cpu,
  CloudCog,
  ShieldCheck,
} as const;

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div aria-hidden className="absolute top-1/3 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-iris/[0.06] blur-[130px]" />

      <div className="relative">
        <SectionHeader
          index="02"
          kicker="Technical Skills"
          title={
            <span id="skills-heading">
              The arsenal<span className="text-acid">.</span>
            </span>
          }
          sub="A solid foundation built through coursework, two internships, and real project delivery — every skill below has been applied to working code, not just read about."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = iconMap[g.icon as keyof typeof iconMap];
            return (
              <Reveal key={g.id} delay={(i % 3) * 0.08}>
                <TiltCard className="h-full rounded-2xl" intensity={9}>
                  <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/80 p-7 backdrop-blur transition-all duration-300 hover:border-acid/35 hover:shadow-[0_24px_60px_rgba(200,255,61,0.06)]">
                    <div style={{ transform: "translateZ(36px)" }} className="flex h-full flex-col">
                      <div className="mb-6 flex items-start justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-xl border border-acid/25 bg-acid-dim text-acid transition-transform duration-500 group-hover/tilt:rotate-12">
                          <Icon size={20} />
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white">{g.title}</h3>
                      <p className="mt-1.5 mb-5 text-xs text-zinc-500 italic">{g.blurb}</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {g.skills.map((s) => (
                          <Chip key={s}>{s}</Chip>
                        ))}
                      </div>
                    </div>
                    {/* corner glow */}
                    <div
                      aria-hidden
                      className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-acid/[0.05] blur-3xl transition-opacity duration-500 group-hover/tilt:opacity-100"
                    />
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* certifications preview */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "IBM Enterprise Design Thinking",
                issuer: "IBM & Google",
                year: "2023",
                icon: "🧠",
              },
              {
                title: "Microsoft Azure AI-900",
                issuer: "Microsoft",
                year: "2024",
                icon: "☁️",
              },
              {
                title: "Multi-Language Developer",
                issuer: "SoloLearn",
                year: "2024",
                detail: "Python · C++ · SQL · Ruby · PHP",
                icon: "🏅",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-acid/30 hover:bg-acid-dim"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <p className="text-sm font-medium text-zinc-200">{cert.title}</p>
                  <p className="font-mono text-[10px] tracking-wider text-zinc-500">
                    {cert.issuer} · {cert.year}
                  </p>
                  {"detail" in cert && (
                    <p className="mt-0.5 text-[11px] text-zinc-400">{cert.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ATS keyword strip */}
        <Reveal delay={0.18}>
          <p className="mt-8 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-5 font-mono text-[11px] leading-6 tracking-wide text-zinc-500">
            <span className="mr-3 text-acid">// keywords</span>{" "}
            software development · software engineering fresher · python developer · java developer · javascript
            · react.js · node.js · flask django · html css · sql database · git github · iot internet of things
            · embedded systems arduino esp32 · machine learning ai · computer vision face recognition · openai api
            · generative ai chatbot · web development full stack · problem solving data structures algorithms ·
            ui ux design figma · azure aws cloud · internship experience · teamwork communication
          </p>
        </Reveal>
      </div>
    </section>
  );
}
