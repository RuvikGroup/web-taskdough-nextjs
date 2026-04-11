"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState } from "react";

const services = [
  { name: "API", description: "Core task & earnings API" },
  { name: "Web App", description: "Dashboard & user interface" },
  { name: "Payment Processing", description: "Withdrawals & payouts" },
  { name: "Task Engine", description: "Task delivery & validation" },
  { name: "Notifications", description: "Email & push alerts" },
];

export default function StatusPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen bg-[#0e0e0e] dark:bg-[#0e0e0e]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#ff5f1f] font-semibold mb-3">
              Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-black italic text-[#ff5f1f] text-glow mb-4">
              Status
            </h1>
            <p className="text-[#adaaaa] text-lg leading-relaxed">
              Real-time health of the Task Dough platform.
            </p>
          </div>

          {/* All Systems Operational Banner */}
          <div className="mb-8 flex items-center gap-4 p-5 rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/5">
            <div className="relative flex items-center justify-center w-4 h-4 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-40 animate-ping" />
              <span className="relative inline-flex w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <div>
              <p className="text-[#22c55e] font-bold text-base">All Systems Operational</p>
              <p className="text-[#adaaaa] text-xs mt-0.5">
                Last checked:{" "}
                <span className="tabular-nums">{time || "—"}</span>
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-3 mb-12">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 border border-[#ff5f1f]/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div>
                  <p className="text-white text-sm font-semibold">{service.name}</p>
                  <p className="text-[#adaaaa] text-xs mt-0.5">{service.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center w-2.5 h-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-40 animate-pulse" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[#22c55e] text-xs font-medium">Operational</span>
                </div>
              </div>
            ))}
          </div>

          {/* Incident History */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 border-l-2 border-[#ff5f1f] pl-4">
              Incident History
            </h2>
            <div className="p-6 border border-[#ff5f1f]/10 rounded-xl bg-white/[0.02] text-center">
              <p className="text-[#adaaaa] text-sm">
                No incidents reported in the last 90 days.
              </p>
            </div>
          </div>

          {/* Uptime note */}
          <div className="mt-10 text-center">
            <p className="text-xs text-[#adaaaa]/50">
              Subscribe to status updates at{" "}
              <a href="mailto:status@taskdough.com" className="text-[#ff5f1f] hover:underline">
                status@taskdough.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
