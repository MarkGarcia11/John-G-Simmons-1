import { motion } from "framer-motion";
import { useSectionAccent } from "../components/Accent";
import Seo, { bookLd } from "../components/Seo";
import Ambient from "../components/Ambient";
import { Section, Prose, ChapterMark, InkBleed, PlaceholderNote } from "../components/Sections";
import { Button, RevealHeading, SectionLabel, ParallaxImage } from "../components/Primitives";
import { Cover } from "../components/BookCard";
import { scienceBooks } from "../lib/content";
import { EASE, viewport } from "../lib/motion";

const articles = [
  {
    outlet: "Nature",
    body: "Feature writing and reporting, including coverage of the Lindau Nobel Laureate Meeting (2010).",
  },
  {
    outlet: "New York Academy of Sciences",
    body: "Articles and reports produced for the Academy's publications and programs.",
  },
  {
    outlet: "Cancer research reporting",
    body: "Long-running coverage of new developments in oncology for professional and general readers.",
  },
  {
    outlet: "Celera Genomics",
    body: "Served as a consultant during the genomics era.",
  },
  {
    outlet: "Current Biography",
    body: "Many years of association with the magazine, writing biographical profiles.",
  },
];

export default function Science() {
  useSectionAccent("science");

  return (
    <>
      <Seo
        title="Science & Medicine | John Galbraith Simmons"
        description="The science and medicine books of John Galbraith Simmons: The Scientific 100, Doctors and Discoveries, and tPA for Stroke, written with Justin A. Zivin, MD, PhD."
        path="/science"
        jsonLd={scienceBooks.map(bookLd)}
      />

      <header className="relative overflow-hidden px-5 pb-10 pt-32 sm:px-8 sm:pt-44 lg:px-12">
        <Ambient kind="science" count={16} />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-20 h-[50vw] max-h-[520px] w-[50vw] max-w-[520px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #0FA3A340, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <ChapterMark n="I" title="Chapter One · Discovery" />
          <RevealHeading
            as="h1"
            className="mt-7 text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[6.4vw]"
            lines={[{ text: "Science &" }, { text: "Medicine", italic: true, accent: true }]}
          />
          <InkBleed
            className="measure mt-8 text-[19px] leading-[1.6] text-ink/75 sm:text-[22px]"
            text="Books about how knowledge is made — by people, under pressure, and often in dispute."
          />
          <div className="mt-8">
            <Button href="https://www.goodreads.com/author/show/619099.John_Galbraith_Simmons">
              Find the books
            </Button>
          </div>
        </div>
      </header>

      <Section>
        <Prose>
          <p>
            John Galbraith Simmons has worked extensively in the history of science and
            medicine. His books, aimed at both general and professional audiences, sit between
            biography and argument: who did the work, what it cost, and why it mattered.
          </p>
        </Prose>
      </Section>

      {/* Feature blocks */}
      {scienceBooks.map((b, i) => (
        <Section key={b.slug} id={b.slug}>
          <div
            className={`grid items-center gap-10 lg:grid-cols-12 ${
              i % 2 === 1 ? "lg:[direction:rtl]" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 1, ease: EASE }}
              className="lg:col-span-4 lg:[direction:ltr]"
            >
              <div className="mx-auto w-[58%] sm:w-[42%] lg:w-full">
                <Cover book={b} />
              </div>
            </motion.div>

            <div className="lg:col-span-7 lg:col-start-6 lg:[direction:ltr]">
              <SectionLabel>{`Book ${i + 1} of 3`}</SectionLabel>
              <RevealHeading
                className="mt-5 text-[10vw] leading-[0.98] sm:text-[6vw] lg:text-[3.6vw]"
                lines={[{ text: b.title }]}
              />
              {b.subtitle && (
                <p className="mt-3 font-accent text-[20px] italic text-ink/65 sm:text-[26px]">
                  {b.subtitle}
                </p>
              )}
              <p className="mt-6 measure text-[18px] leading-[1.65] text-ink/80 sm:text-[20px]">
                {b.hook}
              </p>
              <Prose>
                <p className="mt-4">{b.synopsis}</p>
              </Prose>

              <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 text-[15px]">
                <div>
                  <dt className="label text-ink/45">Publisher</dt>
                  <dd className="mt-1">{b.publisher}</dd>
                </div>
                <div>
                  <dt className="label text-ink/45">Year</dt>
                  <dd className="mt-1">{b.year}</dd>
                </div>
                {b.credit && (
                  <div>
                    <dt className="label text-ink/45">Collaboration</dt>
                    <dd className="mt-1">{b.credit}</dd>
                  </div>
                )}
              </dl>

              {b.note && <PlaceholderNote>{b.note}</PlaceholderNote>}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`https://www.google.com/search?q=${encodeURIComponent(b.title + " John Galbraith Simmons")}`}>
                  Find a copy
                </Button>
                <Button variant="outline" href="https://www.goodreads.com/author/show/619099.John_Galbraith_Simmons">
                  Reader reviews
                </Button>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Writing for science */}
      <Section className="border-t border-ink/10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>Beyond the books</SectionLabel>
            <RevealHeading
              className="mt-6 text-[10vw] leading-[0.95] sm:text-[6vw] lg:text-[3.4vw]"
              lines={[{ text: "Writing for" }, { text: "science", italic: true }]}
            />
            <div className="mt-8">
              <ParallaxImage
                src="/images/science.jpg"
                alt="Antique scientific books, a brass microscope and glass vials in soft teal light"
                className="aspect-[4/5] w-full"
                note="Replace with real photo"
              />
            </div>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {articles.map((a, i) => (
              <motion.li
                key={a.outlet}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
                className="group border-b border-ink/12 py-6"
              >
                <h3 className="font-display text-[24px] leading-tight sm:text-[30px]">
                  {a.outlet}
                </h3>
                <p className="measure mt-2 text-[16px] leading-relaxed text-ink/70">{a.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
        <PlaceholderNote>
          [Add specific article titles, dates and links for each outlet.]
        </PlaceholderNote>
      </Section>
    </>
  );
}
