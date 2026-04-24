"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { archive } from "@/lib/content";

export default function Archiv() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
        Archiv
      </div>
      <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Alles, was wir<br />
        <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
          gespielt haben.
        </em>
      </h1>

      <div className="mt-8 flex gap-6" style={{ fontFamily: "Inter, sans-serif" }}>
        <Link href="/editorial/archiv/kritiken" className="text-sm uppercase tracking-wider underline underline-offset-4 hover:text-[#6E2C2C]">
          → Zu den Pressekritiken
        </Link>
      </div>

      <div className="mt-16 border-t border-[#0B0B0D]/20">
        {archive.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <Link
              href={`/editorial/archiv/${entry.year}`}
              className="group grid md:grid-cols-12 gap-8 py-8 border-b border-[#0B0B0D]/15 hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition-colors px-2 md:px-6"
            >
              <div className="md:col-span-2 text-5xl md:text-6xl leading-none tracking-tight group-hover:text-[#F7C800]">
                {entry.year}
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-1 italic text-lg" style={{ fontFamily: "Instrument Serif, serif" }}>
                  {entry.highlights.map((h) => <li key={h}>— {h}</li>)}
                </ul>
              </div>
              <div className="md:col-span-2 md:text-right text-sm tracking-wider uppercase opacity-60 self-center" style={{ fontFamily: "Inter, sans-serif" }}>
                {entry.concertCount} Konzerte →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
