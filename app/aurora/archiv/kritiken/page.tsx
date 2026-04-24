"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/content";

export default function AuroraKritiken() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-xs font-medium text-[#6B5BFF] mb-6">
          Pressekritiken
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold"
        >
          Was über uns{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8)" }}>
            geschrieben wird.
          </span>
        </motion.h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 p-10 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]"
          >
            <div className="text-6xl leading-none bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8)", fontFamily: "Fraunces, serif" }}>
              „
            </div>
            <p className="text-2xl md:text-3xl leading-[1.35] font-medium -mt-6">
              {r.quote}
            </p>
            <footer className="mt-6 text-sm text-[#0B0B12]/60 font-medium">
              {r.publication} · {r.author ?? "Redaktion"} · {r.date}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </main>
  );
}
