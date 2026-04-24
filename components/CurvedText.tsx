"use client";

import { motion } from "framer-motion";

/**
 * Text rotating around a circle — used as decorative frame on photos.
 * `size` is the SVG viewport (px), `text` gets repeated to fill the circle.
 */
export function CurvedText({
  text,
  size = 500,
  radius = 240,
  fontSize = 18,
  color = "#1F49B8",
  spin = true,
  duration = 90,
  letterSpacing = "0.25em",
}: {
  text: string;
  size?: number;
  radius?: number;
  fontSize?: number;
  color?: string;
  spin?: boolean;
  duration?: number;
  letterSpacing?: string;
}) {
  const repeated = (text + " · ").repeat(3);
  return (
    <motion.svg
      viewBox={`0 0 ${size} ${size}`}
      className="absolute inset-0 w-full h-full pointer-events-none"
      animate={spin ? { rotate: 360 } : undefined}
      transition={spin ? { duration, repeat: Infinity, ease: "linear" } : undefined}
    >
      <defs>
        <path
          id={`curved-${text.slice(0, 6)}`}
          d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
        />
      </defs>
      <text
        fontSize={fontSize}
        fill={color}
        fontWeight={700}
        style={{ fontFamily: "Inter, sans-serif", letterSpacing }}
      >
        <textPath href={`#curved-${text.slice(0, 6)}`}>{repeated}</textPath>
      </text>
    </motion.svg>
  );
}
