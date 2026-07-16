import { useState } from "react";
import { ArrowUp, ArrowUpRight, AtSign, CheckCircle2, Clock4, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { Reveal, SectionHeader, TiltCard } from "../components/ui";
import { profile } from "../data/resume";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || "Recruiter"} — Jothir Adithya Portfolio`);
    const body = encodeURIComponent(`Hi Jothir,\n\n${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-void/60 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-acid/60 focus:bg-void focus:shadow-[0_0_0_3px_rgba(200,255,61,0.08)]";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden pt-24 pb-12 md:pt-36">
      {/* backdrop */}
      <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 opacity-40" />
      <div aria-hidden className="absolute -bottom-52 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-acid/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="05"
          kicker="Get in Touch"
          title={
            <span id="contact-heading">
              Let&apos;s build something
              <br />
              <span className="text-outline-acid">together</span>
              <span className="text-acid">.</span>
            </span>
          }
          sub={
            <>
              I&apos;m actively seeking{" "}
              <strong className="font-medium text-zinc-200">full-time software engineering opportunities</strong>,{" "}
              internships, and collaborative projects where I can contribute meaningfully while learning from experienced teams.
              Whether it&apos;s a startup building the next big thing or an established company solving real-world problems — let&apos;s connect.
            </>
          }
        />

        <div className="grid gap-10 pb-24 lg:grid-cols-12">
          {/* left — pitch + channels */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="max-w-md text-[15px] leading-relaxed text-zinc-400">
                As a diligent software engineering student with hands-on internship experience and a portfolio of working projects,
                I&apos;m ready to bring fresh energy, adaptability, and a strong work ethic to your team.
              </p>
            </Reveal>

            {/* Contact channels */}
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-panel/70 p-5 transition-all duration-300 hover:border-acid/40 hover:bg-acid-dim"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acid/25 bg-acid-dim text-acid">
                    <AtSign size={17} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] tracking-[0.28em] text-zinc-500 uppercase">Email</span>
                    <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-acid">
                      {profile.email}
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="ml-auto text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-acid" />
                </a>
                
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-panel/70 p-5 transition-all duration-300 hover:border-acid/40 hover:bg-acid-dim"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acid/25 bg-acid-dim text-acid">
                    <Phone size={17} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] tracking-[0.28em] text-zinc-500 uppercase">Phone / WhatsApp</span>
                    <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-acid">{profile.phone}</span>
                  </span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-panel/70 p-5 transition-all duration-300 hover:border-acid/40 hover:bg-acid-dim"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acid/25 bg-acid-dim text-acid">
                    <LinkedinIcon size={16} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] tracking-[0.28em] text-zinc-500 uppercase">LinkedIn Profile</span>
                    <span className="text-sm font-medium text-zinc-200 break-all transition-colors group-hover:text-acid">
                      linkedin.com/in/jothiradithyar
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="ml-auto text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-acid" />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-panel/70 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acid/25 bg-acid-dim text-acid">
                    <MapPin size={17} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] tracking-[0.28em] text-zinc-500 uppercase">Location</span>
                    <span className="text-sm font-medium text-zinc-200">{profile.location.split("—")[0]}</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex items-center gap-3">
                {[
                  { icon: GithubIcon, href: profile.github, label: "GitHub" },
                  { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1.5 hover:border-acid/60 hover:text-acid hover:shadow-[0_12px_30px_rgba(200,255,61,0.15)]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
                <p className="ml-2 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                  <Sparkles size={13} className="text-acid" /> Quick response guaranteed
                </p>
              </div>
            </Reveal>
          </div>

          {/* right — form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <TiltCard intensity={5} className="rounded-3xl">
                <form
                  onSubmit={onSubmit}
                  aria-label="Contact form"
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/80 p-7 backdrop-blur-xl md:p-10"
                >
                  <div aria-hidden className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-acid/[0.08] blur-3xl" />
                  <div style={{ transform: "translateZ(28px)" }}>
                    <p className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.3em] text-acid uppercase">
                      <Clock4 size={13} /> Your message → My inbox in seconds
                    </p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase">Your Name</span>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="HR Manager @ Company"
                          className={inputCls}
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase">Work Email</span>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="hiring@company.com"
                          className={inputCls}
                        />
                      </label>
                    </div>
                    <label className="mt-5 block">
                      <span className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase">
                        Role · Team · Message
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={`Hi Jothir,\n\nWe saw your portfolio and would like to discuss a Software Developer role at...\n\nLooking forward to connecting!`}
                        className={`${inputCls} resize-none`}
                      />
                    </label>
                    <button
                      type="submit"
                      className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-acid px-8 py-4 text-sm font-bold text-void transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(200,255,61,0.45)] active:scale-95 sm:w-auto"
                    >
                      {sent ? (
                        <>
                          <CheckCircle2 size={17} /> Opening your mail client…
                        </>
                      ) : (
                        <>
                          Send Message to Jothir
                          <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                    <p className="mt-4 font-mono text-[10px] text-zinc-600">
                      // opens default email client — no data stored locally
                    </p>
                  </div>
                </form>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row md:px-8">
          <p className="font-mono text-xs text-zinc-500">
            © 2026 {profile.name} <span className="text-acid">—</span> B.Tech IT Student @ SNS College of Technology
            <span className="hidden sm:inline ml-1 text-zinc-600">· Built with React, Three.js & Tailwind CSS</span>
          </p>
          <nav aria-label="Footer" className="flex items-center gap-5 font-mono text-[11px] tracking-wider text-zinc-500 uppercase">
            <a href="#work" className="link-sweep hover:text-acid">Projects</a>
            <a href="#experience" className="link-sweep hover:text-acid">Experience</a>
            <a href={profile.resumeUrl} className="link-sweep hover:text-acid">Résumé PDF</a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-acid/50 hover:text-acid"
            >
              <ArrowUp size={15} />
            </a>
          </nav>
        </div>
        {/* ATS-friendly full footer text for crawlers */}
        <div className="sr-only">
          Jothir Adithya | Software Engineer Portfolio | B.Tech Information Technology SNS College of Technology |
          Python Java C++ JavaScript React Node.js Flask IoT Machine Learning AI Face Recognition Smart Agriculture |
          Pesticide Monitoring System Smart Water Management | CodSoft Internship WebGen Technologies Internship |
          jothirdhiya.krr@gmail.com +91 9486775577 Coimbatore Tamil Nadu India
        </div>
      </footer>
    </section>
  );
}
