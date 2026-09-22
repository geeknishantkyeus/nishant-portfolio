type Project = {
  name: string;
  description: string;
  tech: string[];
  live?: string;
  source?: string;
  status?: "live" | "building" | "archived";
  category?: "Full Stack" | "Security" | "AI";
};

const projects: Project[] = [
  {
    name: "Growthke",
    description:
      "Full stack learning platform with secure authentication and personalized learning paths.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    live: "#", // ← apna actual
    source: "#", // ← apna actual
    status: "live",
    category: "Full Stack",
  },
  {
    name: "Portfolio",
    description:
      "Secure portfolio with security headers, HTTPS enforcement, and a hacker-inspired dark theme.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    live: "https://www.geeknishant.tech",
    source: "https://github.com/geeknishantkyeus/nishant-portfolio",
    status: "live",
    category: "Full Stack",
  },
  {
    name: "Network Scanner",
    description:
      "Python-based tool for network reconnaissance — host discovery, port scanning, and service detection using Nmap.",
    tech: ["Python", "Nmap", "Networking"],
    source: "#", // ← jab banao
    status: "building",
    category: "Security",
  },
  {
    name: "AI Study Assistant",
    description:
      "RAG-based study assistant that answers questions from uploaded PDFs using vector search.",
    tech: ["Next.js", "OpenAI", "Vector DB"],
    source: "#",
    status: "building",
    category: "AI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> PROJECTS
          </h2>
          <span className="mono text-sm text-neutral-500">
            {projects.length} total
          </span>
        </div>

        <div className="dotted-red mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group border border-[#1F1F1F] hover:border-[#DC143C] hover:shadow-[0_0_30px_rgba(220,20,60,0.15)] hover:-translate-y-1 transition-all duration-300 p-6 bg-[#0A0A0A] flex flex-col"
            >
              
              <div className="flex items-center justify-between mb-3 gap-3">
                <h3 className="mono text-xl font-bold group-hover:text-[#DC143C] transition-colors">
                  <span className="text-[#DC143C]">&gt;</span> {project.name}
                </h3>

                <div className="flex gap-2 shrink-0">
                  {project.category && (
                    <span className="mono text-xs px-2 py-0.5 border border-[#8B0000] text-[#DC143C]">
                      {project.category}
                    </span>
                  )}
                  {project.status === "live" && (
                    <span className="mono text-xs px-2 py-0.5 border border-green-800 text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      live
                    </span>
                  )}
                  {project.status === "building" && (
                    <span className="mono text-xs px-2 py-0.5 border border-yellow-700 text-yellow-500">
                      building
                    </span>
                  )}
                </div>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="mono text-xs px-2 py-1 border border-[#1F1F1F] text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mono text-sm pt-4 border-t border-[#1F1F1F]">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#DC143C] transition-colors"
                  >
                    ↗ Live Demo
                  </a>
                )}
                {project.source && project.source !== "#" && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#DC143C] transition-colors"
                  >
                    ⌥ Source Code
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}