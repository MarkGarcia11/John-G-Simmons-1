import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/motion";
import type { Book } from "../lib/content";
import { cn } from "../utils/cn";

export function Cover({
  book,
  className,
}: {
  book: Book;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden rounded-[10px] p-5 text-left shadow-[0_18px_50px_-18px_rgba(30,27,24,0.45)]",
        className,
      )}
      style={{
        background: `linear-gradient(150deg, ${book.coverFrom}, ${book.coverTo})`,
      }}
      role="img"
      aria-label={`Placeholder cover for ${book.title}. Replace with the supplied book cover artwork.`}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[7px] bg-black/20 mix-blend-multiply"
      />
      <span
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
      />
      <p className="label relative text-white/70">{book.publisher.split("·")[0]}</p>
      <div className="relative">
        <p className="font-display text-[clamp(1.1rem,2.4vw,1.6rem)] leading-[1.06] text-white">
          {book.title}
        </p>
        {book.subtitle && (
          <p className="mt-2 font-accent text-[13px] italic leading-snug text-white/75">
            {book.subtitle}
          </p>
        )}
        <p className="mt-3 text-[12px] font-medium tracking-wide text-white/60">
          John Galbraith Simmons
        </p>
      </div>
      <span className="label relative text-white/45">Cover placeholder</span>
    </div>
  );
}

export default function BookCard({ book, onOpen }: { book: Book; onOpen?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const reduce = useReducedMotion();

  const move = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 9, ry: px * 11 });
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE }}
      onMouseMove={move}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      className="tilt-card group"
      data-cursor="view"
    >
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`Read about the book ${book.title}`}
      >
        <motion.div
          className="relative"
          animate={{ rotateX: tilt.rx, rotateY: tilt.ry, y: tilt.rx || tilt.ry ? -8 : 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Cover book={book} />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-end rounded-[10px] p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(to top, color-mix(in srgb, var(--accent) 80%, transparent), transparent 60%)",
            }}
          >
            <span className="label text-white">Read about the book →</span>
          </span>
        </motion.div>

        <div className="mt-4">
          <p className="label" style={{ color: "var(--accent)" }}>
            {book.meta ?? book.publisher}
          </p>
          <h3 className="mt-2 font-display text-[22px] leading-tight sm:text-[26px]">
            {book.title}
          </h3>
          <p className="mt-2 measure text-[15px] leading-relaxed text-ink/70">{book.hook}</p>
        </div>
      </button>
    </motion.article>
  );
}
