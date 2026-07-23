import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * Single-page portfolio. Each section renders its own
 * <section id="top|about|projects|experience|contact">, which is what the
 * nav hrefs and the scroll-spy in NavBar target.
 */
export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
