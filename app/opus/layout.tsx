import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { images, nav } from "@/lib/content";

export default function OpusLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4EDDE] text-[#0B0B0D] relative overflow-x-hidden" style={{ fontFamily: "Fraunces, serif" }}>
      {/* Soft color orbs in background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-[50vw] h-[50vw] blur-[120px]" style={{ background: "radial-gradient(circle, #F7C80055 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] -left-40 w-[40vw] h-[40vw] blur-[120px]" style={{ background: "radial-gradient(circle, #E23A2F44 0%, transparent 70%)" }} />
        <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] blur-[120px]" style={{ background: "radial-gradient(circle, #1F49B833 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 border-b border-[#0B0B0D]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between text-[11px] tracking-[0.25em] uppercase text-[#0B0B0D]/60" style={{ fontFamily: "Inter, sans-serif" }}>
          <div className="flex items-center gap-3">
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-jko-yellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-jko-red" />
              <span className="w-1.5 h-1.5 rounded-full bg-jko-blue" />
            </span>
            Saison 25 / 26
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <header className="relative z-10 border-b border-[#0B0B0D]/15">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between gap-6">
          <Link href="/opus" className="flex items-center gap-4">
            <Image src={images.logo} alt="JKO" width={96} height={60} className="h-12 w-auto" />
            <div className="hidden md:block leading-none">
              <div className="text-xl tracking-tight">Junges Kammerorchester</div>
              <div className="text-sm italic text-jko-red mt-1" style={{ fontFamily: "Instrument Serif, serif" }}>
                Tauberfranken
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[14px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {nav.slice(1).map((item, i) => {
              const hoverColor = i % 3 === 0 ? "hover:text-jko-red" : i % 3 === 1 ? "hover:text-jko-blue" : "hover:text-[#0B0B0D]";
              return (
                <Link key={item.href} href={`/opus${item.href}`} className={`relative tracking-wide transition-colors ${hoverColor} group`}>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
                    i % 3 === 0 ? "bg-jko-red" : i % 3 === 1 ? "bg-jko-blue" : "bg-jko-yellow"
                  }`} />
                </Link>
              );
            })}
          </nav>
          <Link
            href="/opus/termine"
            className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-3 bg-[#0B0B0D] text-[#F4EDDE] hover:bg-jko-red transition-colors relative group"
            style={{ fontFamily: "Inter, sans-serif", borderRadius: "40% 60% 50% 50% / 50%" }}
          >
            Nächstes Konzert
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </header>

      <div className="relative z-10">{children}</div>

      <footer className="relative z-10 border-t border-[#0B0B0D]/15 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Image src={images.logo} alt="JKO" width={130} height={80} className="h-16 w-auto mb-4" />
            <p className="text-[#0B0B0D]/70 max-w-sm leading-relaxed text-lg italic" style={{ fontFamily: "Instrument Serif, serif" }}>
              „Klassische Musik, jung gedacht — aus dem Herzen Tauberfrankens."
            </p>
          </div>
          <div style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="text-[11px] tracking-[0.3em] uppercase text-jko-red mb-3">Navigation</div>
            <ul className="space-y-1.5 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}><Link href={`/opus${item.href}`} className="hover:text-jko-red">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="text-[11px] tracking-[0.3em] uppercase text-jko-blue mb-3">Kontakt</div>
            <p className="text-sm whitespace-pre-line leading-relaxed">Musikschule Tauberfranken
97941 Tauberbischofsheim
kontakt@jko-tauberfranken.de</p>
          </div>
        </div>
        <div className="border-t border-[#0B0B0D]/10 py-4 text-center text-[11px] text-[#0B0B0D]/40" style={{ fontFamily: "Inter, sans-serif" }}>
          © {new Date().getFullYear()} JKO Tauberfranken · Prototyp · Opus
        </div>
      </footer>
    </div>
  );
}
