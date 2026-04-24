"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function BauhausKontakt() {
  return (
    <main>
      <section className="border-b-2 border-[#0B0B0D] p-6 md:p-16">
        <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">Kontakt</div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[13vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em] font-black"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}
        >
          Hallo.
          <br />
          <span className="text-jko-red">Sprechen</span> Sie uns an.
        </motion.h1>
      </section>

      <section className="grid md:grid-cols-12">
        <div className="md:col-span-5 border-r-2 border-[#0B0B0D]">
          <div className="bg-jko-yellow p-10 border-b-2 border-[#0B0B0D]">
            <div className="text-xs uppercase tracking-[0.3em] font-bold mb-3">E-Mail</div>
            <a href={`mailto:${contact.email}`} className="text-2xl font-black break-all" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 700 }}>
              {contact.email}
            </a>
          </div>
          <div className="bg-jko-red text-[#FAF7F2] p-10 border-b-2 border-[#0B0B0D]">
            <div className="text-xs uppercase tracking-[0.3em] font-bold mb-3">Telefon</div>
            <div className="text-2xl font-black">{contact.phone}</div>
          </div>
          <div className="bg-jko-blue text-[#FAF7F2] p-10">
            <div className="text-xs uppercase tracking-[0.3em] font-bold mb-3">Adresse</div>
            <p className="text-lg whitespace-pre-line leading-relaxed">{contact.address}</p>
          </div>
        </div>
        <form className="md:col-span-7 p-6 md:p-10 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Name" className="px-5 py-4 border-2 border-[#0B0B0D] bg-transparent focus:bg-jko-yellow/20 outline-none text-lg" />
            <input type="email" placeholder="E-Mail" className="px-5 py-4 border-2 border-[#0B0B0D] bg-transparent focus:bg-jko-yellow/20 outline-none text-lg" />
          </div>
          <input placeholder="Betreff" className="w-full px-5 py-4 border-2 border-[#0B0B0D] bg-transparent focus:bg-jko-yellow/20 outline-none text-lg" />
          <textarea placeholder="Nachricht" rows={10} className="w-full px-5 py-4 border-2 border-[#0B0B0D] bg-transparent focus:bg-jko-yellow/20 outline-none text-lg" />
          <button type="button" className="w-full px-6 py-5 text-sm uppercase tracking-wider font-bold bg-[#0B0B0D] text-[#FAF7F2] hover:bg-jko-red transition">
            Senden →
          </button>
        </form>
      </section>
    </main>
  );
}
