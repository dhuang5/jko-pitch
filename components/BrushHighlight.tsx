"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Color = "yellow" | "red" | "blue";

const colorMap: Record<Color, string> = {
  yellow: "#F7C800",
  red: "#E23A2F",
  blue: "#1F49B8",
};

/** Painterly color blob behind text — reveals on scroll. */
export function BrushHighlight({
  children,
  color = "yellow",
  tilt = -2,
  intensity = 0.85,
  delay = 0.2,
}: {
  children: ReactNode;
  color?: Color;
  tilt?: number;
  intensity?: number;
  delay?: number;
}) {
  return (
    <span className="relative inline-block">
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: intensity }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-0.12em] right-[-0.12em] top-[0.08em] bottom-[0.08em] origin-left pointer-events-none"
        style={{
          background: colorMap[color],
          borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%",
          transform: `rotate(${tilt}deg)`,
          filter: "blur(0.4px)",
        }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}

/** Brush-swipe horizontal stroke — animated paint line. */
export function BrushStroke({ color = "yellow", className = "" }: { color?: Color; className?: string }) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block h-[0.35em] origin-left rounded-full ${className}`}
      style={{ background: colorMap[color] }}
    />
  );
}

/** Painted circle for numbers, bullets, accents. */
export function PaintedCircle({
  children,
  color = "yellow",
  size = 48,
}: {
  children?: ReactNode;
  color?: Color;
  size?: number;
}) {
  return (
    <span
      className="inline-flex items-center justify-center font-medium relative shrink-0"
      style={{
        width: size,
        height: size,
        background: colorMap[color],
        borderRadius: "55% 45% 50% 50% / 48% 52% 48% 52%",
        color: color === "yellow" ? "#0B0B0D" : "#F4EDDE",
      }}
    >
      {children}
    </span>
  );
}
