import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, Code2 } from "lucide-react";
import HeroScene from "../components/HeroScene";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { Counter } from "../components/ui";
import { profile, stats } from "../data/resume";

const easeOut = [0.22, 1, 0.36, 1] as const;

function HeadlineLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: easeOut }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} id="top" aria-label="Introduction" className="relative flex min-h-screen flex-col overflow-hidden pt-32 lg:pt-0">
      {/* ambient background layers */}
      <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 opacity-60" />
      <div aria-hidden className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-acid/[0.07] blur-[130px]" />
      <div aria-hidden className="absolute -right-40 bottom-0 h-[38rem] w-[38rem] rounded-full bg-iris/[0.09] blur-[140px]" />

      {/* 3D canvas — right side on desktop, behind content on mobile */}
      <motion.div
        aria-hidden
        style={{ y: sceneY, opacity: fade }}
        className="absolute inset-x-0 top-0 h-[62vh] opacity-45 md:opacity-70 lg:inset-y-0 lg:left-auto lg:h-full lg:w-[56%] lg:opacity-100"
      >
        <HeroScene />
      </motion.div>

      {/* content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 md:px-8 lg:py-24"
      >
        <div className="max-w-3xl">
          {/* availability badge */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] tracking-[0.22em] text-zinc-300 uppercase backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-acid" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            {profile.availability}
          </motion.p>

          {/* headline */}
          <h1 className="font-display text-[13.5vw] leading-[0.93] font-bold tracking-tight text-white sm:text-7xl lg:text-[6.2rem] xl:text-[6.8rem]">
            <HeadlineLine delay={0.25}>
              {profile.headline[0]}
              <span className="text-acid">.</span>
            </HeadlineLine>
            <HeadlineLine delay={0.36}>
              <span className="text-outline">{profile.headline[1]}</span>
            </HeadlineLine>
            <HeadlineLine delay={0.47}>
              {profile.headline[2]}
              <span className="ml-2 inline-block align-top font-mono text-[0.22em] tracking-widest text-acid" aria-label="student">
                🎓
              </span>
            </HeadlineLine>
          </h1>

          {/* professional summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62 }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-zinc-400"
          >
            <strong className="font-semibold text-white">{profile.name}</strong>
            <span className="mx-2 text-acid">|</span> B.Tech IT{" "}
            <span className="mx-1 text-acid">@</span>{" "}
            <span className="text-iris">SNS College of Technology</span> · GPA{" "}
            <span className="text-acid font-bold">7.92/10</span>
            <br className="hidden sm:block" />
            <span className="mt-2 block sm:inline">{profile.summary}</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.74 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-acid px-7 py-3.5 text-sm font-semibold text-void transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_44px_rgba(200,255,61,0.5)] active:scale-95"
            >
              Get in Touch
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-acid/50 hover:bg-acid-dim"
            >
              View Projects
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#experience"
              className="link-sweep inline-flex items-center gap-2 font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-acid"
            >
              Internships & Experience <ArrowDown size={14} />
            </a>
          </motion.div>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex items-center gap-2"
          >
            {[
              { icon: GithubIcon, href: profile.github, label: "GitHub profile" },
              { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn profile" },
              { icon: Code2, href: profile.leetcode, label: "LeetCode profile" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Send email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-acid/50 hover:text-acid"
              >
                <Icon size={16} />
              </a>
            ))}
            <span className="ml-3 h-px w-24 bg-gradient-to-r from-white/20 to-transparent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Scroll</span>
          </motion.div>
        </div>
      </motion.div>

      {/* bottom stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.05 }}
        className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-5 pb-10 md:px-8 lg:mt-0"
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group px-6 py-5 transition-colors duration-300 hover:bg-white/[0.04] md:border-l md:border-white/5 md:first:border-l-0"
            >
              <dt className="order-2 mt-1 font-mono text-[10px] tracking-[0.22em] text-zinc-500 uppercase">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                  className="mb-1 block font-display text-3xl font-semibold text-white normal-case transition-colors duration-300 group-hover:text-acid md:text-4xl"
                />
                {s.label}
              </dt>
              <dd className="sr-only">
                {s.value}
                {s.suffix} {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}