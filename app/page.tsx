

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <main>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}



