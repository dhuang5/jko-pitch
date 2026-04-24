"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { concerts } from "@/lib/content";

export default function Termine() {
  const [showAnmeldung, setShowAnmeldung] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
        Termine · Saison 2025/26
      </div>
      <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Wo wir als Nächstes<br />
        <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
          spielen werden.
        </em>
      </h1>

      <div className="mt-16 border-t border-[#0B0B0D]/20">
        {concerts.map((c, i) => (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="grid md:grid-cols-12 gap-8 py-10 border-b border-[#0B0B0D]/15 group"
          >
            <div className="md:col-span-2">
              <div className="text-sm tracking-wider uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                {c.dateLabel.split(" ")[0]}
              </div>
              <div className="text-5xl leading-none mt-1 italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
                {c.dateLabel.split(" ")[1]}
              </div>
              <div className="text-sm mt-1 text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                {c.dateLabel.split(" ")[2]} · {c.time}
              </div>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl leading-tight group-hover:text-[#6E2C2C] transition-colors">{c.title}</h2>
              <ul className="mt-3 space-y-0.5 text-[#0B0B0D]/75 italic" style={{ fontFamily: "Instrument Serif, serif" }}>
                {c.program.map((p) => <li key={p}>— {p}</li>)}
              </ul>
            </div>
            <div className="md:col-span-2 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <div>{c.venue}</div>
              <div className="text-[#0B0B0D]/60">{c.city}</div>
            </div>
            <div className="md:col-span-2 flex md:justify-end items-start" style={{ fontFamily: "Inter, sans-serif" }}>
              {c.registrationOpen ? (
                <button
                  onClick={() => setShowAnmeldung(true)}
                  className="text-xs uppercase tracking-wider px-4 py-2.5 border border-[#0B0B0D] hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition"
                >
                  Anmeldung
                </button>
              ) : (
                <span className="text-xs uppercase tracking-wider text-[#0B0B0D]/50">Details folgen</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Anmeldung drawer */}
      {showAnmeldung && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#0B0B0D]/80 flex items-center justify-center p-6"
          onClick={() => setShowAnmeldung(false)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="bg-[#F4EDDE] max-w-xl w-full p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-[#0B0B0D]/60 hover:text-[#6E2C2C] text-2xl"
              onClick={() => setShowAnmeldung(false)}
            >
              ×
            </button>
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              Anmeldung · Nur bis 20. Juni geöffnet
            </div>
            <h3 className="text-3xl mb-6">Sommerkonzert reservieren</h3>
            {submitted ? (
              <div className="text-lg italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
                Danke! Wir bestätigen Ihre Anmeldung per E-Mail.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <input required placeholder="Vor- und Nachname" className="w-full px-4 py-3 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
                <input required type="email" placeholder="E-Mail-Adresse" className="w-full px-4 py-3 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
                <input type="number" min={1} max={6} defaultValue={2} placeholder="Anzahl Personen" className="w-full px-4 py-3 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
                <textarea placeholder="Anmerkungen (optional)" rows={3} className="w-full px-4 py-3 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
                <button type="submit" className="w-full text-sm uppercase tracking-wide px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-[#6E2C2C] transition">
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
