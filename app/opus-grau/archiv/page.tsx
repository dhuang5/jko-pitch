"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { archive } from "@/lib/content";
import { BrushHighlight, PaintedCircle } from "@/components/BrushHighlight";

const accents = ["yellow", "red", "blue"] as const;

export default function OpusGrauArchiv() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="flex items-center gap-4 mb-6">
        <PaintedCircle color="red" size={32} />
        <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
          Archiv
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Alles, was wir<br />
        <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
          <BrushHighlight color="blue" tilt={-2} delay={0.4}>gespielt</BrushHighlight>
          {" "}haben.
        </em>
      </h1>

      <div className="mt-8">
        <Link href="/opus-grau/archiv/kritiken" className="text-sm uppercase tracking-wider underline underline-offset-[6px] decoration-jko-red decoration-2 hover:decoration-jko-blue transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
          → Zu den Pressekritiken
        </Link>
      </div>

      <div className="mt-16 border-t border-[#0B0B0D]/20">
        {archive.map((entry, i) => {
          const color = accents[i % 3];
          return (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <Link
                href={`/opus-grau/archiv/${entry.year}`}
                className="group grid md:grid-cols-12 gap-8 py-8 border-b border-[#0B0B0D]/15 transition-colors px-2 md:px-6 relative overflow-hidden"
              >
                <div className={`absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-[1.2s] ease-out origin-left ${
                  color === "yellow" ? "bg-jko-yellow/15" : color === "red" ? "bg-jko-red/10" : "bg-jko-blue/10"
                }`} />
                <div className={`relative md:col-span-2 text-5xl md:text-6xl leading-none tracking-tight transition-colors ${
                  color === "yellow" ? "group-hover:text-jko-yellow" : color === "red" ? "group-hover:text-jko-red" : "group-hover:text-jko-blue"
                }`}>
                  {entry.year}
                </div>
                <div className="relative md:col-span-8">
                  <ul className="space-y-1 italic text-lg" style={{ fontFamily: "Instrument Serif, serif" }}>
                    {entry.highlights.map((h) => <li key={h}>— {h}</li>)}
                  </ul>
                </div>
                <div className="relative md:col-span-2 md:text-right text-sm tracking-wider uppercase opacity-60 self-center" style={{ fontFamily: "Inter, sans-serif" }}>
                  {entry.concertCount} Konzerte →
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
