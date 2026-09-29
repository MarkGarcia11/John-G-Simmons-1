import { createContext, useContext, useEffect, useState } from "react";
import { accents, type Accent } from "../lib/content";

const AccentCtx = createContext<{ accent: Accent; setKey: (k: string) => void }>({
  accent: accents.home,
  setKey: () => {},
});

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState("home");
  const accent = accents[key] ?? accents.home;

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", accent.accent);
    r.style.setProperty("--accent-soft", accent.accentSoft);
    r.style.setProperty("--surface", accent.surface);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", accent.surface);
  }, [accent]);

  return <AccentCtx.Provider value={{ accent, setKey }}>{children}</AccentCtx.Provider>;
}

export const useAccent = () => useContext(AccentCtx);

/** Sets the page-level accent for color-graded "rooms". */
export function useSectionAccent(key: string) {
  const { setKey } = useAccent();
  useEffect(() => {
    setKey(key);
  }, [key, setKey]);
}
