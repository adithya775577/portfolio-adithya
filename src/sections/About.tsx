import { motion } from "framer-motion";
import { BadgeCheck, Blocks, Compass, Crosshair, MapPin, Rocket, Users } from "lucide-react";
import { Reveal, SectionHeader, TiltCard } from "../components/ui";
import { profile } from "../data/resume";

const pillars = [
  {
    icon: Rocket,
    title: "Full-Stack Foundation",
    text: "Trained in complete web development stacks — from React frontends with responsive design to Flask/Node.js backends, REST APIs, and database integration. Two industry internships prove production-level capability.",
  },
  {
    icon: Blocks,
    title: "IoT & AI Innovation",
    text: "Built real IoT systems solving agriculture and water problems. Explored ML through face recognition deployments and generative AI chatbots during professional internships. Not just theory — shipped working solutions.",
  },
  {
    icon: Users,
    title: "Collaborative Learner",
    text: "Thrive in team environments. Active participant in workshops, hackathons, and technical events. Value code reviews, pair programming, and learning from experienced engineers. Ready to contribute on Day 1.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div aria-hidden className="bg-dots absolute inset-x-0 top-0 h-full opacity-[0.15]" />

      <div className="relative grid gap-12 lg:grid-cols-12">
        {/* sticky rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              index="01"
              kicker="Professional Profile"
              title={
                <span id="about-heading">
                  Diligent by nature.
                  <br />
                  <span className="text-outline-acid">Engineer by choice.</span>
                </span>
              }
            />
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-panel/70 p-6 backdrop-blur">
                <p className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                  <MapPin size={14} className="text-acid" /> {profile.location}
                </p>
                <p className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                  <BadgeCheck size={14} className="text-acid" /> {profile.availability}
                </p>
                <p className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                  <Compass size={14} className="text-acid" /> B.Tech IT @ SNS College · GPA 7.92/10
                </p>
                <p className="mt-1 pt-3 border-t border-white/10">
                  <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Languages</span>
                  <div className="mt-2 flex gap-3 text-sm text-zinc-300">
                    🇬🇧 English · 🇮🇳 Tamil (Fluent) · 🇩🇪 German
                  </div>
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* content */}
        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-display text-2xl leading-snug font-medium text-zinc-200 md:text-[2rem] md:leading-[1.35]">
              I&apos;m a <span className="text-acid">B.Tech IT student</span> who doesn&apos;t just study
              technology — I build with it. From{" "}
              <span className="text-iris">Python</span> scripts that run on embedded boards, to{" "}
              <span className="text-iris">React</span> interfaces managing real-time IoT data, to{" "}
              <span className="text-iris">Flask</span> APIs powering AI chatbots.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
              As a <strong className="font-medium text-zinc-200">diligent software engineering student</strong>{" "}
              at SNS College of Technology, I combine solid academic foundations (GPA{" "}
              <strong className="text-acid">7.92/10</strong>) with hands-on project experience spanning{" "}
              <strong className="font-medium text-zinc-200">full-stack web development</strong>,{" "}
              <strong className="font-medium text-zinc-200">Internet of Things</strong>, and{" "}
              <strong className="font-medium text-zinc-200">Artificial Intelligence</strong>. I&apos;ve completed two structured
              industry internships at CodSoft and Webgen Technologies, where I shipped face recognition systems,
              email automation workflows, and AI-powered chatbot applications.
              <br /><br />
              Hiring managers evaluating fresh talent consistently prioritize three things:
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <TiltCard className="h-full rounded-2xl" intensity={8}>
                  <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-panel/80 p-6 transition-colors duration-300 hover:border-acid/30">
                    <div style={{ transform: "translateZ(30px)" }}>
                      <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-acid/25 bg-acid-dim text-acid">
                        <p.icon size={18} />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-400">{p.text}</p>
                    </div>
                    <Crosshair
                      aria-hidden
                      size={70}
                      className="absolute -right-4 -bottom-4 text-white/[0.04] transition-transform duration-700 group-hover/tilt:rotate-90"
                    />
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* terminal card */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -2 }}
              style={{ transformPerspective: 1200 }}
              className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#08080cf9] font-mono text-[13px] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] text-zinc-500">jothir@dev — zsh</span>
              </div>
              <div className="space-y-1.5 px-5 py-5 leading-relaxed">
                <p>
                  <span className="text-acid">➜</span> <span className="text-iris">~</span> whoami
                </p>
                <p className="text-zinc-400">
                  jothir_adithya · btech_it_student · python/java/c++ · open_to_work ={" "}
                  <span className="text-acid">true</span>
                </p>
                <p>
                  <span className="text-acid">➜</span> <span className="text-iris">~</span> cat current_focus.txt
                </p>
                <p className="text-zinc-400">
                  full-stack dev · iot & smart devices · ai/ml exploration · internship experience · problem-solving
                </p>
                <p>
                  <span className="text-acid">➜</span> <span className="text-iris">~</span> cat mission.txt
                </p>
                <p className="text-zinc-400">
                  build real solutions → learn continuously → deliver quality → grow into a world-class engineer
                </p>
                <p>
                  <span className="text-acid">➜</span> <span className="text-iris">~</span>{" "}
                  <span className="animate-pulse text-acid">▍</span>
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}