import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { images, nav } from "@/lib/content";

export default function EditorialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4EDDE] text-[#0B0B0D]" style={{ fontFamily: "Fraunces, serif" }}>
      <div className="border-b border-[#0B0B0D]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between text-[11px] tracking-wider uppercase text-[#0B0B0D]/60">
          <div style={{ fontFamily: "Inter, sans-serif" }}>Est. 2008 · Tauberfranken, DE</div>
          <ThemeSwitcher />
        </div>
      </div>
      <header className="border-b border-[#0B0B0D]/15">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between gap-6">
          <Link href="/editorial" className="flex items-center gap-4">
            <Image src={images.logo} alt="JKO" width={90} height={56} className="h-11 w-auto" />
            <div className="hidden md:block leading-none">
              <div className="text-xl tracking-tight">Junges Kammerorchester</div>
              <div className="text-sm italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
                Tauberfranken
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-[13px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={`/editorial${item.href}`}
                className="tracking-wide text-[#0B0B0D]/80 hover:text-[#6E2C2C] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/editorial/termine"
            className="hidden md:inline-block text-xs tracking-[0.2em] uppercase px-4 py-2.5 border border-[#0B0B0D] hover:bg-[#0B0B0D] hover:text-[#F4EDDE] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Nächstes Konzert
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t border-[#0B0B0D]/15 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Image src={images.logo} alt="JKO" width={120} height={75} className="h-14 w-auto mb-4" />
            <p className="text-sm text-[#0B0B0D]/70 max-w-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Junge Musikerinnen und Musiker aus der Region Tauberfranken — vereint im Streben nach
              Klang, der bewegt.
            </p>
          </div>
          <div style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#0B0B0D]/50 mb-3">Navigation</div>
            <ul className="space-y-1.5 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={`/editorial${item.href}`} className="hover:text-[#6E2C2C]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#0B0B0D]/50 mb-3">Kontakt</div>
            <p className="text-sm whitespace-pre-line">Musikschule Tauberfranken
97941 Tauberbischofsheim
kontakt@jko-tauberfranken.de</p>
          </div>
        </div>
        <div className="border-t border-[#0B0B0D]/10 py-4 text-center text-[11px] text-[#0B0B0D]/40" style={{ fontFamily: "Inter, sans-serif" }}>
          © {new Date().getFullYear()} JKO Tauberfranken · Prototyp
        </div>
      </footer>
    </div>
  );
}
