"use client";

import { motion } from "framer-motion";

export default function NoirMitglied() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
      <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-6">Mitglied · Spenden</div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-[11vw] leading-[0.88] uppercase tracking-tight max-w-5xl"
        style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}
      >
        Werden Sie
        <br />
        <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>
          Mäzen.
        </span>
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6 mt-20">
        {[
          { label: "Bronze", price: 60, perks: ["Mitgliedsausweis", "Newsletter", "Preview Generalproben"] },
          { label: "Silber", price: 150, perks: ["Alles aus Bronze", "2 Freikarten / Saison", "Namensnennung im Programmheft"] },
          { label: "Gold", price: 500, perks: ["Alles aus Silber", "VIP-Empfang", "Eigene Widmung bei Konzert"] },
        ].map((tier, i) => (
          <motion.div
            key={tier.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`relative p-10 border transition-colors ${i === 2 ? "border-[#D4A853] bg-[#D4A853]/5" : "border-white/10 bg-white/[0.02] hover:border-white/30"}`}
          >
            <div className={`text-xs tracking-[0.4em] uppercase ${i === 2 ? "text-[#D4A853]" : "text-white/50"}`}>{tier.label}</div>
            <div className="mt-3 text-5xl" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
              € {tier.price}
              <span className="text-base text-white/50 font-normal">/ Jahr</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {tier.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-[#D4A853]">✦</span>
                  {p}
                </li>
              ))}
            </ul>
            <button className={`mt-10 w-full px-6 py-4 text-xs tracking-[0.25em] uppercase transition font-semibold ${i === 2 ? "bg-[#D4A853] text-[#0A0A0B] hover:bg-white" : "border border-white/30 hover:border-[#D4A853] hover:text-[#D4A853]"}`}>
              Wählen
            </button>
          </motion.div>
        ))}
      </div>

      <section className="mt-24 p-10 md:p-16 bg-white/[0.03] border border-white/10 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-4">Einzelspende</div>
        <h2 className="text-4xl md:text-6xl uppercase tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
          Jeder Euro <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>klingt mit.</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["€ 25", "€ 50", "€ 100", "€ 250"].map((v) => (
            <button key={v} className="px-8 py-4 text-lg border border-white/20 hover:bg-[#D4A853] hover:text-[#0A0A0B] hover:border-[#D4A853] transition">{v}</button>
          ))}
        </div>
      </section>
    </main>
  );
}
