import { UserPlus, ListChecks, Wallet } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Account",
    description:
      "Sign up in 30 seconds. No complex verification required to start browsing available tasks.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Complete Tasks",
    description:
      "Choose from micro-surveys, app testing, or data entry. Work whenever and wherever you want.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Instant Payout",
    description:
      "Request your earnings at any time. Our automated system processes payments 24/7/365.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff9069]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-glow">
            Start Earning in 3 Simple Steps
          </h2>
          <div className="w-24 h-1 bg-[#ff9069] mx-auto shadow-[0_0_10px_#fe5e1e]" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center group">
                <div className="relative mb-8 inline-block">
                  <span className="text-9xl font-black text-white/5 absolute -top-12 -left-6 z-0 group-hover:text-primary/10 transition-colors select-none">
                    {step.number}
                  </span>
                  <div className="w-20 h-20 bg-[#201f1f] rounded-full flex items-center justify-center mx-auto relative z-10 border border-[#ff9069]/20 group-hover:border-[#ff9069]/60 transition-all shadow-lg">
                    <Icon size={32} className="text-[#ff9069]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-[#adaaaa]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
