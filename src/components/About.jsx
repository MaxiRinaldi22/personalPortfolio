import { INFO } from "../constants/constants";
import downloadIcon from "../assets/icons/download.svg";
import myPhoto from "../assets/images/my-photo.png";
import Title from "./Title";

function About({ refprop }) {
  return (
    <section
      ref={refprop}
      className="flex flex-col justify-around gap-6 bg-[#171C22] py-20 lg:gap-20"
    >
      <Title text={"About me"} />
      <div className="flex flex-col-reverse gap-6 px-16 md:flex-row md:justify-center">
        <img
          src={myPhoto}
          alt="My photo"
          className="h-80 rounded-md object-cover"
        />

        <div className="flex flex-col justify-between max-md:gap-2">
          <p className="max-w-96 text-gray-400">
            I'm a self-taught frontend developer from Uruguay, skilled in
            JavaScript, React, HTML, CSS, and Tailwind. I enjoy building
            user-friendly web applications and aim to keep learning while
            contributing to innovative projects.
          </p>
          <hr className="border border-[#ca721f]" />

          <div>
            <ul className="grid grid-cols-1 gap-2">
              {INFO.map((info) => (
                <li key={info.title}>
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
