"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, concerts, reviews } from "@/lib/content";
import { BrushHighlight, PaintedCircle } from "@/components/BrushHighlight";

export default function OpusHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const next = concerts[0];

  return (
    <main>
      {/* HERO */}
      <section ref={heroRef} className="relative px-6 md:px-10 pt-16 md:pt-24 pb-28 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <PaintedCircle color="yellow" size={36}>
                <span className="text-[11px] font-semibold tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>01</span>
              </PaintedCircle>
              <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                Saison 2025 / 2026
              </div>
            </div>
            <h1 className="text-[13vw] md:text-[8.5vw] leading-[0.9] tracking-[-0.025em] text-[#0B0B0D]">
              Klassik.
              <br />
              <em className="italic font-normal block mt-1" style={{ fontFamily: "Instrument Serif, serif" }}>
                Aber{" "}
                <BrushHighlight color="yellow" tilt={-3} delay={0.4}>
                  lebendig.
                </BrushHighlight>
              </em>
            </h1>
            <p className="mt-10 max-w-lg text-[#0B0B0D]/80 text-lg md:text-xl leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
              Vierunddreißig junge Musiker:innen. Sechs Konzerte pro Saison. Und ein Klang, der
              weder altbacken noch oberflächlich ist — sondern genau so, wie gute Musik heute
              klingen sollte.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
              <Link
                href="/opus/termine"
                className="group inline-flex items-center gap-3 text-sm tracking-wide uppercase px-7 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red transition-colors relative"
                style={{ borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}
              >
                Konzerte ansehen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/opus/ueber-uns" className="text-sm underline underline-offset-[6px] decoration-jko-red decoration-2 hover:decoration-jko-blue transition-colors">
                Das Ensemble kennenlernen
              </Link>
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={images.church} alt="JKO" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 40vw" />
              {/* Color corner accents */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 left-0 h-2 bg-jko-yellow origin-left"
                style={{ width: "60%" }}
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 right-0 w-2 bg-jko-red origin-bottom"
                style={{ height: "50%" }}
              />
            </div>
            {/* Floating caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5 }}
              className="absolute -bottom-3 -left-3 bg-[#F4EDDE] px-4 py-2 text-[11px] tracking-[0.25em] uppercase border border-[#0B0B0D]/15"
              style={{ fontFamily: "Inter, sans-serif", borderRadius: "20px 8px 22px 8px" }}
            >
              Stiftskirche · Sommer '25
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE — composers */}
      <section className="relative border-y border-[#0B0B0D]/15 overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap py-8 text-4xl md:text-6xl text-[#0B0B0D]"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              Mozart
              <span className="inline-block w-3 h-3 rounded-full bg-jko-yellow" />
              <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>Mendelssohn</em>
              <span className="inline-block w-3 h-3 rounded-full bg-jko-red" />
              Dvořák
              <span className="inline-block w-3 h-3 rounded-full bg-jko-blue" />
              <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>Piazzolla</em>
              <span className="inline-block w-3 h-3 rounded-full bg-jko-yellow" />
              Bach
              <span className="inline-block w-3 h-3 rounded-full bg-jko-red" />
              <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>Tschaikowsky</em>
              <span className="inline-block w-3 h-3 rounded-full bg-jko-blue" />
            </span>
          ))}
        </motion.div>
      </section>

      {/* NEXT CONCERT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-28">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <PaintedCircle color="red" size={36}>
                <span className="text-[11px] font-semibold tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>02</span>
              </PaintedCircle>
              <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                Nächstes Konzert
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Im{" "}
              <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
                <BrushHighlight color="red" tilt={-4} delay={0.2}>Juni</BrushHighlight>
              </em>
              ,
              <br />
              in der{" "}
              <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>Stiftskirche</em>.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="text-sm tracking-[0.25em] uppercase text-jko-red mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              {next.dateLabel} · {next.time} Uhr
            </div>
            <h3 className="text-4xl md:text-5xl mb-5 leading-snug">{next.title}</h3>
            <ul className="space-y-2 text-[#0B0B0D]/85 italic text-xl" style={{ fontFamily: "Instrument Serif, serif" }}>
              {next.program.map((p, i) => (
                <li key={p} className="flex items-start gap-3">
                  <span className={`inline-block w-2 h-2 rounded-full mt-3 shrink-0 ${i % 3 === 0 ? "bg-jko-yellow" : i % 3 === 1 ? "bg-jko-red" : "bg-jko-blue"}`} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
              <Link
                href="/opus/termine"
                className="text-sm uppercase tracking-wide px-6 py-3.5 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-blue transition"
                style={{ borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}
              >
                Anmelden →
              </Link>
              <Link
                href="/opus/termine"
                className="text-sm uppercase tracking-wide px-6 py-3.5 border-2 border-[#0B0B0D] hover:bg-jko-yellow transition"
                style={{ borderRadius: "50% 50% 50% 50% / 55% 45% 55% 45%" }}
              >
                Alle Termine
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLORED PULLQUOTE / TRIPTYCH */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 aspect-[3/4] relative overflow-hidden"
          >
            <Image src={images.courtyard} alt="Schlosshof" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            <div className="absolute top-0 right-0 w-2 h-[40%] bg-jko-yellow" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-7 md:pt-20"
          >
            <div className="text-6xl leading-none text-jko-red mb-4" style={{ fontFamily: "Instrument Serif, serif" }}>„</div>
            <p className="text-3xl md:text-4xl leading-[1.25] italic" style={{ fontFamily: "Instrument Serif, serif" }}>
              Das JKO spielte Mendelssohn mit einer{" "}
              <BrushHighlight color="yellow" tilt={-2} delay={0.3}>Strahlkraft</BrushHighlight>
              , wie man sie in dieser Region{" "}
              <BrushHighlight color="blue" tilt={2} delay={0.6}>lange nicht</BrushHighlight>
              {" "}gehört hat.
            </p>
            <footer className="mt-6 text-sm tracking-[0.2em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
              — Fränkische Nachrichten · M. Hartmann
            </footer>

            <div className="mt-16 relative aspect-[5/3] overflow-hidden">
              <Image src={images.aerial} alt="Orchester von oben" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute bottom-0 left-0 h-2 w-[50%] bg-jko-blue" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DROP CAP PARAGRAPH */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6 md:col-start-4">
            <div className="flex items-center gap-4 mb-8">
              <PaintedCircle color="blue" size={36}>
                <span className="text-[11px] font-semibold tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>03</span>
              </PaintedCircle>
              <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                Wer wir sind
              </div>
            </div>
            <p className="text-2xl md:text-3xl leading-[1.35] text-[#0B0B0D]">
              <span className="text-7xl md:text-8xl float-left mr-3 -mt-2 leading-none text-jko-red" style={{ fontFamily: "Instrument Serif, serif" }}>
                V
              </span>
              ierunddreißig Musikerinnen und Musiker aus Tauberfranken. Ein Dirigent.{" "}
              <em className="italic text-jko-blue" style={{ fontFamily: "Instrument Serif, serif" }}>Sechs Konzerte</em> pro Saison. Und ein
              Klang, den die Kritik seit Jahren als{" "}
              <BrushHighlight color="yellow" tilt={-1} delay={0.3}>
                „atemberaubend jung und reif zugleich"
              </BrushHighlight>
              {" "}beschreibt.
            </p>
            <div className="mt-10">
              <Link href="/opus/ueber-uns" className="text-sm uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-jko-red decoration-2 hover:decoration-jko-blue transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                → Das Ensemble kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 text-center relative">
        <div className="flex items-center justify-center gap-4 mb-8">
          <PaintedCircle color="yellow" size={36}>
            <span className="text-[11px] font-semibold tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>04</span>
          </PaintedCircle>
          <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
            Werden Sie Teil
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl leading-[0.95]">
          Spielen Sie mit.
          <br />
          <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
            Oder{" "}
            <BrushHighlight color="red" tilt={-3} delay={0.3}>tragen</BrushHighlight>
            {" "}Sie uns.
          </em>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center" style={{ fontFamily: "Inter, sans-serif" }}>
          <Link
            href="/opus/mitglied"
            className="text-sm uppercase tracking-wide px-7 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red transition"
            style={{ borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}
          >
            Mitglied werden
          </Link>
          <Link
            href="/opus/mitglied"
            className="text-sm uppercase tracking-wide px-7 py-4 border-2 border-[#0B0B0D] hover:bg-jko-yellow transition"
            style={{ borderRadius: "50% 50% 55% 45% / 50% 50% 50% 50%" }}
          >
            Jetzt spenden
          </Link>
        </div>
      </section>
    </main>
  );
}
