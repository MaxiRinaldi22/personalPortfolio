import Title from "./Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

gsap.registerPlugin(ScrollTrigger);

function Contanct({ refprop }) {
  const titleRef = useRef(null);

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
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".left-an", {
      origin: "left",
      distance: "150%",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".right-an", {
      origin: "right",
      distance: "100%",
      duration: 2000,
      delay: 200,
    });
  }, []);

  return (
    <section
      ref={refprop}
      className="pt-10 flex flex-col items-center justify-center gap-8 bg-[#171C22] px-5 pb-20"
    >
      <div ref={titleRef}>
        <Title text={"Contact"} />
      </div>
      <p className="max-w-96 text-center text-gray-400 left-an">
        I'm currently open to job opportunities and ready to contribute my
        skills to exciting projects. If you're looking for a passionate frontend
        developer, feel free to reach out!
      </p>
      <h3 className="right-an rounded-lg border-b border-t border-[#26292e] bg-[#191e24] p-3 text-xl text-[#ca721f]">
        Mrinaldi2204@gmail.com
      </h3>
    </section>
  );
}

export default Contanct;
