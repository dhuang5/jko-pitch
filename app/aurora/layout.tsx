import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { images, nav } from "@/lib/content";

export default function AuroraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-[#0B0B12] relative overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif", background: "#F7F7F9" }}>
      {/* Aurora background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #B79BFF 0%, transparent 70%)" }} />
        <div className="absolute top-[30%] -right-40 w-[50vw] h-[50vw] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #FFB4E0 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-[20%] w-[45vw] h-[45vw] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #9BDAFF 0%, transparent 70%)" }} />
      </div>

      {/* top ribbon */}
      <div className="relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-2 text-[11px] tracking-wide text-[#0B0B12]/60 flex justify-between items-center">
          <div>Junges Kammerorchester Tauberfranken</div>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Glass nav */}
      <header className="sticky top-2 z-30 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-full border border-white/50 bg-white/50 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] px-3 py-2 flex items-center justify-between gap-6">
            <Link href="/aurora" className="flex items-center gap-3 pl-3">
              <Image src={images.logo} alt="JKO" width={60} height={38} className="h-8 w-auto" />
              <div className="text-sm font-semibold tracking-tight hidden md:block">JKO <span className="text-[#6B5BFF]">·</span> Tauberfranken</div>
            </Link>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              {nav.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={`/aurora${item.href}`}
                  className="px-4 py-2 rounded-full hover:bg-white/80 hover:shadow-sm transition-all text-[#0B0B12]/80 hover:text-[#0B0B12]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/aurora/termine"
              className="hidden md:inline-block text-sm font-medium px-5 py-2.5 rounded-full text-white shadow-[0_4px_12px_rgba(107,91,255,0.35)]"
              style={{ background: "linear-gradient(135deg, #6B5BFF, #B79BFF)" }}
            >
              Tickets
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10">{children}</div>

      <footer className="relative z-10 mt-32 pb-10 px-4">
        <div className="max-w-[1400px] mx-auto rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-10 md:p-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src={images.logo} alt="JKO" width={80} height={50} className="h-10 w-auto" />
              <div className="font-semibold">JKO Tauberfranken</div>
            </div>
            <p className="mt-4 text-[#0B0B12]/70 max-w-sm leading-relaxed">
              Klassische Musik, jung inszeniert — aus dem Herzen Tauberfrankens, für alle, die Zeit
              für Klang haben.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#6B5BFF] font-semibold mb-3">Navigation</div>
            <ul className="space-y-2 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}><Link href={`/aurora${item.href}`} className="hover:text-[#6B5BFF]">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#6B5BFF] font-semibold mb-3">Kontakt</div>
            <p className="text-sm text-[#0B0B12]/80 whitespace-pre-line leading-relaxed">
              kontakt@jko-tauberfranken.de
              +49 (0) 9341 000 000
            </p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-6 text-center text-xs text-[#0B0B12]/40">
          © {new Date().getFullYear()} JKO Tauberfranken · Prototyp
        </div>
      </footer>
    </div>
  );
}
