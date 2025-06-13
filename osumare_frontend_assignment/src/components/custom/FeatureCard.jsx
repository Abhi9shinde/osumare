export default function FeatureCard({ imag, num, title, desc }) {
  return (
    <div className="w-70 h-80 bg-[#F5F5F5] rounded-xl p-6 shadow-sm relative border border-gray-200">
      <div className="flex justify-between items-start">
        <div className="bg-white p-4 rounded-lg">
          <img src={imag} alt="Feature Icon" className="w-8 h-8" />
        </div>
        <p className="text-5xl font-bold font-raleway text-gray-300 absolute top-4 right-4">
          {num}
        </p>
      </div>

      {/* Title */}
      <h3 className="text-[#0B1546] font-bold text-lg mt-4 mb-2">{title}</h3>

      {/* Red underline bars */}
      <div className="flex space-x-2 mb-4">
        <div className="w-16 h-2 bg-[#FF3E54] rounded-full"></div>
        <div className="w-6 h-2 bg-[#FF3E54] rounded-full"></div>
      </div>

      {/* Description */}
      <p className="text-sm text-black leading-relaxed">{desc}</p>
    </div>
  );
}
