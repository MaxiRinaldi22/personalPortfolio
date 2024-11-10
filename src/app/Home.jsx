import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contanct from "../components/Contact";

function Home({ refs }) {
  const { heroRef, aboutRef, projectsRef, skillsRef, contactRef } = refs;

  return (
    <main>
      <section ref={heroRef}>
        <Hero aboutRef={aboutRef} />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={contactRef}>
        <Contanct />
      </section>
    </main>
  );
}

export default Home;
