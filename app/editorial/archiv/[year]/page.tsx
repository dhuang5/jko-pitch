import Link from "next/link";
import { archive } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return archive.map((a) => ({ year: String(a.year) }));
}

export default async function ArchivYear({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const entry = archive.find((a) => String(a.year) === year);
  if (!entry) return notFound();

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <Link href="/editorial/archiv" className="text-xs uppercase tracking-widest text-[#6E2C2C] hover:text-[#0B0B0D]" style={{ fontFamily: "Inter, sans-serif" }}>
        ← Archiv
      </Link>
      <h1 className="mt-8 text-[22vw] md:text-[18vw] leading-[0.85] tracking-tighter">{entry.year}</h1>
      <p className="mt-4 text-xl italic text-[#6E2C2C]" style={{ fontFamily: "Instrument Serif, serif" }}>
        {entry.concertCount} Konzerte in diesem Jahr
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {entry.highlights.map((h, i) => (
          <div key={h} className="border border-[#0B0B0D]/15 p-10 hover:border-[#6E2C2C] transition-colors">
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#6E2C2C] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              Highlight {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="text-3xl italic" style={{ fontFamily: "Instrument Serif, serif" }}>{h}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
