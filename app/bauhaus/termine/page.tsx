"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { concerts } from "@/lib/content";

const blockColors = ["bg-jko-yellow", "bg-jko-red text-[#FAF7F2]", "bg-jko-blue text-[#FAF7F2]", "bg-[#0B0B0D] text-[#FAF7F2]"];

export default function BauhausTermine() {
  const [showAnmeldung, setShowAnmeldung] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <section className="border-b-2 border-[#0B0B0D] p-6 md:p-16">
        <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">Termine · Saison 25/26</div>
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em] font-black" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
          Sechs Abende.
          <br />
          <span className="text-jko-red">Ein Ensemble.</span>
        </h1>
      </section>

      <section className="border-b-2 border-[#0B0B0D]">
        <div className="grid md:grid-cols-2">
          {concerts.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.15 }}
              className={`p-6 md:p-10 ${blockColors[i % blockColors.length]} border-[#0B0B0D] ${i % 2 === 0 ? "md:border-r-2" : ""} ${i < concerts.length - 2 ? "border-b-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase font-bold opacity-80">
                    {c.dateLabel} · {c.time}
                  </div>
                  <h2 className="text-3xl md:text-4xl mt-3 leading-tight font-black tracking-tight" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
                    {c.title}
                  </h2>
                </div>
                <div className="text-5xl md:text-6xl font-black opacity-40" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <ul className="mt-6 space-y-1 text-sm">
                {c.program.map((p) => <li key={p}>— {p}</li>)}
              </ul>
              <div className="mt-8 flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">{c.venue}, {c.city}</div>
                {c.registrationOpen ? (
                  <button
                    onClick={() => setShowAnmeldung(true)}
                    className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold bg-[#0B0B0D] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#0B0B0D] transition"
                  >
                    Anmelden →
                  </button>
                ) : (
                  <span className="text-xs uppercase tracking-wider font-bold opacity-60">Demnächst</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {showAnmeldung && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#0B0B0D]/70 flex items-center justify-center p-6"
          onClick={() => setShowAnmeldung(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="bg-[#FAF7F2] border-2 border-[#0B0B0D] max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-3 right-4 text-3xl" onClick={() => setShowAnmeldung(false)}>×</button>
            <div className="text-xs tracking-[0.3em] uppercase font-bold text-jko-red mb-3">Anmeldung offen bis 20.06</div>
            <h3 className="text-3xl font-black mb-6" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
              Sommerkonzert · 27.06
            </h3>
            {submitted ? (
              <div className="text-xl font-semibold">Danke! Bestätigung folgt.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                <input required placeholder="Name" className="w-full px-4 py-3 border-2 border-[#0B0B0D] bg-transparent focus:bg-jko-yellow/30 outline-none" />
                <input required type="email" placeholder="E-Mail" className="w-full px-4 py-3 border-2 border-[#0B0B0D] bg-transparent focus:bg-jko-yellow/30 outline-none" />
                <input type="number" min={1} max={6} defaultValue={2} placeholder="Anzahl" className="w-full px-4 py-3 border-2 border-[#0B0B0D] bg-transparent focus:bg-jko-yellow/30 outline-none" />
                <button type="submit" className="w-full px-6 py-4 text-sm uppercase tracking-wider font-bold bg-[#0B0B0D] text-[#FAF7F2] hover:bg-jko-red transition">
                  Anmeldung abschicken →
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
