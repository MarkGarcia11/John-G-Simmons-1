import { motion } from "framer-motion";
import { useSectionAccent } from "../components/Accent";
import Seo, { personLd } from "../components/Seo";
import Ambient from "../components/Ambient";
import { Section, Prose, InkBleed, PlaceholderNote } from "../components/Sections";
import { Button, RevealHeading, SectionLabel, ParallaxImage } from "../components/Primitives";
import { timeline } from "../lib/content";
import { EASE, viewport } from "../lib/motion";

export default function About() {
  useSectionAccent("about");

  return (
    <>
      <Seo
        title="About John Galbraith Simmons | Biography"
        description="John Galbraith Simmons was born in Chicago, graduated from Northwestern University, took a master's degree at Long Island University and pursued post-graduate studies in psychoanalysis. He lives in New York City."
        path="/about"
        jsonLd={personLd}
      />

      <header className="relative overflow-hidden px-5 pb-8 pt-32 sm:px-8 sm:pt-44 lg:px-12">
        <Ambient kind="home" count={8} />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Biography</SectionLabel>
            <RevealHeading
              as="h1"
              className="mt-6 text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[6vw]"
              lines={[
                { text: "About" },
                { text: "John", italic: true, accent: true },
              ]}
            />
            <InkBleed
              className="measure mt-8 text-[19px] leading-[1.6] text-ink/75 sm:text-[22px]"
              text="A writer for general and professional readers alike, at home in a laboratory report and in a novel about a city after midnight."
            />
          </div>
          <div className="lg:col-span-5">
            <ParallaxImage
              src="/images/portrait.jpg"
              alt="Portrait of author John Galbraith Simmons seated in a home library beside a window"
              className="aspect-[4/5] w-full"
              speed={26}
              note="Replace with John's real portrait"
            />
          </div>
        </div>
      </header>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>In his own site's words</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Prose>
              <p>
                John Galbraith Simmons was born in Chicago and graduated Northwestern
                University, with a subsequent master's degree in developmental studies from
                Long Island University and post-graduate studies in psychoanalysis. He writes
                for both general and professional audiences and is the author of several works
                of nonfiction and four novels.
              </p>
              <p className="mt-5">
                His books include <em>The Scientific 100: A Ranking of the Most Influential
                Scientists, Past and Present</em> (Carol, 1996), <em>Doctors and Discoveries:
                Lives That Created Today's Medicine</em> (Houghton Mifflin, 2002), and — in
                collaboration with Justin A. Zivin, MD, PhD — <em>tPA for Stroke: The Story of
                a Controversial Drug</em> (Oxford University Press, 2011).
              </p>
              <p className="mt-5">
                For many years associated with the magazine <em>Current Biography</em>, he has
                written for <em>Nature</em>, produced articles for the New York Academy of
                Sciences, reported on new developments in cancer research, and served as a
                consultant for Celera Genomics.
              </p>
              <p className="mt-5">
                His work as a translator, in collaboration with his wife, Jocelyne Geneviève
                Barque, includes Marquis de Sade's multivolume <em>Aline and Valcour, or the
                Philosophical Novel</em> (Contra Mundum, 2019).
              </p>
              <p className="mt-5">He lives in New York City.</p>
            </Prose>
            <PlaceholderNote>
              [Biography carried over from the current jgsimmons.com. Confirm any updates.]
            </PlaceholderNote>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="border-y border-ink/10">
        <SectionLabel>A life in chapters</SectionLabel>
        <RevealHeading
          className="mt-6 text-[11vw] leading-[0.95] sm:text-[6.5vw] lg:text-[3.8vw]"
          lines={[{ text: "Chicago to" }, { text: "New York", italic: true }]}
        />

        <div className="no-scrollbar mt-14 flex snap-x gap-6 overflow-x-auto pb-6">
          {timeline.map((t, i) => (
            <motion.article
              key={t.year + t.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: (i % 4) * 0.06, ease: EASE }}
              className="w-[74vw] shrink-0 snap-start rounded-xl bg-white/55 p-6 sm:w-[44vw] lg:w-[23vw]"
            >
              <span
                className="label"
                style={{ color: "var(--accent)" }}
              >
                {t.year}
              </span>
              <h3 className="mt-3 font-display text-[24px] leading-tight">{t.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{t.body}</p>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="mt-2 h-px origin-left"
          style={{ background: "var(--accent)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 1.4, ease: EASE }}
        />
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <RevealHeading
              className="text-[10vw] leading-[0.95] sm:text-[6vw] lg:text-[3.4vw]"
              lines={[{ text: "Say hello" }]}
            />
            <Prose>
              <p className="mt-5">
                Editors, publishers, readers and presses are all welcome to write. Translation
                inquiries reach both John and Jocelyne.
              </p>
            </Prose>
            <div className="mt-7">
              <Button to="/contact">Go to the contact page</Button>
            </div>
          </div>
          <ParallaxImage
            src="/images/hero-desk.jpg"
            alt="A writer's desk with books, a notebook and coffee in morning light"
            className="aspect-[4/3] w-full"
            note="Replace with real photo"
          />
        </div>
      </Section>
    </>
  );
}
