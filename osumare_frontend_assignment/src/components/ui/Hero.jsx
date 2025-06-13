import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Hero({ openModal }) {
  return (
    <div className="bg-[#F7F7FB] px-4 sm:px-8">
      {/* Heading */}
      <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-center text-[#170F49] pt-10 leading-snug">
        Simplify Your Life with Our <br className="hidden sm:block" /> Todo App
      </h1>

      {/* Subheading */}
      <div className="text-center mt-5 sm:mt-7 font-roboto text-[#6F6C90] font-normal text-base sm:text-lg">
        <p>
          Stay organized and boost your productivity with our intuitive todo
          website.
        </p>
        <p>
          Experience a modern approach to task management that fits your
          lifestyle.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-8">
        <button
          onClick={openModal}
          className="font-dmSans font-bold text-base px-10 py-3 rounded-full bg-[#FF3E54] text-white hover:bg-[#e84157] transition duration-200"
        >
          Get started
        </button>
        <button className="font-dmSans font-normal text-base px-10 py-3 rounded-full border border-[#FF3E54] text-[#FF3E54] hover:bg-[#ffeef0] transition duration-200">
          Learn more
        </button>
      </div>

      {/* Hero Main Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-6">
        {/* Left Card */}
        <div className="w-full max-w-[774.51px] bg-[#FF3E54] rounded-3xl p-6 sm:p-10 flex flex-col justify-between h-[600px] sm:h-[642.68px]">
          <div>
            <p className="text-white opacity-50 text-[48px] sm:text-[80px] font-normal leading-tight">
              Organize.
            </p>
            <p className="text-white opacity-80 text-[48px] sm:text-[80px] font-normal leading-tight">
              Achieve.
            </p>
            <p className="text-white opacity-80 text-[48px] sm:text-[80px] font-normal leading-tight">
              Relax.
            </p>
          </div>
          <div>
            <p className="text-white text-base sm:text-lg font-normal mb-8">
              Turn clutter into clarity, chaos into control, and dreams into
              done. <br className="hidden sm:block" />
              bold visions into market success
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <button className="font-dmSans bg-white text-black font-semibold px-7 py-4 rounded-full hover:opacity-90">
                Get Started Today
              </button>
              <button className="font-dmSans bg-[#FF6B7A] text-white font-semibold px-7 py-4 rounded-full hover:bg-[#FF6B7A]/70">
                Discover Features
              </button>
            </div>
          </div>
        </div>

        {/* Right Card (Image) */}
        <div className="w-full max-w-[379.01px] h-[400px] sm:h-[642.68px] rounded-3xl relative overflow-hidden">
          <img
            className="rounded-3xl w-full h-full object-cover"
            src="/fredie_imf.png"
            alt=""
          />
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-[#FF3E54]/30 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/90 to-transparent"></div>
          <div className="absolute inset-0 text-white p-4 sm:p-6 flex flex-col justify-between">
            <div className="flex gap-17 pt-2 sm:pt-4">
              <div>
                <p className="font-bold opacity-50 text-2xl sm:text-4xl">
                  Your Tasks.
                </p>
                <p className="font-bold text-2xl sm:text-4xl">Our Tools.</p>
              </div>
              <div className="flex items-center justify-center space-x-3 opacity-90">
                {/* Active Dot */}
                <span className="w-3 h-3 rounded-full bg-white "></span>

                {/* Inactive Dots */}
                <span className="w-3 h-3 rounded-full border border-white"></span>
                <span className="w-3 h-3 rounded-full border border-white"></span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <IoIosArrowBack className="w-7 h-7" />
              <IoIosArrowForward className="w-7 h-7" />
            </div>
            <div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                {/* Logo and Info */}
                <div className="space-x-3 m-5">
                  <img
                    src="/logoipsum.png"
                    className="w-18 h-9 sm:w-28 sm:h-10 mt-1 mb-4"
                    alt="logo"
                  />
                  <div>
                    <p className="font-semibold text-black text-sm sm:text-base">
                      Freddie Halvorson
                    </p>
                    <p className="text-xs sm:text-sm text-black opacity-70">
                      Chief Productivity Enthusiast
                    </p>
                  </div>
                </div>
                <div className="rounded-full flex items-center justify-center p-2 sm:p-5">
                  <img
                    src="/playIcon.png"
                    alt="Play"
                    className="w-10 h-10 sm:w-14 sm:h-14"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Strip */}
      <div className="flex justify-center mt-10">
        <img src="/logoStrip.png" className="mb-8 max-w-full px-4" alt="" />
      </div>
    </div>
  );
}
