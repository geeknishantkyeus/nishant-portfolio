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

      {/* ═══════════════════════════════════════════ */}
      {/* HERO — UPDATED */}
      {/* ═══════════════════════════════════════════ */}
      <section
        id="top"
        className="hero-glow min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      >
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220,20,60,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220,20,60,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="max-w-4xl w-full relative z-10">
          
          {/* Prefix */}
          <p className="mono text-[#DC143C] text-xs md:text-sm mb-8 tracking-widest">
            &gt; initializing_
          </p>

          {/* Name — 2 lines, serif */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            Nishant
            <br />
            <span className="text-[#DC143C]">Kumar</span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-[#DC143C] mb-8" />

          {/* Title */}
          <p className="mono text-sm md:text-base text-neutral-400 mb-6 leading-relaxed">
            Cybersecurity Engineer
            <br />
            Full Stack Developer
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-12 max-w-xl">
            Building <span className="text-white">secure, scalable web apps</span> with a{" "}
            <span className="text-white">security-first mindset</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            
            {/* Work With Me — Mail Redirect */}
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=usenishant@gmail.com&su=Let's%20Work%20Together&body=Hi%20Nishant,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20work%20with%20you%20on..."
  target="_blank"
  rel="noopener noreferrer"
  className="mono px-6 py-3 bg-[#DC143C] text-white text-sm hover:bg-[#FF2E2E] hover:shadow-[0_0_25px_rgba(220,20,60,0.5)] transition-all font-bold"
>
  Work With Me →
</a>

            {/* View Projects */}
            <a
              href="#projects"
              className="mono px-6 py-3 border border-[#8B0000] text-[#EDEDED] text-sm hover:bg-[#1A0000] hover:border-[#DC143C] hover:shadow-[0_0_20px_rgba(220,20,60,0.3)] transition-all"
            >
              [ View Projects ]
            </a>

            {/* Read Blog */}
            <a
              href="#blog"
              className="mono px-6 py-3 border border-[#1F1F1F] text-neutral-400 text-sm hover:border-[#DC143C] hover:text-[#DC143C] transition-all"
            >
              [ Read Blog ]
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="mono px-6 py-3 border border-[#1F1F1F] text-neutral-400 text-sm hover:border-[#DC143C] hover:text-[#DC143C] transition-all"
            >
              [ Resume ]
            </a>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for work · 2026
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CONTENT SECTIONS */}
      {/* ═══════════════════════════════════════════ */}
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