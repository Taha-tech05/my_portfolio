import UIProvider from "@/components/UIProvider";
import Shell from "@/components/Shell";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <UIProvider>
      <a href="#main" className="skip-link">Skip to content</a>
      <Shell>
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
      </Shell>
    </UIProvider>
  );
}
