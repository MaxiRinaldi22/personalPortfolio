import backgroundImg from "../assets/images/fondo-main.png";
import Header from "./Hearder";
import gitHubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import { gsap } from "gsap";
import "../components/button.css";
import { useEffect, useRef } from "react";

function Hero({ toAboutMe, toPorjects, toSkills, toContact }) {
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const iconsRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap
      .matchMedia()
      .add("(min-width: 768px)", () => {
        tl.fromTo(
          hiRef.current,
          { y: -300, opacity: 0, scale: 1, transformOrigin: "center center" }, // Empieza desde arriba en el centro de la pantalla
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 3,
            fontSize: 60,
            ease: "bounce.out",
          },
        ).fromTo(
          nameRef.current,
          { x: 200, opacity: 0, transformOrigin: "center center" },
          { x: 0, opacity: 1, duration: 2, ease: "power4.out" },
        );
      })
      .add("(max-width: 767px)", () => {
        tl.fromTo(
          hiRef.current,
          { y: -300, opacity: 0, scale: 3, transformOrigin: "center center" },
          {
            y: 0,
            opacity: 1,
            scale: 0.6,
            duration: 3,
            fontSize: 60,
            ease: "bounce.out",
          },
        ).fromTo(
          nameRef.current,
          { x: 200, opacity: 0, transformOrigin: "center center" },
          { x: 0, opacity: 1, duration: 2, ease: "power4.out" },
        );
      });

    gsap.fromTo(
      iconsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 3,
        stagger: 0.3,
        ease: "power2.out",
      },
    );

    gsap.to(svgRef.current, {
      opacity: 1,

      duration: 2,
      delay: 4,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: "power4.out",
    });
  }, []);

  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Header
        toAboutMe={toAboutMe}
        toPorjects={toPorjects}
        toSkills={toSkills}
        toContact={toContact}
      />
      <div className="relative flex h-screen flex-col items-center justify-center gap-5">
        <div className="flex flex-col text-center lg:flex-row lg:gap-4">
          <h2
            ref={hiRef}
            className="text-2xl font-[200] text-white lg:mt-3 lg:text-6xl"
          >
            Hi, I am{" "}
          </h2>
          <h1
            ref={nameRef}
            className="text-[40px] font-semibold text-[#ca721f] lg:text-7xl"
          >
            Maximiliano Rinaldi
          </h1>
        </div>
        <div ref={iconsRef} className="flex gap-3">
          <a href="https://github.com/MaxiRinaldi22" target="_blank">
            <button className="rounded-full duration-300 hover:scale-125">
              <img src={gitHubIcon} alt="GitHub Icon" className="h-12 w-12" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/maximiliano-rinaldi-41043732b/"
            target="_blank"
          >
            <button className="rounded-full duration-300 hover:scale-125">
              <img
                src={linkedinIcon}
                alt="Linkedin Icon"
                className="h-12 w-12"
              />
            </button>
          </a>

          <button className="learn-more" onClick={toAboutMe}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">More Info</span>
          </button>
        </div>
      </div>

      <svg
        ref={svgRef}
        className="absolute bottom-0 opacity-0"
        style={{ clipPath: "polygon(0 100%, 99% 100%, 100% 100%, 0% 100%)" }}
        width="100%"
        height="250"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 30 Q 25 70 50 30 T 100 30 V100 H0 Z" fill="#171C22" />
      </svg>
    </section>
  );
}

export default Hero;
