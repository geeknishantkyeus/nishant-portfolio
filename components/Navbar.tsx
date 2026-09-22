"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "#projects", label: "projects" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smart navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    // Agar home page pe ho
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Kisi aur page pe ho — home pe jao, phir scroll karo
      router.push(`/${href}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#1F1F1F]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="Nishant Kumar logo"
            width={32}
            height={32}
            className="transition-all duration-300 logo-pulse group-hover:scale-110"
          />
          <span className="mono text-sm md:text-base text-[#EDEDED] group-hover:text-[#DC143C] transition-colors">
            Nishant Kumar
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="mono text-sm text-neutral-400 hover:text-[#DC143C] relative group transition-colors cursor-pointer"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#DC143C] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden mono text-[#DC143C] text-lg"
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#1F1F1F]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mono text-sm text-neutral-400 hover:text-[#DC143C] transition-colors cursor-pointer"
              >
                <span className="text-[#DC143C]">→</span> {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}