import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE, fadeUp, viewport } from "../lib/motion";
import { cn } from "../utils/cn";

/* ---------------------------- Chapter counter label -------------------------------- */

export function ChapterMark({ n, title }: { n: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.9, ease: EASE }}
      className="flex items-baseline gap-4"
    >
      <span
        className="font-display text-[42px] leading-none sm:text-[58px]"
        style={{ color: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
      >
        {n}
      </span>
      <span className="label" style={{ color: "var(--accent)" }}>
        {title}
      </span>
    </motion.div>
  );
}

/* ------------------------------- Ink-bleed reveal ---------------------------------- */

export function InkBleed({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(7px)", y: 8 }}
          animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : undefined}
          transition={{ duration: 0.75, delay: i * 0.022, ease: EASE }}
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </p>
  );
}

/* ---------------------------------- Typewriter ------------------------------------- */

export function Typewriter({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(text.length);
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) {
        clearInterval(id);
        setTimeout(() => setDone(true), 400);
      }
    }, 55);
    return () => clearInterval(id);
  }, [inView, text, reduce]);

  return (
    <span ref={ref} className={className}>
      <span
        className={cn(
          "transition-all duration-700",
          done ? "font-display not-italic" : "font-mono text-[0.85em] tracking-tight",
        )}
      >
        {text.slice(0, n)}
      </span>
      {!done && (
        <motion.span
          aria-hidden
          className="ml-1 inline-block h-[0.85em] w-[3px] align-middle"
          style={{ background: "#F2A93B" }}
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </span>
  );
}

/* ------------------------------- Language swap ------------------------------------- */

export function LanguageSwap({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 3200);
    return () => clearInterval(id);
  }, [words.length, reduce]);

  const word = words[i];
  return (
    <span className={cn("inline-flex", className)} aria-label={words.join(" / ")}>
      {word.split("").map((c, k) => (
        <motion.span
          key={`${i}-${k}`}
          className="inline-block"
          initial={{ rotateX: -90, opacity: 0, y: 10 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: k * 0.035, ease: EASE }}
          style={{ transformOrigin: "bottom" }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

/* ----------------------------------- Marquee --------------------------------------- */

export function Marquee({
  items,
  outline = false,
  className,
}: {
  items: string[];
  outline?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="marquee-track gap-10 sm:gap-16">
        {doubled.map((t, i) => (
          <span
            key={i}
            className={cn(
              "whitespace-nowrap",
              outline
                ? "outline-text font-display text-[13vw] leading-none sm:text-[9vw]"
                : "text-[15px] font-medium tracking-wide text-ink/55 sm:text-[17px]",
            )}
            style={outline ? { color: "var(--accent)" } : undefined}
          >
            {t}
            {!outline && <span className="ml-10 opacity-30">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------- Counter ---------------------------------------- */

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [v, setV] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setV(to);
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

/* ---------------------------------- Section -------------------------------------- */

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12", className)}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="measure text-[17px] leading-[1.7] text-ink/75 sm:text-[19px]"
    >
      {children}
    </motion.div>
  );
}

export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 inline-block rounded-md border border-dashed border-ink/25 px-3 py-1.5 text-[12px] font-medium tracking-wide text-ink/55">
      {children}
    </p>
  );
}
