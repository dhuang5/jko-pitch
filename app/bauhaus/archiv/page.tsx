"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { archive } from "@/lib/content";

const cellColors = ["bg-jko-yellow", "bg-jko-red text-[#FAF7F2]", "bg-jko-blue text-[#FAF7F2]", "bg-[#FAF7F2]"];

export default function BauhausArchiv() {
  return (
    <main>
      <section className="border-b-2 border-[#0B0B0D] p-6 md:p-16">
        <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">Archiv</div>
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em] font-black" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
          Was war.
        </h1>
        <div className="mt-6">
          <Link href="/bauhaus/archiv/kritiken" className="inline-block text-sm uppercase tracking-wider font-bold underline underline-offset-8 hover:text-jko-red">
            → Pressekritiken lesen
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-4">
        {archive.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            className={`${cellColors[i % cellColors.length]} border-[#0B0B0D] ${(i + 1) % 4 !== 0 ? "md:border-r-2" : ""} ${i < archive.length - 4 ? "border-b-2" : ""}`}
          >
            <Link href={`/bauhaus/archiv/${entry.year}`} className="block p-10 hover:bg-[#0B0B0D] hover:text-[#FAF7F2] transition-colors group h-full">
              <div className="text-6xl md:text-7xl font-black tracking-tight leading-none" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
                {entry.year}
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.2em] font-bold opacity-70">
                {entry.concertCount} Konzerte
              </div>
              <div className="mt-6 text-sm leading-snug line-clamp-3">
                {entry.highlights[0]}
              </div>
              <div className="mt-6 text-xs uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition">→ öffnen</div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
