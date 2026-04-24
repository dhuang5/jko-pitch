import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { images, nav } from "@/lib/content";

export default function AfficheLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4EDDE] text-[#0B0B0D] relative" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Paper grain */}
      <div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.08] mix-blend-multiply" style={{
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
      }} />

      {/* Top strip */}
      <div className="relative z-10 border-b border-[#0B0B0D]/20 bg-[#F4EDDE]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-2 flex items-center justify-between text-[10px] tracking-[0.35em] uppercase font-bold">
          <div className="flex items-center gap-3">
            <span className="text-jko-red">●</span>
            <span>Saison 2025 / 2026</span>
            <span className="text-jko-blue">●</span>
            <span className="hidden md:inline">Eintritt frei</span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-[#0B0B0D]/20">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-6">
          <Link href="/affiche" className="flex items-center gap-4">
            <Image src={images.logo} alt="JKO" width={110} height={68} className="h-14 w-auto" />
            <div className="hidden md:block leading-none">
              <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#0B0B0D]/70">Junges Kammerorchester</div>
              <div className="text-3xl mt-1 text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.01em" }}>
                TAUBER-FRANKEN
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-bold uppercase tracking-[0.1em]">
            {nav.slice(1).map((item, i) => (
              <Link
                key={item.href}
                href={`/affiche${item.href}`}
                className="relative group"
              >
                <span className={`${i === 0 ? "text-jko-red" : i === 1 ? "text-jko-blue" : ""}`}>{item.label}</span>
                <span className={`absolute -bottom-2 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ${
                  i % 2 === 0 ? "bg-jko-red" : "bg-jko-blue"
                }`} />
              </Link>
            ))}
          </nav>
          <Link
            href="/affiche/termine"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-5 py-3 bg-jko-red text-[#F4EDDE] hover:bg-[#0B0B0D] transition-colors"
          >
            Tickets →
          </Link>
        </div>
      </header>

      <div className="relative z-10">{children}</div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t-2 border-[#0B0B0D]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-[10px] tracking-[0.35em] uppercase font-bold text-jko-red mb-3">JKO · Tauberfranken</div>
            <div className="text-6xl md:text-7xl leading-[0.88]" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.02em" }}>
              KLASSIK
              <br />
              <span className="text-jko-blue" style={{ fontFamily: "Caveat Brush, cursive", fontSize: "0.9em", letterSpacing: 0 }}>
                mit Haltung.
              </span>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.35em] uppercase font-bold text-jko-blue mb-3">Navigation</div>
            <ul className="space-y-2 text-base font-semibold">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={`/affiche${item.href}`} className="hover:text-jko-red">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.35em] uppercase font-bold text-jko-blue mb-3">Kontakt</div>
            <p className="whitespace-pre-line leading-relaxed text-sm">Musikschule Tauberfranken
97941 Tauberbischofsheim
kontakt@jko-tauberfranken.de
+49 (0) 9341 000 000</p>
          </div>
        </div>
        <div className="border-t border-[#0B0B0D]/20 py-3 px-6 md:px-10 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase font-bold">
          <span>© {new Date().getFullYear()} JKO</span>
          <span className="text-jko-red">Prototyp · Affiche</span>
        </div>
      </footer>
    </div>
  );
}
