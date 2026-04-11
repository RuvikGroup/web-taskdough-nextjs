import { Download, DollarSign } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto kinetic-gradient rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden neon-glow">
        {/* Background icon watermark */}
        <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
          <DollarSign size={300} strokeWidth={1} />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-7xl font-black text-black tracking-tighter mb-8 leading-tight uppercase">
            READY TO START
            <br />
            EARNING RIGHT NOW?
          </h2>
          <p className="text-black/80 text-xl mb-12 max-w-xl mx-auto font-bold italic">
            Join 500,000+ users who are already turning their spare time into real profit. Download
            the app today.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-4 w-full sm:w-auto bg-black text-white px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl group border border-white/10"
          >
            <Download
              size={36}
              className="group-hover:text-[#ff9069] transition-colors"
            />
            <span>Download App</span>
          </a>
        </div>
      </div>
    </section>
  );
}
