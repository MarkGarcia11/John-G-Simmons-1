import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EASE } from "../lib/motion";

const cols = [
  {
    title: "Books",
    links: [
      { label: "The Scientific 100", to: "/science" },
      { label: "Doctors and Discoveries", to: "/science" },
      { label: "tPA for Stroke", to: "/science" },
      { label: "The noir quartet", to: "/fiction" },
    ],
  },
  {
    title: "Writing",
    links: [
      { label: "Essays & Press", to: "/essays" },
      { label: "Science & Medicine", to: "/science" },
      { label: "Fiction", to: "/fiction" },
    ],
  },
  {
    title: "Translation",
    links: [
      { label: "Aline and Valcour", to: "/translation" },
      { label: "Outlaw", to: "/translation" },
      { label: "Ten Little Anarchists", to: "/translation" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Biography", to: "/about" },
      { label: "Timeline", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-ink/10 bg-ink text-ivory sm:mt-32">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="label mb-4 text-sand">{c.title}</h2>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="ulink text-[15px] text-ivory/80 hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="label mb-4 text-sand">Contact &amp; Follow</h2>
            <ul className="space-y-2.5 text-[15px] text-ivory/80">
              <li>
                <a className="ulink" href="mailto:hello@jgsimmons.com">
                  [replace with email address]
                </a>
              </li>
              <li>New York City</li>
              <li>
                <a
                  className="ulink"
                  href="https://lareviewofbooks.org/contributor/john-galbraith-simmons/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LA Review of Books
                </a>
              </li>
              <li>
                <a
                  className="ulink"
                  href="https://independent.academia.edu/JGSimmons"
                  target="_blank"
                  rel="noreferrer"
                >
                  Academia.edu
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h2 className="label mb-4 text-sand">Newsletter</h2>
            <p className="mb-4 text-[15px] leading-relaxed text-ivory/70">
              Occasional notes on new books, translations and essays. No more than a few
              times a year.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("[Connect this form to John's mailing list provider.]");
              }}
            >
              <label htmlFor="nl-email" className="sr-only">
                Email address
              </label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder="your@email.com"
                className="min-h-[48px] rounded-lg border border-ivory/20 bg-transparent px-4 text-[15px] text-ivory placeholder:text-ivory/40"
              />
              <button
                type="submit"
                className="min-h-[48px] rounded-lg bg-ivory px-4 text-[15px] font-semibold text-ink transition-transform active:scale-[0.98]"
              >
                Join the list
              </button>
            </form>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="mt-20 select-none font-display text-[13vw] leading-[0.85] tracking-tighter text-ivory/90 sm:text-[11vw]"
        >
          John <span className="font-accent italic text-amber">Galbraith</span> Simmons
        </motion.p>

        <div className="mt-8 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-[13px] text-ivory/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} John Galbraith Simmons. All rights reserved.</p>
          <p>Translations with Jocelyne Geneviève Barque.</p>
        </div>
      </div>
    </footer>
  );
}
