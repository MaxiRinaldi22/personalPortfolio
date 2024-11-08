import { INFO } from "../util/constants";
import downloadIcon from "../assets/icons/download.svg";
import myPhoto from "../assets/images/my-photo.png";
import Title from "./Title";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const titleRef = useRef(null);
  const dataRef = useRef([]);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -100, opacity: 0, rotate: -10 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      imgRef.current,
      { x: -300 },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      lineRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      dataRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: "bounce.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: dataRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      buttonRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 1.7,
        duration: 0.6,
        ease: "po.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section id="about" className="flex flex-col justify-around gap-6 bg-[#171C22] py-20 lg:gap-20">
      <div ref={titleRef}>
        <Title text={"About me"} />
      </div>
      <div className="flex flex-col-reverse gap-10 px-5 md:flex-row md:justify-center">
        <img
          ref={imgRef}
          src={myPhoto}
          alt="My photo"
          className="h-72 rounded-md object-contain opacity-0 maskImage md:h-80"
        />

        <div className="flex flex-col justify-between gap-5 md:gap-0">
          <p className="max-w-96 text-balance text-gray-400" ref={textRef}>
            I'm a self-taught frontend developer from Uruguay, skilled in
            JavaScript, React, HTML, CSS, and Tailwind. I enjoy building
            user-friendly web applications and aim to keep learning while
            contributing to innovative projects.
          </p>
          <hr className="border border-[#ca721f]" ref={lineRef} />

          <div>
            <ul className="grid grid-cols-1 gap-2">
              {INFO.map((info, id) => (
                <li key={info.title} ref={(el) => (dataRef.current[id] = el)}>
                  <p className="text-gray-400">
                    <span className="font-[500] text-white">
                      {info.title}:{" "}
                    </span>
                    {info.info}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/Maximiliano_Rinaldi.pdf"
            ref={buttonRef}
            download="Maximiliano_Rinaldi.pdf"
          >
            <button className="flex w-44 items-center justify-center gap-2 rounded-lg bg-[#ca721f] px-5 py-1 font-semibold transition-transform duration-300 will-change-transform hover:scale-105">
              <img src={downloadIcon} alt="Download Icon" /> Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

About.displayName = "About";
export default About;
