import { motion } from "framer-motion";
import { useSectionAccent } from "../components/Accent";
import Seo from "../components/Seo";
import Ambient from "../components/Ambient";
import {
  Section,
  Prose,
  InkBleed,
  LanguageSwap,
  PlaceholderNote,
} from "../components/Sections";
import { Button, RevealHeading, SectionLabel, ParallaxImage } from "../components/Primitives";
import { Cover } from "../components/BookCard";
import { translations, otherTranslationWork } from "../lib/content";
import { EASE, viewport } from "../lib/motion";

export default function Translation() {
  useSectionAccent("translation");

  return (
    <>
      <Seo
        title="Translation | John Galbraith Simmons & Jocelyne Geneviève Barque"
        description="Literary translation from the French by John Galbraith Simmons and Jocelyne Geneviève Barque, including the first complete English translation of Sade's Aline and Valcour (Contra Mundum Press, 2019)."
        path="/translation"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Aline and Valcour, or the Philosophical Novel",
          author: { "@type": "Person", name: "Marquis de Sade" },
          translator: [
            { "@type": "Person", name: "John Galbraith Simmons" },
            { "@type": "Person", name: "Jocelyne Geneviève Barque" },
          ],
          publisher: "Contra Mundum Press",
          datePublished: "2019",
          numberOfPages: 900,
          inLanguage: "en",
        }}
      />

      <header className="relative overflow-hidden px-5 pb-10 pt-32 sm:px-8 sm:pt-44 lg:px-12">
        <Ambient kind="translation" count={18} />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-24 h-[55vw] max-h-[560px] w-[55vw] max-w-[560px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #F4A3A055, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-baseline gap-4">
            <span
              className="font-display text-[42px] leading-none sm:text-[58px]"
              style={{ color: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
            >
              III
            </span>
            <span className="label" style={{ color: "var(--accent)" }}>
              Chapter Three · Translation
            </span>
          </div>

          <h1 className="mt-7 font-display text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[6.4vw]">
            <LanguageSwap
              words={["Translation", "Traduction"]}
              className="block"
            />
            <span className="block font-accent italic" style={{ color: "var(--accent)" }}>
              from the French
            </span>
          </h1>

          <p className="mt-8 measure text-[19px] leading-[1.6] text-ink/75 sm:text-[22px]">
            Translated by John Galbraith Simmons &amp; Jocelyne Geneviève Barque.
          </p>
        </div>
      </header>

      {/* Two translators */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ParallaxImage
              src="/images/translators.jpg"
              alt="Two translators working side by side at a table covered with manuscripts in sunlit room"
              className="aspect-[4/5] w-full"
              note="Replace with real photo of John & Jocelyne"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>A shared credit</SectionLabel>
            <RevealHeading
              className="mt-6 text-[10vw] leading-[0.95] sm:text-[6vw] lg:text-[3.4vw]"
              lines={[{ text: "Two readers," }, { text: "one sentence", italic: true }]}
            />
            <InkBleed
              className="measure mt-6 text-[18px] leading-[1.65] text-ink/80 sm:text-[21px]"
              text="Jocelyne, who is French, creates the initial draft. We then rework it together, sentence by sentence."
            />
            <Prose>
              <p className="mt-5">
                The collaboration began with encyclopedias — the three-volume{" "}
                <em>International Dictionary of Psychoanalysis</em> (board of translators,
                2004) and <em>The Encyclopedia of the Age of War and Reconstruction</em> —
                before turning to literature.
              </p>
              <p className="mt-5">
                In 2011 the work on <em>Aline and Valcour</em> received a Translation
                Fellowship from the National Endowment for the Arts.
              </p>
            </Prose>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white/50 p-5">
                <h3 className="font-display text-[22px]">John Galbraith Simmons</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                  Writer and translator. Northwestern University (philosophy), Long Island
                  University. Lives in New York City.
                </p>
              </div>
              <div className="rounded-xl bg-white/50 p-5">
                <h3 className="font-display text-[22px]">Jocelyne Geneviève Barque</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                  French translator and John's collaborator on every translation.
                </p>
                <PlaceholderNote>[Add Jocelyne's full biography.]</PlaceholderNote>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Works */}
      {translations.map((b, i) => (
        <Section key={b.slug} id={b.slug} className={i === 0 ? "border-t border-ink/10" : ""}>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 1, ease: EASE }}
              className="lg:col-span-4"
            >
              <div className="mx-auto w-[58%] sm:w-[42%] lg:w-full">
                <Cover book={b} />
              </div>
            </motion.div>
            <div className="lg:col-span-7 lg:col-start-6">
              <SectionLabel>{b.meta ?? "Translation"}</SectionLabel>
              <RevealHeading
                className="mt-5 text-[11vw] leading-[0.96] sm:text-[6.5vw] lg:text-[4vw]"
                lines={[{ text: b.title }]}
              />
              {b.subtitle && (
                <p className="mt-3 font-accent text-[20px] italic text-ink/65 sm:text-[26px]">
                  {b.subtitle}
                </p>
              )}
              <p className="mt-5 measure text-[18px] leading-[1.65] text-ink/80 sm:text-[20px]">
                {b.hook}
              </p>
              <Prose>
                <p className="mt-4">{b.synopsis}</p>
              </Prose>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/60">{b.credit}</p>
              <p className="mt-1 text-[15px] text-ink/60">
                {b.publisher} · {b.year}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    b.title + " translated by John Galbraith Simmons",
                  )}`}
                >
                  Find a copy
                </Button>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-t border-ink/10">
        <SectionLabel>Also translated</SectionLabel>
        <RevealHeading
          className="mt-6 text-[10vw] leading-[0.95] sm:text-[6vw] lg:text-[3.4vw]"
          lines={[{ text: "Earlier work" }]}
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {otherTranslationWork.map((w, i) => (
            <motion.li
              key={w.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.85, delay: i * 0.07, ease: EASE }}
              className="rounded-xl bg-white/50 p-6"
            >
              <p className="label" style={{ color: "var(--accent)" }}>
                {w.meta}
              </p>
              <h3 className="mt-3 font-display text-[23px] leading-tight">{w.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{w.note}</p>
            </motion.li>
          ))}
        </ul>
      </Section>
    </>
  );
}
