"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { archive } from "@/lib/content";

export default function AfficheArchiv() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 md:px-10 pt-16 pb-20">
      <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">Archiv</div>
      <h1>
        <span className="block text-[18vw] md:text-[12vw] leading-[0.82] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
          WAS WAR.
        </span>
        <span className="block text-[14vw] md:text-[9vw] leading-[0.95] text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive" }}>
          Was bleibt.
        </span>
      </h1>

      <div className="mt-8">
        <Link href="/affiche/archiv/kritiken" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-jko-blue hover:text-jko-red">
          → Pressekritiken
        </Link>
      </div>

      <div className="mt-16 space-y-0 border-y-2 border-[#0B0B0D]">
        {archive.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <Link
              href={`/affiche/archiv/${entry.year}`}
              className={`grid md:grid-cols-12 gap-6 py-8 ${i < archive.length - 1 ? "border-b-2 border-[#0B0B0D]" : ""} items-center group hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition-colors px-2 md:px-6`}
            >
              <div className="md:col-span-3 text-7xl md:text-9xl leading-none text-jko-red group-hover:text-jko-yellow transition" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
                {entry.year}
              </div>
              <div className="md:col-span-2 text-sm font-bold uppercase tracking-widest">
                {entry.concertCount} Konzerte
              </div>
              <div className="md:col-span-6">
                <ul className="space-y-1">
                  {entry.highlights.map((h, j) => (
                    <li key={h} className="flex gap-2">
                      <span className={`${j === 0 ? "text-jko-red group-hover:text-jko-yellow" : j === 1 ? "text-jko-blue group-hover:text-jko-yellow" : "opacity-60"}`}>
                        {j === 0 ? "✦" : "·"}
                      </span>
                      <span className={j === 0 ? "text-lg font-semibold" : "text-base opacity-80"}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1 text-right text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
