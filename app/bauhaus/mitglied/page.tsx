"use client";

import { motion } from "framer-motion";

const tiers = [
  { label: "Freund", price: 60, color: "bg-jko-yellow", perks: ["Newsletter", "Preview Proben", "Mitgliedsausweis"] },
  { label: "Förderer", price: 150, color: "bg-jko-red text-[#FAF7F2]", perks: ["2 Freikarten/Saison", "Namensnennung im Programm", "Alles aus Freund"] },
  { label: "Mäzen", price: 500, color: "bg-jko-blue text-[#FAF7F2]", perks: ["VIP-Empfang", "Eigene Widmung", "Alles aus Förderer"] },
];

export default function BauhausMitglied() {
  return (
    <main>
      <section className="border-b-2 border-[#0B0B0D] p-6 md:p-16">
        <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">Mitglied · Spenden</div>
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em] font-black" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
          Wir spielen.
          <br />
          <span className="text-jko-blue">Sie tragen.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl">
          Klassische Musik kostet — Noten, Probenräume, Reisen, Stipendien. Ohne Mitglieder und
          Spender wäre das JKO nicht möglich. Werden Sie Teil der Geschichte.
        </p>
      </section>

      <section className="border-b-2 border-[#0B0B0D] grid md:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`${tier.color} p-10 ${i < 2 ? "md:border-r-2 border-[#0B0B0D]" : ""} flex flex-col`}
          >
            <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-80">0{i + 1} · {tier.label}</div>
            <div className="mt-3 text-7xl md:text-8xl font-black leading-none" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
              € {tier.price}
            </div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-70 mt-1">/ Jahr</div>
            <ul className="mt-10 space-y-2 text-sm font-medium flex-1">
              {tier.perks.map((p) => <li key={p}>— {p}</li>)}
            </ul>
            <button className="mt-10 px-6 py-3.5 text-sm uppercase tracking-wider font-bold bg-[#0B0B0D] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#0B0B0D] transition">
              Wählen →
            </button>
          </motion.div>
        ))}
      </section>

      <section className="p-6 md:p-16">
        <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">Oder einmalig</div>
        <h2 className="text-6xl md:text-8xl font-black leading-[0.9]" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
          Spenden.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {[25, 50, 100, 250, 500].map((v, i) => (
            <button
              key={v}
              className={`px-10 py-6 text-2xl font-black border-2 border-[#0B0B0D] hover:text-[#FAF7F2] transition ${
                i % 3 === 0 ? "hover:bg-jko-yellow hover:text-[#0B0B0D]" : i % 3 === 1 ? "hover:bg-jko-red" : "hover:bg-jko-blue"
              }`}
              style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}
            >
              € {v}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
