export default function Hero({ openModal }) {
  return (
    <>
      {/* HERO SECTION */}
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
          <button
            onClick={openModal}
            className="font-dmSans font-bold text-base px-10  py-3 rounded-full bg-[#FF3E54] text-white hover:bg-[#e84157] transition duration-200"
          >
            Get started
          </button>
          <button className="font-dmSans font-normal text-base px-10 py-3 rounded-full border border-[#FF3E54] text-[#FF3E54] hover:bg-[#ffeef0] transition duration-200">
            Learn more
          </button>
        </div>
        <div className="flex justify-center">
          <div className="mt-12 w-[774.51px] h-[642.68px] bg-[#FF3E54] rounded-3xl p-10 mb-0 flex flex-col justify-between">
            <div>
              <p className=" text-white opacity-50 text-[80px] font-normal leading-[90px]">
                Organize.
              </p>
              <p className="text-white opacity-80 text-[80px] font-normal leading-[90px]">
                Achieve.
              </p>
              <p className="text-white opacity-80 text-[80px] font-normal leading-[90px]">
                Relax.
              </p>
            </div>
            <div>
              <p className="text-white text-lg font-normal mb-24">
                Turn clutter into clarity, chaos into control, and dreams into
                done.
                <br className="hidden sm:block" />
                bold visions into market success
              </p>

              <div className="flex space-x-4 mb-12">
                <button className="font-dmSans bg-white text-black font-semibold px-7 py-4 rounded-full  hover:opacity-90">
                  Get Started Today
                </button>
                <button className="font-dmSans bg-[#FF6B7A] text-white font-semibold px-7 py-4 rounded-full  hover:bg-[#FF6B7A]/70">
                  Discover Features
                </button>
              </div>
            </div>
          </div>
          <div className="ml-3 mt-12 w-[379.01px] h-[642.68px] rounded-3xl relative overflow-hidden">
            <img
              className="rounded-3xl w-full h-full object-cover"
              src="/fredie_imf.png"
              alt=""
            />
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-[#FF3E54]/30 to-transparent"></div>
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/90 to-transparent"></div>
            <div className="absolute inset-0 text-white p-6 flex flex-col justify-between">
              <div className="pt-4">
                <p className="font-bold opacity-50 text-4xl">Your Tasks.</p>
                <p className="font-bold text-4xl">Our Tools.</p>
              </div>
              <div className="mb-4">
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  {/* Logo and Text */}
                  <div className="flex flex-col items-start space-x-3 m-5">
                    <img
                      src="/logoipsum.png"
                      className="w-28 h-10 mt-1 mb-2"
                      alt="logo"
                    />
                    <div>
                      <p className="font-semibold text-black text-base">
                        Freddie Halvorson
                      </p>
                      <p className="text-sm text-black opacity-70">
                        Chief Productivity Enthusiast
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full flex items-center justify-center p-5 ">
                    <img src="/playIcon.png" alt="Play" className="w-14 h-14" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <img src="/logoStrip.png" className="mb-8 " alt="" />
        </div>
      </div>
    </>
  );
}
