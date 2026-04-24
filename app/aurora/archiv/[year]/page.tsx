import Link from "next/link";
import { archive } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return archive.map((a) => ({ year: String(a.year) }));
}

export default async function AuroraArchivYear({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const entry = archive.find((a) => String(a.year) === year);
  if (!entry) return notFound();

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-20">
      <Link href="/aurora/archiv" className="text-sm text-[#6B5BFF] font-medium hover:underline">← Archiv</Link>
      <h1 className="mt-6 text-[28vw] md:text-[20vw] leading-[0.85] tracking-[-0.04em] font-semibold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #6B5BFF, #FF8FB8, #FFBE5B)" }}>
        {entry.year}
      </h1>
      <div className="text-xl text-[#0B0B12]/70">{entry.concertCount} Konzerte in diesem Jahr</div>
      <div className="mt-16 grid md:grid-cols-2 gap-5">
        {entry.highlights.map((h, i) => (
          <div key={h} className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 p-8 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(107,91,255,0.25)] transition-all">
            <div className="text-xs uppercase tracking-wider text-[#6B5BFF] font-semibold mb-3">Highlight {String(i + 1).padStart(2, "0")}</div>
            <p className="text-xl font-medium leading-snug">{h}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
