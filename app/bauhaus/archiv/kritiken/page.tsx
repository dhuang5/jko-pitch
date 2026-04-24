"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/content";

const bgs = ["bg-jko-yellow", "bg-jko-red text-[#FAF7F2]", "bg-jko-blue text-[#FAF7F2]", "bg-[#0B0B0D] text-[#FAF7F2]"];

export default function BauhausKritiken() {
  return (
    <main>
      <section className="border-b-2 border-[#0B0B0D] p-6 md:p-16">
        <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">Pressekritiken</div>
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em] font-black" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
          Lies selbst.
        </h1>
      </section>
      <section className="grid md:grid-cols-2">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.15 }}
            className={`${bgs[i % 4]} p-10 md:p-16 ${i % 2 === 0 ? "md:border-r-2" : ""} ${i < reviews.length - 2 ? "border-b-2" : ""} border-[#0B0B0D]`}
          >
            <div className="text-6xl leading-none opacity-40" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
              „
            </div>
            <p className="text-2xl md:text-3xl leading-tight font-bold -mt-4" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 700 }}>
              {r.quote}
            </p>
            <footer className="mt-8 text-xs uppercase tracking-[0.25em] font-bold opacity-80">
              {r.publication} · {r.author ?? "Redaktion"} · {r.date}
            </footer>
          </motion.blockquote>
        ))}
      </section>
    </main>
  );
}
