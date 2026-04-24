"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/content";

export default function NoirKritiken() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
      <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-6">Pressekritiken</div>
      <h1 className="text-7xl md:text-[11vw] leading-[0.88] uppercase tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
        Die <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>Stimmen</span>.
      </h1>

      <div className="mt-20 space-y-20 max-w-4xl">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1 }}
          >
            <div className="text-[6rem] leading-none text-[#D4A853]/40" style={{ fontFamily: "Bodoni Moda, serif" }}>„</div>
            <p className="text-3xl md:text-4xl leading-[1.3] italic -mt-10" style={{ fontFamily: "Bodoni Moda, serif" }}>
              {r.quote}
            </p>
            <footer className="mt-6 text-xs tracking-[0.3em] uppercase text-white/60">
              {r.publication} · {r.author ?? "Redaktion"} · {r.date}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </main>
  );
}
