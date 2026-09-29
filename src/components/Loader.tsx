import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "../lib/motion";

const WORDS = ["John", "Galbraith", "Simmons"];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [open, setOpen] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const total = reduce ? 500 : 2500;
    const a = setTimeout(() => setOpen(false), total);
    const b = setTimeout(onDone, total + 700);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [onDone, reduce]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory px-6"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: EASE }}
          aria-hidden
        >
          <div className="w-full max-w-4xl">
            <div className="mb-6 overflow-hidden">
              <motion.p
                className="label text-clay"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              >
                Author · Science &amp; Medical Writer · Novelist · Translator
              </motion.p>
            </div>

            <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight text-ink sm:text-[11vw] md:text-[8.5vw]">
              {WORDS.map((w, i) => (
                <span key={w} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className={i === 1 ? "block font-accent italic text-terracotta" : "block"}
                    initial={reduce ? { opacity: 0 } : { y: "115%", rotate: 4 }}
                    animate={reduce ? { opacity: 1 } : { y: "0%", rotate: 0 }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.2 + i * 0.16 }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="mt-10 h-px w-full origin-left bg-clay/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.1, ease: EASE, delay: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
