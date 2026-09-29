import { useEffect } from "react";

function upsert(sel: string, create: () => HTMLElement, apply: (el: HTMLElement) => void) {
  let el = document.head.querySelector(sel) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

export default function Seo({
  title,
  description,
  path,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
}) {
  useEffect(() => {
    document.title = title;
    const url = `https://jgsimmons.com${path}`;

    const metas: [string, string][] = [
      ["description", description],
      ["og:title", title],
      ["og:description", description],
      ["og:type", "website"],
      ["og:url", url],
      ["og:image", "https://jgsimmons.com/images/hero-desk.jpg"],
      ["twitter:card", "summary_large_image"],
      ["twitter:title", title],
      ["twitter:description", description],
    ];

    metas.forEach(([name, content]) => {
      const attr = name.startsWith("og:") ? "property" : "name";
      upsert(
        `meta[${attr}="${name}"]`,
        () => {
          const m = document.createElement("meta");
          m.setAttribute(attr, name);
          return m;
        },
        (el) => el.setAttribute("content", content),
      );
    });

    upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      },
      (el) => el.setAttribute("href", url),
    );

    const prev = document.getElementById("page-jsonld");
    if (prev) prev.remove();
    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "page-jsonld";
      s.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
  }, [title, description, path, jsonLd]);

  return null;
}

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Galbraith Simmons",
  jobTitle: "Author, Science Writer, Novelist and Literary Translator",
  birthPlace: "Chicago, Illinois",
  homeLocation: "New York City",
  url: "https://jgsimmons.com/",
  alumniOf: ["Northwestern University", "Long Island University"],
  knowsLanguage: ["en", "fr"],
};

export const bookLd = (b: {
  title: string;
  year: string;
  publisher: string;
  subtitle?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: b.subtitle ? `${b.title}: ${b.subtitle}` : b.title,
  author: { "@type": "Person", name: "John Galbraith Simmons" },
  publisher: b.publisher,
  datePublished: b.year,
});
