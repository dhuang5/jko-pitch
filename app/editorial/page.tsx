"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images, concerts, reviews, orchestra } from "@/lib/content";

export default function EditorialHome() {
  const next = concerts[0];
  return (
    <main>
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-24 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Saison 2025 / 2026 — Ausgabe N°17
            </div>
            <h1 className="text-[14vw] md:text-[9vw] leading-[0.88] tracking-[-0.02em] text-[#0B0B0D]">
              Jung.
              <br />
              <em className="italic font-normal text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
                Ungewöhnlich.
              </em>
              <br />
              Klassisch.
            </h1>
            <p className="mt-8 max-w-lg text-[#0B0B0D]/75 text-base md:text-lg leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
              Das Junge Kammerorchester Tauberfranken macht klassische Musik so, wie sie heute
              klingen sollte — kompromisslos musikalisch, frei von Staub, mit offenen Ohren für das,
              was war, und mit dem Mut für das, was kommt.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
              <Link
                href="/editorial/termine"
                className="group inline-flex items-center gap-3 text-sm tracking-wide uppercase px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-[#6E2C2C] transition-colors"
              >
                Konzerte ansehen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/editorial/ueber-uns"
                className="text-sm underline underline-offset-4 decoration-[#6E2C2C]/50 hover:decoration-[#6E2C2C]"
              >
                Mehr über uns
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative aspect-[4/5] overflow-hidden"
          >
            <Image src={images.church} alt="JKO" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 40vw" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[11px] tracking-widest uppercase text-white/90" style={{ fontFamily: "Inter, sans-serif" }}>
              <span>Stiftskirche · Sommer 2024</span>
              <span>01</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PULLQUOTE / MARQUEE */}
      <section className="border-y border-[#0B0B0D]/15 overflow-hidden bg-[#F4EDDE]">
        <motion.div
          initial={{ x: "10%" }}
          animate={{ x: "-90%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap py-6 text-3xl md:text-5xl text-[#0B0B0D]/80"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-20">
              Mozart
              <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
                Mendelssohn
              </em>
              · Dvořák · <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>Piazzolla</em> · Bach
              · Tschaikowsky ·
            </span>
          ))}
        </motion.div>
      </section>

      {/* NEXT CONCERT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              N° 02 — Nächstes Konzert
            </div>
            <h2 className="text-5xl md:text-6xl leading-[1] tracking-tight">
              Im <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>Juni</em>,
              <br />
              in der <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>Stiftskirche</em>.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-6">
            <div className="text-sm uppercase tracking-[0.25em] text-[#0B0B0D]/60 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              {next.dateLabel} · {next.time} Uhr
            </div>
            <h3 className="text-3xl md:text-4xl mb-4 leading-snug">{next.title}</h3>
            <ul className="space-y-1 text-[#0B0B0D]/80 italic text-lg" style={{ fontFamily: "Instrument Serif, serif" }}>
              {next.program.map((p) => <li key={p}>— {p}</li>)}
            </ul>
            <div className="mt-6 flex gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
              <Link href="/editorial/termine" className="text-sm uppercase tracking-wide px-5 py-3 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-[#6E2C2C] transition">Platz reservieren</Link>
              <Link href="/editorial/termine" className="text-sm uppercase tracking-wide px-5 py-3 border border-[#0B0B0D] hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition">Programm</Link>
            </div>
          </div>
        </div>
      </section>

      {/* THREE IMAGE EDITORIAL */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 aspect-[3/4] relative overflow-hidden"
          >
            <Image src={images.courtyard} alt="Orchester im Schlosshof" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 aspect-[4/3] relative overflow-hidden md:mt-24"
          >
            <Image src={images.aerial} alt="Orchester von oben" fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-12 gap-10 mt-10">
          <p className="md:col-span-6 md:col-start-4 text-2xl md:text-3xl leading-tight text-[#0B0B0D]">
            <span className="text-5xl md:text-6xl float-left mr-3 -mt-1 leading-none text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
              V
            </span>
            ierunddreißig Musikerinnen und Musiker. Ein Dirigent. Sechs Konzerte pro Saison. Und ein
            Klang, den die Kritik seit Jahren als <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>„atemberaubend jung und reif zugleich“</em> beschreibt.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#0B0B0D] text-[#F4EDDE] py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-[11px] tracking-[0.4em] uppercase text-[#F4EDDE]/50 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            N° 03 — Kritikerstimmen
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {reviews.slice(0, 2).map((r) => (
              <motion.blockquote
                key={r.publication}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <p className="text-2xl md:text-3xl leading-[1.3] italic" style={{ fontFamily: "Instrument Serif, serif" }}>
                  „{r.quote}“
                </p>
                <footer className="mt-6 text-sm tracking-wider uppercase text-[#F4EDDE]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                  {r.publication} · {r.author ?? "Redaktion"}
                </footer>
              </motion.blockquote>
            ))}
          </div>
          <div className="mt-12" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link href="/editorial/archiv" className="text-sm uppercase tracking-widest underline underline-offset-4 hover:text-[#F7C800]">Alle Kritiken im Archiv →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 text-center">
        <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          N° 04 — Werden Sie Teil
        </div>
        <h2 className="text-5xl md:text-7xl leading-[0.95]">
          Spielen Sie mit.
          <br />
          <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
            Oder tragen Sie uns.
          </em>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center" style={{ fontFamily: "Inter, sans-serif" }}>
          <Link href="/editorial/mitglied" className="text-sm uppercase tracking-wide px-6 py-4 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-[#6E2C2C] transition">
            Mitglied werden
          </Link>
          <Link href="/editorial/mitglied" className="text-sm uppercase tracking-wide px-6 py-4 border border-[#0B0B0D] hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition">
            Jetzt spenden
          </Link>
        </div>
      </section>
    </main>
  );
}
