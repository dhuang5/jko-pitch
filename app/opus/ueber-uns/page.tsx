"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, orchestra, members } from "@/lib/content";
import { BrushHighlight, PaintedCircle } from "@/components/BrushHighlight";

export default function OpusUeberUns() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="flex items-center gap-4 mb-6">
        <PaintedCircle color="yellow" size={32} />
        <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
          Über uns
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl leading-[0.95] tracking-tight"
      >
        Ein Orchester —<br />
        <em className="italic" style={{ fontFamily: "Instrument Serif, serif" }}>
          in Noten geschrieben,{" "}
          <BrushHighlight color="red" tilt={-2} delay={0.4}>in der Region</BrushHighlight>
          {" "}gelebt.
        </em>
      </motion.h1>

      <div className="grid md:grid-cols-12 gap-12 mt-20">
        <div className="md:col-span-7 text-lg leading-[1.7] text-[#0B0B0D]/85 space-y-6" style={{ fontFamily: "Inter, sans-serif" }}>
          <p>
            <span className="text-7xl float-left mr-2 -mt-2 leading-none text-jko-red" style={{ fontFamily: "Instrument Serif, serif" }}>
              S
            </span>
            eit {orchestra.founded} bringt das Junge Kammerorchester Tauberfranken Musiker:innen
            zusammen, die eines teilen: die Überzeugung, dass klassische Musik jung, lebendig und
            nahbar ist. Aus der Mischung aus engagierten Schüler:innen, Studierenden an renommierten
            Musikhochschulen und erfahrenen Profis entsteht ein Klang, der weit über die Region
            Tauberfranken hinaus für Aufsehen sorgt.
          </p>
          <p>
            Wir proben im Herzen Tauberfrankens, spielen Konzerte in den schönsten Sakralbauten und
            Schlössern der Region — und haben uns vorgenommen, klassische Musik so zu präsentieren,
            wie sie uns bewegt: ohne Schwellenangst, ohne Distanz, aber immer mit höchstem
            musikalischem Anspruch.
          </p>
          <p className="text-2xl italic leading-snug text-[#0B0B0D] pl-6 relative" style={{ fontFamily: "Instrument Serif, serif" }}>
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-jko-blue rounded-full" />
            „{orchestra.mission}"
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-5 aspect-[3/4] relative overflow-hidden"
        >
          <Image src={images.courtyard} alt="Orchester" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          <div className="absolute top-0 left-0 h-2 w-[55%] bg-jko-yellow" />
          <div className="absolute bottom-0 right-0 w-2 h-[40%] bg-jko-red" />
        </motion.div>
      </div>

      <section className="mt-32">
        <div className="flex items-center gap-4 mb-8">
          <PaintedCircle color="blue" size={32} />
          <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
            In Zahlen
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-10 border-t border-[#0B0B0D]/15 pt-10">
          {[
            { value: members.total, label: "Musiker:innen", color: "yellow" as const },
            { value: `${new Date().getFullYear() - orchestra.founded}+`, label: "Jahre Bühne", color: "red" as const },
            { value: 86, label: "Konzerte gespielt", color: "blue" as const },
            { value: "∞", label: "Stunden Probenzeit", color: "yellow" as const, italic: true },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`text-7xl md:text-8xl leading-none ${s.italic ? "italic" : ""}`} style={{ fontFamily: s.italic ? "Instrument Serif, serif" : "Fraunces, serif" }}>
                <BrushHighlight color={s.color} tilt={i - 1.5} delay={0.2 + i * 0.1} intensity={0.7}>
                  {s.value}
                </BrushHighlight>
              </div>
              <div className="mt-3 text-sm tracking-wide text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-32">
        <div className="flex items-center gap-4 mb-8">
          <PaintedCircle color="red" size={32} />
          <div className="text-[11px] tracking-[0.35em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
            Besetzung
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-0 gap-x-16 border-t border-[#0B0B0D]/15 pt-4">
          {members.sections.map((s, i) => (
            <div key={s.name} className="flex justify-between items-baseline border-b border-[#0B0B0D]/10 py-5 group">
              <span className="text-2xl">{s.name}</span>
              <span className={`text-lg italic ${i % 3 === 0 ? "text-jko-yellow" : i % 3 === 1 ? "text-jko-red" : "text-jko-blue"}`} style={{ fontFamily: "Instrument Serif, serif" }}>
                {s.count} Musiker:innen
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
