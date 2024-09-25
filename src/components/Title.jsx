const Title = ({ text }) => {
  return (
    <div className="relative flex justify-center text-center">
      <h1 className="text-7xl font-extrabold text-[#21272e] opacity-20 lg:text-8xl" >
        {text}
      </h1>

      <h2 className="just absolute inset-0 top-10 -translate-y-1/3 transform text-3xl font-bold text-[#ca721f] lg:text-4xl lg:top-14">
        {text}
      </h2>
    </div>
  );
};

export default Title;
