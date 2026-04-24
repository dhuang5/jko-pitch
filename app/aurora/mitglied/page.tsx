"use client";

import { motion } from "framer-motion";

const tiers = [
  { label: "Freund", price: 60, perks: ["Newsletter", "Proben-Preview", "Mitgliedsausweis"] },
  { label: "Förderer", price: 150, popular: true, perks: ["Alles aus Freund", "2 Freikarten/Saison", "Namen im Programmheft"] },
  { label: "Mäzen", price: 500, perks: ["Alles aus Förderer", "VIP-Empfang", "Eigene Widmung"] },
];

export default function AuroraMitglied() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-xs font-medium text-[#6B5BFF] mb-6">
          Mitglied · Spenden
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold"
        >
          Machen Sie Musik{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8)" }}>
            möglich.
          </span>
        </motion.h1>
        <p className="mt-8 text-lg text-[#0B0B12]/70 leading-relaxed">
          Notenmaterial, Probenräume, Stipendien — all das lebt von Menschen, die mittragen. Wählen
          Sie Ihren Weg.
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-5">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`relative rounded-3xl p-10 ${tier.popular ? "text-white shadow-[0_20px_60px_-15px_rgba(107,91,255,0.5)]" : "bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]"}`}
            style={tier.popular ? { background: "linear-gradient(135deg, #6B5BFF 0%, #B79BFF 100%)" } : {}}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-[#6B5BFF] text-xs font-semibold">
                Am beliebtesten
              </div>
            )}
            <div className={`text-xs uppercase tracking-wider font-semibold ${tier.popular ? "opacity-80" : "text-[#6B5BFF]"}`}>
              {tier.label}
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl md:text-6xl font-semibold tracking-tight">€ {tier.price}</span>
              <span className={`text-sm ${tier.popular ? "opacity-80" : "text-[#0B0B12]/60"}`}>/ Jahr</span>
            </div>
            <ul className="mt-8 space-y-3">
              {tier.perks.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <span className={tier.popular ? "opacity-90" : "text-[#6B5BFF]"}>✦</span>
                  {p}
                </li>
              ))}
            </ul>
            <button className={`mt-10 w-full py-3.5 rounded-full text-sm font-medium transition ${tier.popular ? "bg-white text-[#6B5BFF] hover:bg-[#FFB4E0]" : "bg-[#0B0B12] text-white hover:bg-[#6B5BFF]"}`}>
              {tier.label} werden
            </button>
          </motion.div>
        ))}
      </div>

      <section
        className="mt-24 rounded-3xl overflow-hidden relative p-10 md:p-16 text-white shadow-2xl"
        style={{ background: "linear-gradient(135deg, #1B1046 0%, #6B5BFF 50%, #FFB4E0 100%)" }}
      >
        <div className="max-w-2xl relative z-10">
          <div className="text-xs uppercase tracking-widest opacity-80 mb-4">Einmalige Spende</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Jeder Euro spielt mit.
          </h2>
          <p className="mt-4 text-white/85">Als gemeinnütziger Verein stellen wir Spendenquittungen aus.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["€ 25", "€ 50", "€ 100", "€ 250"].map((v) => (
              <button key={v} className="px-6 py-3 rounded-full bg-white/15 backdrop-blur-md hover:bg-white hover:text-[#6B5BFF] font-medium transition">{v}</button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
