import Image from "next/image";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative px-6 md:px-8 py-20 lg:py-32 overflow-hidden pt-32">
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="z-10">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Turn Your Spare Time{" "}
            <br className="hidden lg:block" />
            <span className="text-[#fe5e1e] italic text-glow">Into Cold Cash.</span>
          </h1>
          <p className="text-[#adaaaa] text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
            The ultimate high-performance earning platform. Complete simple tasks, unlock daily
            bonuses, and withdraw your earnings instantly.
          </p>
          <a
            id="download"
            href="#"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 kinetic-gradient text-black font-black text-xl rounded-xl hover:scale-105 active:opacity-80 transition-all neon-glow"
          >
            <Download size={28} />
            <span>Download App Now</span>
          </a>
        </div>

        {/* Right: phone mockup */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-[320px] lg:max-w-none lg:w-[480px]">
            <Image
              src="/images/phone-mockup.jpg"
              alt="Task Dough app interface showing earning dashboard with tasks, balance, and instant withdraw button"
              width={480}
              height={600}
              className="rounded-[3rem] border-[8px] border-[#262626] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 neon-glow"
              priority
            />
            {/* Floating badge: Instant Payout */}
            <div className="absolute -left-12 top-1/4 bg-[#262626]/90 backdrop-blur-md p-4 rounded-xl border-l-4 border-[#ff9069] shadow-xl ring-1 ring-white/10">
              <p className="text-xs text-[#ff9069] font-bold uppercase tracking-widest mb-1">
                Instant Payout
              </p>
              <p className="text-2xl font-black text-white">+$42.50</p>
            </div>
            {/* Floating badge: New Task */}
            <div className="absolute -right-8 bottom-1/4 bg-[#262626]/90 backdrop-blur-md p-4 rounded-xl border-l-4 border-[#ff9069] shadow-xl ring-1 ring-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff9069] animate-ping" />
                <p className="text-xs text-[#ff9069] font-bold">New Task Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
