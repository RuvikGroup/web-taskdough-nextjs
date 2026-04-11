import Link from "next/link";
import { MessageSquare, Briefcase } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security", href: "/security" },
  { label: "Status", href: "/status" },
];

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#0e0e0e] dark:bg-[#0e0e0e] border-t border-[#ff5f1f]/20">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold text-[#ff5f1f] text-glow italic">Task Dough</div>
        <p className="text-xs text-[#adaaaa]">© 2025 Task Dough. All rights reserved.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xs text-[#adaaaa] hover:text-[#ff5f1f] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="#"
          aria-label="X (Twitter)"
          className="text-[#adaaaa] hover:text-[#ff5f1f] transition-colors font-black text-lg"
        >
          𝕏
        </a>
        <a
          href="#"
          aria-label="Forum"
          className="text-[#adaaaa] hover:text-[#ff5f1f] transition-colors"
        >
          <MessageSquare size={20} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-[#adaaaa] hover:text-[#ff5f1f] transition-colors"
        >
          <Briefcase size={20} />
        </a>
      </div>
    </footer>
  );
}
