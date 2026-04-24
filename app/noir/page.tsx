"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, concerts, reviews } from "@/lib/content";

export default function NoirHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const next = concerts[0];

  return (
    <main>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100vh] overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image src={images.aerial} alt="JKO" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/70 via-[#0A0A0B]/40 to-[#0A0A0B]" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,11,0.8) 85%)" }} />
        </motion.div>
        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs uppercase text-[#D4A853] mb-8"
          >
            Saison 2025 / 2026 · Premiere
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18vw] md:text-[15vw] leading-[0.85] tracking-tight uppercase"
            style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}
          >
            <span className="block">Ton</span>
            <span className="block text-[#D4A853] italic font-light" style={{ fontFamily: "Bodoni Moda, serif" }}>
              für Ton.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 max-w-xl text-white/70 text-lg"
          >
            Ein Orchester aus vierunddreißig jungen Stimmen. Eine Mission: Klassik, die unter die Haut geht.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-10 flex gap-4"
          >
            <Link href="/noir/termine" className="px-7 py-4 text-xs tracking-[0.25em] uppercase bg-[#D4A853] text-[#0A0A0B] hover:bg-white transition font-semibold">
              Nächstes Konzert
            </Link>
            <Link href="/noir/ueber-uns" className="px-7 py-4 text-xs tracking-[0.25em] uppercase border border-white/30 hover:border-[#D4A853] hover:text-[#D4A853] transition">
              Das Ensemble
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/50"
        >
          ↓ Scroll
        </motion.div>
      </section>

      {/* NEXT CONCERT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-6">Nächstes Konzert</div>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <h2 className="text-6xl md:text-8xl leading-[0.9] uppercase tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
                {next.title.split(" — ")[0]}
                <br />
                <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>
                  {next.title.split(" — ")[1]}
                </span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <div><div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">Datum</div><div className="text-lg">{next.dateLabel}</div></div>
                <div><div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">Einlass</div><div className="text-lg">{next.time} Uhr</div></div>
                <div><div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">Ort</div><div className="text-lg">{next.venue}, {next.city}</div></div>
              </div>
            </div>
            <div className="md:col-span-5 bg-white/[0.03] border border-white/10 p-10">
              <div className="text-xs tracking-[0.3em] uppercase text-[#D4A853] mb-4">Programm</div>
              <ul className="space-y-3">
                {next.program.map((p, i) => (
                  <li key={p} className="flex gap-4 text-base border-b border-white/10 pb-3 last:border-0">
                    <span className="text-[#D4A853] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-white/85">{p}</span>
                  </li>
                ))}
              </ul>
              <Link href="/noir/termine" className="mt-8 block text-center px-6 py-4 text-xs tracking-[0.25em] uppercase bg-[#D4A853] text-[#0A0A0B] hover:bg-white transition font-semibold">
                Jetzt reservieren
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GALLERY / MONTAGE */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#0A0A0B] to-[#14140F]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[images.church, images.courtyard, images.aerial].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden ${i === 1 ? "md:mt-20" : ""}`}
              >
                <div className="aspect-[3/4] relative">
                  <Image src={src} alt="JKO" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s]" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 py-32 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-10">Pressestimmen</div>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl md:text-5xl leading-[1.25] italic" style={{ fontFamily: "Bodoni Moda, serif" }}>
            „{reviews[0].quote}“
          </p>
          <footer className="mt-8 text-xs tracking-[0.3em] uppercase text-white/60">
            — {reviews[0].publication} · {reviews[0].author}
          </footer>
        </motion.blockquote>
      </section>
    </main>
  );
}
