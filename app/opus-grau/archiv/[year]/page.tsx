import Link from "next/link";
import { archive } from "@/lib/content";
import { notFound } from "next/navigation";
import { PaintedCircle } from "@/components/BrushHighlight";

export async function generateStaticParams() {
  return archive.map((a) => ({ year: String(a.year) }));
}

const accents = ["yellow", "red", "blue"] as const;

export default async function OpusGrauArchivYear({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const entry = archive.find((a) => String(a.year) === year);
  if (!entry) return notFound();

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
      <Link href="/opus-grau/archiv" className="text-xs uppercase tracking-widest text-jko-red hover:text-[#0B0B0D]" style={{ fontFamily: "Inter, sans-serif" }}>
        ← Archiv
      </Link>
      <h1 className="mt-8 text-[22vw] md:text-[18vw] leading-[0.85] tracking-tighter">{entry.year}</h1>
      <p className="mt-4 text-xl italic text-jko-red" style={{ fontFamily: "Instrument Serif, serif" }}>
        {entry.concertCount} Konzerte in diesem Jahr
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {entry.highlights.map((h, i) => {
          const color = accents[i % 3];
          return (
            <div
              key={h}
              className="relative p-10 border border-[#0B0B0D]/15 hover:border-jko-red transition-colors"
              style={{ borderRadius: i % 2 === 0 ? "24px 8px 24px 8px" : "8px 24px 8px 24px" }}
            >
              <div className="absolute -top-3 -left-3">
                <PaintedCircle color={color} size={44}>
                  <span className="text-xs font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{String(i + 1).padStart(2, "0")}</span>
                </PaintedCircle>
              </div>
              <div className={`text-[11px] tracking-[0.35em] uppercase mb-3 mt-3 ${color === "yellow" ? "text-[#0B0B0D]/60" : color === "red" ? "text-jko-red" : "text-jko-blue"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                Highlight
              </div>
              <h3 className="text-3xl italic" style={{ fontFamily: "Instrument Serif, serif" }}>{h}</h3>
            </div>
          );
        })}
      </div>
    </main>
  );
}
