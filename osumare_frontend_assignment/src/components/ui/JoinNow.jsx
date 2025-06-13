export default function JoinNow() {
  return (
    <div className="flex flex-row mx-40 items-center justify-between my-10">
      <img
        src="/phone.jpg"
        alt="Phone displaying app"
        className="w-[585px] h-[395px] object-cover shadow-md"
      />

      <div className="max-w-xl">
        <p className="font-roboto font-bold text-5xl text-[#202020] mb-6 leading-tight">
          Start Organizing Your <br /> Life Today
        </p>
        <p className="font-roboto font-normal text-lg text-[#333333] mb-8">
          Join us now and transform your productivity with our intuitive to-do
          list platform!
        </p>
        <div className="flex gap-4">
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
