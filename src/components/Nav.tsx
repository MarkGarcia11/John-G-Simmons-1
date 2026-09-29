import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "../lib/motion";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/science", label: "Science & Medicine" },
  { to: "/fiction", label: "Fiction" },
  { to: "/translation", label: "Translation" },
  { to: "/essays", label: "Essays & Press" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>

      <motion.div
        className="fixed left-0 top-0 z-[80] h-[3px] w-full origin-left"
        style={{ scaleX: progress, background: "var(--accent)" }}
        aria-hidden
      />

      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          solid ? "backdrop-blur-xl" : ""
        }`}
        style={{
          background: solid ? "color-mix(in srgb, var(--surface) 88%, transparent)" : "transparent",
          boxShadow: solid ? "0 1px 0 color-mix(in srgb, var(--accent) 14%, transparent)" : "none",
        }}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        >
          <Link
            to="/"
            className="font-display text-[19px] leading-none tracking-tight text-ink sm:text-[21px]"
            data-cursor="go"
          >
            John <span className="font-accent italic" style={{ color: "var(--accent)" }}>G.</span>{" "}
            Simmons
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.slice(1).map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    `ulink text-[14px] font-medium tracking-tight transition-opacity ${
                      isActive ? "opacity-100" : "opacity-65 hover:opacity-100"
                    }`
                  }
                  style={({ isActive }) => (isActive ? { color: "var(--accent)" } : undefined)}
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[69] flex flex-col justify-center px-7 lg:hidden"
            style={{ background: "var(--surface)" }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <ul className="space-y-1">
              {NAV.map((n, i) => (
                <motion.li
                  key={n.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.6, ease: EASE }}
                >
                  <NavLink
                    to={n.to}
                    className="block py-2 font-display text-[9vw] leading-tight tracking-tight sm:text-5xl"
                  >
                    {n.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
