"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, orchestra, members } from "@/lib/content";

export default function AuroraUeberUns() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-xs font-medium text-[#6B5BFF] mb-6">
          Über das JKO
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold"
        >
          Ein Orchester, das{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8)" }}>
            jung bleibt.
          </span>
        </motion.h1>
        <p className="mt-8 text-lg md:text-xl text-[#0B0B12]/70 leading-relaxed">
          {orchestra.description}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-20 relative aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(107,91,255,0.3)] border border-white/60"
      >
        <Image src={images.courtyard} alt="JKO" fill className="object-cover" sizes="100vw" />
      </motion.div>

      <section className="mt-24 grid md:grid-cols-4 gap-4">
        {[
          { value: members.total, label: "Musiker:innen" },
          { value: `${new Date().getFullYear() - orchestra.founded}+`, label: "Jahre Bühne" },
          { value: "86", label: "Konzerte gespielt" },
          { value: "12", label: "Instrumente" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 p-8 text-center hover:-translate-y-1 transition-transform"
          >
            <div className="text-5xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}>
              {s.value}
            </div>
            <div className="mt-3 text-sm text-[#0B0B12]/60">{s.label}</div>
          </motion.div>
        ))}
      </section>

      <section className="mt-24">
        <div className="text-center mb-12">
          <div className="text-[#6B5BFF] text-sm font-medium uppercase tracking-wider mb-3">Besetzung</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Wer spielt was.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {members.sections.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 p-6 flex items-center justify-between hover:border-[#6B5BFF]/40 transition"
            >
              <div>
                <div className="font-semibold text-lg">{s.name}</div>
                <div className="text-xs text-[#0B0B12]/50 mt-0.5">Stimme</div>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}>
                {s.count}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-24 rounded-3xl overflow-hidden relative p-10 md:p-16 text-white"
        style={{ background: "linear-gradient(135deg, #6B5BFF 0%, #B79BFF 50%, #FFB4E0 100%)" }}
      >
        <div className="max-w-2xl relative z-10">
          <div className="text-xs uppercase tracking-widest opacity-80 mb-3">Unser Anspruch</div>
          <p className="text-2xl md:text-3xl leading-snug font-medium">
            „{orchestra.mission}“
          </p>
        </div>
      </section>
    </main>
  );
}
