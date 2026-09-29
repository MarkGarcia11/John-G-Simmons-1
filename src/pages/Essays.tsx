import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionAccent } from "../components/Accent";
import Seo from "../components/Seo";
import Ambient from "../components/Ambient";
import { Section, Prose, InkBleed, PlaceholderNote } from "../components/Sections";
import { RevealHeading, SectionLabel, ParallaxImage } from "../components/Primitives";
import { essays } from "../lib/content";
import { EASE } from "../lib/motion";

const filters = ["All", "Scientific", "Medical", "Literary"] as const;

export default function Essays() {
  useSectionAccent("essays");
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = f === "All" ? essays : essays.filter((e) => e.kind === f);

  return (
    <>
      <Seo
        title="Essays & Press | John Galbraith Simmons"
        description="Selected essays, criticism and reporting by John Galbraith Simmons for the Los Angeles Review of Books, Nature, the New York Academy of Sciences and Current Biography."
        path="/essays"
        jsonLd={essays
          .filter((e) => e.url)
          .map((e) => ({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: e.title,
            datePublished: e.date,
            author: { "@type": "Person", name: "John Galbraith Simmons" },
            publisher: { "@type": "Organization", name: e.outlet },
            url: e.url,
          }))}
      />

      <header className="relative overflow-hidden px-5 pb-8 pt-32 sm:px-8 sm:pt-44 lg:px-12">
        <Ambient kind="essays" count={14} />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-16 h-[50vw] max-h-[520px] w-[50vw] max-w-[520px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #F5B30140, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-baseline gap-4">
            <span
              className="font-display text-[42px] leading-none sm:text-[58px]"
              style={{ color: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
            >
              IV
            </span>
            <span className="label" style={{ color: "var(--accent)" }}>
              Chapter Four · Essays
            </span>
          </div>
          <RevealHeading
            as="h1"
            className="mt-7 text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[6.4vw]"
            lines={[{ text: "Essays &" }, { text: "press", italic: true, accent: true }]}
          />
          <InkBleed
            className="measure mt-8 text-[19px] leading-[1.6] text-ink/75 sm:text-[22px]"
            text="Criticism and reporting, gathered and corrected. Every citation below is checked against the original publication."
          />
        </div>
      </header>

      <Section className="pt-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>Filter</SectionLabel>
            <ul
              className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:items-start"
              role="group"
              aria-label="Filter essays by subject"
            >
              {filters.map((x) => {
                const active = f === x;
                return (
                  <li key={x}>
                    <button
                      onClick={() => setF(x)}
                      aria-pressed={active}
                      className="min-h-[44px] rounded-full px-4 text-[15px] font-semibold transition-all duration-400 active:scale-[0.98]"
                      style={
                        active
                          ? { background: "var(--accent)", color: "#fff" }
                          : {
                              border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
                              color: "var(--accent)",
                            }
                      }
                    >
                      {x}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 hidden lg:block">
              <ParallaxImage
                src="/images/essays.jpg"
                alt="Loose manuscript pages and a vintage typewriter in golden light"
                className="aspect-[3/4] w-full"
                note="Replace with real photo"
              />
            </div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <AnimatePresence mode="popLayout">
              <motion.ul key={f} layout>
                {list.map((e, i) => (
                  <motion.li
                    key={e.title}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                    className="group border-b border-ink/12 py-7"
                  >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="label" style={{ color: "var(--accent)" }}>
                        {e.kind}
                      </span>
                      <span className="text-[14px] text-ink/50">
                        {e.outlet} · {e.date}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-[23px] leading-[1.15] sm:text-[30px]">
                      {e.url ? (
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noreferrer"
                          className="ulink"
                          data-cursor="read"
                        >
                          {e.title}
                        </a>
                      ) : (
                        e.title
                      )}
                    </h2>
                    <p className="measure mt-3 text-[16px] leading-relaxed text-ink/70">
                      {e.blurb}
                    </p>
                    {e.url && (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold"
                        style={{ color: "var(--accent)" }}
                      >
                        Read the essay
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <Prose>
              <p className="mt-10">
                A fuller bibliography, including work for <em>Current Biography</em>, the New
                York Academy of Sciences and cancer research reporting, is in preparation.
              </p>
            </Prose>
            <PlaceholderNote>
              [Add the complete article list with exact titles, dates and links. Several
              citations on the current site are incomplete.]
            </PlaceholderNote>
          </div>
        </div>
      </Section>
    </>
  );
}
