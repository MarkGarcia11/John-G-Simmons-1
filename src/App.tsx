import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AccentProvider } from "./components/Accent";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import { EASE } from "./lib/motion";

import Home from "./pages/Home";
import Science from "./pages/Science";
import Fiction from "./pages/Fiction";
import Translation from "./pages/Translation";
import Essays from "./pages/Essays";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/** Colored wipe matching the destination accent. */
function RouteWipe() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    setShow(true);
    const id = setTimeout(() => setShow(false), 520);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[85] origin-bottom"
          style={{ background: "var(--accent)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 1] }}
          exit={{ scaleY: 0, originY: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
        />
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <HashRouter>
      <AccentProvider>
        <div className="grain min-h-screen">
          {!ready && <Loader onDone={() => setReady(true)} />}
          <Cursor />
          <Nav />
          <ScrollTop />
          <RouteWipe />
          <main id="main">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </AccentProvider>
    </HashRouter>
  );
}
