import Link from "next/link";
import { archive } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return archive.map((a) => ({ year: String(a.year) }));
}

export default async function BauhausArchivYear({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const entry = archive.find((a) => String(a.year) === year);
  if (!entry) return notFound();

  return (
    <main>
      <section className="border-b-2 border-[#0B0B0D] p-6 md:p-16">
        <Link href="/bauhaus/archiv" className="text-xs uppercase tracking-wider font-bold">← Archiv</Link>
        <h1 className="mt-6 text-[35vw] md:text-[25vw] leading-[0.82] tracking-[-0.04em] font-black" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800 }}>
          {entry.year}
        </h1>
        <div className="text-xl font-bold mt-2">{entry.concertCount} Konzerte in diesem Jahr.</div>
      </section>
      <section className="grid md:grid-cols-3">
        {entry.highlights.map((h, i) => {
          const colors = ["bg-jko-yellow", "bg-jko-red text-[#FAF7F2]", "bg-jko-blue text-[#FAF7F2]"];
          return (
            <div key={h} className={`${colors[i % 3]} p-10 ${i < entry.highlights.length - 1 ? "md:border-r-2 border-b-2 md:border-b-0 border-[#0B0B0D]" : ""}`}>
              <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-80 mb-4">Highlight {String(i + 1).padStart(2, "0")}</div>
              <p className="text-2xl font-bold leading-snug" style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 700 }}>
                {h}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
