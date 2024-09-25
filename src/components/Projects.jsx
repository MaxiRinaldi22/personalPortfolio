import luckyMines from "../assets/images/lucky-mines.png";
import headerLuckyMines from "../assets/images/header-lucky-mines.png";
import currencyConvertor from "../assets/images/currency-convertor.png";
import headerCurrencyConvertor from "../assets/images/header-currency-convertor.png";
import toDo from "../assets/images/to-do.png";
import headerToDo from "../assets/images/header-to-do.png";
import comingSoon from "../assets/images/coming-soon.png";
import arrow from "../assets/icons/arrow.svg";
import Title from "./Title";
import { twMerge } from "tailwind-merge";

function Card({
  firstImg,
  secondImg,
  title,
  text,
  link,
  components,
  className,
}) {
  return (
    <section
      className={twMerge(
        "flex min-w-[250px] flex-col justify-between  gap-3 rounded-lg border-b border-t border-[#26292e] bg-[#191e24] p-5 shadow-md",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="group relative h-48 w-full">
          <img
            src={firstImg}
            alt=""
            className="block h-48 w-full rounded-lg object-cover transition-all duration-500 ease-in-out group-hover:opacity-0"
          />
          <img
            src={secondImg}
            alt=""
            className="absolute left-0 top-0 h-48 w-full rounded-lg object-cover opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
          />
        </div>
        <a href={link} target="_blank">
          <div className="flex gap-1 text-white transition-transform duration-300 will-change-transform hover:-translate-y-0.5">
            <h3 className="mb-1 text-xl font-semibold">{title}</h3>
            <img src={arrow} alt="" />
          </div>
        </a>
        <p className="text-sm text-gray-400">{text} </p>
      </div>
      <div className="flex gap-3">
        {components.map((tag) => (
          <div
            key={tag}
            className="rounded-full bg-[#532f0d] px-2 font-semibold text-[#ca721f] shadow-lg"
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({ refprop }) {
  return (
    <section
      ref={refprop}
      className="flex flex-col items-center justify-center gap-10 bg-[#171C22] px-16 lg:gap-20"
    >
      <Title text={"Projects"} />
      <div className="grid max-w-[725px] grid-cols-1 gap-5 md:grid-cols-[repeat(4,_1fr)] md:grid-rows-[repeat(2,_1fr)] md:gap-5">
        <Card
          className="md:col-span-3"
          title={"Lucky mines"}
          text={
            "A game inspired by the popular mines game from the Stake casino. In this version, players must uncover tiles without hitting a mine to win. As they progress, they can choose to continue to increase their winnings or cash out with the accumulated prize."
          }
          link={"https://luckymines.vercel.app/"}
          firstImg={luckyMines}
          secondImg={headerLuckyMines}
          components={["HTML", "CSS", "React"]}
        />
        <Card
          className="md:col-start-4"
          title={"Todo list"}
          text={
            "A simple and functional To-Do List application built using React. It allows users to add, edit, delete, and filter tasks by their completion status."
          }
          link={"https://todo-list-theta-silk.vercel.app/"}
          firstImg={toDo}
          secondImg={headerToDo}
          components={["HTML", "CSS", "React"]}
        />

        <Card
          className="md:row-start-2"
          title={"E-commerce"}
          text={
            "The next project will be an e-commerce platform, focusing on providing a seamless shopping experience with a modern design and intuitive interface. Stay tuned for updates!"
          }
          link={"https://github.com/MaxiRinaldi22"}
          firstImg={comingSoon}
          secondImg={comingSoon}
          components={["Coming Soon..."]}
        />
        <Card
          className="md:col-span-3 md:row-start-2"
          title={"Currency converter"}
          text={
            "A fast and intuitive web application built with React! This app helps you convert values between multiple currencies in real-time, ensuring you have the most up-to-date exchange rates."
          }
          link={"https://currencyconvertor-black.vercel.app/"}
          firstImg={currencyConvertor}
          secondImg={headerCurrencyConvertor}
          components={["React", "Tailwind"]}
        />
      </div>
    </section>
  );
}

export default Projects;
