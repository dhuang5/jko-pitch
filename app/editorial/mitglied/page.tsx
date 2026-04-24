"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Mitglied() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
        Mitglied werden · Spenden
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-4xl"
      >
        Junge Musik
        <br />
        <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
          braucht Menschen wie Sie.
        </em>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#0B0B0D]/15 p-10 hover:border-[#6E2C2C] transition-colors"
        >
          <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Förderverein
          </div>
          <h2 className="text-4xl md:text-5xl">Mitglied werden</h2>
          <p className="mt-6 text-[#0B0B0D]/80 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Werden Sie Teil des Fördervereins und begleiten Sie das JKO auf seinem Weg. Als Mitglied
            erhalten Sie Einladungen zu exklusiven Generalproben, vergünstigten Eintritt zu allen
            Konzerten und regelmäßige Einblicke hinter die Kulissen.
          </p>
          <ul className="mt-6 space-y-2 italic text-lg" style={{ fontFamily: "Instrument Serif, serif" }}>
            <li>— Mindestbeitrag € 60 / Jahr</li>
            <li>— Familienmitgliedschaft € 100 / Jahr</li>
            <li>— Fördermitglied ab € 250 / Jahr</li>
          </ul>
          <Link
            href="/editorial/kontakt"
            className="mt-8 inline-block text-sm uppercase tracking-wide px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-[#6E2C2C] transition"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Mitglied werden
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="border border-[#0B0B0D]/15 p-10 bg-[#0B0B0D] text-[#F4EDDE]"
        >
          <div className="text-[11px] tracking-[0.4em] uppercase text-[#F7C800] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Einzelspende
          </div>
          <h2 className="text-4xl md:text-5xl">Jetzt spenden</h2>
          <p className="mt-6 text-[#F4EDDE]/80 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Ihre Spende fließt direkt in Notenmaterial, Probenräume, Stipendien für junge Musiker:innen
            und die Organisation unserer Konzerte. Jeder Euro hört man später auf der Bühne.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
            {["€ 25", "€ 50", "€ 100"].map((v) => (
              <button key={v} className="px-4 py-4 border border-[#F4EDDE]/30 hover:bg-[#F4EDDE] hover:text-[#0B0B0D] transition">
                {v}
              </button>
            ))}
          </div>
          <input placeholder="Eigener Betrag" className="w-full mt-3 px-4 py-4 bg-transparent border border-[#F4EDDE]/30 placeholder:text-[#F4EDDE]/40 outline-none" style={{ fontFamily: "Inter, sans-serif" }} />
          <button className="mt-4 w-full text-sm uppercase tracking-wide px-6 py-4 bg-[#F7C800] text-[#0B0B0D] hover:bg-[#F4EDDE] transition" style={{ fontFamily: "Inter, sans-serif" }}>
            Zur sicheren Zahlung
          </button>
          <p className="mt-4 text-xs text-[#F4EDDE]/60" style={{ fontFamily: "Inter, sans-serif" }}>
            Als gemeinnütziger Verein stellen wir Spendenquittungen aus.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
