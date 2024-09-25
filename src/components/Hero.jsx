import backgroundImg from "../assets/images/fondo-main.png";
import Header from "./Hearder";
import gitHubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import "../components/button.css";

function Hero({ toAboutMe, toPorjects, toSkills, toContact }) {
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
      <div className="flex h-[80vh] flex-col items-center justify-center gap-5">
        <div className="flex flex-col text-center lg:flex-row lg:gap-4">
          <h2 className="text-2xl font-[200] text-white lg:mt-3 lg:text-6xl">
            Hi, I am{" "}
          </h2>
          <h1 className="text-[40px] font-semibold text-[#ca721f] lg:text-7xl">
            Maximiliano Rinaldi
          </h1>
        </div>
        <div className="flex gap-3">
          <div>
            <a href="https://github.com/MaxiRinaldi22" target="_blank">
              <button className="rounded-full p-1 duration-300 hover:scale-125">
                <img src={gitHubIcon} alt="GitHub Icon" className="h-12 w-12" />
              </button>
            </a>
            <a
              href="
            https://www.linkedin.com/in/maximiliano-rinaldi-41043732b/"
            target="_blank"
            >
              <button className="rounded-full p-1 duration-300 hover:scale-125">
                <img
                  src={linkedinIcon}
                  alt="Linkedin Icon"
                  className="h-12 w-12"
                />
              </button>
            </a>
          </div>
          <button className="learn-more" onClick={toAboutMe}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
