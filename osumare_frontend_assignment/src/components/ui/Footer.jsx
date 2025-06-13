export default function Footer() {
  return (
    <footer className="bg-white text-[#202020] px-10 py-14 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col max-w-md">
          <div className="flex items-center w-32 h-32 mb-4 overflow-hidden">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full mr-2 object-cover object-center"
            />
          </div>
          <p className="font-roboto font-normal text-sm mb-4">
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email here"
              className="font-dmSans border border-gray-400 px-4 py-2 rounded-l-md focus:outline-none w-full"
            />
            <button className="bg-[#FF3E54] text-white px-5 py-2 rounded-r-md hover:bg-[#e84157] transition">
              Join
            </button>
          </div>
          <p className="font-roboto font-normal text-xs mt-2 text-black">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap gap-34">
          <div>
            <h4 className="font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-4 text-sm font-normal">
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                Home Page
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                Blog Posts
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                User Guide
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                Community Forum
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                Feedback
              </li>
              <li className="hover:text-[#FF3E54] transition cursor-pointer">
                Support
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-[#FF3E54] transition cursor-pointer">
                <img src="/Facebook.png" alt="" />
                Facebook
              </li>
              <li className="flex items-center gap-3 hover:text-[#FF3E54] transition cursor-pointer">
                <img src="/Instagram.png" alt="" />
                Instagram
              </li>
              <li className="flex items-center gap-3 hover:text-[#FF3E54] transition cursor-pointer">
                <img src="/X.png" alt="" />X
              </li>
              <li className="flex items-center gap-3 hover:text-[#FF3E54] transition cursor-pointer">
                <img src="/LinkedIn.png" alt="" />
                LinkedIn
              </li>
              <li className="flex items-center gap-3 hover:text-[#FF3E54] transition cursor-pointer">
                <img src="/Youtube.png" alt="" />
                YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black mx-16 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
