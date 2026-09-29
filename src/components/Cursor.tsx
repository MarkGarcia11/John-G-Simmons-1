import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const fx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.2 });
  const fy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.2 });
  const px = useSpring(x, { stiffness: 60, damping: 18, mass: 0.6 });
  const py = useSpring(y, { stiffness: 55, damping: 18, mass: 0.6 });
  const [mode, setMode] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine && !reduce);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setMode(t ? (t as HTMLElement).dataset.cursor ?? null : null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  const label = mode === "view" ? "View" : mode === "read" ? "Read" : null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95] flex items-center justify-center rounded-full mix-blend-normal"
        style={{ x: fx, y: fy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.span
          className="flex items-center justify-center rounded-full text-[10px] font-semibold uppercase tracking-widest text-white"
          style={{ background: "var(--accent)" }}
          animate={{ width: label ? 62 : 10, height: label ? 62 : 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {label}
        </motion.span>
      </motion.div>

      {/* paper plane trailing the cursor */}
      <motion.svg
        aria-hidden
        width="26"
        height="26"
        viewBox="0 0 24 24"
        className="pointer-events-none fixed left-0 top-0 z-[94] opacity-40"
        style={{ x: px, y: py, translateX: "18px", translateY: "18px", color: "var(--accent)" }}
      >
        <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </motion.svg>
    </>
  );
}
