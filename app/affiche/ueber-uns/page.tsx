"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, orchestra, members } from "@/lib/content";
import { CurvedText } from "@/components/CurvedText";

export default function AfficheUeberUns() {
  return (
    <main className="overflow-x-hidden">
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 pt-16 pb-20">
        <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">Über uns</div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <span className="block text-[18vw] md:text-[12vw] leading-[0.82] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
            WER WIR
          </span>
          <span className="block text-[18vw] md:text-[12vw] leading-[0.95] text-jko-blue -mt-4" style={{ fontFamily: "Caveat Brush, cursive" }}>
            sind.
          </span>
        </motion.h1>

        <div className="grid md:grid-cols-12 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5 relative aspect-square max-w-[520px]"
          >
            <CurvedText text="Est. 2008 · Tauberfranken · 34 Musiker:innen" color="#E23A2F" radius={240} fontSize={18} duration={100} />
            <div className="absolute inset-[10%] rounded-full overflow-hidden border-4 border-[#F4EDDE] shadow-xl">
              <Image src={images.courtyard} alt="JKO" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
          </motion.div>
          <div className="md:col-span-7 space-y-6 text-lg leading-[1.7]">
            <p>
              <span className="text-7xl float-left mr-2 -mt-1 leading-none text-jko-red" style={{ fontFamily: "Anton, sans-serif" }}>
                S
              </span>
              eit {orchestra.founded} bringt das Junge Kammerorchester Tauberfranken Musiker:innen
              zusammen, die eines teilen: die Überzeugung, dass klassische Musik jung, lebendig und
              nahbar ist.
            </p>
            <p>{orchestra.description.split(". ").slice(1).join(". ")}</p>
            <p className="text-3xl md:text-4xl leading-[1.2] text-jko-blue pl-6 relative" style={{ fontFamily: "Caveat Brush, cursive" }}>
              <span className="absolute left-0 top-2 bottom-2 w-1 bg-jko-blue" />
              „{orchestra.mission}"
            </p>
          </div>
        </div>
      </section>

      {/* Stat stamps */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-16">
        <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">In Zahlen</div>
        <div className="grid md:grid-cols-4 gap-0 border-y-2 border-[#0B0B0D]">
          {[
            { value: members.total, label: "Musiker:innen" },
            { value: `${new Date().getFullYear() - orchestra.founded}+`, label: "Jahre Bühne" },
            { value: 86, label: "Konzerte" },
            { value: 6, label: "Konzerte / Saison" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`px-6 py-10 ${i < 3 ? "md:border-r-2 border-[#0B0B0D]" : ""}`}
            >
              <div className={`text-7xl md:text-8xl leading-none ${i % 2 === 0 ? "text-jko-red" : "text-[#0B0B0D]"}`} style={{ fontFamily: "Anton, sans-serif" }}>
                {s.value}
              </div>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase font-bold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Besetzung */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-16">
        <div className="text-[11px] tracking-[0.35em] uppercase font-bold text-jko-red mb-6">Besetzung</div>
        <h2 className="text-6xl md:text-8xl leading-[0.9] mb-12" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
          WER SPIELT <span className="text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive", letterSpacing: 0 }}>was?</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-0 border-t-2 border-[#0B0B0D]">
          {members.sections.map((s, i) => (
            <div key={s.name} className={`flex items-baseline justify-between border-b-2 border-[#0B0B0D] py-5 px-2 ${i % 2 === 0 ? "md:border-r-2" : ""} group hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition-colors`}>
              <span className="text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>
                {s.name.toUpperCase()}
              </span>
              <span className={`text-5xl md:text-6xl ${i % 2 === 0 ? "text-jko-red group-hover:text-jko-yellow" : "text-jko-blue group-hover:text-jko-yellow"}`} style={{ fontFamily: "Anton, sans-serif" }}>
                {s.count}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
