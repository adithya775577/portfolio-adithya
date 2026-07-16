import { motion } from "framer-motion";
import { BadgeCheck, Briefcase, Building2, CalendarDays, GraduationCap, MapPin, School } from "lucide-react";
import { Chip, Reveal, SectionHeader, TiltCard } from "../components/ui";
import { certifications, education, experience, hobbies } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div aria-hidden className="absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-iris/[0.07] blur-[120px]" />

      <div className="relative">
        <SectionHeader
          index="04"
          kicker="Experience & Education"
          title={
            <span id="experience-heading">
              The journey so far<span className="text-acid">.</span>
            </span>
          }
          sub="Two hands-on industry internships building production systems. A solid academic foundation at SNS College of Technology. Every step focused on becoming a world-class engineer."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          {/* timeline — internships + projects */}
          <div className="lg:col-span-8">
            <ol className="relative ml-3 border-l border-white/10 md:ml-6">
              {experience.map((job, i) => (
                <motion.li
                  key={job.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pb-12 pl-8 last:pb-0 md:pl-12"
                >
                  {/* node */}
                  <span
                    aria-hidden
                    className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border border-acid bg-void"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  </span>

                  <TiltCard intensity={5} className="rounded-2xl">
                    <article className="rounded-2xl border border-white/10 bg-panel/70 p-6 backdrop-blur transition-colors duration-300 hover:border-acid/30 md:p-8">
                      <div style={{ transform: "translateZ(22px)" }}>
                        <p className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-acid uppercase">
                          <CalendarDays size={13} /> {job.period}
                          <span className="rounded-full border border-acid/40 bg-acid-dim px-2.5 py-0.5 text-[9px] text-acid">
                            INTERNSHIP
                          </span>
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-[1.7rem]">{job.title}</h3>
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-400">
                          <span className="inline-flex items-center gap-1.5 font-medium text-zinc-200">
                            <Building2 size={14} className="text-iris" /> {job.company}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-zinc-500">
                            <MapPin size={13} /> {job.location}
                          </span>
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {job.bullets.map((b, j) => (
                            <li key={j} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                              <span aria-hidden className="mt-2 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-acid to-transparent" />
                              <span dangerouslySetInnerHTML={{ __html: b }} />
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {job.tech.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                      </div>
                    </article>
                  </TiltCard>
                </motion.li>
              ))}
              
              {/* Project experience as timeline entry */}
              <motion.li
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="relative pb-12 pl-8 md:pl-12"
              >
                <span
                  aria-hidden
                  className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border border-iris bg-void"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-iris" />
                </span>

                <TiltCard intensity={4} className="rounded-2xl">
                  <article className="rounded-2xl border border-white/10 bg-panel/70 p-6 backdrop-blur transition-colors duration-300 hover:border-iris/35 md:p-8">
                    <div style={{ transform: "translateZ(22px)" }}>
                      <p className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-iris uppercase">
                        <Briefcase size={13} /> 2024 – Present
                        <span className="rounded-full border border-iris/40 bg-iris-dim px-2.5 py-0.5 text-[9px] text-iris">
                          PROJECTS
                        </span>
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-[1.7rem]">
                        Real-World Project Portfolio
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        Built <strong className="font-medium text-zinc-200">four complete working systems</strong> solving real problems — from pesticide monitoring for farmers to smart water management for homes.
                        Each project spans full lifecycle: research → design → development → testing → deployment presentation.
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {[
                          {
                            title: "🌱 Pesticide Monitor Pro",
                            desc: "IoT + Mobile app for agriculture",
                            tech: ["Python", "Arduino", "IoT", "Mobile"],
                          },
                          {
                            title: "💧 AquaGuard Water Manager",
                            desc: "Automated IoT water conservation",
                            tech: ["Embedded C", "IoT", "Sensors", "Mobile API"],
                          },
                          {
                            title: "🤖 FaceAuth Portal",
                            desc: "Face recognition access system",
                            tech: ["Python", "OpenCV", "Flask", "ML"],
                          },
                          {
                            title: "💬 IntelliChat AI Assistant",
                            desc: "Generative AI conversational bot",
                            tech: ["Python", "Flask", "OpenAI", "GenAI"],
                          },
                        ].map((proj) => (
                          <div key={proj.title} className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
                            <p className="font-medium text-sm text-zinc-200">{proj.title}</p>
                            <p className="mt-0.5 text-xs text-zinc-500">{proj.desc}</p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {proj.tech.map((t) => (
                                <Chip key={t}>{t}</Chip>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.li>
            </ol>
          </div>

          {/* education rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Primary education */}
              <Reveal>
                <TiltCard intensity={7} className="rounded-2xl">
                  <article className="rounded-2xl border border-white/10 bg-panel/80 p-7 backdrop-blur">
                    <div style={{ transform: "translateZ(26px)" }}>
                      <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-acid/25 bg-acid-dim text-acid">
                        <GraduationCap size={19} />
                      </span>
                      <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
                        Currently Pursuing
                      </p>
                      <h3 className="mt-2 font-display text-lg leading-snug font-semibold text-white">
                        {education.degree}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-2 text-sm text-zinc-400">
                        <School size={13} className="text-iris" /> {education.school}
                      </p>
                      <p className="mt-1 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                        <CalendarDays size={12} /> {education.period}
                      </p>
                      
                      {/* GPA Highlight */}
                      <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-acid/25 bg-acid-dim px-4 py-2">
                        <BadgeCheck size={15} className="text-acid" />
                        <span>
                          <span className="block text-lg font-bold text-acid">{education.highlights[0].split(": ")[1]}</span>
                          <span className="text-[10px] text-zinc-500">{education.highlights[0].split(": ")[0]}</span>
                        </span>
                      </div>

                      <p className="mt-4 border-t border-white/8 pt-4 text-[13px] leading-relaxed text-zinc-400">
                        {education.details}
                      </p>

                      <div className="mt-4 space-y-2">
                        {education.highlights.slice(1).map((h) => (
                          <p key={h} className="flex items-start gap-2 text-xs text-zinc-400">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>

              {/* Previous education */}
              <Reveal delay={0.06}>
                <article className="rounded-2xl border border-white/10 bg-panel/80 px-7 py-6 backdrop-blur">
                  <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
                    <School size={13} /> Prior Education
                  </p>
                  <h3 className="mt-2 font-semibold text-sm text-zinc-200">{education.previousEdu.degree}</h3>
                  <p className="mt-0.5 text-xs text-zinc-400">{education.previousEdu.school}</p>
                  <p className="mt-1 font-mono text-[10px] text-zinc-600">{education.previousEdu.period}</p>
                </article>
              </Reveal>

              {/* Certifications */}
              <Reveal delay={0.1}>
                <article className="rounded-2xl border border-white/10 bg-panel/80 p-7 backdrop-blur">
                  <p className="mb-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
                    <BadgeCheck size={14} className="text-acid" /> Certifications
                  </p>
                  <ul className="space-y-4">
                    {certifications.map((c) => (
                      <li key={c.title} className="group flex items-start gap-3">
                        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-acid/30 bg-acid-dim transition-transform duration-300 group-hover:rotate-12">
                          <BadgeCheck size={12} className="text-acid" />
                        </span>
                        <div>
                          <p className="text-sm leading-snug font-medium text-zinc-200">{c.title}</p>
                          <p className="mt-0.5 font-mono text-[11px] text-zinc-500">
                            {"detail" in c ? c.detail : c.issuer}
                            {" "}
                            <span className="text-acid">·</span>{" "}
                            {c.year}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              {/* Languages & Hobbies */}
              <Reveal delay={0.18}>
                <article className="rounded-2xl border border-white/10 bg-panel/80 p-7 backdrop-blur">
                  <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
                    🌍 Languages · ⚡ Hobbies
                  </p>
                  
                  <div className="space-y-3">
                    {[{name:"English","level":"Intermediate"},{name:"Tamil","level":"Fluent"},{name:"German","level":"Basics"}].map((lang) => (
                      <div key={lang.name}>
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-300">{lang.name}</span>
                          <span className="text-zinc-500">{lang.level}</span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r from-acid to-iris`}
                            style={{ width: lang.level === "Fluent" ? "95%" : lang.level === "Intermediate" ? "75%" : "35%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/8 pt-4">
                    <p className="font-mono text-[10px] text-zinc-600 mb-2">// when not coding</p>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                      {hobbies.map(h => (
                        <span key={h} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* Recruiter note */}
              <Reveal delay={0.24}>
                <div className="flex items-start gap-4 rounded-2xl border border-acid/25 bg-acid-dim/50 p-6 backdrop-blur">
                  <Briefcase size={20} className="mt-0.5 shrink-0 text-acid" />
                  <div>
                    <p className="font-display text-sm font-semibold text-acid">Why Hire Me?</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-300">
                      I bring{" "}
                      <strong className="text-white">practical project experience</strong>,{" "}
                      <strong className="text-white">industry internships</strong>, a{" "}
                      <strong className="text-white">strong academic record</strong>, and an
                      insatiable hunger to learn. I&apos;m ready to contribute from Day 1 —{" "}
                      <span className="underline decoration-acid underline-offset-4">demo any project above</span>.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
