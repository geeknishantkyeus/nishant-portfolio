export default function Footer() {
  const socials = [
    { name: "GitHub", href: "https://github.com/geeknishantkyeus" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { name: "X", href: "https://x.com/yourhandle" },
    { name: "Medium", href: "https://medium.com/@yourusername" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto text-center">
        
        <p className="mono text-sm text-neutral-500 mb-6">
          Ideas → Code → Secure → Deploy → Repeat
        </p>

        <p className="mono text-base text-[#DC143C] mb-12">
          &gt; not a hero... just a survivor._
        </p>

        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-sm text-neutral-400 hover:text-[#DC143C] transition-colors"
            >
              [{social.name}]
            </a>
          ))}
        </div>

        <div className="mono text-xs text-neutral-600 space-y-1">
          <p>© 2026 Nishant Kumar</p>
          <p>Built with ❤️ and ☕</p>
        </div>

      </div>
    </footer>
  );
}