"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, concerts, reviews } from "@/lib/content";

export default function AuroraHome() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const next = concerts[0];

  return (
    <main className="pt-8">
      {/* HERO */}
      <section ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-32 relative">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-xs font-medium text-[#6B5BFF] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#6B5BFF] animate-pulse" />
            Saison 2025 / 26 · Jetzt bewerben
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10vw] leading-[0.95] tracking-[-0.04em] font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
            Musik, die
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF 0%, #FF8FB8 50%, #FFBE5B 100%)" }}
            >
              beweglich bleibt.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#0B0B12]/70 max-w-2xl mx-auto leading-relaxed">
            Wir sind vierunddreißig junge Musikerinnen und Musiker aus Tauberfranken. Wir spielen
            Klassik — aber wir spielen sie wie heute.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              href="/aurora/termine"
              className="px-7 py-4 rounded-full text-white font-medium text-sm shadow-[0_8px_24px_rgba(107,91,255,0.35)] hover:shadow-[0_12px_36px_rgba(107,91,255,0.5)] hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}
            >
              Nächstes Konzert ansehen
            </Link>
            <Link
              href="/aurora/ueber-uns"
              className="px-7 py-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 font-medium text-sm hover:bg-white transition-all"
            >
              Mehr erfahren
            </Link>
          </div>
        </motion.div>

        {/* Floating image card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(107,91,255,0.4)] border border-white/60">
            <Image src={images.aerial} alt="JKO" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 1024px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Orchester in Formation</div>
                <div className="text-2xl font-semibold mt-1">Sommer 2025, Schlosshof</div>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-sm">
                34 Musiker:innen
              </div>
            </div>
          </div>
          {/* Decorative orbs */}
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-60" style={{ background: "radial-gradient(circle, #B79BFF, transparent)" }} />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-2xl opacity-60" style={{ background: "radial-gradient(circle, #FFB4E0, transparent)" }} />
        </motion.div>
      </section>

      {/* NEXT CONCERT CARD */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12 grid md:grid-cols-12 gap-10 items-center"
        >
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B5BFF]/10 text-[#6B5BFF] text-xs font-medium mb-4">
              Nächstes Konzert
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              {next.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#0B0B12]/70">
              <div className="flex items-center gap-2">📅 {next.dateLabel}</div>
              <div className="flex items-center gap-2">🕐 {next.time} Uhr</div>
              <div className="flex items-center gap-2">📍 {next.venue}, {next.city}</div>
            </div>
            <ul className="mt-6 space-y-2 text-[#0B0B12]/80">
              {next.program.map((p) => <li key={p} className="flex gap-3"><span className="text-[#6B5BFF]">♪</span>{p}</li>)}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link
                href="/aurora/termine"
                className="px-6 py-3 rounded-full text-white text-sm font-medium shadow-[0_6px_20px_rgba(107,91,255,0.35)] hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}
              >
                Reservieren
              </Link>
              <Link
                href="/aurora/termine"
                className="px-6 py-3 rounded-full border border-[#0B0B12]/15 text-sm font-medium hover:bg-white transition-all"
              >
                Alle Termine
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image src={images.church} alt="JKO" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
        </motion.div>
      </section>

      {/* FEATURE ROW */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "34 junge Stimmen", body: "Schüler:innen, Studierende, Profis — vereint im Ensemble.", icon: "♪" },
            { title: "6 Konzerte / Saison", body: "Von Barock bis Zeitgenössisch. In Kirchen, Schlössern, Festivals.", icon: "♩" },
            { title: "17 Jahre Haltung", body: "Seit 2008 stehen wir für Klassik, die nicht verstaubt.", icon: "♬" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(107,91,255,0.2)] transition-all"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl mb-5" style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-[#0B0B12]/70 mt-2 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEW */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-28 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-[#6B5BFF] text-sm font-medium tracking-wider uppercase mb-6">Pressestimmen</div>
          <p className="text-3xl md:text-5xl leading-[1.2] font-medium tracking-tight">
            „{reviews[0].quote}“
          </p>
          <footer className="mt-8 text-sm text-[#0B0B12]/60">
            {reviews[0].publication} · {reviews[0].author}
          </footer>
        </motion.blockquote>
      </section>
    </main>
  );
}
