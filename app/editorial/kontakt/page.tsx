"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function Kontakt() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
        Kontakt
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl leading-[0.95] tracking-tight"
      >
        Schreiben Sie uns.
        <br />
        <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
          Oder rufen Sie an.
        </em>
      </motion.h1>

      <div className="grid md:grid-cols-12 gap-12 mt-20">
        <div className="md:col-span-5 space-y-8" style={{ fontFamily: "Inter, sans-serif" }}>
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-2">E-Mail</div>
            <a href={`mailto:${contact.email}`} className="text-2xl hover:text-[#6E2C2C] transition">
              {contact.email}
            </a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-2">Telefon</div>
            <div className="text-2xl">{contact.phone}</div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-2">Postanschrift</div>
            <p className="text-lg whitespace-pre-line leading-relaxed">{contact.address}</p>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-2">Social</div>
            <div className="flex gap-4 text-lg">
              <span>Instagram: {contact.social.instagram}</span>
            </div>
          </div>
        </div>
        <form className="md:col-span-7 space-y-4" style={{ fontFamily: "Inter, sans-serif" }}>
          <input placeholder="Name" className="w-full px-5 py-4 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
          <input type="email" placeholder="E-Mail" className="w-full px-5 py-4 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
          <input placeholder="Betreff" className="w-full px-5 py-4 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
          <textarea placeholder="Ihre Nachricht" rows={8} className="w-full px-5 py-4 bg-transparent border border-[#0B0B0D]/30 focus:border-[#6E2C2C] outline-none" />
          <button type="button" className="w-full text-sm uppercase tracking-wide px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-[#6E2C2C] transition">
            Nachricht senden
          </button>
        </form>
      </div>
    </main>
  );
}
