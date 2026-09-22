import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { allProjects } from "@/components/Projects";

export const metadata = {
  title: "Projects — Nishant Kumar",
  description: "All projects by Nishant Kumar — Full Stack, Security, Web3, and AI.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex items-end justify-between mb-4">
            <h1 className="mono text-4xl md:text-5xl font-bold">
              <span className="text-[#DC143C]">&gt;</span> ALL PROJECTS
            </h1>
            <span className="mono text-sm text-neutral-500">
              {allProjects.length} total
            </span>
          </div>

          <p className="text-neutral-400 mb-12 max-w-2xl">
            A collection of projects covering full stack development,
            cybersecurity, Web3, and AI — built with a security-first mindset.
          </p>

          <div className="dotted-red mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project, i) => (
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

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="mono text-sm text-neutral-500 hover:text-[#DC143C] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}