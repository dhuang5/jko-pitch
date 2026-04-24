"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { archive } from "@/lib/content";

export default function NoirArchiv() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
      <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-6">Archiv</div>
      <h1 className="text-7xl md:text-[11vw] leading-[0.88] uppercase tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
        Unsere <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>Historie</span>.
      </h1>
      <div className="mt-6">
        <Link href="/noir/archiv/kritiken" className="text-sm tracking-[0.25em] uppercase text-[#D4A853] hover:text-white transition">
          → Pressekritiken
        </Link>
      </div>

      <div className="mt-20 space-y-3">
        {archive.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <Link
              href={`/noir/archiv/${entry.year}`}
              className="group flex items-center gap-8 py-8 border-b border-white/10 hover:border-[#D4A853] transition-colors"
            >
              <div className="text-6xl md:text-8xl leading-none tracking-tight text-white/30 group-hover:text-[#D4A853] transition-colors" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
                {entry.year}
              </div>
              <div className="flex-1">
                <div className="text-sm text-white/60">{entry.concertCount} Konzerte</div>
                <div className="text-lg mt-1">{entry.highlights[0]}</div>
              </div>
              <div className="text-[#D4A853] text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
