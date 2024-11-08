import { useEffect, useRef } from "react";
import { BASICS, FRAMEWORKS, TOOLS } from "../util/constants";
import Title from "./Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ refprop }) => {
  const titleRef = useRef(null);
  const dataRef = useRef([]);

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
  }, []);

  const INFO = [
    {
      title: "B A S I C S",
      info: BASICS,
    },
    {
      title: "F R A M E W O R K S",
      info: FRAMEWORKS,
    },
    {
      title: "T O O L S",
      info: TOOLS,
    },
  ];

  return (
    <section
      ref={refprop}
      className="bg-[#171C22] px-5 pt-16 lg:flex lg:flex-col lg:gap-10"
    >
      <div ref={titleRef}>
        <Title text={"Skills"} />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 py-5">
        {INFO.map((info, id) => (
          <div
            key={info.title}
            className="flex w-full flex-col items-center justify-center gap-3"
            ref={(el) => (dataRef.current[id] = el)}
          >
            <h2 className="text-xl font-[300] text-white">{info.title}</h2>
            <div className="lg:gap-15 grid w-fit grid-cols-3 justify-center gap-12 rounded-lg border-b border-t border-[#26292e] bg-[#191e24] p-5 md:px-8 md:py-10 lg:flex">
              {info.info.map((service) => (
                <div
                  key={service.name}
                  className="group relative flex transform justify-center gap-1.5 font-semibold text-white transition duration-500 hover:-translate-y-2"
                >
                  <img
                    src={service.img}
                    alt={service.name}
                    className="h-12 w-12"
                  />
                  <div className="absolute -bottom-full left-1/2 -translate-x-1/2 rounded-md px-2 py-2 opacity-0 transition-opacity group-hover:opacity-100">
                    {service.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
