import Title from "./Title";

function Contanct({ refprop }) {
  return (
    <section
      ref={refprop}
      className="flex flex-col items-center justify-center gap-8 bg-[#171C22] px-16 pb-20"
    >
      <Title text={"Contact"} />
      <p className="max-w-96 text-center text-gray-400">
        I'm currently open to job opportunities and ready to contribute my
        skills to exciting projects. If you're looking for a passionate frontend
        developer, feel free to reach out!
      </p>
      <h3 className="rounded-lg border-b border-t border-[#26292e] bg-[#191e24] p-3 text-xl text-[#ca721f]">
        Mrinaldi2204@gmail.com
      </h3>
    </section>
  );
}

export default Contanct;
