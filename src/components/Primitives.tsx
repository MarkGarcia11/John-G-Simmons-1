import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EASE as EASE_, viewport, fadeUp } from "../lib/motion";
import { cn } from "../utils/cn";

/* ---------------------------------- Heading reveal --------------------------------- */

export function RevealHeading({
  lines,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  lines: (string | { text: string; italic?: boolean; accent?: boolean })[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref}>
      <Tag className={cn("font-display", className)}>
        {lines.map((l, i) => {
          const obj = typeof l === "string" ? { text: l } : l;
          return (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className={cn(
                  "block will-change-transform",
                  obj.italic && "italic font-accent",
                )}
                style={obj.accent ? { color: "var(--accent)" } : undefined}
                initial={reduce ? { opacity: 0 } : { y: "115%", rotate: 3, opacity: 0 }}
                animate={
                  inView
                    ? reduce
                      ? { opacity: 1 }
                      : { y: "0%", rotate: 0, opacity: 1 }
                    : undefined
                }
                transition={{
                  duration: 1.05,
                  delay: delay + i * 0.11 + (obj.italic ? 0.14 : 0),
                  ease: EASE_,
                }}
              >
                {obj.text}
              </motion.span>
            </span>
          );
        })}
      </Tag>
    </div>
  );
}

/* ------------------------------------- Label --------------------------------------- */

export function SectionLabel({
  children,
  chapter,
}: {
  children: React.ReactNode;
  chapter?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="label flex items-center gap-3"
      style={{ color: "var(--accent)" }}
    >
      <span
        className="inline-block h-px w-8 sm:w-12"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />
      {chapter && <span className="opacity-70">{chapter}</span>}
      <span>{children}</span>
    </motion.div>
  );
}

/* ------------------------------------ Buttons -------------------------------------- */

type BtnProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  type?: "button" | "submit";
  className?: string;
};

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "solid",
  type = "button",
  className,
}: BtnProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [d, setD] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setD({
      x: (e.clientX - (r.left + r.width / 2)) * 0.22,
      y: (e.clientY - (r.top + r.height / 2)) * 0.28,
    });
  };

  const base =
    "group relative inline-flex min-h-[48px] items-center gap-2.5 overflow-hidden rounded-full px-6 sm:px-7 py-3 text-[15px] font-semibold tracking-tight transition-colors duration-500 active:scale-[0.98]";

  const styles: React.CSSProperties =
    variant === "solid"
      ? { background: "var(--accent)", color: "#fff" }
      : variant === "outline"
        ? { border: "1px solid color-mix(in srgb, var(--accent) 45%, transparent)", color: "var(--accent)" }
        : { color: "var(--accent)" };

  const inner = (
    <>
      {variant !== "solid" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
          style={{ background: "var(--accent)" }}
        />
      )}
      <span
        className={cn(
          "relative z-10 transition-colors duration-500",
          variant !== "solid" && "group-hover:text-white",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={cn(
          "relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1",
          variant !== "solid" && "group-hover:text-white",
        )}
      >
        →
      </span>
    </>
  );

  const content = (
    <motion.span
      ref={ref}
      className="inline-block"
      animate={{ x: d.x, y: d.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      onMouseMove={onMove}
      onMouseLeave={() => setD({ x: 0, y: 0 })}
    >
      {to ? (
        <Link to={to} className={cn(base, className)} style={styles} data-cursor="go">
          {inner}
        </Link>
      ) : href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cn(base, className)}
          style={styles}
          data-cursor="go"
        >
          {inner}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={cn(base, className)} style={styles}>
          {inner}
        </button>
      )}
    </motion.span>
  );

  return content;
}

/* -------------------------------- Parallax image ----------------------------------- */

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  speed = 40,
  note,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  note?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setY(-p * speed);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed, reduce]);

  return (
    <motion.figure
      ref={ref}
      className={cn("group relative overflow-hidden rounded-xl bg-parchment", className)}
      initial={{ opacity: 0, scale: 0.94, clipPath: "inset(8% 8% 8% 8% round 12px)" }}
      whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 12px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: EASE_ }}
      data-cursor="view"
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ y }}
        className={cn(
          "h-full w-full scale-[1.08] object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12]",
          imgClassName,
        )}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-25"
        style={{ background: "var(--accent)" }}
      />
      {note && (
        <figcaption className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-ink/70 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-ivory/90">
          {note}
        </figcaption>
      )}
    </motion.figure>
  );
}
