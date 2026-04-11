"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much can I realistically earn?",
    answer:
      "Earnings depend on your activity level and the complexity of tasks. Active users average between $15–$40 per day, with some power users earning significantly more through bonus multipliers.",
  },
  {
    question: "Is there a minimum age requirement?",
    answer:
      "Yes, you must be 18 years or older to use Task Dough due to payment processor regulations and the nature of some tasks.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We support PayPal, major Cryptocurrencies (BTC, ETH, USDC), and Direct Bank Transfers in over 50 countries.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#201f1f] rounded-xl overflow-hidden border border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-[#1a1919] transition-colors group"
        aria-expanded={open}
      >
        <span className="font-bold">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#ff9069] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-[#adaaaa] leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 px-6 md:px-8 bg-[#131313]/30"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center text-glow">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
