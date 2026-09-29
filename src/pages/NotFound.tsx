import { useSectionAccent } from "../components/Accent";
import Seo from "../components/Seo";
import { Section } from "../components/Sections";
import { Button, RevealHeading, SectionLabel } from "../components/Primitives";

export default function NotFound() {
  useSectionAccent("home");
  return (
    <>
      <Seo
        title="Page not found | John Galbraith Simmons"
        description="This page could not be found on the site of John Galbraith Simmons."
        path="/404"
      />
      <Section className="pt-40 sm:pt-52">
        <SectionLabel>404</SectionLabel>
        <RevealHeading
          as="h1"
          className="mt-6 text-[13vw] leading-[0.92] sm:text-[8vw] lg:text-[5.4vw]"
          lines={[{ text: "This page has" }, { text: "gone walking", italic: true }]}
        />
        <p className="measure mt-6 text-[18px] text-ink/70">
          The page you were looking for isn't here. Try the books, the essays, or start again
          from the beginning.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/">Back to the home page</Button>
          <Button to="/science" variant="outline">
            See the books
          </Button>
        </div>
      </Section>
    </>
  );
}
