import React from "react";
import { SERVICES } from "../constants/constants";
import Title from "./Title";

const Skills = ({refprop}) => {
  return (
    <section ref={refprop} className="bg-[#171C22] pt-16 lg:flex lg:flex-col lg:gap-10">
      <Title text={"Skills"} />
      <div className="py-10">
        <div className="lg:gap-15 grid grid-cols-3 justify-center gap-12 px-16 lg:flex">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group relative flex transform justify-center gap-1.5 font-semibold text-white transition duration-500 hover:-translate-y-2"
            >
              <img src={service.img} alt={service.name} className="h-12" />
              <div className="absolute -bottom-full left-1/2 -translate-x-1/2 rounded-md px-2 py-2 opacity-0 transition-opacity group-hover:opacity-100">
                {service.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
