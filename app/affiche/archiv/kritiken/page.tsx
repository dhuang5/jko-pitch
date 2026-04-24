"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/content";

export default function AfficheKritiken() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 md:px-10 pt-16 pb-20">
      <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">Pressekritiken</div>
      <h1>
        <span className="block text-[16vw] md:text-[11vw] leading-[0.82] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
          „WAS MAN
        </span>
        <span className="block text-[12vw] md:text-[8vw] leading-[0.95] text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive" }}>
          über uns sagt"
        </span>
      </h1>

      <div className="mt-20 space-y-20 max-w-4xl">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className={`relative pl-12 md:pl-16`}
          >
            <div className={`absolute left-0 top-2 w-1 h-full ${i % 2 === 0 ? "bg-jko-red" : "bg-jko-blue"}`} />
            <div className={`text-[8rem] leading-none -mt-6 ${i % 2 === 0 ? "text-jko-red" : "text-jko-blue"}`} style={{ fontFamily: "Caveat Brush, cursive" }}>
              „
            </div>
            <p className="text-3xl md:text-4xl leading-[1.2] font-bold tracking-tight -mt-10" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>
              {r.quote}"
            </p>
            <footer className="mt-5 text-2xl text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive" }}>
              — {r.publication} · {r.author ?? "Redaktion"} · {r.date}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </main>
  );
}
