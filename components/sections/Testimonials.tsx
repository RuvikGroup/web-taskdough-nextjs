import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The instant payout is actually instant. I've used other apps where you wait a week, but Task Dough hits my PayPal in minutes.",
    name: "Marcus T.",
    role: "Earned $1,240/mo",
    avatar: "/images/avatar-marcus.jpg",
    featured: false,
  },
  {
    quote:
      "Perfect for my commute. I do a few tasks on the train and it pays for my lunch every single day. Super easy to use.",
    name: "Sarah K.",
    role: "Daily User",
    avatar: "/images/avatar-sarah.jpg",
    featured: true,
  },
  {
    quote:
      "I was skeptical but the high payout tasks are legit. I focus on the app testing and the bonuses really add up over time.",
    name: "David L.",
    role: "Power Earner",
    avatar: "/images/avatar-david.jpg",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "#ff9069" }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <div className="text-center lg:text-left">
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-black uppercase leading-none mb-4 italic">
              LOVED BY
              <br />
              THOUSANDS
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} fill="currentColor" />
                ))}
              </div>
              <span className="text-black font-black text-3xl">4.9/5</span>
            </div>
          </div>

          <div className="bg-black text-white p-8 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform">
            <p className="text-4xl font-black mb-2 text-[#ff9069]">500,000+</p>
            <p className="uppercase font-bold tracking-widest text-sm opacity-60">
              Verified Users Worldwide
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-black p-10 rounded-[2.5rem] border border-white/10 shadow-2xl hover:-translate-y-2 transition-transform ${
                t.featured ? "scale-105 z-20" : ""
              }`}
            >
              <div className="text-[#ff9069] text-5xl font-serif mb-6 opacity-30">&ldquo;</div>
              <p className="text-xl text-white font-medium mb-10 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={`Portrait of ${t.name}`}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#ff9069]"
                />
                <div>
                  <p className="font-black text-white text-lg leading-tight">{t.name}</p>
                  <p className="text-[#ff9069] text-sm font-black tracking-wider uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
