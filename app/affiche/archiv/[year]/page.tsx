import Link from "next/link";
import { archive } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return archive.map((a) => ({ year: String(a.year) }));
}

export default async function AfficheArchivYear({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const entry = archive.find((a) => String(a.year) === year);
  if (!entry) return notFound();

  return (
    <main className="max-w-[1500px] mx-auto px-6 md:px-10 pt-16 pb-20">
      <Link href="/affiche/archiv" className="text-sm uppercase tracking-[0.2em] font-bold text-jko-red hover:text-[#0B0B0D]">← Archiv</Link>

      <div className="mt-8 relative">
        <div className="text-[50vw] md:text-[30vw] leading-[0.82] text-jko-red" style={{ fontFamily: "Anton, sans-serif", letterSpacing: "-0.03em" }}>
          {entry.year}
        </div>
        <div className="absolute bottom-[8%] right-0 md:right-[5%] text-3xl md:text-5xl text-jko-blue rotate-[-8deg]" style={{ fontFamily: "Caveat Brush, cursive" }}>
          unvergessen
        </div>
      </div>

      <div className="text-2xl font-bold uppercase tracking-widest mt-2" style={{ fontFamily: "Barlow Condensed, sans-serif" }}>
        {entry.concertCount} Konzerte in diesem Jahr
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-0 border-y-2 border-[#0B0B0D]">
        {entry.highlights.map((h, i) => (
          <div
            key={h}
            className={`p-10 ${i % 2 === 0 ? "md:border-r-2" : ""} ${i < entry.highlights.length - 2 ? "border-b-2" : ""} border-[#0B0B0D] ${i === 0 ? "bg-[#0B0B0D] text-[#F4EDDE]" : ""} group hover:bg-jko-red hover:text-[#F4EDDE] transition-colors`}
          >
            <div className={`text-[11px] tracking-[0.35em] uppercase font-bold mb-4 ${i === 0 ? "text-jko-yellow" : "text-jko-red group-hover:text-jko-yellow"}`}>
              Highlight 0{i + 1}
            </div>
            <p className="text-2xl md:text-3xl leading-tight font-bold tracking-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>
              {h}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
