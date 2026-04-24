"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { themes } from "@/lib/content";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const current = pathname.split("/")[1];
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 mr-2">Theme</span>
      {themes.map((t) => {
        const active = current === t.slug;
        return (
          <Link
            key={t.slug}
            href={`/${t.slug}${rest ? "/" + rest : ""}`}
            className={`text-[11px] tracking-wider uppercase px-2 py-1 rounded transition-all ${
              active ? "opacity-100 font-semibold" : "opacity-40 hover:opacity-80"
            }`}
          >
            {t.name}
          </Link>
        );
      })}
      <Link
        href="/"
        className="text-[11px] tracking-wider uppercase px-2 py-1 rounded opacity-30 hover:opacity-70 border-l ml-2 pl-3 border-current/20"
      >
        ← Alle
      </Link>
    </div>
  );
}
