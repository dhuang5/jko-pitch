"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, orchestra, members } from "@/lib/content";

export default function NoirUeberUns() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
      <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-6">Über uns</div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-[11vw] leading-[0.88] uppercase tracking-tight"
        style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}
      >
        Das <span className="text-[#D4A853] italic font-normal" style={{ fontFamily: "Bodoni Moda, serif" }}>Ensemble</span>.
      </motion.h1>

      <div className="grid md:grid-cols-12 gap-10 mt-20">
        <div className="md:col-span-6 aspect-[4/5] relative overflow-hidden">
          <Image src={images.church} alt="Orchester" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
        </div>
        <div className="md:col-span-6 space-y-6 text-lg leading-relaxed text-white/85">
          <p className="text-2xl leading-snug text-white">{orchestra.description}</p>
          <p>{orchestra.mission}</p>
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-8">
            <div>
              <div className="text-6xl text-[#D4A853]" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>{members.total}</div>
              <div className="text-xs tracking-[0.3em] uppercase text-white/50 mt-1">Musiker:innen</div>
            </div>
            <div>
              <div className="text-6xl text-[#D4A853]" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>{new Date().getFullYear() - orchestra.founded}+</div>
              <div className="text-xs tracking-[0.3em] uppercase text-white/50 mt-1">Jahre Bühne</div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-32">
        <div className="text-xs tracking-[0.4em] uppercase text-[#D4A853] mb-8">Besetzung</div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-6 border-t border-white/15 pt-10">
          {members.sections.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex items-baseline justify-between border-b border-white/10 pb-4"
            >
              <span className="text-2xl uppercase tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 700 }}>{s.name}</span>
              <span className="text-[#D4A853] text-3xl tabular-nums" style={{ fontFamily: "Bodoni Moda, serif" }}>{s.count}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
