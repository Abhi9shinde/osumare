import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Testimonial() {
  return (
    <div className="py-12 bg-white">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        {/*Head*/}
        <div className="w-130 h-130 mr-20 mb-54">
          <div className=" mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0E1F51] mb-8">
              Customer Testimonials
            </h2>
            <p className="text-[#0E1F51] mt-2 text-lg">
              This tool has transformed my productivity and organization!
            </p>
          </div>
          {/* Left: Testimonial Text */}
          <div className="relative border-[10px] border-[#FF3E54] p-10 w-95 h-115 max-w-xl mt-10">
            <div className="z-10 ml-12 mt-3 w-125 h-75 bg-white">
              <p className="font-roboto text-4xl font-bold text-[#333] mb-7 pt-5 ">
                Using this website has made my tasks so much easier! I can't
                imagine my day without it."
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-5 bg-[#FF3E54]" />
                <div>
                  <p className="font-roboto font-extrabold">Sherri Cronin</p>
                  <p className="font-roboto font-normal text-sm text-gray-600">
                    Project Manager, TechCorp
                  </p>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full border border-[#FF3E54] text-black flex items-center justify-center">
                  <IoIosArrowBack />
                </button>
                <button className="w-8 h-8 rounded-full bg-[#FF3E54] text-white flex items-center justify-center">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Framed Image */}
        <div className="relative w-[300px] h-[300px]">
          <div className="absolute inset-0 border-[10px] border-l-0 border-[#FF3E54] z-0">
            <div className="absolute top-0 left-0 w-10 h-10 bg-white z-10" />
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-white z-10" />
          </div>

          {/* Inner Image */}
          <div className="absolute inset-[10px] bg-white p-2 z-20">
            <img
              src="/girl.jpg"
              alt="testimonial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
