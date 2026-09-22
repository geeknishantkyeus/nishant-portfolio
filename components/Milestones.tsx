const milestones = [
  {
    year: "2026",
    items: [
      {
        title: "Exploring Web3 Security",
        subtitle: "Smart Contracts · Blockchain Security",
      },
      {
        title: "Learning Ethical Hacking & Red Team",
        subtitle: "Offensive Security · OSINT",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Started B.Tech CSE",
        subtitle: "REC Sonbhadra",
      },
      {
        title: "Completed 12th (Science - Maths)",
        subtitle: "BSGM Inter College ",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Built 3 Web Projects",
        subtitle: "HTML · CSS · JavaScript · React",
      },
      {
        title: "Learned Full Stack Development",
        subtitle: "PHP · SQL · MongoDB · Express",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Built Growthke",
        subtitle: "Learning platform for students",
      },
      {
        title: "Started Coding Journey",
        subtitle: "HTML · CSS · JavaScript basics",
      },
    ],
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> MILESTONES
          </h2>
        </div>

        <div className="dotted-red mb-12" />

        <div className="space-y-12">
          {milestones.map((year, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6">
              
              <div className="mono text-2xl font-bold text-[#DC143C] md:w-24 shrink-0">
                {year.year}
              </div>

              <div className="space-y-6 border-l border-[#1F1F1F] pl-6">
                {year.items.map((item, j) => (
                  <div key={j} className="relative">
                    <span className="absolute -left-[31px] top-2 w-2 h-2 rounded-full bg-[#DC143C]" />
                    
                    <p className="text-neutral-200 text-base">
                      {item.title}
                    </p>
                    <p className="mono text-sm text-neutral-500 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}