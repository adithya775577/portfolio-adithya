import { ArrowUpRight, TrendingUp } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { Chip, Reveal, SectionHeader, TiltCard } from "../components/ui";
import { projects, type Project } from "../data/resume";
import { cn } from "../utils/cn";

const themes: Record<Project["theme"], { hex: string; dim: string; textCls: string; borderCls: string }> = {
  acid: { hex: "#c8ff3d", dim: "rgba(200,255,61,0.10)", textCls: "text-acid", borderCls: "hover:border-acid/35" },
  iris: { hex: "#9d8cff", dim: "rgba(157,140,255,0.12)", textCls: "text-iris", borderCls: "hover:border-iris/40" },
  cyan: { hex: "#4fd8ff", dim: "rgba(79,216,255,0.10)", textCls: "text-[#4fd8ff]", borderCls: "hover:border-[#4fd8ff]/40" },
  rose: { hex: "#ff7ac8", dim: "rgba(255,122,200,0.10)", textCls: "text-[#ff7ac8]", borderCls: "hover:border-[#ff7ac8]/40" },
};

function Sparkline({ points, color, gid }: { points: number[]; color: string; gid: string }) {
  const w = 220;
  const h = 64;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => `${i * step},${h - (p / 100) * h}`).join(" ");
  const area = `0,${h} ${coords} ${w},${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-16 w-full" aria-hidden>
      <defs>
        <linearGradient id={`grad-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#grad-${gid})`} />
      <polyline points={coords} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={i * step} cy={h - (p / 100) * h} r={i === points.length - 1 ? 4 : 0} fill={color} />
      ))}
    </svg>
  );
}

function ProjectCard({ p, flip }: { p: Project; flip: boolean }) {
  const t = themes[p.theme];
  return (
    <Reveal>
      <TiltCard intensity={4.5} className="rounded-3xl">
        <article className={cn("group grid overflow-hidden rounded-3xl border border-white/10 bg-panel/70 backdrop-blur transition-colors duration-500 lg:grid-cols-12", t.borderCls)}>
          {/* ---- visual panel ---- */}
          <div
            className={cn("relative overflow-hidden border-white/10 lg:col-span-5", flip ? "lg:order-2 lg:border-l" : "border-b lg:border-r lg:border-b-0")}
            style={{ background: `radial-gradient(120% 120% at ${flip ? "100%" : "0%"} 0%, ${t.dim}, transparent 55%)` }}
          >
            <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
            {/* giant outline index */}
            <span
              aria-hidden
              className="text-outline absolute top-4 font-display text-[7.5rem] leading-none font-bold opacity-50 transition-transform duration-700 group-hover:-translate-y-2"
              style={{ [flip ? "right" : "left"]: "1.25rem" } as React.CSSProperties}
            >
              {p.index}
            </span>
            {/* floating metric badge */}
            <div className="animate-float-y absolute top-8 rounded-xl border border-white/15 bg-void/70 px-4 py-3 backdrop-blur-xl"
              style={{ [flip ? "left" : "right"]: "1.5rem" } as React.CSSProperties}
            >
              <p className={cn("font-display text-xl font-bold", t.textCls)}>{p.metrics[0].value}</p>
              <p className="font-mono text-[9px] tracking-[0.2em] text-zinc-500 uppercase">{p.metrics[0].label}</p>
            </div>
            {/* sparkline block */}
            <div className="relative mt-32 px-6 pb-6 md:mt-40">
              <div className="rounded-2xl border border-white/10 bg-void/60 p-5 backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <p className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase">
                  <span>Growth trajectory</span>
                  <TrendingUp size={13} style={{ color: t.hex }} />
                </p>
                <Sparkline points={p.spark} color={t.hex} gid={p.id} />
              </div>
            </div>
          </div>

          {/* ---- content ---- */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:col-span-7" style={{ transform: "translateZ(24px)" }}>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-[0.28em] uppercase">
              <span className={t.textCls}>{p.title}.case</span>
              <span className="text-zinc-600">│</span>
              <span className="text-zinc-400">{p.role}</span>
              <span className="text-zinc-600">│</span>
              <span className="text-zinc-500">{p.year}</span>
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {p.title} <span className="text-zinc-500">— {p.tagline}</span>
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3" aria-label="Impact metrics">
              {p.metrics.map((m) => (
                <li key={m.label} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className={cn("font-display text-lg font-bold", t.textCls)}>{m.value}</p>
                  <p className="mt-0.5 text-[11px] text-zinc-500">{m.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-6">
              <a
                href={p.liveUrl}
                aria-label={`${p.title} — live demo`}
                className={cn("link-sweep inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase", t.textCls)}
              >
                Live Demo <ArrowUpRight size={14} />
              </a>
              <a
                href={p.codeUrl}
                aria-label={`${p.title} — source code on GitHub`}
                className="link-sweep inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-zinc-400 uppercase transition-colors hover:text-white"
              >
                <GithubIcon size={13} /> Source
              </a>
            </div>
          </div>
        </article>
      </TiltCard>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div aria-hidden className="absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-acid/[0.05] blur-[130px]" />
      <div className="relative">
        <SectionHeader
          index="03"
          kicker="Selected Work"
          title={
            <span id="work-heading">
              Work that moves <span className="text-outline-acid">metrics</span>
              <span className="text-acid">.</span>
            </span>
          }
          sub="Every project below shipped to real users and is framed the way hiring managers evaluate impact: the metric first, the stack second, the story always."
        />
        <div className="flex flex-col gap-8 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-12 text-center">
            <a
              href={projects[0].codeUrl}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-acid/50 hover:bg-acid-dim hover:text-acid"
            >
              <GithubIcon size={16} />
              Explore 40+ more repositories on GitHub
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
