export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> ABOUT
          </h2>
        </div>

        <div className="dotted-red mb-12" />

        <div className="space-y-6 text-neutral-300 text-lg leading-relaxed max-w-3xl">
          <p>
            I&apos;m a{" "}
            <span className="text-[#DC143C]">cybersecurity student</span> and{" "}
            <span className="text-[#DC143C]">full stack developer</span>,
            passionate about building secure web applications and understanding
            how systems can be exploited.
          </p>

          <p>
            I build modern web apps using{" "}
            <span className="text-white">
              React, Next.js, Node.js, Express, MongoDB, and SQL
            </span>{" "}
            — with a security-first approach. I also practice{" "}
            <span className="text-white">offensive security</span>, exploring
            penetration testing, network scanning, and OSINT techniques.
          </p>

          <p>
            Currently pursuing B.Tech in CSE at REC Sonbhadra, actively building
            projects and learning through hands-on practice.
          </p>

          <div className="pt-6 border-t border-[#1F1F1F] space-y-3 mono text-sm">
            <div className="flex gap-3">
              <span className="text-[#DC143C] shrink-0">&gt; Currently</span>
              <span className="text-neutral-400">
                Building secure web apps · Learning pentesting
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[#DC143C] shrink-0">&gt; Focus</span>
              <span className="text-neutral-400">
                Security-first development · Ethical hacking
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[#DC143C] shrink-0">&gt; Open to</span>
              <span className="text-neutral-400">
                Freelance · Internships · Collaborations
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}