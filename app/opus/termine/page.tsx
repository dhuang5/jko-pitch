"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { concerts } from "@/lib/content";
import { BrushHighlight, PaintedCircle } from "@/components/BrushHighlight";

const accentCycle = ["yellow", "red", "blue"] as const;

export default function OpusTermine() {
  const [showAnmeldung, setShowAnmeldung] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="flex items-center gap-4 mb-6">
        <PaintedCircle color="red" size={32} />
        <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
          Termine · Saison 2025/26
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Wo wir als Nächstes<br />
        <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
          <BrushHighlight color="yellow" tilt={-3} delay={0.3}>spielen</BrushHighlight>
          {" "}werden.
        </em>
      </h1>

      <div className="mt-16 border-t border-[#0B0B0D]/20">
        {concerts.map((c, i) => {
          const color = accentCycle[i % 3];
          return (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="grid md:grid-cols-12 gap-8 py-10 border-b border-[#0B0B0D]/15 group hover:bg-[#0B0B0D]/[0.02] transition-colors px-2"
            >
              <div className="md:col-span-2">
                <div className="text-sm tracking-wider uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                  {c.dateLabel.split(" ")[0]}
                </div>
                <div className={`text-5xl leading-none mt-1 italic ${color === "yellow" ? "text-jko-yellow" : color === "red" ? "text-jko-red" : "text-jko-blue"}`} style={{ fontFamily: "Instrument Serif, serif" }}>
                  {c.dateLabel.split(" ")[1]}
                </div>
                <div className="text-sm mt-1 text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                  {c.dateLabel.split(" ")[2]} · {c.time}
                </div>
              </div>
              <div className="md:col-span-6">
                <h2 className="text-3xl md:text-4xl leading-tight">{c.title}</h2>
                <ul className="mt-3 space-y-0.5 text-[#0B0B0D]/75 italic text-lg" style={{ fontFamily: "Instrument Serif, serif" }}>
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
                    className="text-xs uppercase tracking-wider px-5 py-3 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red transition"
                    style={{ borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}
                  >
                    Anmelden →
                  </button>
                ) : (
                  <span className="text-xs uppercase tracking-wider text-[#0B0B0D]/50">Details folgen</span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {showAnmeldung && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#0B0B0D]/75 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setShowAnmeldung(false)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="bg-[#F4EDDE] max-w-xl w-full p-10 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: "18px 6px 24px 8px" }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10" style={{ background: "#F7C800", borderRadius: "55% 45% 50% 50% / 48% 52% 48% 52%" }} />
            <button
              className="absolute top-4 right-5 text-[#0B0B0D]/60 hover:text-jko-red text-2xl"
              onClick={() => setShowAnmeldung(false)}
            >
              ×
            </button>
            <div className="text-[11px] tracking-[0.35em] uppercase text-jko-red mb-3 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
              ✦ Anmeldung nur bis 20. Juni geöffnet
            </div>
            <h3 className="text-3xl mb-1">Sommerkonzert</h3>
            <p className="text-lg italic text-[#0B0B0D]/70 mb-6" style={{ fontFamily: "Instrument Serif, serif" }}>
              27. Juni · Stiftskirche Bad Mergentheim
            </p>
            {submitted ? (
              <div className="p-6 italic text-jko-red text-lg border-l-2 border-jko-red" style={{ fontFamily: "Instrument Serif, serif" }}>
                Danke! Wir bestätigen Ihre Anmeldung per E-Mail.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <input required placeholder="Vor- und Nachname" className="w-full px-4 py-3.5 bg-transparent border-b border-[#0B0B0D]/30 focus:border-jko-red outline-none transition" />
                <input required type="email" placeholder="E-Mail-Adresse" className="w-full px-4 py-3.5 bg-transparent border-b border-[#0B0B0D]/30 focus:border-jko-red outline-none transition" />
                <input type="number" min={1} max={6} defaultValue={2} placeholder="Anzahl Personen" className="w-full px-4 py-3.5 bg-transparent border-b border-[#0B0B0D]/30 focus:border-jko-red outline-none transition" />
                <textarea placeholder="Anmerkungen (optional)" rows={3} className="w-full px-4 py-3.5 bg-transparent border border-[#0B0B0D]/20 rounded-lg focus:border-jko-red outline-none transition" />
                <button type="submit" className="w-full text-sm uppercase tracking-wide px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red transition" style={{ borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}>
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
