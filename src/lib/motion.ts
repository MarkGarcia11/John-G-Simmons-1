import type { Variants, Transition, Easing } from "framer-motion";

export const EASE: Easing = [0.22, 1, 0.36, 1];

export const t = (d = 0.9, delay = 0): Transition => ({
  duration: d,
  delay,
  ease: EASE,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.09, ease: EASE },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, delay: i * 0.1, ease: EASE },
  }),
};

export const slideFrom = (dir: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: dir === "left" ? -60 : 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: EASE },
  },
});

export const unmaskImage: Variants = {
  hidden: { opacity: 0, scale: 0.92, clipPath: "inset(12% 12% 12% 12% round 12px)" },
  show: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 12px)",
    transition: { duration: 1.2, ease: EASE },
  },
};

export const stagger = (s = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: s } },
});

export const viewport = { once: true, amount: 0.25 } as const;
