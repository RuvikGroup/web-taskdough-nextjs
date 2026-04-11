"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 bg-[#0e0e0e]/80 dark:bg-[#0e0e0e]/80 light:bg-white/80 backdrop-blur-xl border-b border-[#ff5f1f]/10">
      <a
        href="#"
        className="text-2xl font-black italic tracking-tighter text-[#ff5f1f] text-glow dark:text-glow"
      >
        Task Dough
      </a>

      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-semibold tracking-tight text-sm text-[#adaaaa] hover:text-[#ff5f1f] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="#download"
          className="px-6 py-2 kinetic-gradient text-black font-bold rounded-lg text-sm hover:scale-105 active:opacity-80 transition-transform neon-glow"
        >
          Download Now
        </a>
      </div>
    </nav>
  );
}
