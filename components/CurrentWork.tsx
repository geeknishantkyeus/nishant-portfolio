export default function CurrentWork() {
  const items = [
    {
      label: "Building",
      title: "Web3 Security Research",
      tech: "Smart Contracts · Web2 Stack · Cybersecurity",
    },
    {
      label: "Learning",
      title: "Ethical Hacking · Red Team Operations",
      tech: "Offensive Security · OSINT · Blockchain Security",
    },
    {
      label: "Open To",
      title: "Internships · Freelance · Collaborations",
      tech: "",
    },
  ];

  return (
    <section id="current" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> CURRENT WORK
          </h2>
          <span className="mono text-sm text-neutral-500">2026</span>
        </div>

        <div className="dotted-red mb-12" />

        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-12">
              <span className="mono text-sm text-[#DC143C] md:w-32 shrink-0">
                ▸ {item.label}
              </span>
              <div>
                <p className="text-neutral-200 text-lg">
                  {item.title}
                </p>
                {item.tech && (
                  <p className="mono text-sm text-neutral-500 mt-1">
                    {item.tech}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}