import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-4 py-3 md:px-8 ml-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[100px] h-[60px] object-cover"
        />

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-[#FF3E54]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center mr-22 space-x-8 font-raleway">
          <ul className="flex space-x-10 text-sm text-[#1e1e2f] font-semibold">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">More Option</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <button className="font-medium px-8 py-2 border border-[#FF3E54] text-[#FF3E54] rounded-sm hover:bg-[#ffeef0]">
            Log In
          </button>
          <button className="font-medium px-8 py-2 bg-[#FF3E54] text-white rounded-sm hover:bg-[#e84157]">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center font-raleway">
          <ul className="space-y-2 text-sm text-[#1e1e2f] font-semibold">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">More Option</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <div className="space-y-2 mt-3">
            <button className="w-full font-medium px-6 py-2 border border-[#FF3E54] text-[#FF3E54] rounded-sm hover:bg-[#ffeef0]">
              Log In
            </button>
            <button className="w-full font-medium px-6 py-2 bg-[#FF3E54] text-white rounded-sm hover:bg-[#e84157]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
