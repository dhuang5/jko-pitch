"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/content";
import { BrushHighlight, PaintedCircle } from "@/components/BrushHighlight";

const accents = ["yellow", "red", "blue", "yellow"] as const;

export default function OpusGrauKritiken() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="flex items-center gap-4 mb-6">
        <PaintedCircle color="yellow" size={32} />
        <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
          Pressekritiken
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Was über uns<br />
        <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
          <BrushHighlight color="red" tilt={-3} delay={0.4}>geschrieben</BrushHighlight>
          {" "}wurde.
        </em>
      </h1>

      <div className="mt-20 space-y-20 max-w-4xl">
        {reviews.map((r, i) => {
          const color = accents[i % accents.length];
          return (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="relative pl-10 md:pl-14"
            >
              <div className={`absolute left-0 top-0 h-full w-1 rounded-full ${color === "yellow" ? "bg-jko-yellow" : color === "red" ? "bg-jko-red" : "bg-jko-blue"}`} />
              <div className={`text-7xl leading-none -mt-4 ${color === "yellow" ? "text-jko-yellow" : color === "red" ? "text-jko-red" : "text-jko-blue"}`} style={{ fontFamily: "Instrument Serif, serif" }}>
                „
              </div>
              <p className="text-3xl md:text-4xl leading-[1.3] italic -mt-8" style={{ fontFamily: "Instrument Serif, serif" }}>
                {r.quote}"
              </p>
              <footer className="mt-5 text-sm tracking-[0.2em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                {r.publication} · {r.author ?? "Redaktion"} · {r.date}
              </footer>
            </motion.blockquote>
          );
        })}
      </div>
    </main>
  );
}
