import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const rnd = (seed: number) => {
  const x = Math.sin(seed * 9973.13) * 10000;
  return x - Math.floor(x);
};

type Kind = "science" | "fiction" | "translation" | "essays" | "home";

/**
 * Low-opacity, transform-only ambient layer. Purely decorative.
 */
export default function Ambient({ kind, count = 14 }: { kind: Kind; count?: number }) {
  const reduce = useReducedMotion();
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        i,
        left: rnd(i + 1) * 100,
        top: rnd(i + 21) * 100,
        size: 10 + rnd(i + 41) * 30,
        dur: 14 + rnd(i + 61) * 18,
        delay: rnd(i + 81) * -20,
        drift: 20 + rnd(i + 101) * 60,
      })),
    [count],
  );

  if (reduce) return null;

  const glyphs = ["é", "ç", "à", "ü", "Ω", "語", "ñ", "œ"];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {kind === "fiction" && (
        <div
          className="absolute left-[12%] top-[18%] h-[44vw] w-[44vw] max-h-[520px] max-w-[520px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, #F2A93B55, transparent 70%)" }}
        />
      )}
      {items.map((it) => (
        <motion.span
          key={it.i}
          className="absolute select-none"
          style={{ left: `${it.left}%`, top: `${it.top}%`, opacity: 0.16 }}
          animate={{
            x: [0, it.drift, -it.drift * 0.6, 0],
            y: [0, -it.drift * 0.8, it.drift * 0.4, 0],
            rotate: [0, 18, -12, 0],
          }}
          transition={{
            duration: it.dur,
            delay: it.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Glyph kind={kind} size={it.size} index={it.i} glyphs={glyphs} />
        </motion.span>
      ))}
    </div>
  );
}

function Glyph({
  kind,
  size,
  index,
  glyphs,
}: {
  kind: Kind;
  size: number;
  index: number;
  glyphs: string[];
}) {
  const s = Math.round(size);
  const stroke = "var(--accent)";

  if (kind === "science") {
    const v = index % 3;
    if (v === 0)
      return (
        <svg width={s * 1.4} height={s * 2.2} viewBox="0 0 28 44" fill="none">
          <path d="M4 2c0 10 20 10 20 20S4 32 4 42" stroke={stroke} strokeWidth="1.2" />
          <path d="M24 2c0 10-20 10-20 20s20 10 20 20" stroke={stroke} strokeWidth="1.2" />
          <path d="M7 10h14M6 22h16M7 34h14" stroke={stroke} strokeWidth="0.8" />
        </svg>
      );
    if (v === 1)
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="1" />
          <circle cx="12" cy="12" r="3" fill={stroke} />
        </svg>
      );
    return (
      <svg width={s * 3} height={s} viewBox="0 0 90 24" fill="none">
        <path
          d="M0 12h22l5-9 6 18 5-9h52"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "fiction") {
    const v = index % 3;
    if (v === 0)
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 13c-3-6-10-8-10-3s5 7 10 7 10-2 10-7-7-3-10 3z"
            stroke="#F2A93B"
            strokeWidth="1"
          />
          <path d="M12 13v6" stroke="#F2A93B" strokeWidth="1" />
        </svg>
      );
    if (v === 1)
      return (
        <span
          style={{ background: "#F2A93B", width: 4, height: 4, borderRadius: 99, display: "block" }}
        />
      );
    return (
      <svg width={s} height={s * 1.3} viewBox="0 0 20 26" fill="none">
        <circle cx="6" cy="20" r="4" stroke="#F2A93B" strokeWidth="1" />
        <path d="M6 16V6M6 6c5 0 8 2 8 2" stroke="#F2A93B" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === "translation")
    return (
      <span
        className="font-display italic"
        style={{ fontSize: s * 1.5, color: stroke, lineHeight: 1 }}
      >
        {glyphs[index % glyphs.length]}
      </span>
    );

  if (kind === "essays") {
    const v = index % 2;
    if (v === 0)
      return (
        <svg width={s} height={s * 1.4} viewBox="0 0 20 28" fill="none">
          <path d="M10 1C4 8 3 18 8 27M10 1c6 7 7 17 2 26M10 2v25" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    return (
      <svg width={s * 1.2} height={s * 1.5} viewBox="0 0 24 30" fill="none">
        <rect x="1" y="1" width="22" height="28" rx="2" stroke={stroke} strokeWidth="1" />
        <path d="M5 8h14M5 13h14M5 18h10" stroke={stroke} strokeWidth="0.7" />
      </svg>
    );
  }

  // home: drifting pages / feathers
  return (
    <svg width={s * 1.2} height={s * 1.4} viewBox="0 0 24 28" fill="none">
      <path d="M2 26 12 2l10 24-10-6z" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}
