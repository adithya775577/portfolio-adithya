import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  TiltCard — physics-based 3D perspective tilt that follows cursor   */
/* ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className,
  intensity = 10,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX: MotionValue<number> = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY: MotionValue<number> = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 220,
    damping: 22,
  });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
    // position the glare
    ref.current?.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
    ref.current?.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1200 }}
      className={cn("group/tilt relative will-change-transform", className)}
    >
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), rgba(200,255,61,0.09), transparent 45%)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal — butter-smooth scroll-in animation                         */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionHeader — consistent numbered section heading                */
/* ------------------------------------------------------------------ */
export function SectionHeader({
  index,
  kicker,
  title,
  sub,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.35em] text-acid uppercase">
          <span className="text-zinc-500">[{index}]</span> {kicker}
          <span className="h-px w-16 bg-gradient-to-r from-acid/60 to-transparent" />
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Counter — animated count-up on scroll into view                    */
/* ------------------------------------------------------------------ */
export function Counter({
  value,
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(parseFloat((value * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Chip — tech keyword tag                                            */
/* ------------------------------------------------------------------ */
export function Chip({ children, acid = false }: { children: React.ReactNode; acid?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-colors duration-300",
        acid
          ? "border-acid/30 bg-acid-dim text-acid"
          : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-acid/40 hover:text-acid"
      )}
    >
      {children}
    </span>
  );
}
