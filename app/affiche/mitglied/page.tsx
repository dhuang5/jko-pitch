"use client";

import { motion } from "framer-motion";

const tiers = [
  { label: "FREUND", price: 60, perks: ["Newsletter", "Preview Proben", "Mitgliedsausweis"], accent: "red" },
  { label: "FÖRDERER", price: 150, perks: ["2 Freikarten/Saison", "Nennung im Programmheft", "Alles aus Freund"], accent: "black" },
  { label: "MÄZEN", price: 500, perks: ["VIP-Empfang", "Eigene Widmung", "Alles aus Förderer"], accent: "blue" },
];

export default function AfficheMitglied() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 md:px-10 pt-16 pb-20">
      <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">Mitglied · Spenden</div>
      <h1>
        <span className="block text-[18vw] md:text-[12vw] leading-[0.82] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
          WIR SPIELEN.
        </span>
        <span className="block text-[14vw] md:text-[9vw] leading-[0.95] text-jko-blue -mt-1" style={{ fontFamily: "Caveat Brush, cursive" }}>
          Sie tragen.
        </span>
      </h1>
      <p className="mt-8 max-w-2xl text-xl leading-relaxed">
        Notenmaterial, Probenräume, Stipendien. Klassische Musik kostet — und jeder Beitrag macht
        sie möglich.
      </p>

      <div className="mt-20 grid md:grid-cols-3 gap-0 border-y-2 border-[#0B0B0D]">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`p-10 ${i < 2 ? "md:border-r-2 border-[#0B0B0D]" : ""} ${i === 1 ? "bg-[#0B0B0D] text-[#F4EDDE]" : ""} relative`}
          >
            {i === 1 && (
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-jko-yellow rounded-full flex flex-col items-center justify-center rotate-6 text-[#0B0B0D] shadow-lg">
                <div className="text-[9px] font-bold uppercase tracking-widest">Am</div>
                <div className="text-[9px] font-bold uppercase tracking-widest">Beliebtesten</div>
              </div>
            )}
            <div className={`text-[11px] tracking-[0.35em] uppercase font-bold mb-3 ${tier.accent === "red" ? "text-jko-red" : tier.accent === "blue" ? "text-jko-blue" : "text-jko-yellow"}`}>
              0{i + 1}
            </div>
            <div className="text-4xl tracking-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
              {tier.label}
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-7xl md:text-8xl leading-none" style={{ fontFamily: "Anton, sans-serif" }}>€{tier.price}</span>
              <span className="text-sm font-bold opacity-70">/JAHR</span>
            </div>
            <ul className="mt-10 space-y-2 text-base font-medium">
              {tier.perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className={tier.accent === "red" ? "text-jko-red" : tier.accent === "blue" ? "text-jko-blue" : "text-jko-yellow"}>✦</span>
                  {p}
                </li>
              ))}
            </ul>
            <button className={`mt-10 w-full px-6 py-4 font-bold uppercase tracking-wider text-sm transition ${
              i === 1 ? "bg-jko-yellow text-[#0B0B0D] hover:bg-[#F4EDDE]" : "bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red"
            }`}>
              {tier.label.charAt(0) + tier.label.slice(1).toLowerCase()} werden →
            </button>
          </motion.div>
        ))}
      </div>

      <section className="mt-24 p-10 md:p-16 bg-[#0B0B0D] text-[#F4EDDE] relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-jko-red/20 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-jko-blue/20 blur-3xl" />
        <div className="relative">
          <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-yellow mb-4">Einmalige Spende</div>
          <h2>
            <span className="block text-[12vw] md:text-[7vw] leading-[0.88] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
              JEDER EURO
            </span>
            <span className="block text-[10vw] md:text-[6vw] leading-[0.95] text-jko-yellow -mt-1" style={{ fontFamily: "Caveat Brush, cursive" }}>
              klingt mit.
            </span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {[25, 50, 100, 250, 500].map((v) => (
              <button key={v} className="px-8 py-5 border-2 border-[#F4EDDE]/40 hover:bg-jko-yellow hover:border-jko-yellow hover:text-[#0B0B0D] transition font-bold text-xl tracking-tight" style={{ fontFamily: "Barlow Condensed, sans-serif" }}>
                € {v}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
