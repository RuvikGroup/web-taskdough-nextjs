import { CheckSquare, Trophy } from "lucide-react";

function HighPayCard() {
  return (
    <div className="bg-[#201f1f] rounded-3xl overflow-hidden group hover:bg-[#262626] transition-all duration-300 border border-white/5 hover:border-[#ff9069]/40 flex flex-col">
      <div className="relative h-64 overflow-hidden p-6 bg-black flex items-center justify-center">
        <div className="w-full h-full border-4 border-[#ff9069] rounded-xl bg-black p-4 font-retro text-[8px] flex flex-col gap-2">
          <div className="text-center text-[#ff9069] animate-pulse mb-1">NEW HIGH SCORE!</div>
          <div className="grid grid-cols-3 border-b border-[#ff9069]/30 pb-1 uppercase">
            <span>RANK</span>
            <span>PLAYER</span>
            <span className="text-right">EARNED</span>
          </div>
          <div className="flex justify-between items-center text-[#fe5e1e]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#ff9069] rounded-sm flex items-center justify-center text-[6px] text-black">
                P1
              </div>
              <span>YOU</span>
            </div>
            <span>$1,420.00</span>
          </div>
          <div className="flex justify-between items-center opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white/20 rounded-sm" />
              <span>XENON</span>
            </div>
            <span>$1,105.50</span>
          </div>
          <div className="flex justify-between items-center opacity-40">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white/10 rounded-sm" />
              <span>PIXEL8</span>
            </div>
            <span>$942.00</span>
          </div>
          <div className="mt-auto text-center text-[6px] opacity-50 italic">
            MULTIPLIER: 4.5X ACTIVE
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-[#ff9069] text-black px-3 py-1 rounded-full text-xs font-black">
          HIGH PAY
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4">Highest Payouts</h3>
        <p className="text-[#adaaaa] leading-relaxed">
          Our algorithm optimizes task matching to ensure you get the best rates per minute in the
          market. No competition.
        </p>
      </div>
    </div>
  );
}

function InstantCashCard() {
  return (
    <div className="bg-[#201f1f] rounded-3xl overflow-hidden group hover:bg-[#262626] transition-all duration-300 border-2 border-[#ff9069] flex flex-col neon-glow">
      <div className="relative h-64 overflow-hidden p-6 bg-black flex items-center justify-center">
        <div className="w-full h-full border-4 border-[#ff9069] rounded-xl bg-[#111] p-4 font-retro text-[8px] flex flex-col items-center justify-center text-center">
          <div className="text-[#ff9069] mb-4 text-[10px] leading-tight uppercase">
            Money Bag
            <br />
            Collected!
          </div>
          <div className="relative mb-4">
            <div className="w-12 h-14 bg-[#ff9069] relative rounded-b-lg">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-[#ff7441] rounded-full" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-black text-[12px] font-black">
                $
              </div>
            </div>
            <div className="absolute -right-4 top-0 w-3 h-3 bg-yellow-400 rounded-sm shadow-[0_4px_0_#b8860b]" />
            <div className="absolute -left-6 top-6 w-3 h-3 bg-yellow-400 rounded-sm shadow-[0_4px_0_#b8860b]" />
            <div className="absolute -right-2 bottom-0 w-3 h-3 bg-yellow-400 rounded-sm shadow-[0_4px_0_#b8860b]" />
          </div>
          <div className="bg-[#ff9069]/20 p-2 rounded w-full border border-[#ff9069]/40 uppercase">
            Wallet Updated:
            <br />
            +$25.00
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-[#ff9069] text-black px-3 py-1 rounded-full text-xs font-black">
          INSTANT
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4 text-[#ff9069]">Instant Cashouts</h3>
        <p className="text-[#adaaaa] leading-relaxed">
          Minimum withdrawal as low as $1. Get your money via PayPal, Crypto, or Bank Transfer the
          second you hit &apos;Confirm&apos;.
        </p>
      </div>
    </div>
  );
}

function DailyBonusCard() {
  return (
    <div className="bg-[#201f1f] rounded-3xl overflow-hidden group hover:bg-[#262626] transition-all duration-300 border border-white/5 hover:border-[#ff9069]/40 flex flex-col">
      <div className="relative h-64 overflow-hidden p-6 bg-black flex items-center justify-center">
        <div className="w-full h-full border-4 border-[#ff9069] rounded-xl bg-black p-4 font-retro text-[8px] flex flex-col gap-3">
          <div className="text-[#ff9069] uppercase border-b border-[#ff9069]/20 pb-1">
            Daily Quest Log
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-400">
              <CheckSquare size={12} />
              <span>DAILY LOGIN [100%]</span>
            </div>
            <div className="flex items-center gap-2 text-[#ff9069]">
              <CheckSquare size={12} />
              <span>3 TASKS DONE [100%]</span>
            </div>
          </div>
          <div className="mt-auto flex flex-col items-center gap-2">
            <div className="relative w-16 h-10 bg-[#ff9069]/20 rounded-t-lg border-2 border-[#ff9069] flex items-center justify-center overflow-visible">
              <div className="absolute -top-4 w-12 h-8 bg-[#ff9069] rounded-sm border-2 border-black flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-400 animate-pulse rounded-full blur-sm" />
              </div>
              <span className="text-[6px] text-[#ff9069]">CLAIMED!</span>
            </div>
            <div className="bg-white/10 px-2 py-1 rounded flex items-center gap-1">
              <Trophy size={8} className="text-[#ff9069]" />
              <span className="uppercase">Bonus Coins x2</span>
            </div>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-[#ff9069] text-black px-3 py-1 rounded-full text-xs font-black">
          BONUS
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4">Daily Bonuses</h3>
        <p className="text-[#adaaaa] leading-relaxed">
          Maintain a streak and unlock multiplier rewards. Our loyal users earn up to 25% more
          through daily activity boosts.
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24">
      {/* Banner */}
      <div className="neon-section py-16 mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-black uppercase">
            MAXIMIZE EVERY MINUTE.
          </h2>
          <p className="text-black/80 font-bold text-xl mt-4">
            The most powerful way to turn your time into high-velocity earnings.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <HighPayCard />
          <InstantCashCard />
          <DailyBonusCard />
        </div>
      </div>
    </section>
  );
}
