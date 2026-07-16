import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { profile } from "./data/resume";

export default function App() {
  return (
    <div className="min-h-screen bg-void font-sans text-zinc-200 antialiased">
      {/* film-grain overlay */}
      <div className="noise-overlay" aria-hidden />

      {/* skip link — accessibility first */}
      <a
        href="#about"
        className="sr-only z-[200] rounded-full bg-acid px-6 py-3 font-semibold text-void focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main-content">
        {/* ATS-readable plain-text resume summary (hidden visually, parsed by screen readers & ATS) */}
        <section aria-label="ATS resume summary" className="sr-only">
          <h1>
            {profile.name} — {profile.role}
          </h1>
          <p>{profile.atsBlock}</p>
        </section>

        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
