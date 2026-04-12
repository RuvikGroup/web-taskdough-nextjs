import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Task Dough",
  description: "The rules and agreements governing your use of the Task Dough platform.",
};

const sections = [
  {
    title: "1. Eligibility",
    body: [
      "You must be at least 18 years old to create a Task Dough account and participate in earning activities.",
      "You may maintain only one account per person. Operating multiple accounts — whether under the same identity or different ones — is strictly prohibited and will result in permanent termination of all associated accounts and forfeiture of pending earnings.",
      "By using Task Dough you represent and warrant that you meet these eligibility requirements.",
    ],
  },
  {
    title: "2. Account Responsibilities",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
      "You agree to notify us immediately at legal@taskdough.com if you suspect unauthorised access to your account.",
      "Task Dough is not liable for any loss or damage arising from your failure to protect your credentials.",
    ],
  },
  {
    title: "3. Permitted Use",
    body: [
      "Task Dough is a personal, non-commercial platform. You may use it to complete tasks and earn money for your own benefit.",
      "You may not use Task Dough for any business purpose, resell access to the platform, or use our name or brand without written permission.",
      "All tasks must be completed honestly and in good faith. Submitting low-quality, automated, or dishonest responses is prohibited.",
    ],
  },
  {
    title: "4. Earnings & Payouts",
    body: [
      "**Minimum Withdrawal** — The minimum withdrawal amount is $5.00 USD equivalent.",
      "**Payout Methods** — We support PayPal, select cryptocurrency networks, and bank transfer (where available). Supported methods are shown in your account dashboard.",
      "**Processing Time** — Withdrawals are processed within 5 business days. Cryptocurrency transfers may clear faster depending on network conditions.",
      "**Taxes** — You are solely responsible for reporting and paying any taxes owed on earnings from Task Dough. We may issue tax documentation where required by law.",
      "Task Dough reserves the right to withhold payouts pending fraud investigations or where a violation of these Terms is suspected.",
    ],
  },
  {
    title: "5. Prohibited Conduct",
    body: [
      "**Automation & Bots** — Use of automated scripts, browser extensions, macros, or any software to complete tasks is strictly forbidden.",
      "**Fake Accounts** — Creating accounts with false identities, purchasing or selling accounts, or using another person's identity.",
      "**Fraud** — Submitting fabricated task completions, manipulating referral systems, or exploiting platform bugs for financial gain.",
      "**Multiple Accounts** — Operating more than one account per person regardless of intent.",
      "Violations may result in immediate account termination, forfeiture of all pending and accrued earnings, and legal action where appropriate.",
    ],
  },
  {
    title: "6. Termination",
    body: [
      "You may close your account at any time from your account settings. Any earned balance above the minimum withdrawal threshold will be paid out before closure, subject to fraud review.",
      "Task Dough may suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or for any other reason at our sole discretion.",
      "Upon termination, your right to access the platform ceases immediately.",
    ],
  },
  {
    title: "7. Disclaimer of Warranties",
    body: [
      'Task Dough is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free of viruses or other harmful components.',
      "Task availability and earning potential are not guaranteed and may vary based on demand, your location, and other factors.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, Task Dough and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or data.",
      "Our total liability to you for any claim arising out of or relating to these Terms or the platform shall not exceed the total amount you earned on the platform in the 3 months preceding the claim.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.",
      "Any dispute arising under these Terms shall be resolved exclusively in the state or federal courts located in Delaware, and you consent to personal jurisdiction in those courts.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "Questions about these Terms? Email our legal team at legal@taskdough.com. We aim to respond within 5 business days.",
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

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-[#adaaaa] text-lg leading-relaxed">
              Please read these terms carefully before using Task Dough. By accessing or using
              the platform, you agree to be bound by them.
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
              Task Dough reserves the right to modify these Terms at any time. We will provide
              at least 14 days&apos; notice of material changes via email. Continued use of the
              platform after the effective date of revised Terms constitutes your acceptance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
