"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { archive } from "@/lib/content";

export default function AuroraArchiv() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-xs font-medium text-[#6B5BFF] mb-6">
          Archiv
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold"
        >
          Was{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8)" }}>
            war.
          </span>
        </motion.h1>
        <Link href="/aurora/archiv/kritiken" className="mt-8 inline-block text-[#6B5BFF] font-medium hover:underline underline-offset-4">
          → Pressekritiken lesen
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {archive.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
          >
            <Link
              href={`/aurora/archiv/${entry.year}`}
              className="block rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 p-7 h-full hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(107,91,255,0.3)] hover:border-[#6B5BFF]/30 transition-all"
            >
              <div className="text-5xl font-semibold tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}>
                {entry.year}
              </div>
              <div className="mt-2 text-sm text-[#0B0B12]/60">{entry.concertCount} Konzerte</div>
              <div className="mt-4 text-sm leading-snug line-clamp-3">{entry.highlights[0]}</div>
              <div className="mt-6 text-xs font-semibold text-[#6B5BFF]">→ Jahr öffnen</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
