import { motion } from "framer-motion";
import { useSectionAccent } from "../components/Accent";
import Seo, { bookLd } from "../components/Seo";
import Ambient from "../components/Ambient";
import {
  Section,
  Prose,
  Typewriter,
  PlaceholderNote,
} from "../components/Sections";
import { Button, RevealHeading, SectionLabel, ParallaxImage } from "../components/Primitives";
import { Cover } from "../components/BookCard";
import { fictionBooks } from "../lib/content";
import { EASE, viewport } from "../lib/motion";

export default function Fiction() {
  useSectionAccent("fiction");

  return (
    <>
      <Seo
        title="Fiction: The Noir Quartet | John Galbraith Simmons"
        description="Lamplighter, Cried the Piper, The Sharing and Midnight Walking — the four novels of John Galbraith Simmons."
        path="/fiction"
        jsonLd={fictionBooks.map(bookLd)}
      />

      {/* Dark room hero */}
      <header className="relative overflow-hidden bg-[#141733] px-5 pb-24 pt-32 text-ivory sm:px-8 sm:pt-44 lg:px-12">
        <Ambient kind="fiction" count={18} />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[70vw] max-h-[700px] w-[70vw] max-w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #F2A93B33, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[42px] leading-none text-amber/40 sm:text-[58px]">
              II
            </span>
            <span className="label text-amber">Chapter Two · Shadow</span>
          </div>

          <h1 className="mt-7 text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[6.4vw]">
            <Typewriter text="The noir" className="block font-display" />
            <span className="block font-accent italic text-amber">quartet</span>
          </h1>

          <p className="measure mt-8 text-[19px] leading-[1.6] text-ivory/75 sm:text-[22px]">
            Four novels about people who move through the city at the hours when nobody is
            watching. Read in any order; they answer one another.
          </p>

          <div className="mt-9">
            <Button href="https://www.goodreads.com/author/show/619099.John_Galbraith_Simmons">
              Find the novels
            </Button>
          </div>
        </div>
      </header>

      <div className="relative bg-gradient-to-b from-[#141733] via-[#2B2438] to-[var(--surface)]">
        <Section className="pt-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ParallaxImage
                src="/images/noir.jpg"
                alt="A rain-slicked New York street at night lit by a single amber street lamp"
                className="aspect-[4/5] w-full"
                note="Replace with real photo"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <SectionLabel>Reading order</SectionLabel>
              <RevealHeading
                className="mt-6 text-[10vw] leading-[0.95] text-ivory sm:text-[6vw] lg:text-[3.4vw]"
                lines={[{ text: "Where to" }, { text: "start", italic: true }]}
              />
              <div className="measure mt-6 text-[17px] leading-[1.7] text-ivory/75 sm:text-[19px]">
                <ol className="space-y-3">
                  {fictionBooks.map((b, i) => (
                    <motion.li
                      key={b.slug}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                      className="flex gap-4 border-b border-ivory/15 pb-3"
                    >
                      <span className="font-display text-amber">{i + 1}.</span>
                      <span>
                        <a href={`#${b.slug}`} className="ulink font-medium">
                          {b.title}
                        </a>
                        <span className="ml-2 text-ivory/50">{b.meta}</span>
                      </span>
                    </motion.li>
                  ))}
                </ol>
              </div>
              <PlaceholderNote>
                [Confirm the intended reading order of the quartet with John.]
              </PlaceholderNote>
            </div>
          </div>
        </Section>
      </div>

      {fictionBooks.map((b, i) => (
        <Section key={b.slug} id={b.slug}>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 1, ease: EASE }}
              className={`lg:col-span-4 ${i % 2 ? "lg:order-2 lg:col-start-9" : ""}`}
            >
              <div className="mx-auto w-[58%] sm:w-[42%] lg:w-full">
                <Cover book={b} />
              </div>
            </motion.div>
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"}`}>
              <SectionLabel chapter={`No. ${i + 1}`}>Noir quartet</SectionLabel>
              <RevealHeading
                className="mt-5 text-[11vw] leading-[0.96] sm:text-[6.5vw] lg:text-[4vw]"
                lines={[{ text: b.title }]}
              />
              <p className="mt-5 measure font-accent text-[21px] italic leading-snug text-ink/75 sm:text-[26px]">
                {b.hook}
              </p>
              <Prose>
                <p className="mt-5">{b.synopsis}</p>
              </Prose>
              <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-[15px]">
                <div>
                  <dt className="label text-ink/45">Publisher</dt>
                  <dd className="mt-1">{b.publisher}</dd>
                </div>
                <div>
                  <dt className="label text-ink/45">First published</dt>
                  <dd className="mt-1">{b.year}</dd>
                </div>
              </dl>
              <div className="mt-7">
                <Button
                  variant="outline"
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    b.title + " John Galbraith Simmons novel",
                  )}`}
                >
                  Find a copy
                </Button>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
