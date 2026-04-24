"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function NoirKontakt() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
      <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-6">Kontakt</div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-[11vw] leading-[0.88] uppercase tracking-tight"
        style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}
      >
        Im <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>Gespräch</span>.
      </motion.h1>

      <div className="grid md:grid-cols-12 gap-12 mt-20">
        <div className="md:col-span-5 space-y-10">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-2">Direkt</div>
            <a href={`mailto:${contact.email}`} className="text-xl hover:text-[#D4A853] transition block">{contact.email}</a>
            <div className="text-xl mt-1">{contact.phone}</div>
          </div>
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-2">Post</div>
            <p className="text-lg whitespace-pre-line text-white/80">{contact.address}</p>
          </div>
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-2">Folgen</div>
            <p className="text-lg">{contact.social.instagram}</p>
          </div>
        </div>
        <form className="md:col-span-7 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Name" className="px-5 py-4 bg-white/[0.03] border border-white/15 focus:border-[#D4A853] outline-none" />
            <input type="email" placeholder="E-Mail" className="px-5 py-4 bg-white/[0.03] border border-white/15 focus:border-[#D4A853] outline-none" />
          </div>
          <input placeholder="Betreff" className="w-full px-5 py-4 bg-white/[0.03] border border-white/15 focus:border-[#D4A853] outline-none" />
          <textarea placeholder="Nachricht" rows={8} className="w-full px-5 py-4 bg-white/[0.03] border border-white/15 focus:border-[#D4A853] outline-none" />
          <button type="button" className="w-full px-6 py-5 text-xs tracking-[0.25em] uppercase bg-[#D4A853] text-[#0A0A0B] hover:bg-white transition font-semibold">
            Senden
          </button>
        </form>
      </div>
    </main>
  );
}
