"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrushHighlight, PaintedCircle } from "@/components/BrushHighlight";

export default function OpusMitglied() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="flex items-center gap-4 mb-6">
        <PaintedCircle color="yellow" size={32} />
        <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
          Mitglied · Spenden
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-4xl"
      >
        Junge Musik
        <br />
        <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
          braucht{" "}
          <BrushHighlight color="red" tilt={-2} delay={0.4}>Menschen</BrushHighlight>
          {" "}wie Sie.
        </em>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-10 border border-[#0B0B0D]/20 hover:border-jko-yellow transition-colors"
          style={{ borderRadius: "24px 8px 24px 8px" }}
        >
          <div className="absolute -top-3 -left-3 w-12 h-12 flex items-center justify-center" style={{ background: "#F7C800", borderRadius: "55% 45% 50% 50% / 48% 52% 48% 52%", color: "#0B0B0D" }}>
            <span className="text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>01</span>
          </div>
          <div className="text-[11px] tracking-[0.35em] uppercase text-jko-red mb-4 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
            Förderverein
          </div>
          <h2 className="text-4xl md:text-5xl">Mitglied werden</h2>
          <p className="mt-6 text-[#0B0B0D]/80 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Werden Sie Teil des Fördervereins und begleiten Sie das JKO auf seinem Weg. Sie erhalten
            Einladungen zu Generalproben, vergünstigten Eintritt und regelmäßige Einblicke hinter
            die Kulissen.
          </p>
          <ul className="mt-6 space-y-2 italic text-lg" style={{ fontFamily: "Instrument Serif, serif" }}>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-jko-yellow" /> Mindestbeitrag € 60 / Jahr</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-jko-red" /> Familienmitgliedschaft € 100 / Jahr</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-jko-blue" /> Fördermitglied ab € 250 / Jahr</li>
          </ul>
          <Link
            href="/opus/kontakt"
            className="mt-8 inline-block text-sm uppercase tracking-wide px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red transition"
            style={{ fontFamily: "Inter, sans-serif", borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}
          >
            Mitglied werden →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative p-10 bg-[#0B0B0D] text-[#F4EDDE]"
          style={{ borderRadius: "8px 24px 8px 24px" }}
        >
          <div className="absolute -top-3 -right-3 w-12 h-12 flex items-center justify-center" style={{ background: "#E23A2F", borderRadius: "55% 45% 50% 50% / 48% 52% 48% 52%", color: "#F4EDDE" }}>
            <span className="text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>02</span>
          </div>
          <div className="text-[11px] tracking-[0.35em] uppercase text-jko-yellow mb-4 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
            Einzelspende
          </div>
          <h2 className="text-4xl md:text-5xl">Jetzt spenden</h2>
          <p className="mt-6 text-[#F4EDDE]/80 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Ihre Spende fließt direkt in Notenmaterial, Probenräume, Stipendien und die Organisation
            unserer Konzerte. Jeder Euro{" "}
            <em className="italic text-jko-yellow" style={{ fontFamily: "Instrument Serif, serif" }}>klingt später auf der Bühne</em>.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
            {["€ 25", "€ 50", "€ 100"].map((v, i) => (
              <button
                key={v}
                className={`px-4 py-4 border border-[#F4EDDE]/30 hover:border-transparent transition ${
                  i === 0 ? "hover:bg-jko-yellow hover:text-[#0B0B0D]" : i === 1 ? "hover:bg-jko-red" : "hover:bg-jko-blue"
                }`}
                style={{ borderRadius: "50% / 40%" }}
              >
                {v}
              </button>
            ))}
          </div>
          <input placeholder="Eigener Betrag" className="w-full mt-3 px-4 py-4 bg-transparent border border-[#F4EDDE]/30 placeholder:text-[#F4EDDE]/40 outline-none focus:border-jko-yellow" style={{ fontFamily: "Inter, sans-serif", borderRadius: "12px" }} />
          <button className="mt-4 w-full text-sm uppercase tracking-wide px-6 py-4 bg-jko-yellow text-[#0B0B0D] hover:bg-[#F4EDDE] transition" style={{ fontFamily: "Inter, sans-serif", borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}>
            Zur sicheren Zahlung →
          </button>
          <p className="mt-4 text-xs text-[#F4EDDE]/60" style={{ fontFamily: "Inter, sans-serif" }}>
            Als gemeinnütziger Verein stellen wir Spendenquittungen aus.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
