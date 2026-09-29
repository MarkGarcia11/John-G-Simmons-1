import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSectionAccent } from "../components/Accent";
import Seo, { personLd } from "../components/Seo";
import Ambient from "../components/Ambient";
import {
  Section,
  Prose,
  ChapterMark,
  InkBleed,
  Marquee,
  Counter,
  PlaceholderNote,
} from "../components/Sections";
import { Button, RevealHeading, SectionLabel, ParallaxImage } from "../components/Primitives";
import { Cover } from "../components/BookCard";
import { accents, credibility, fictionBooks, scienceBooks, translations } from "../lib/content";
import { EASE, fadeUp, viewport } from "../lib/motion";

const chapters = [
  {
    n: "Chapter I",
    key: "science",
    title: "Science & Medicine",
    to: "/science",
    body: "Three books on how scientific and medical knowledge is actually made — by people, under pressure, often in dispute.",
    img: "/images/science.jpg",
    alt: "Antique scientific and anatomical books beside a brass microscope in teal window light",
  },
  {
    n: "Chapter II",
    key: "fiction",
    title: "Fiction",
    to: "/fiction",
    body: "A noir quartet: Lamplighter, Cried the Piper, The Sharing and Midnight Walking.",
    img: "/images/noir.jpg",
    alt: "A rain-slicked New York street at night lit by a single amber street lamp",
  },
  {
    n: "Chapter III",
    key: "translation",
    title: "Translation",
    to: "/translation",
    body: "Work from the French with Jocelyne Geneviève Barque, including the first complete English Aline and Valcour.",
    img: "/images/translation.jpg",
    alt: "Two open books side by side, one in French handwriting and one printed in English",
  },
  {
    n: "Chapter IV",
    key: "essays",
    title: "Essays & Press",
    to: "/essays",
    body: "Criticism and reporting for the Los Angeles Review of Books, Nature, the New York Academy of Sciences and others.",
    img: "/images/essays.jpg",
    alt: "Loose manuscript pages and a vintage typewriter in golden afternoon light",
  },
];

