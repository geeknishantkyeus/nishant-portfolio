import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CurrentWork from "@/components/CurrentWork";
import Projects from "@/components/Projects";
import Milestones from "@/components/Milestones";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        id="top"
        className="hero-glow min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-3xl w-full">
          
          <p className="mono text-[#DC143C] text-sm mb-4">
            &gt; initializing...
          </p>

          <h1 className="mono text-4xl md:text-6xl font-bold tracking-tight mb-6 glitch-once">
            NISHANT KUMAR
          </h1>

          <p className="mono text-lg md:text-xl text-[#DC143C] mb-8">
            Cybersecurity Engineer · Full Stack Developer
          </p>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-12 max-w-2xl">
            I build <span className="text-white">secure, scalable web applications</span> —
            combining modern full-stack development with a{" "}
            <span className="text-white">security-first mindset</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="mono px-6 py-3 bg-[#DC143C] text-white text-sm hover:bg-[#FF2E2E] hover:shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-all font-bold"
            >
              [ Hire Me ]
            </a>
            <a
              href="#projects"
              className="mono px-6 py-3 border border-[#8B0000] text-[#EDEDED] text-sm hover:bg-[#1A0000] hover:border-[#DC143C] hover:shadow-[0_0_20px_rgba(220,20,60,0.3)] transition-all"
            >
              [ View Projects ]
            </a>
            <a
              href="#blog"
              className="mono px-6 py-3 border border-[#1F1F1F] text-neutral-400 text-sm hover:border-[#DC143C] hover:text-[#DC143C] transition-all"
            >
              [ Read Blog ]
            </a>
            <a
              href="/resume.pdf"
              download
              className="mono px-6 py-3 border border-[#1F1F1F] text-neutral-400 text-sm hover:border-[#DC143C] hover:text-[#DC143C] transition-all"
            >
              [ Resume ]
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500 mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for work · 2026
          </div>

        </div>
      </section>

      <FadeIn><About /></FadeIn>
      <FadeIn><CurrentWork /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Milestones /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Blog /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />

    </main>
  );
}