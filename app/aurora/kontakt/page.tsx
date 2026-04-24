"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function AuroraKontakt() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-xs font-medium text-[#6B5BFF] mb-6">
          Kontakt
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold"
        >
          Hallo.{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8)" }}>
            Schön, Sie zu hören.
          </span>
        </motion.h1>
      </div>

      <div className="mt-20 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-5 space-y-4">
          {[
            { label: "E-Mail", value: contact.email, href: `mailto:${contact.email}` },
            { label: "Telefon", value: contact.phone },
            { label: "Post", value: contact.address, whitespace: true },
            { label: "Instagram", value: contact.social.instagram },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 p-6 hover:border-[#6B5BFF]/40 transition">
              <div className="text-xs uppercase tracking-wider text-[#6B5BFF] font-semibold mb-2">{item.label}</div>
              {item.href ? (
                <a href={item.href} className="text-lg hover:text-[#6B5BFF] break-all">{item.value}</a>
              ) : (
                <p className={`text-lg ${item.whitespace ? "whitespace-pre-line" : ""}`}>{item.value}</p>
              )}
            </div>
          ))}
        </div>
        <form className="md:col-span-7 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 p-8 md:p-10 space-y-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Name" className="px-5 py-4 rounded-2xl border border-[#0B0B12]/10 bg-white/70 focus:bg-white focus:border-[#6B5BFF] outline-none transition" />
            <input type="email" placeholder="E-Mail" className="px-5 py-4 rounded-2xl border border-[#0B0B12]/10 bg-white/70 focus:bg-white focus:border-[#6B5BFF] outline-none transition" />
          </div>
          <input placeholder="Betreff" className="w-full px-5 py-4 rounded-2xl border border-[#0B0B12]/10 bg-white/70 focus:bg-white focus:border-[#6B5BFF] outline-none transition" />
          <textarea placeholder="Ihre Nachricht" rows={8} className="w-full px-5 py-4 rounded-2xl border border-[#0B0B12]/10 bg-white/70 focus:bg-white focus:border-[#6B5BFF] outline-none transition" />
          <button type="button" className="w-full px-6 py-4 rounded-2xl text-white font-medium shadow-[0_6px_20px_rgba(107,91,255,0.35)] hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}>
            Nachricht senden →
          </button>
        </form>
      </div>
    </main>
  );
}
