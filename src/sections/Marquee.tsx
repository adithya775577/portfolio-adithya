import { Sparkle } from "lucide-react";
import { marqueeTech } from "../data/resume";

function Row({ reverse = false, outline = false }: { reverse?: boolean; outline?: boolean }) {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="marquee-paused flex overflow-hidden" aria-hidden>
      <div className={`flex w-max shrink-0 items-center gap-8 pr-8 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={`font-display text-2xl font-semibold tracking-tight whitespace-nowrap uppercase md:text-3xl ${
                outline ? "text-outline opacity-70" : "text-white/90"
              }`}
            >
              {t}
            </span>
            <Sparkle size={14} className="shrink-0 text-acid" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative border-y border-white/10 bg-panel/60 py-6 backdrop-blur">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void" />
      <Row />
      <div className="mt-4 opacity-50">
        <Row reverse outline />
      </div>
      {/* screen-reader friendly keyword list */}
      <ul className="sr-only">
        {marqueeTech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
