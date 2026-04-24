"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images, concerts, reviews } from "@/lib/content";

export default function BauhausHome() {
  const next = concerts[0];
  return (
    <main>
      {/* HERO — color blocks */}
      <section className="relative border-b-2 border-[#0B0B0D]">
        <div className="grid md:grid-cols-12 min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative p-6 md:p-16 flex flex-col justify-between bg-[#FAF7F2] border-r-2 border-[#0B0B0D]"
          >
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-bold">
              <span className="w-8 h-0.5 bg-jko-red" />
              Saison 25 / 26
            </div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14vw] md:text-[12vw] leading-[0.82] tracking-[-0.04em] font-black"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}
              >
                Klang
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FAF7F2]">in Farbe.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-jko-red origin-left"
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-8 max-w-lg text-lg leading-relaxed"
              >
                Wir spielen Mozart, Bach und Piazzolla — und wir meinen es ernst mit beidem: mit dem
                Respekt vor der Musik und der Freude, sie zu spielen.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <Link href="/bauhaus/termine" className="px-6 py-3.5 text-sm font-semibold bg-[#0B0B0D] text-[#FAF7F2] hover:bg-jko-red transition">
                  Nächstes Konzert →
                </Link>
                <Link href="/bauhaus/ueber-uns" className="px-6 py-3.5 text-sm font-semibold border-2 border-[#0B0B0D] hover:bg-[#0B0B0D] hover:text-[#FAF7F2] transition">
                  Über uns
                </Link>
              </motion.div>
            </div>
            <div className="flex items-center gap-4 text-xs tracking-widest uppercase font-medium">
              <span>Tauberfranken</span>
              <span className="w-6 h-0.5 bg-jko-yellow" />
              <span>seit 2008</span>
              <span className="w-6 h-0.5 bg-jko-blue" />
              <span>34 Musiker:innen</span>
            </div>
          </motion.div>
          <div className="md:col-span-4 grid grid-rows-3">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-jko-yellow border-b-2 border-[#0B0B0D] relative overflow-hidden origin-top"
            >
              <div className="absolute inset-0 p-6 flex items-end">
                <div className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#0B0B0D]">
                  Gelb = Energie
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-jko-red border-b-2 border-[#0B0B0D] relative origin-top"
            >
              <div className="absolute inset-0 p-6 flex items-end">
                <div className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#FAF7F2]">
                  Rot = Leidenschaft
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-jko-blue relative origin-top"
            >
              <div className="absolute inset-0 p-6 flex items-end">
                <div className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#FAF7F2]">
                  Blau = Tiefe
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-b-2 border-[#0B0B0D] bg-[#0B0B0D] text-[#FAF7F2] overflow-hidden py-5">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap text-3xl md:text-5xl font-black tracking-tight"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>Mozart</span>
              <span className="w-3 h-3 rounded-full bg-jko-yellow" />
              <span>Mendelssohn</span>
              <span className="w-3 h-3 rounded-full bg-jko-red" />
              <span>Dvořák</span>
              <span className="w-3 h-3 rounded-full bg-jko-blue" />
              <span>Piazzolla</span>
              <span className="w-3 h-3 rounded-full bg-jko-yellow" />
              <span>Bach</span>
              <span className="w-3 h-3 rounded-full bg-jko-red" />
              <span>Tschaikowsky</span>
              <span className="w-3 h-3 rounded-full bg-jko-blue" />
            </span>
          ))}
        </motion.div>
      </section>

      {/* NEXT CONCERT */}
      <section className="border-b-2 border-[#0B0B0D]">
        <div className="grid md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 p-6 md:p-16 bg-jko-yellow border-r-2 border-[#0B0B0D] relative"
          >
            <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">01 / Nächstes Konzert</div>
            <div className="text-[14vw] md:text-[7vw] leading-[0.85] font-black tracking-tight" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
              27.06
            </div>
            <div className="text-2xl mt-2 font-medium">26 · 19:30 Uhr</div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold">
              {next.venue}, {next.city}
              <span className="inline-block w-6 h-px bg-[#0B0B0D]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 p-6 md:p-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
              {next.title}
            </h2>
            <ul className="mt-8 space-y-4">
              {next.program.map((p, i) => (
                <li key={p} className="flex gap-4 items-start">
                  <span className={`mt-2 inline-block w-3 h-3 rounded-full ${i % 3 === 0 ? "bg-jko-yellow" : i % 3 === 1 ? "bg-jko-red" : "bg-jko-blue"}`} />
                  <span className="text-lg">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/bauhaus/termine" className="px-6 py-3.5 text-sm font-semibold bg-[#0B0B0D] text-[#FAF7F2] hover:bg-jko-blue transition">
                Anmelden →
              </Link>
              <Link href="/bauhaus/termine" className="px-6 py-3.5 text-sm font-semibold border-2 border-[#0B0B0D] hover:bg-jko-yellow transition">
                Alle Termine
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY - bold grid */}
      <section className="border-b-2 border-[#0B0B0D] grid md:grid-cols-3">
        {[images.church, images.courtyard, images.aerial].map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`relative aspect-[3/4] ${i < 2 ? "border-r-2 border-[#0B0B0D]" : ""} overflow-hidden group`}
          >
            <Image src={src} alt="JKO" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold ${
              i === 0 ? "bg-jko-yellow" : i === 1 ? "bg-jko-red text-[#FAF7F2]" : "bg-jko-blue text-[#FAF7F2]"
            }`}>
              {["Stiftskirche", "Schlosshof", "Von oben"][i]}
            </div>
          </motion.div>
        ))}
      </section>

      {/* REVIEW */}
      <section className="py-28 px-6 md:px-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] uppercase font-bold mb-8">Pressekritik</div>
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-3xl md:text-5xl leading-[1.15] font-black tracking-tight" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 700 }}>
              <span className="text-jko-red">„</span>
              {reviews[0].quote}
              <span className="text-jko-blue">“</span>
            </p>
            <footer className="mt-8 text-sm tracking-[0.2em] uppercase font-bold">
              — {reviews[0].publication}
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </main>
  );
}
