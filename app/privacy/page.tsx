import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Task Dough",
  description: "How Task Dough collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "**Account Information** — When you register, we collect your name, email address, username, and password (stored as a bcrypt hash). You may optionally provide a profile photo and payment details.",
      "**Task Activity** — We record every task you complete, including timestamps, device identifiers, and submission data, to calculate earnings and detect fraud.",
      "**Payment Information** — To process withdrawals we collect your PayPal email, crypto wallet address, or bank account details. This information is passed directly to our payment processors and is never stored in full on our servers.",
      "**Device & Log Data** — We automatically collect IP addresses, browser type, operating system, referring URLs, and interaction logs when you use our platform.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "**Service Delivery** — To operate the platform, calculate and pay out earnings, and maintain your account.",
      "**Fraud Prevention** — To detect bots, duplicate accounts, and fraudulent task submissions that harm our community.",
      "**Communication** — To send you transactional emails (payout confirmations, security alerts) and, with your consent, promotional updates. You may opt out of marketing at any time.",
      "**Analytics & Improvement** — Aggregated, anonymized usage data helps us improve task quality, platform performance, and user experience.",
    ],
  },
  {
    title: "3. Data Sharing",
    body: [
      "**Payment Processors** — We share payment details with PayPal, cryptocurrency processors, and banking partners solely to fulfil your withdrawal requests.",
      "**Analytics Providers** — We use privacy-respecting analytics tools. These providers are contractually prohibited from using your data for their own purposes.",
      "**Legal Requirements** — We may disclose information when required by law, court order, or to protect the rights, property, or safety of Task Dough, our users, or the public.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    title: "4. Data Retention",
    body: [
      "**Account Data** — Retained for as long as your account is active. Upon deletion, account data is purged within 30 days, except where retention is required by law.",
      "**Log Data** — Server and access logs are retained for 90 days and then automatically deleted.",
      "**Payment Records** — Financial transaction records are retained for 7 years to comply with tax and accounting regulations.",
    ],
  },
  {
    title: "5. Your Rights",
    body: [
      "**Access** — You may request a copy of all personal data we hold about you.",
      "**Correction** — You may update inaccurate or incomplete information directly in your account settings.",
      "**Deletion** — You may request account deletion at any time. We will process your request within 30 days.",
      "To exercise any of these rights, email us at privacy@taskdough.com.",
    ],
  },
  {
    title: "6. Cookies",
    body: [
      "We use essential cookies to keep you logged in and prevent CSRF attacks. We also use analytics cookies to understand how users navigate the platform. You can disable non-essential cookies in your browser settings, though this may affect some functionality.",
    ],
  },
  {
    title: "7. Children's Privacy",
    body: [
      "Task Dough is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with their information, contact us at privacy@taskdough.com and we will delete it promptly.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      "Questions about this policy? Reach our Privacy team at privacy@taskdough.com. We aim to respond within 5 business days.",
    ],
  },
];

function renderBody(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-white font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen bg-[#0e0e0e] dark:bg-[#0e0e0e]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#ff5f1f] font-semibold mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-black italic text-[#ff5f1f] text-glow mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#adaaaa] text-lg leading-relaxed">
              We believe in radical transparency. Here's exactly what data we collect, why we
              collect it, and how we keep it safe.
            </p>
            <p className="text-xs text-[#adaaaa]/60 mt-4 border-t border-[#ff5f1f]/10 pt-4">
              Effective date: April 1, 2025
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-white mb-3 border-l-2 border-[#ff5f1f] pl-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.body.map((item, i) => (
                    <li key={i} className="text-[#adaaaa] text-sm leading-relaxed pl-4">
                      {renderBody(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 p-6 border border-[#ff5f1f]/20 rounded-xl bg-[#ff5f1f]/5">
            <p className="text-xs text-[#adaaaa] leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we'll revise the
              effective date above and notify you by email if the changes are material. Continued
              use of Task Dough after changes constitutes acceptance of the revised policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
