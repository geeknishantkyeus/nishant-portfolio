const skills = [
  {
    category: "FRONTEND",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Express.js", "PHP", "MongoDB", "SQL"],
  },
  {
    category: "CYBERSECURITY",
    items: [
      "Ethical Hacking",
      "Penetration Testing",
      "Network Scanning",
      "OSINT",
      "Reconnaissance",
    ],
  },
  {
    category: "SECURITY TOOLS",
    items: [
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "theHarvester",
      "Shodan",
    ],
  },
  {
    category: "NETWORKING",
    items: [
      "TCP/IP",
      "Subnetting",
      "CIDR",
      "Host Discovery",
      "Port Scanning",
    ],
  },
  {
    category: "SECURITY FUNDAMENTALS",
    items: [
      "CIA Triad",
      "Risk Assessment",
      "Rules of Engagement",
      "Cyber Law",
    ],
  },
  {
    category: "DEVOPS & OS",
    items: ["Git", "GitHub", "Vercel", "Linux", "Bash"],
  },
  {
    category: "AI / ML (Basic)",
    items: ["OpenAI API", "Supervised Learning", "Prompt Engineering"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> SKILLS
          </h2>
        </div>

        <div className="dotted-red mb-12" />

        <div className="space-y-10">
          {skills.map((group, i) => (
            <div key={i}>
              <h3 className="mono text-sm text-[#DC143C] mb-4 tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, j) => (
                  <span
                    key={j}
                    className="mono text-sm px-3 py-1.5 border border-[#1F1F1F] text-neutral-300 hover:border-[#DC143C] hover:text-[#DC143C] hover:shadow-[0_0_12px_rgba(220,20,60,0.3)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}