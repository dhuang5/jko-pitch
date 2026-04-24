"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { concerts } from "@/lib/content";

export default function AuroraTermine() {
  const [showAnmeldung, setShowAnmeldung] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-xs font-medium text-[#6B5BFF] mb-6">
          Saison 2025 / 2026
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold"
        >
          Wann und wo{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8)" }}>
            wir spielen.
          </span>
        </motion.h1>
      </div>

      <div className="grid gap-4">
        {concerts.map((c, i) => (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center hover:shadow-[0_20px_50px_-15px_rgba(107,91,255,0.25)] transition-all"
          >
            <div className="md:col-span-2 text-center md:text-left">
              <div className="inline-block md:block rounded-2xl p-4 text-white" style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}>
                <div className="text-xs uppercase tracking-wider opacity-80">{c.dateLabel.split(" ")[1].replace(".", "")}</div>
                <div className="text-3xl font-semibold leading-none mt-1">{c.dateLabel.split(" ")[0]}</div>
              </div>
              <div className="mt-3 text-xs text-[#0B0B12]/60">{c.time} Uhr</div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">{c.title}</h2>
              <ul className="mt-3 space-y-1 text-sm text-[#0B0B12]/75">
                {c.program.map((p) => <li key={p} className="flex gap-2"><span className="text-[#6B5BFF]">♪</span>{p}</li>)}
              </ul>
            </div>
            <div className="md:col-span-3 flex flex-col gap-3 md:items-end">
              <div className="text-sm text-right">
                <div className="font-semibold">{c.venue}</div>
                <div className="text-[#0B0B12]/60">{c.city}</div>
              </div>
              {c.registrationOpen ? (
                <button
                  onClick={() => setShowAnmeldung(true)}
                  className="px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-[0_6px_20px_rgba(107,91,255,0.35)] hover:-translate-y-0.5 transition"
                  style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}
                >
                  Anmelden →
                </button>
              ) : (
                <span className="px-5 py-2.5 rounded-full bg-[#0B0B12]/5 text-[#0B0B12]/50 text-xs">
                  Details folgen
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {showAnmeldung && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setShowAnmeldung(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white max-w-md w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-5 text-2xl text-[#0B0B12]/50 hover:text-[#6B5BFF]" onClick={() => setShowAnmeldung(false)}>×</button>
            <div className="inline-block px-3 py-1 rounded-full bg-[#6B5BFF]/10 text-[#6B5BFF] text-xs font-medium mb-3">
              ✨ Anmeldung offen
            </div>
            <h3 className="text-2xl font-semibold mb-6">Sommerkonzert — 27.06</h3>
            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#6B5BFF]/10 text-[#6B5BFF] text-center">
                Danke! Sie erhalten eine Bestätigung per E-Mail.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                <input required placeholder="Name" className="w-full px-5 py-3.5 rounded-2xl border border-[#0B0B12]/10 bg-white/60 focus:border-[#6B5BFF] focus:bg-white outline-none transition" />
                <input required type="email" placeholder="E-Mail" className="w-full px-5 py-3.5 rounded-2xl border border-[#0B0B12]/10 bg-white/60 focus:border-[#6B5BFF] focus:bg-white outline-none transition" />
                <input type="number" defaultValue={2} min={1} max={6} placeholder="Anzahl Personen" className="w-full px-5 py-3.5 rounded-2xl border border-[#0B0B12]/10 bg-white/60 focus:border-[#6B5BFF] focus:bg-white outline-none transition" />
                <button type="submit" className="w-full px-6 py-4 rounded-2xl text-white font-medium shadow-[0_6px_20px_rgba(107,91,255,0.35)]" style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}>
                  Verbindlich anmelden
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
