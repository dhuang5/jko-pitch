"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function AfficheKontakt() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 md:px-10 pt-16 pb-20">
      <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">Kontakt</div>
      <h1>
        <span className="block text-[18vw] md:text-[12vw] leading-[0.82] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
          HALLO.
        </span>
        <span className="block text-[14vw] md:text-[9vw] leading-[0.95] text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive" }}>
          Schreiben Sie uns.
        </span>
      </h1>

      <div className="grid md:grid-cols-12 gap-10 mt-20">
        <div className="md:col-span-5 space-y-0 border-t-2 border-b-2 border-[#0B0B0D]">
          {[
            { label: "E-Mail", value: contact.email, href: `mailto:${contact.email}`, color: "red" as const },
            { label: "Telefon", value: contact.phone, color: "blue" as const },
            { label: "Post", value: contact.address, whitespace: true, color: "red" as const },
            { label: "Social", value: contact.social.instagram, color: "blue" as const },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`py-6 ${i < 3 ? "border-b-2 border-[#0B0B0D]" : ""}`}
            >
              <div className={`text-[10px] tracking-[0.35em] uppercase font-bold mb-2 ${item.color === "red" ? "text-jko-red" : "text-jko-blue"}`}>
                {item.label}
              </div>
              {item.href ? (
                <a href={item.href} className="text-2xl md:text-3xl font-bold tracking-tight hover:text-jko-red" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>{item.value}</a>
              ) : (
                <p className={`text-xl font-medium ${item.whitespace ? "whitespace-pre-line leading-relaxed" : ""}`} style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 500 }}>{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
        <form className="md:col-span-7 space-y-0 border-2 border-[#0B0B0D] p-8 relative">
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-jko-yellow rounded-full flex items-center justify-center rotate-6 shadow-lg">
            <div className="text-center">
              <div className="text-[9px] font-bold uppercase tracking-widest">Schreib</div>
              <div className="text-2xl font-bold" style={{ fontFamily: "Caveat Brush, cursive" }}>uns!</div>
            </div>
          </div>
          <div className="text-[10px] tracking-[0.35em] uppercase font-bold text-jko-red mb-4">Nachricht</div>
          <input placeholder="NAME" className="w-full px-0 py-4 bg-transparent border-b-2 border-[#0B0B0D]/30 focus:border-jko-red outline-none tracking-wide uppercase text-sm font-bold transition" />
          <input type="email" placeholder="E-MAIL" className="w-full px-0 py-4 bg-transparent border-b-2 border-[#0B0B0D]/30 focus:border-jko-red outline-none tracking-wide uppercase text-sm font-bold transition" />
          <input placeholder="BETREFF" className="w-full px-0 py-4 bg-transparent border-b-2 border-[#0B0B0D]/30 focus:border-jko-red outline-none tracking-wide uppercase text-sm font-bold transition" />
          <textarea placeholder="IHRE NACHRICHT" rows={8} className="w-full px-0 py-4 bg-transparent border-b-2 border-[#0B0B0D]/30 focus:border-jko-red outline-none text-base transition" />
          <button type="button" className="mt-6 w-full px-6 py-5 bg-jko-red text-[#F4EDDE] font-bold uppercase tracking-wider hover:bg-[#0B0B0D] transition">
            Senden →
          </button>
        </form>
      </div>
    </main>
  );
}
