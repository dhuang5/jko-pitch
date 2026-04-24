"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/content";

export default function Kritiken() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
        Pressekritiken
      </div>
      <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Was über uns<br />
        <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
          geschrieben wurde.
        </em>
      </h1>

      <div className="mt-20 space-y-16 max-w-4xl">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="border-l-2 border-[#6E2C2C] pl-8 md:pl-12"
          >
            <p className="text-3xl md:text-4xl leading-[1.3] italic" style={{ fontFamily: "Instrument Serif, serif" }}>
              „{r.quote}“
            </p>
            <footer className="mt-5 text-sm tracking-[0.2em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
              {r.publication} · {r.author ?? "Redaktion"} · {r.date}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </main>
  );
}
