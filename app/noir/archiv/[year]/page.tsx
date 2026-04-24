import Link from "next/link";
import { archive } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return archive.map((a) => ({ year: String(a.year) }));
}

export default async function NoirArchivYear({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const entry = archive.find((a) => String(a.year) === year);
  if (!entry) return notFound();

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
      <Link href="/noir/archiv" className="text-xs tracking-[0.3em] uppercase text-[#D4A853] hover:text-white">← Archiv</Link>
      <h1 className="mt-6 text-[30vw] md:text-[22vw] leading-[0.85] tracking-tighter" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>
        {entry.year}
      </h1>
      <p className="text-xl italic text-[#D4A853]" style={{ fontFamily: "Bodoni Moda, serif" }}>
        {entry.concertCount} Konzerte
      </p>
      <div className="mt-16 grid md:grid-cols-2 gap-4">
        {entry.highlights.map((h, i) => (
          <div key={h} className="p-8 border border-white/10 hover:border-[#D4A853] transition-colors">
            <div className="text-xs tracking-[0.3em] uppercase text-[#D4A853] mb-3">N° {String(i + 1).padStart(2, "0")}</div>
            <div className="text-2xl">{h}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
