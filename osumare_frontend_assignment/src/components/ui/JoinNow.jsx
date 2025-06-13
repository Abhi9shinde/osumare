export default function JoinNow() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between my-10 px-6 lg:px-40 gap-10">
      <img
        src="/phone.jpg"
        alt="Phone displaying app"
        className="w-full max-w-[585px] h-auto lg:h-[395px] object-cover shadow-md"
      />

      <div className="w-full max-w-xl text-center lg:text-left">
        <p className="font-roboto font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202020] mb-6 leading-tight">
          Start Organizing Your <br className="hidden sm:block" /> Life Today
        </p>
        <p className="font-roboto font-normal text-base sm:text-lg text-[#333333] mb-8">
          Join us now and transform your productivity with our intuitive to-do
          list platform!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="font-dmSans font-bold text-base px-8 py-3 bg-[#FF3E54] text-white hover:bg-[#e84157] transition duration-200">
            Sign Up
          </button>
          <button className="font-dmSans font-normal text-base px-8 py-3 border border-[#FF3E54] text-black hover:bg-[#ffeef0] transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
