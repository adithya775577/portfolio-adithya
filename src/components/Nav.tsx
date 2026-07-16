import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";
import { profile } from "../data/resume";
import { cn } from "../utils/cn";

const links = [
  { label: "Profile", href: "#about", id: "01" },
  { label: "Skills", href: "#skills", id: "02" },
  { label: "Work", href: "#work", id: "03" },
  { label: "Experience", href: "#experience", id: "04" },
  { label: "Contact", href: "#contact", id: "05" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* scroll progress */}
      <motion.div
        className="fixed top-0 left-0 z-[80] h-[2px] w-full origin-left bg-gradient-to-r from-acid via-lime-200 to-iris"
        style={{ scaleX: progress }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 z-[70] w-full transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          {/* logo */}
          <a
            href="#top"
            aria-label="Back to top"
            className="group flex items-center gap-2 font-mono text-sm font-semibold text-white"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-acid/50 group-hover:bg-acid-dim">
              <Terminal size={15} className="text-acid" />
            </span>
            <span className="hidden sm:block">
              {profile.initials}
              <span className="text-acid">_</span>
              <span className="text-zinc-500">//</span>
              <span className="text-zinc-400">dev</span>
            </span>
          </a>

          {/* desktop links */}
          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-xl transition-all duration-500 lg:flex",
              scrolled ? "border-white/10 bg-void/70 shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "border-transparent bg-transparent"
            )}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-[13px] font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <span className="mr-1.5 font-mono text-[9px] text-acid/70">{l.id}</span>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-acid px-5 py-2.5 text-[13px] font-semibold text-void transition-all duration-300 hover:shadow-[0_0_32px_rgba(200,255,61,0.45)] sm:inline-flex"
            >
              Get in Touch
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur lg:hidden"
            >
              <Menu size={17} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col bg-void/95 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-mono text-sm text-acid">{profile.initials}_//dev</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white"
              >
                <X size={17} />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 border-b border-white/5 py-4"
                >
                  <span className="font-mono text-xs text-acid">{l.id}</span>
                  <span className="font-display text-4xl font-semibold text-zinc-300 transition-colors group-hover:text-acid">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid px-6 py-4 text-sm font-semibold text-void"
              >
                Get in Touch <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
