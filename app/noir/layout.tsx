import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { images, nav } from "@/lib/content";

export default function NoirLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white relative" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* vignette */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)"
      }} />
      {/* subtle grain */}
      <div className="pointer-events-none fixed inset-0 z-[51] opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
      }} />

      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-2.5 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-white/50">
          <div>Junges Kammerorchester · Tauberfranken</div>
          <ThemeSwitcher />
        </div>
      </div>
      <header className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between gap-6">
          <Link href="/noir" className="flex items-center gap-4">
            <Image src={images.logo} alt="JKO" width={80} height={50} className="h-10 w-auto" />
            <div className="hidden md:block leading-none" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
              <div className="text-lg tracking-widest uppercase">JKO</div>
              <div className="text-[10px] tracking-[0.4em] text-[#D4A853]" style={{ fontWeight: 500 }}>Tauberfranken</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
            {nav.slice(1).map((item) => (
              <Link key={item.href} href={`/noir${item.href}`} className="text-white/70 hover:text-[#D4A853] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/noir/termine" className="hidden md:inline-block text-xs tracking-[0.25em] uppercase px-5 py-3 bg-[#D4A853] text-[#0A0A0B] hover:bg-white transition-colors font-semibold">
            Tickets
          </Link>
        </div>
      </header>
      <div className="relative z-10">{children}</div>
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-4xl tracking-tight" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
              <span className="text-[#D4A853]">JKO</span> Tauberfranken
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-sm">Klassische Musik, jung inszeniert. Seit 2008.</p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#D4A853] mb-3">Navigation</div>
            <ul className="space-y-1.5 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}><Link href={`/noir${item.href}`} className="hover:text-[#D4A853]">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#D4A853] mb-3">Kontakt</div>
            <p className="text-sm text-white/70">kontakt@jko-tauberfranken.de</p>
          </div>
        </div>
        <div className="border-t border-white/5 py-4 text-center text-[10px] tracking-widest uppercase text-white/30">
          © {new Date().getFullYear()} JKO · Prototyp
        </div>
      </footer>
    </div>
  );
}
