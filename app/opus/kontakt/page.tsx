"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import { BrushHighlight, PaintedCircle } from "@/components/BrushHighlight";

export default function OpusKontakt() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="flex items-center gap-4 mb-6">
        <PaintedCircle color="blue" size={32} />
        <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
          Kontakt
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl leading-[0.95] tracking-tight"
      >
        Schreiben Sie uns.
        <br />
        <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
          Oder{" "}
          <BrushHighlight color="yellow" tilt={-2} delay={0.4}>rufen</BrushHighlight>
          {" "}Sie an.
        </em>
      </motion.h1>

      <div className="grid md:grid-cols-12 gap-12 mt-20">
        <div className="md:col-span-5 space-y-8" style={{ fontFamily: "Inter, sans-serif" }}>
          {[
            { label: "E-Mail", value: contact.email, href: `mailto:${contact.email}`, color: "yellow" as const },
            { label: "Telefon", value: contact.phone, color: "red" as const },
            { label: "Postanschrift", value: contact.address, whitespace: true, color: "blue" as const },
            { label: "Social", value: `Instagram: ${contact.social.instagram}`, color: "yellow" as const },
          ].map((item) => (
            <div key={item.label}>
              <div className={`text-[11px] tracking-[0.35em] uppercase mb-2 ${item.color === "yellow" ? "text-[#0B0B0D]/60" : item.color === "red" ? "text-jko-red" : "text-jko-blue"}`}>
                {item.label}
              </div>
              {item.href ? (
                <a href={item.href} className="text-2xl hover:text-jko-red transition">{item.value}</a>
              ) : (
                <p className={`text-xl ${item.whitespace ? "whitespace-pre-line leading-relaxed" : ""}`}>{item.value}</p>
              )}
            </div>
          ))}
        </div>
        <form className="md:col-span-7 space-y-4 p-8 border border-[#0B0B0D]/15 relative" style={{ fontFamily: "Inter, sans-serif", borderRadius: "24px 8px 24px 8px" }}>
          <div className="absolute -top-3 -left-3 w-10 h-10" style={{ background: "#1F49B8", borderRadius: "55% 45% 50% 50% / 48% 52% 48% 52%" }} />
          <input placeholder="Name" className="w-full px-5 py-4 bg-transparent border-b border-[#0B0B0D]/30 focus:border-jko-red outline-none transition" />
          <input type="email" placeholder="E-Mail" className="w-full px-5 py-4 bg-transparent border-b border-[#0B0B0D]/30 focus:border-jko-red outline-none transition" />
          <input placeholder="Betreff" className="w-full px-5 py-4 bg-transparent border-b border-[#0B0B0D]/30 focus:border-jko-red outline-none transition" />
          <textarea placeholder="Ihre Nachricht" rows={8} className="w-full px-5 py-4 bg-transparent border border-[#0B0B0D]/15 focus:border-jko-red outline-none transition" style={{ borderRadius: "12px" }} />
          <button type="button" className="w-full text-sm uppercase tracking-wide px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red transition" style={{ borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}>
            Nachricht senden →
          </button>
        </form>
      </div>
    </main>
  );
}
