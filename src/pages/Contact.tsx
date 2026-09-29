import { useState } from "react";
import { motion } from "framer-motion";
import { useSectionAccent } from "../components/Accent";
import Seo from "../components/Seo";
import Ambient from "../components/Ambient";
import { Section, InkBleed, PlaceholderNote } from "../components/Sections";
import { Button, RevealHeading, SectionLabel, ParallaxImage } from "../components/Primitives";
import { EASE } from "../lib/motion";

const reasons = [
  { v: "editor", l: "Editor or press" },
  { v: "reader", l: "Reader" },
  { v: "translation", l: "Translation inquiry (John & Jocelyne)" },
  { v: "other", l: "Something else" },
];

export default function Contact() {
  useSectionAccent("contact");
  const [sent, setSent] = useState(false);
  const [reason, setReason] = useState("reader");

  const field =
    "mt-2 w-full min-h-[52px] rounded-lg border border-ink/15 bg-white/70 px-4 py-3 text-[17px] text-ink outline-none transition-colors focus:border-[color:var(--accent)]";

  return (
    <>
      <Seo
        title="Contact John Galbraith Simmons"
        description="Write to author, science writer, novelist and translator John Galbraith Simmons. Translation inquiries reach John Galbraith Simmons and Jocelyne Geneviève Barque."
        path="/contact"
      />

      <header className="relative overflow-hidden px-5 pb-6 pt-32 sm:px-8 sm:pt-44 lg:px-12">
        <Ambient kind="home" count={8} />
        <div className="relative mx-auto max-w-[1400px]">
          <SectionLabel>Contact</SectionLabel>
          <RevealHeading
            as="h1"
            className="mt-6 text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[6vw]"
            lines={[{ text: "Write to" }, { text: "John", italic: true, accent: true }]}
          />
          <InkBleed
            className="measure mt-8 text-[19px] leading-[1.6] text-ink/75 sm:text-[22px]"
            text="One message, one person reading it. Replies usually take a few days."
          />
        </div>
      </header>

      <Section className="pt-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="rounded-xl p-8"
                style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)" }}
              >
                <h2 className="font-display text-[30px]">Thank you.</h2>
                <p className="mt-3 text-[17px] text-ink/70">
                  Your message has been prepared.
                </p>
                <PlaceholderNote>
                  [Connect this form to an email service — e.g. Formspree, Netlify Forms or a
                  mailto handler.]
                </PlaceholderNote>
              </motion.div>
            ) : (
              <form
                className="space-y-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="label text-ink/55">
                    Your name
                  </label>
                  <input id="name" name="name" required className={field} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className="label text-ink/55">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={field}
                    autoComplete="email"
                  />
                </div>

                <fieldset>
                  <legend className="label text-ink/55">Reason for writing</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {reasons.map((r) => {
                      const active = reason === r.v;
                      return (
                        <button
                          key={r.v}
                          type="button"
                          onClick={() => setReason(r.v)}
                          aria-pressed={active}
                          className="min-h-[44px] rounded-full px-4 text-[15px] font-semibold transition-all active:scale-[0.98]"
                          style={
                            active
                              ? { background: "var(--accent)", color: "#fff" }
                              : {
                                  border:
                                    "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
                                  color: "var(--accent)",
                                }
                          }
                        >
                          {r.l}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className="label text-ink/55">
                    Message
                    {reason === "translation" && (
                      <span className="ml-2 normal-case tracking-normal text-ink/45">
                        — addressed to John &amp; Jocelyne
                      </span>
                    )}
                  </label>
                  <textarea id="message" name="message" required rows={7} className={field} />
                </div>

                <Button type="submit">Send the message</Button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <ParallaxImage
              src="/images/nyc.jpg"
              alt="New York City rooftops at dusk seen through a window"
              className="aspect-[4/5] w-full"
              note="Replace with real photo"
            />
            <div className="mt-8">
              <h2 className="label text-ink/55">Direct email</h2>
              <p className="mt-2 text-[18px]">
                <a className="ulink" href="mailto:hello@jgsimmons.com">
                  [replace with email address]
                </a>
              </p>
            </div>
            <div className="mt-7">
              <h2 className="label text-ink/55">Location</h2>
              <p className="mt-2 text-[18px]">New York City</p>
            </div>
            <div className="mt-7">
              <h2 className="label text-ink/55">Translation rights</h2>
              <p className="mt-2 text-[17px] leading-relaxed text-ink/70">
                Inquiries about French-to-English translation are handled jointly by John
                Galbraith Simmons and Jocelyne Geneviève Barque.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
