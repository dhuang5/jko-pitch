import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { images, nav } from "@/lib/content";

export default function BauhausLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0B0B0D]" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <div className="border-b-2 border-[#0B0B0D]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-2.5 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-jko-yellow" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-jko-red" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-jko-blue" />
            <span>Junges Kammerorchester Tauberfranken</span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <header className="border-b-2 border-[#0B0B0D]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-6">
          <Link href="/bauhaus" className="flex items-center gap-4">
            <Image src={images.logo} alt="JKO" width={90} height={56} className="h-12 w-auto" />
            <div className="hidden md:block leading-none" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
              <div className="text-2xl tracking-tight">JKO</div>
              <div className="text-[10px] tracking-[0.3em] font-medium mt-1">Tauberfranken ’08→</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {nav.slice(1).map((item, i) => (
              <Link
                key={item.href}
                href={`/bauhaus${item.href}`}
                className="relative group py-1"
              >
                <span className={`absolute -top-1 -left-2 w-1.5 h-1.5 rounded-full ${
                  i % 3 === 0 ? "bg-jko-yellow" : i % 3 === 1 ? "bg-jko-red" : "bg-jko-blue"
                } opacity-0 group-hover:opacity-100 transition-opacity`} />
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current group-hover:w-full transition-all" />
              </Link>
            ))}
          </nav>
          <Link href="/bauhaus/termine" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 bg-[#0B0B0D] text-[#FAF7F2] hover:bg-jko-red transition-colors">
            Tickets →
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t-2 border-[#0B0B0D] mt-20">
        <div className="grid md:grid-cols-3 border-b-2 border-[#0B0B0D]">
          <div className="bg-jko-yellow p-10 border-r-2 border-[#0B0B0D]">
            <div className="text-xs uppercase tracking-widest font-bold mb-3">Post</div>
            <p className="text-lg whitespace-pre-line leading-relaxed">Musikschule Tauberfranken
97941 Tauberbischofsheim</p>
          </div>
          <div className="bg-jko-red text-[#FAF7F2] p-10 border-r-2 border-[#0B0B0D]">
            <div className="text-xs uppercase tracking-widest font-bold mb-3">Direkt</div>
            <p className="text-lg">kontakt@jko-tauberfranken.de</p>
            <p className="text-lg">+49 (0) 9341 000 000</p>
          </div>
          <div className="bg-jko-blue text-[#FAF7F2] p-10">
            <div className="text-xs uppercase tracking-widest font-bold mb-3">Folgen</div>
            <p className="text-lg">@jko_tauberfranken</p>
            <p className="text-lg">YouTube: JKO Tauberfranken</p>
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-4 text-xs uppercase tracking-widest font-medium flex justify-between">
          <span>© {new Date().getFullYear()} JKO · Prototyp</span>
          <span>Klassik · Jung · Bunt</span>
        </div>
      </footer>
    </div>
  );
}
