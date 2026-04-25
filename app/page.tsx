"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { themes, images, orchestra } from "@/lib/content";

const previewImages: Record<string, string> = {
  editorial: images.church,
  noir: images.aerial,
  bauhaus: images.courtyard,
  aurora: images.church,
  opus: images.courtyard,
  affiche: images.church,
  "opus-grau": images.aerial,
};

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-screen z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #F7C800 0%, transparent 40%), radial-gradient(circle at 80% 60%, #1F49B8 0%, transparent 40%), radial-gradient(circle at 50% 90%, #E23A2F 0%, transparent 40%)",
        }}
      />

      <header className="relative z-10 px-8 md:px-16 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={images.logo} alt="JKO" width={72} height={46} className="h-10 w-auto" />
          <div className="text-xs tracking-[0.3em] uppercase text-white/60">
            Pitch · Redesign Prototyp
          </div>
        </div>
        <div className="hidden md:block text-xs tracking-wide text-white/40 font-mono">
          v0.1 · 4 Varianten
        </div>
      </header>

      <section className="relative z-10 px-8 md:px-16 pt-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="text-xs tracking-[0.4em] uppercase text-white/50 mb-6">
            {orchestra.shortName} · {orchestra.location}
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}
          >
            Vier Richtungen,<br />
            <em className="italic text-white/70">ein Orchester.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-white/60 text-lg md:text-xl leading-relaxed">
            Dies ist kein fertiges Produkt, sondern eine Einladung. Vier visuelle Welten für die
            neue Website des Jungen Kammerorchesters Tauberfranken — jede mit eigener Haltung,
            jede komplett bespielt. Wähle eine Richtung, klicke dich durch, und lass uns darüber
            reden, welche Welt zur Zukunft des JKO passt.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 px-8 md:px-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/${theme.slug}`}
                className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={previewImages[theme.slug]}
                    alt={theme.name}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background: `linear-gradient(135deg, ${theme.palette[0]}22 0%, ${theme.palette[1]}aa 60%, ${theme.palette[2] ?? theme.palette[1]}cc 100%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div>
                      <div className="text-xs tracking-[0.4em] uppercase text-white/70 mb-2">
                        Theme 0{i + 1}
                      </div>
                      <h2
                        className="text-5xl md:text-6xl text-white"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
                      >
                        {theme.name}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-sm text-white/50 mb-2">{theme.subtitle}</div>
                    <p className="text-white/80 text-sm leading-relaxed">{theme.description}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {theme.palette.map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full ring-1 ring-white/20"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 px-8 md:px-16 py-16 border-t border-white/10 text-xs text-white/40 flex flex-wrap justify-between gap-4">
        <div>Prototyp · Inhalte und Daten sind Platzhalter</div>
        <div>Die endgültige Seite wird nach Freigabe des Designs neu gebaut.</div>
      </footer>
    </main>
  );
}
