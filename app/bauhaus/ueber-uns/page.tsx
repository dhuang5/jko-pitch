"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, orchestra, members } from "@/lib/content";

export default function BauhausUeberUns() {
  return (
    <main>
      <section className="border-b-2 border-[#0B0B0D] grid md:grid-cols-12">
        <div className="md:col-span-8 p-6 md:p-16 border-r-2 border-[#0B0B0D]">
          <div className="text-xs tracking-[0.3em] uppercase font-bold mb-4">Über uns</div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[13vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em] font-black"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}
          >
            Wir sind ein
            <br />
            <span className="inline-block relative">
              <span className="relative z-10 px-4">Orchester.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute inset-0 bg-jko-yellow origin-left -z-0"
              />
            </span>
          </motion.h1>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed">{orchestra.description}</p>
        </div>
        <div className="md:col-span-4 bg-jko-blue text-[#FAF7F2] p-6 md:p-10 flex flex-col justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-80">Mission</div>
            <p className="mt-4 text-2xl leading-snug font-medium">{orchestra.mission}</p>
          </div>
          <div className="text-8xl font-black leading-none mt-10" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
            {orchestra.founded}
            <div className="text-sm uppercase tracking-widest font-medium opacity-70 mt-2">gegründet</div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#0B0B0D] grid md:grid-cols-4">
        {[
          { label: "Musiker:innen", value: members.total, color: "bg-jko-yellow" },
          { label: "Jahre Bühne", value: `${new Date().getFullYear() - orchestra.founded}+`, color: "bg-jko-red text-[#FAF7F2]" },
          { label: "Konzerte", value: "86", color: "bg-jko-blue text-[#FAF7F2]" },
          { label: "Instrumente", value: "12", color: "bg-[#0B0B0D] text-[#FAF7F2]" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`p-10 ${stat.color} ${i < 3 ? "border-r-2 border-[#0B0B0D]" : ""}`}
          >
            <div className="text-[8vw] md:text-7xl font-black leading-none tracking-tight" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
              {stat.value}
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20">
        <div className="text-xs tracking-[0.3em] uppercase font-bold mb-6">Besetzung</div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-16" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
          Wer spielt was.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {members.sections.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-2 border-[#0B0B0D] p-6 flex items-center justify-between hover:bg-jko-yellow transition-colors"
            >
              <div>
                <div className="text-2xl font-black tracking-tight" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 700 }}>{s.name}</div>
                <div className="text-sm opacity-70">Stimme</div>
              </div>
              <div className="text-5xl font-black" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>{s.count}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 border-t-2 border-[#0B0B0D]">
        <div className="relative aspect-[4/5] md:aspect-auto border-r-2 border-[#0B0B0D]">
          <Image src={images.church} alt="JKO" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="relative aspect-[4/5] md:aspect-auto">
          <Image src={images.courtyard} alt="JKO" fill className="object-cover" sizes="50vw" />
        </div>
      </section>
    </main>
  );
}
