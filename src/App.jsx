import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contanct from "./components/Contact";

function App() {
  const aboutMe = useRef(null);
  const porjects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null)

  const toAboutMe = () => {
    aboutMe.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toPorjects = () => {
    porjects.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toSkills = () => {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  };    

  const toContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Hero toAboutMe={toAboutMe} toPorjects={toPorjects} toSkills={toSkills} toContact={toContact}/>
      <About refprop={aboutMe} />
      <Projects refprop={porjects}/>
      <Skills refprop={skills}/>
      <Contanct refprop={contact}/>
      <footer>
        <p className="text-center text-gray-400 bg-[#171C22]">
          © 2024 Maximiliano Rinaldi. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
