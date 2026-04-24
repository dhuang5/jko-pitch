"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, orchestra, members } from "@/lib/content";

export default function UeberUns() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
        Über uns
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl leading-[0.95] tracking-tight"
      >
        Ein Orchester —<br />
        <em className="italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
          geschrieben in Noten, gelebt in der Region.
        </em>
      </motion.h1>

      <div className="grid md:grid-cols-12 gap-12 mt-20">
        <div className="md:col-span-7 text-lg leading-[1.7] text-[#0B0B0D]/85 space-y-6" style={{ fontFamily: "Inter, sans-serif" }}>
          <p>
            <span className="text-6xl float-left mr-2 -mt-1 leading-none text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
              S
            </span>
            eit {orchestra.founded} bringt das Junge Kammerorchester Tauberfranken Musikerinnen und
            Musiker zusammen, die eines teilen: die Überzeugung, dass klassische Musik jung, lebendig
            und nahbar ist. Aus der Mischung aus engagierten Schülern, Studierenden an renommierten
            Musikhochschulen und erfahrenen Profis entsteht ein Klang, der weit über die Region
            Tauberfranken hinaus für Aufsehen sorgt.
          </p>
          <p>
            Wir proben im Herzen Tauberfrankens, spielen Konzerte in den schönsten Sakralbauten und
            Schlössern der Region — und haben uns vorgenommen, klassische Musik so zu präsentieren,
            wie sie uns bewegt: ohne Schwellenangst, ohne Distanz, aber immer mit höchstem
            musikalischem Anspruch.
          </p>
          <p className="text-2xl italic leading-snug text-[#0B0B0D] border-l-2 border-[#6E2C2C] pl-6" style={{ fontFamily: "Instrument Serif, serif" }}>
            „{orchestra.mission}“
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-5 aspect-[3/4] relative overflow-hidden"
        >
          <Image src={images.courtyard} alt="Orchester" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
        </motion.div>
      </div>

      <section className="mt-32">
        <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Das Ensemble in Zahlen
        </div>
        <div className="grid md:grid-cols-4 gap-10 border-t border-[#0B0B0D]/15 pt-10">
          <div>
            <div className="text-7xl md:text-8xl leading-none">{members.total}</div>
            <div className="mt-2 text-sm tracking-wide text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>Musiker:innen</div>
          </div>
          <div>
            <div className="text-7xl md:text-8xl leading-none">{new Date().getFullYear() - orchestra.founded}</div>
            <div className="mt-2 text-sm tracking-wide text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>Jahre auf der Bühne</div>
          </div>
          <div>
            <div className="text-7xl md:text-8xl leading-none">86</div>
            <div className="mt-2 text-sm tracking-wide text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>Konzerte gespielt</div>
          </div>
          <div>
            <div className="text-7xl md:text-8xl leading-none italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>∞</div>
            <div className="mt-2 text-sm tracking-wide text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>Stunden Probenzeit</div>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Besetzung
        </div>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-16 border-t border-[#0B0B0D]/15 pt-8">
          {members.sections.map((s) => (
            <div key={s.name} className="flex justify-between items-baseline border-b border-[#0B0B0D]/10 py-4">
              <span className="text-2xl">{s.name}</span>
              <span className="text-lg italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
                {s.count} Musiker:innen
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
