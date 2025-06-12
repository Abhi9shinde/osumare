export default function Hero() {
  return (
    <>
      <div className="bg-[#F7F7FB]">
        <h1 className="font-roboto font-bold text-5xl text-center text-[#170F49] pt-10">
          Simplify Your Life with Our <br /> Todo App
        </h1>
        <div className="text-center mt-7 font-roboto text-[#6F6C90] font-normal">
          <p>
            Stay organized and boost your productivity with our intuitive todo
            website.
          </p>
          <p>
            Experience a modern approach to task management that fits your
            lifestyle.
          </p>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <button className="font-dmSans font-bold text-base px-10  py-3 rounded-full bg-[#FF3E54] text-white hover:bg-[#e84157] transition duration-200">
            Get Started
          </button>
          <button className="font-dmSans font-bold text-base px-10 py-3 rounded-full border border-[#FF3E54] text-[#FF3E54] hover:bg-[#ffeef0] transition duration-200">
            Learn More
          </button>
        </div>
        <div className="flex justify-center">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
