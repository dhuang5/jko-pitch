"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { concerts } from "@/lib/content";

export default function NoirTermine() {
  const [selected, setSelected] = useState<string | null>(concerts[0].id);
  const [showAnmeldung, setShowAnmeldung] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const active = concerts.find((c) => c.id === selected) ?? concerts[0];

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
      <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-6">Termine</div>
      <h1 className="text-7xl md:text-[11vw] leading-[0.88] uppercase tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
        Die <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>Saison</span>.
      </h1>

      <div className="grid md:grid-cols-12 gap-10 mt-20">
        <div className="md:col-span-5 space-y-2">
          {concerts.map((c) => {
            const isActive = c.id === selected;
            return (
              <motion.button
                key={c.id}
                onClick={() => setSelected(c.id)}
                whileHover={{ x: 6 }}
                className={`w-full text-left p-6 border transition-all ${
                  isActive
                    ? "border-[#D4A853] bg-[#D4A853]/5"
                    : "border-white/10 hover:border-white/30 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className={`text-xs tracking-[0.3em] uppercase mb-2 ${isActive ? "text-[#D4A853]" : "text-white/50"}`}>
                      {c.dateLabel}
                    </div>
                    <div className="text-xl leading-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 700 }}>
                      {c.title}
                    </div>
                    <div className="text-sm text-white/60 mt-1">{c.venue}, {c.city}</div>
                  </div>
                  <div className={`text-2xl ${isActive ? "text-[#D4A853]" : "text-white/30"}`}>→</div>
                </div>
              </motion.button>
            );
          })}
        </div>
        <div className="md:col-span-7 sticky top-24 self-start">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.03] border border-white/10 p-10"
          >
            <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-4">Nr. {concerts.indexOf(active) + 1} in der Saison</div>
            <h2 className="text-4xl md:text-5xl leading-tight uppercase tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
              {active.title}
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
              <div><span className="text-white/50">Datum:</span> {active.dateLabel}</div>
              <div><span className="text-white/50">Einlass:</span> {active.time} Uhr</div>
              <div><span className="text-white/50">Ort:</span> {active.venue}, {active.city}</div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-xs tracking-[0.3em] uppercase text-[#D4A853] mb-3">Programm</div>
              <ul className="space-y-2">
                {active.program.map((p, i) => (
                  <li key={p} className="flex gap-3 text-base text-white/85">
                    <span className="text-[#D4A853] tabular-nums text-xs mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            {active.registrationOpen && (
              <div className="mt-8 p-6 bg-[#D4A853]/10 border border-[#D4A853]/40">
                <div className="text-xs tracking-[0.3em] uppercase text-[#D4A853] mb-2">★ Anmeldung geöffnet</div>
                <p className="text-sm text-white/80">Nur für begrenzte Zeit — begrenzte Plätze.</p>
                <button
                  onClick={() => setShowAnmeldung(true)}
                  className="mt-4 w-full px-6 py-3.5 text-xs tracking-[0.25em] uppercase bg-[#D4A853] text-[#0A0A0B] hover:bg-white transition font-semibold"
                >
                  Jetzt anmelden
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {showAnmeldung && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setShowAnmeldung(false)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="bg-[#0A0A0B] border border-[#D4A853]/40 max-w-xl w-full p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-white/60 hover:text-[#D4A853] text-2xl" onClick={() => setShowAnmeldung(false)}>×</button>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-3">Anmeldung</div>
            <h3 className="text-3xl uppercase tracking-tight mb-6" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
              {active.title}
            </h3>
            {submitted ? (
              <div className="text-lg italic text-[#D4A853]" style={{ fontFamily: "Bodoni Moda, serif" }}>
                Bestätigung folgt per E-Mail.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                <input required placeholder="Name" className="w-full px-4 py-3 bg-transparent border border-white/20 focus:border-[#D4A853] outline-none" />
                <input required type="email" placeholder="E-Mail" className="w-full px-4 py-3 bg-transparent border border-white/20 focus:border-[#D4A853] outline-none" />
                <input type="number" min={1} max={6} defaultValue={2} className="w-full px-4 py-3 bg-transparent border border-white/20 focus:border-[#D4A853] outline-none" />
                <button type="submit" className="w-full px-6 py-4 text-xs tracking-[0.25em] uppercase bg-[#D4A853] text-[#0A0A0B] hover:bg-white transition font-semibold">
                  Anmeldung abschicken
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
