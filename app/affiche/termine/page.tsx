"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { concerts } from "@/lib/content";

export default function AfficheTermine() {
  const [showAnmeldung, setShowAnmeldung] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-[1500px] mx-auto px-6 md:px-10 pt-16 pb-20">
      <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">Termine · Saison 25/26</div>
      <h1 className="relative">
        <span className="block text-[18vw] md:text-[12vw] leading-[0.82] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
          SECHS ABENDE
        </span>
        <span className="block text-[14vw] md:text-[9vw] leading-[0.95] text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive" }}>
          ein Ensemble.
        </span>
      </h1>

      <div className="mt-20 space-y-0 border-y-2 border-[#0B0B0D]">
        {concerts.map((c, i) => {
          const dateParts = c.dateLabel.split(" ");
          return (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className={`grid md:grid-cols-12 gap-6 md:gap-8 py-10 ${i < concerts.length - 1 ? "border-b-2 border-[#0B0B0D]" : ""} items-center group hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition-colors px-2 md:px-6`}
            >
              <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-3 md:gap-0">
                <div className="text-6xl md:text-7xl leading-none text-jko-red group-hover:text-jko-yellow transition-colors" style={{ fontFamily: "Anton, sans-serif" }}>
                  {dateParts[0].replace(".", "")}
                </div>
                <div className="text-xl font-bold tracking-tight group-hover:opacity-80" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
                  {dateParts[1].replace(".", "").toUpperCase()} {dateParts[2]}
                </div>
                <div className="text-sm font-bold mt-1 opacity-70">{c.time} UHR</div>
              </div>
              <div className="md:col-span-6">
                <h2 className="text-3xl md:text-4xl leading-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>
                  {c.title.split(" — ")[0].toUpperCase()}
                  {c.title.includes(" — ") && (
                    <span className="text-2xl md:text-3xl text-jko-blue group-hover:text-jko-yellow ml-3" style={{ fontFamily: "Caveat Brush, cursive" }}>
                      {c.title.split(" — ")[1]}
                    </span>
                  )}
                </h2>
                <ul className="mt-3 space-y-1 text-sm">
                  {c.program.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-jko-red group-hover:text-jko-yellow">✦</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 text-sm font-bold tracking-wide uppercase">
                <div>{c.venue}</div>
                <div className="opacity-70 font-medium">{c.city}</div>
              </div>
              <div className="md:col-span-2 flex md:justify-end">
                {c.registrationOpen ? (
                  <button
                    onClick={() => setShowAnmeldung(true)}
                    className="px-5 py-3 bg-jko-red text-[#F4EDDE] font-bold uppercase tracking-wider text-xs group-hover:bg-jko-yellow group-hover:text-[#0B0B0D] transition"
                  >
                    Anmelden →
                  </button>
                ) : (
                  <span className="text-xs uppercase tracking-widest font-bold opacity-60">Details folgen</span>
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
          className="fixed inset-0 z-50 bg-[#0B0B0D]/75 flex items-center justify-center p-6"
          onClick={() => setShowAnmeldung(false)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, rotate: -1 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="bg-[#F4EDDE] max-w-xl w-full p-10 relative shadow-2xl border-2 border-[#0B0B0D]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-jko-yellow rounded-full flex flex-col items-center justify-center rotate-12 text-[#0B0B0D] shadow-lg">
              <div className="text-[9px] font-bold uppercase tracking-widest">Nur bis</div>
              <div className="text-xl font-bold" style={{ fontFamily: "Anton, sans-serif" }}>20.06.</div>
            </div>
            <button className="absolute top-3 left-4 text-[#0B0B0D]/60 hover:text-jko-red text-2xl" onClick={() => setShowAnmeldung(false)}>×</button>
            <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-3 mt-2">Anmeldung</div>
            <div className="text-5xl md:text-6xl text-jko-red leading-[0.88]" style={{ fontFamily: "Anton, sans-serif" }}>SOMMER</div>
            <div className="text-4xl text-jko-blue -mt-1" style={{ fontFamily: "Caveat Brush, cursive" }}>konzert</div>
            <div className="mt-2 text-sm font-bold uppercase tracking-wider">27. Juni · Stiftskirche</div>
            {submitted ? (
              <div className="mt-8 p-6 bg-jko-yellow font-bold text-center">Danke! Wir bestätigen per E-Mail.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 space-y-3">
                <input required placeholder="VOR- UND NACHNAME" className="w-full px-4 py-3.5 bg-transparent border-b-2 border-[#0B0B0D]/30 focus:border-jko-red outline-none tracking-wide uppercase text-sm font-bold transition" />
                <input required type="email" placeholder="E-MAIL" className="w-full px-4 py-3.5 bg-transparent border-b-2 border-[#0B0B0D]/30 focus:border-jko-red outline-none tracking-wide uppercase text-sm font-bold transition" />
                <input type="number" min={1} max={6} defaultValue={2} placeholder="ANZAHL PERSONEN" className="w-full px-4 py-3.5 bg-transparent border-b-2 border-[#0B0B0D]/30 focus:border-jko-red outline-none tracking-wide uppercase text-sm font-bold transition" />
                <button type="submit" className="w-full px-6 py-4 bg-jko-red text-[#F4EDDE] font-bold uppercase tracking-wider hover:bg-[#0B0B0D] transition">
                  Verbindlich anmelden →
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