export default function Home() {
  useSectionAccent("home");
  const featured = [...scienceBooks, ...translations.slice(0, 1), ...fictionBooks.slice(0, 2)];

  return (
    <>
      <Seo
        title="John Galbraith Simmons | Author, Science Writer, Novelist & Translator"
        description="The official site of John Galbraith Simmons — author of The Scientific 100, Doctors and Discoveries and tPA for Stroke, a noir quartet of novels, and translations from the French with Jocelyne Geneviève Barque."
        path="/"
        jsonLd={personLd}
      />

      {/* ------------------------------- HERO ------------------------------- */}
      <header className="relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12">
        <Ambient kind="home" count={10} />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-[60vw] max-h-[620px] w-[60vw] max-w-[620px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #D9B98B66, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/3 h-[46vw] max-h-[480px] w-[46vw] max-w-[480px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #C4622D33, transparent 70%)" }}
        />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="label mb-6 text-clay"
            >
              Author · Science &amp; Medical Writer · Novelist · Translator
            </motion.p>

            <RevealHeading
              as="h1"
              delay={0.15}
              className="text-[15vw] leading-[0.9] sm:text-[11vw] lg:text-[7.4vw]"
              lines={[
                { text: "John" },
                { text: "Galbraith", italic: true, accent: true },
                { text: "Simmons" },
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.85 }}
              className="measure mt-8 text-[18px] leading-[1.65] text-ink/75 sm:text-[21px]"
            >
              From the laboratory to the shadows: one writer, one curiosity about what lies
              beneath.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 1 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button to="/science">Explore the books</Button>
              <Button to="/about" variant="outline">
                Read the story
              </Button>
            </motion.div>
          </div>

          <div className="relative lg:col-span-5">
            <ParallaxImage
              src="/images/hero-desk.jpg"
              alt="A writer's desk beside a window with a stack of books, an open notebook and morning light"
              className="aspect-[4/5] w-full"
              speed={30}
              note="Replace with real photo"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -7 }}
              transition={{ duration: 1.2, ease: EASE, delay: 1.1 }}
              className="absolute -bottom-8 -left-4 w-28 sm:w-36 lg:-left-16 lg:w-40"
            >
              <Cover book={scienceBooks[0]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 7 }}
              transition={{ duration: 1.2, ease: EASE, delay: 1.25 }}
              className="absolute -bottom-14 right-2 w-24 sm:w-32 lg:w-36"
            >
              <Cover book={fictionBooks[0]} />
            </motion.div>
          </div>
        </div>
      </header>

      {/* ---------------------------- ONE STORY ----------------------------- */}
      <Section className="pt-28 sm:pt-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>One story</SectionLabel>
            <RevealHeading
              className="mt-6 text-[10vw] leading-[0.95] sm:text-[6vw] lg:text-[3.6vw]"
              lines={[{ text: "Three shelves," }, { text: "one curiosity", italic: true }]}
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <InkBleed
              className="measure text-[19px] leading-[1.65] text-ink/80 sm:text-[22px]"
              text="The science books, the novels and the translations look like three different careers. They are not."
            />
            <Prose>
              <p className="mt-6">
                John Galbraith Simmons has worked extensively in the history of science and
                medicine, writing for general and professional readers alike. He is also the
                author of four novels, and — with his wife, Jocelyne Geneviève Barque — a
                translator from the French.
              </p>
              <p className="mt-5">
                What connects them is a single question: what is being hidden, and who benefits
                from keeping it hidden? In the body, in a clinical trial, in a city after dark,
                in a manuscript left untranslated for two hundred years.
              </p>
            </Prose>
            <PlaceholderNote>
              [Placeholder copy written in John's voice — awaiting his approval.]
            </PlaceholderNote>
          </div>
        </div>
      </Section>

      {/* -------------------------- CREDIBILITY ----------------------------- */}
      <section aria-label="Publishers and outlets" className="border-y border-ink/10 py-7">
        <p className="label mb-5 px-5 text-center text-ink/45 sm:px-8">
          Published and published in
        </p>
        <Marquee items={credibility} />
      </section>

      {/* ---------------------------- CHAPTERS ------------------------------ */}
      <Section>
        <SectionLabel>The four rooms</SectionLabel>
        <RevealHeading
          className="mt-6 max-w-[16ch] text-[11vw] leading-[0.95] sm:text-[6.5vw] lg:text-[4.2vw]"
          lines={[{ text: "Choose where" }, { text: "to begin", italic: true }]}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {chapters.map((c, i) => {
            const a = accents[c.key];
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 1, ease: EASE }}
              >
                <Link
                  to={c.to}
                  data-cursor="read"
                  className="group relative block overflow-hidden rounded-xl p-6 transition-shadow duration-500 hover:shadow-[0_28px_70px_-32px_rgba(30,27,24,0.5)] sm:p-8"
                  style={{ background: a.surface, ["--accent" as string]: a.accent }}
                >
                  <div className="relative">
                    <Ambient kind={c.key as "science"} count={7} />
                  </div>
                  <div className="relative">
                    <ChapterMark n={c.n} title={c.title} />
                    <div className="mt-6 overflow-hidden rounded-[10px]">
                      <img
                        src={c.img}
                        alt={c.alt}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-[30px] leading-tight sm:text-[38px]">
                      {c.title}
                    </h3>
                    <p className="measure mt-3 text-[16px] leading-relaxed text-ink/70">
                      {c.body}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold"
                      style={{ color: a.accent }}
                    >
                      Read this chapter
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* -------------------------- TITLE MARQUEE --------------------------- */}
      <section aria-hidden className="py-6 sm:py-10">
        <Marquee
          outline
          items={[
            "The Scientific 100",
            "Lamplighter",
            "Doctors and Discoveries",
            "Aline and Valcour",
            "Midnight Walking",
            "tPA for Stroke",
            "Cried the Piper",
            "The Sharing",
          ]}
        />
      </section>

      {/* --------------------------- FEATURED ------------------------------- */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Featured books</SectionLabel>
            <RevealHeading
              className="mt-6 text-[11vw] leading-[0.95] sm:text-[6.5vw] lg:text-[4.2vw]"
              lines={[{ text: "A shelf, in" }, { text: "no order", italic: true }]}
            />
          </div>
          <p className="text-[14px] text-ink/50">Swipe to browse →</p>
        </div>

        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 sm:gap-7">
          {featured.map((b) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="w-[62vw] shrink-0 snap-start sm:w-[36vw] lg:w-[20vw]"
            >
              <Cover book={b} />
              <p className="mt-4 font-display text-[19px] leading-tight">{b.title}</p>
              <p className="text-[14px] text-ink/55">
                {b.publisher} · {b.year}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------------------------- NUMBERS ------------------------------- */}
      <Section className="border-y border-ink/10">
        <motion.dl
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {[
            { n: 300, s: "+", l: "Articles and profiles" },
            { n: 3, s: "", l: "Books on science & medicine" },
            { n: 4, s: "", l: "Novels in the noir quartet" },
            { n: 6, s: "+", l: "Translated works from the French" },
          ].map((x) => (
            <div key={x.l}>
              <dt className="font-display text-[14vw] leading-none sm:text-[7vw] lg:text-[4.4vw]">
                <Counter to={x.n} suffix={x.s} />
              </dt>
              <dd className="mt-3 text-[15px] leading-snug text-ink/60">{x.l}</dd>
            </div>
          ))}
        </motion.dl>
        <PlaceholderNote>[Verify all counts with John before publishing.]</PlaceholderNote>
      </Section>

      {/* ------------------------------ CTA --------------------------------- */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ParallaxImage
            src="/images/nyc.jpg"
            alt="New York City rooftops and water towers at dusk seen through a window"
            className="aspect-[4/3] w-full"
            note="Replace with real photo"
          />
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <RevealHeading
              className="mt-6 text-[11vw] leading-[0.95] sm:text-[6.5vw] lg:text-[3.8vw]"
              lines={[{ text: "Writing from" }, { text: "New York", italic: true }]}
            />
            <Prose>
              <p className="mt-6">
                For editors, publishers, translation inquiries and readers: the door is open.
                Translation correspondence can be addressed to John &amp; Jocelyne.
              </p>
            </Prose>
            <div className="mt-8">
              <Button to="/contact">Write to John</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
