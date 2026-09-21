import Image from "next/image";

type Project = {
  name: string;
  description: string;
  tech: string[];
  live?: string;
  source?: string;
  image?: string;
  status?: "live" | "building" | "archived";
};

const projects: Project[] = [
  {
    name: "Krishi Sakhi",
    description:
      "AI chatbot for farmers — built at SIH Hackathon. Helps with crop diseases, weather, and market prices.",
    tech: ["React", "JavaScript", "AI APIs"],
    live: "https://krishi-sakhi.vercel.app", // ← apna actual link
    source: "https://github.com/geeknishantkyeus/krishi-sakhi", // ← apna actual link
    status: "live",
  },
  {
    name: "AI Study Assistant",
    description:
      "RAG-based study assistant that answers questions from uploaded PDFs using vector search.",
    tech: ["Next.js", "OpenAI", "Vector DB"],
    source: "https://github.com/geeknishantkyeus/ai-study-assistant",
    status: "building",
  },
  {
    name: "Growthke",
    description:
      "AI-powered learning platform for students with personalized learning paths.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://growthke.vercel.app",
    source: "https://github.com/geeknishantkyeus/growthke",
    status: "live",
  },
  {
    name: "Portfolio",
    description:
      "The site you're looking at right now. Built with Next.js, Tailwind, and a hacker aesthetic.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    live: "https://nishant.dev",
    source: "https://github.com/geeknishantkyeus/portfolio",
    status: "live",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> PROJECTS
          </h2>
          <span className="mono text-sm text-neutral-500">
            {projects.length} total
          </span>
        </div>

        <div className="dotted-red mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
  key={i}
  className="group border border-[#1F1F1F] hover:border-[#DC143C] hover:shadow-[0_0_30px_rgba(220,20,60,0.15)] hover:-translate-y-1 transition-all duration-300 p-6 bg-[#0A0A0A] flex flex-col"
>
              
              {/* Image (optional) */}
              {project.image && (
                <div className="relative w-full h-40 mb-4 overflow-hidden border border-[#1F1F1F]">
                  <Image
                    src={project.image}
                    alt={project.name}
                   width={600}
  height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Name + Status */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="mono text-xl font-bold group-hover:text-[#DC143C] transition-colors">
                  <span className="text-[#DC143C]">&gt;</span> {project.name}
                </h3>

                {project.status === "building" && (
                  <span className="mono text-xs px-2 py-0.5 border border-yellow-700 text-yellow-500">
                    building
                  </span>
                )}
                {project.status === "live" && (
                  <span className="mono text-xs px-2 py-0.5 border border-green-800 text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    live
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech tags */}
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

              {/* Links */}
              <div className="flex gap-6 mono text-sm pt-4 border-t border-[#1F1F1F]">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#DC143C] transition-colors flex items-center gap-1"
                  >
                    ↗ Live Demo
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#DC143C] transition-colors flex items-center gap-1"
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