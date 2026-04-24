"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images, concerts, reviews } from "@/lib/content";
import { CurvedText } from "@/components/CurvedText";

export default function AfficheHome() {
  const next = concerts[0];

  return (
    <main className="overflow-x-hidden">
      {/* POSTER HERO */}
      <section className="relative max-w-[1500px] mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Vertical EINTRITT FREI */}
          <div className="hidden md:flex md:col-span-1 flex-col justify-between">
            <div />
            <div className="rotate-180 text-jko-blue text-3xl md:text-4xl leading-[0.9] font-bold tracking-tight" style={{ fontFamily: "Anton, sans-serif", writingMode: "vertical-rl" }}>
              EINTRITT FREI
            </div>
          </div>

          {/* MAIN TITLE BLOCK */}
          <div className="md:col-span-11 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-bold text-[#0B0B0D] mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-jko-red" />
              Junges Kammerorchester Tauber-Franken
            </motion.div>

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-[18vw] md:text-[13vw] leading-[0.82] text-jko-red"
                style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}
              >
                KLASSIK
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="flex items-baseline gap-4 md:gap-8 mt-2"
              >
                <span className="text-5xl md:text-7xl font-bold tracking-tight text-[#0B0B0D]" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
                  MEET
                </span>
                <span className="text-[18vw] md:text-[13vw] leading-[0.88] text-jko-blue -translate-y-2" style={{ fontFamily: "Caveat Brush, cursive" }}>
                  jetzt.
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Circular composition + curved text */}
        <div className="mt-20 grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative aspect-square max-w-[620px] mx-auto w-full"
          >
            {/* Curved text ring */}
            <CurvedText
              text="Junges Kammerorchester Tauber-Franken"
              color="#1F49B8"
              radius={280}
              fontSize={22}
              duration={80}
            />
            {/* Circle mask for image */}
            <div className="absolute inset-[12%] rounded-full overflow-hidden border-4 border-[#F4EDDE] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">
              <Image src={images.aerial} alt="JKO aus der Vogelperspektive" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            {/* Corner stamps */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: -8 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-20 h-20 rounded-full bg-jko-yellow flex flex-col items-center justify-center text-[9px] font-bold uppercase tracking-wider text-[#0B0B0D] text-center leading-tight shadow-lg"
            >
              Neue<br />Saison<br /><span className="text-sm" style={{ fontFamily: "Anton, sans-serif" }}>25/26</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="md:col-span-5 space-y-6"
          >
            <p className="text-xl md:text-2xl leading-[1.4]">
              Vierunddreißig junge Musiker:innen.
              Sechs Konzerte. Eine <span className="text-jko-blue text-3xl md:text-4xl" style={{ fontFamily: "Caveat Brush, cursive" }}>ganze Saison</span> voller Klang zwischen Kirche, Schloss und Stadthalle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/affiche/termine" className="inline-flex items-center gap-2 px-6 py-3.5 bg-jko-red text-[#F4EDDE] font-bold uppercase tracking-wider text-sm hover:bg-[#0B0B0D] transition">
                Konzerte ansehen →
              </Link>
              <Link href="/affiche/ueber-uns" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#0B0B0D] font-bold uppercase tracking-wider text-sm hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition">
                Das Ensemble
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Ticket stubs row */}
        <div className="grid md:grid-cols-3 gap-0 mt-20 border-y-2 border-[#0B0B0D]">
          {concerts.slice(0, 3).map((c, i) => {
            const day = c.dateLabel.split(" ")[0];
            const month = c.dateLabel.split(" ")[1];
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`px-6 py-8 ${i < 2 ? "md:border-r-2 border-[#0B0B0D]" : ""}`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl text-jko-red leading-none" style={{ fontFamily: "Anton, sans-serif" }}>
                    {day.replace(".", "")}
                  </span>
                  <span className="text-2xl font-bold text-[#0B0B0D]" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>
                    {month.replace(".", "").toUpperCase()}
                  </span>
                </div>
                <div className="mt-3 text-sm font-bold tracking-wider uppercase">{c.venue}, {c.city}</div>
                <div className="mt-1 text-[#0B0B0D]/70 text-sm">{c.time} Uhr</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* BIG TYPOGRAPHY STATEMENT */}
      <section className="border-y-2 border-[#0B0B0D] py-16 px-6 md:px-10 overflow-hidden bg-[#F4EDDE]">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex items-baseline gap-8 whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-baseline gap-8">
              <span className="text-[10vw] md:text-[6vw] text-[#0B0B0D] leading-none" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>MOZART</span>
              <span className="text-[10vw] md:text-[6vw] text-jko-blue leading-[0.88]" style={{ fontFamily: "Caveat Brush, cursive" }}>&amp;</span>
              <span className="text-[10vw] md:text-[6vw] text-jko-red leading-none" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>MENDELSSOHN</span>
              <span className="text-[10vw] md:text-[6vw] text-jko-blue leading-[0.88]" style={{ fontFamily: "Caveat Brush, cursive" }}>&amp;</span>
              <span className="text-[10vw] md:text-[6vw] text-[#0B0B0D] leading-none" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>DVOŘÁK</span>
              <span className="text-[10vw] md:text-[6vw] text-jko-blue leading-[0.88]" style={{ fontFamily: "Caveat Brush, cursive" }}>&amp;</span>
              <span className="text-[10vw] md:text-[6vw] text-jko-red leading-none" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>PIAZZOLLA</span>
              <span className="text-[10vw] md:text-[6vw] text-jko-blue leading-[0.88]" style={{ fontFamily: "Caveat Brush, cursive" }}>&amp;</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* NEXT CONCERT AS MINI POSTER */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-24">
        <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-4">
          Nächstes Konzert
        </div>
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h2 className="text-7xl md:text-[8vw] leading-[0.86] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
              MOZART
            </h2>
            <div className="flex items-baseline gap-4 md:gap-6 -mt-2">
              <span className="text-3xl md:text-4xl font-bold text-[#0B0B0D]" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>MEET</span>
              <span className="text-7xl md:text-[8vw] leading-[0.9] text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive" }}>
                Mendelssohn
              </span>
            </div>
            <ul className="mt-10 space-y-2 text-lg">
              {next.program.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-jko-red font-bold">✦</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 bg-[#0B0B0D] text-[#F4EDDE] p-10 relative"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-jko-yellow rounded-full flex flex-col items-center justify-center text-[#0B0B0D] rotate-6 shadow-lg">
              <div className="text-[9px] font-bold uppercase tracking-widest">Anmeldung</div>
              <div className="text-xs font-bold uppercase mt-0.5">offen</div>
            </div>
            <div className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-70 mb-6">Termin</div>
            <div className="text-7xl leading-[0.88] text-jko-red" style={{ fontFamily: "Anton, sans-serif" }}>
              27.06.
            </div>
            <div className="text-2xl font-bold tracking-tight mt-1" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>
              {next.time} UHR
            </div>
            <div className="mt-8 space-y-1">
              <div className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-70">Ort</div>
              <div className="text-xl font-bold">{next.venue}</div>
              <div className="text-base opacity-80">{next.city}</div>
            </div>
            <Link href="/affiche/termine" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-jko-yellow text-[#0B0B0D] font-bold uppercase tracking-wider text-sm hover:bg-[#F4EDDE] transition">
              Platz reservieren →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Review */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 text-center">
        <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-10">Pressestimmen</div>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="text-[8rem] leading-none text-jko-red -mb-12 -mt-6" style={{ fontFamily: "Caveat Brush, cursive" }}>„</div>
          <p className="text-3xl md:text-5xl leading-[1.2] font-bold tracking-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>
            {reviews[0].quote}
          </p>
          <footer className="mt-8 text-2xl text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive" }}>
            — {reviews[0].publication}, {reviews[0].author}
          </footer>
        </motion.blockquote>
      </section>
    </main>
  );
}
