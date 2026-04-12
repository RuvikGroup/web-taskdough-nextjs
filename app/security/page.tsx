import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — Task Dough",
  description: "How Task Dough protects your data, payments, and account.",
};

const pillars = [
  {
    icon: "🔐",
    title: "Encryption",
    items: [
      "All data at rest is encrypted with AES-256.",
      "All data in transit is protected by TLS 1.3. We enforce HTTPS site-wide and use HSTS with a long max-age.",
      "Database backups are encrypted before leaving our infrastructure.",
    ],
  },
  {
    icon: "🛡️",
    title: "Authentication",
    items: [
      "Passwords are hashed using bcrypt with a high work factor — we never store plaintext credentials.",
      "Two-factor authentication (2FA) via TOTP is available and recommended for all accounts.",
      "Session tokens are cryptographically random and expire after 30 days of inactivity. All sessions can be remotely revoked from your account settings.",
    ],
  },
  {
    icon: "💳",
    title: "Payment Security",
    items: [
      "Task Dough is PCI-DSS compliant via certified third-party payment processors.",
      "We never store raw card numbers, CVVs, or full bank account details on our servers.",
      "Payment data is tokenized at the point of entry and transmitted directly to our processors over encrypted channels.",
    ],
  },
  {
    icon: "🤖",
    title: "Fraud Detection",
    items: [
      "Our ML-based anomaly detection system monitors task submissions, withdrawal requests, and login patterns in real time.",
      "Flagged accounts are reviewed by our human trust & safety team before any action is taken.",
      "We use device fingerprinting and behavioral analysis to detect automation and multi-accounting.",
    ],
  },
  {
    icon: "🏗️",
    title: "Infrastructure",
    items: [
      "Task Dough runs on cloud infrastructure with automatic failover, DDoS mitigation, and daily encrypted backups.",
      "Access to production systems is restricted to a small team via hardware security keys and zero-trust network policies.",
      "We are currently pursuing SOC 2 Type II certification. Updates will be posted here.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen bg-[#0e0e0e] dark:bg-[#0e0e0e]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#ff5f1f] font-semibold mb-3">
              Trust & Safety
            </p>
            <h1 className="text-4xl md:text-5xl font-black italic text-[#ff5f1f] text-glow mb-4">
              Security
            </h1>
            <p className="text-[#adaaaa] text-lg leading-relaxed">
              Your money and data are serious business. Here&apos;s exactly how we protect them —
              no vague promises, just specifics.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 border border-[#ff5f1f]/15 rounded-xl bg-white/[0.02] hover:bg-[#ff5f1f]/5 transition-colors"
              >
                <h2 className="text-base font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-xl">{pillar.icon}</span>
                  {pillar.title}
                </h2>
                <ul className="space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="text-[#adaaaa] text-sm leading-relaxed flex gap-3">
                      <span className="text-[#ff5f1f] mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Responsible Disclosure */}
          <div className="mt-12 p-6 border border-[#ff5f1f]/30 rounded-xl bg-[#ff5f1f]/5">
            <h2 className="text-base font-bold text-white mb-3 flex items-center gap-3">
              <span className="text-xl">🔍</span> Responsible Disclosure
            </h2>
            <div className="space-y-2">
              <p className="text-[#adaaaa] text-sm leading-relaxed">
                If you discover a security vulnerability in Task Dough, we ask that you give us
                the opportunity to fix it before public disclosure.
              </p>
              <ul className="space-y-2 mt-3">
                {[
                  "Email your report to security@taskdough.com with a clear description and steps to reproduce.",
                  "We will acknowledge your report within 48 hours and provide a timeline for remediation.",
                  "We request a 90-day disclosure window to allow us to patch and deploy a fix.",
                  "We don't currently offer a paid bug bounty, but we publicly acknowledge researchers who report valid vulnerabilities (with your permission).",
                ].map((item, i) => (
                  <li key={i} className="text-[#adaaaa] text-sm leading-relaxed flex gap-3">
                    <span className="text-[#ff5f1f] mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#adaaaa]/60">
              Security questions?{" "}
              <a
                href="mailto:security@taskdough.com"
                className="text-[#ff5f1f] hover:underline"
              >
                security@taskdough.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
