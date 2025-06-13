import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import Todo from "../components/ui/Todo";
import Testimonial from "../components/ui/Testimonial";
import JoinNow from "../components/ui/JoinNow";
import Footer from "../components/ui/Footer";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    languages: [],
    timestamp: "",
  });
  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const validate = () => {
    let temp = {};
    temp.firstName = formData.firstName ? "" : "First Name is required";
    temp.lastName = formData.lastName ? "" : "Last Name is required";
    temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ""
      : "Email is invalid";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedLanguages = checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value);
        return { ...prev, languages: updatedLanguages };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newSubmission = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };
    setSubmissions([...submissions, newSubmission]);
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      languages: [],
      timestamp: "",
    });

    closeModal();
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <>
      <Navbar />
      <Hero openModal={openModal} />
      <Todo />
      <Testimonial />
      <JoinNow />

      {/*Dialog*/}
      <div className="p-6 max-w-6xl mx-auto">
        {/* Form Modal */}
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xs"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
              <div className="flex justify-between items-start mb-4">
                <Dialog.Title className="font-roboto text-2xl font-semibold mb-4">
                  Get Started Today!
                </Dialog.Title>
                <button
                  onClick={closeModal}
                  className="text-gray-500 text-xl cursor-pointer hover:text-black"
                >
                  ×
                </button>
              </div>
              <p className="font-roboto font-normal mb-4 text-lg text-gray-600">
                Fill in your details and take control of your tasks.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  {/* FIRST NAME  */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="font-dmSans font-medium"
                    >
                      {" "}
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your First Name"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-red-50"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  {/* LAST NAME  */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="font-dmSans font-medium"
                    >
                      {" "}
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-red-50"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                </div>
                {/* GENDER */}
                <div>
                  <label className="font-dmSans block font-medium mb-1">
                    Gender
                  </label>
                  <div className="flex gap-4">
                    {["Male", "Female"].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 bg-red-50 p-2 rounded cursor-pointer"
                      >
                        <div className="relative">
                          <input
                            type="radio"
                            name="gender"
                            value={label}
                            checked={formData.gender === label}
                            onChange={handleChange}
                            className="absolute opacity-0 w-5 h-5 cursor-pointer"
                          />
                          <div
                            className={`w-5 h-5 rounded-full bg-red-50 border-2 flex items-center justify-center transition-colors duration-200  ${
                              formData.gender === label
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          >
                            <div
                              className={`w-2.5 h-2.5 rounded-full bg-red-500 transition-opacity duration-200 ${
                                formData.gender === label
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            ></div>
                          </div>
                        </div>
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
                {/* LANGUAGES  */}
                <div>
                  <label className="font-dmSans block font-medium mb-1">
                    Language
                  </label>
                  <div className="space-y-2">
                    {["English", "Hindi", "Marathi"].map((lang) => (
                      <label
                        key={lang}
                        className="flex items-center gap-2 bg-red-50 p-2 rounded cursor-pointer"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="languages"
                            value={lang}
                            onChange={handleChange}
                            checked={formData.languages.includes(lang)}
                            className="absolute opacity-0 w-5 h-5 cursor-pointer"
                          />
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                              formData.languages.includes(lang)
                                ? "bg-red-500 border-red-500"
                                : "bg-white border-gray-300"
                            }`}
                          >
                            <TiTick
                              className={`w-3 h-3 text-white transition-opacity duration-200 ${
                                formData.languages.includes(lang)
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            />
                          </div>
                        </div>
                        {lang}
                      </label>
                    ))}
                  </div>
                </div>
                {/* EMAIL  */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-dmSans block font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-red-50"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                {/* AGREE BUTTON
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  <p className="font-dmSans text-sm">
                    I agree to the{" "}
                    <span className="text-red-500">terms and conditions</span>
                  </p>
                </div> */}
                <button
                  type="submit"
                  className="bg-[#FF3E54] text-white w-full p-2 rounded font-semibold"
                >
                  Done
                </button>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Thank You Popup */}
        <Dialog
          open={showThankYou}
          onClose={() => setShowThankYou(false)}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xs"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 text-center">
              <div className="text-3xl mb-4">❤️</div>
              <Dialog.Title className="font-roboto text-2xl font-semibold mb-2">
                Thank you for connecting with us.
              </Dialog.Title>
              <p className="font-roboto text-gray-600 mb-6">
                Our team will be contacting you soon.
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-[#FF3E54] text-white px-6 py-2 rounded font-medium"
              >
                Done
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Submission Table */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Submitted Details</h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white rounded-xl">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-center"></th>
                  <th className="px-4 py-3 text-center">Name</th>
                  <th className="px-4 py-3 text-center">Gender</th>
                  <th className="px-4 py-3 text-center">Language</th>
                  <th className="px-4 py-3 text-center">Email</th>
                  <th className="px-4 py-3 text-center">TimeStamp</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="px-4 py-3 text-center">{item.gender}</td>
                    <td className="px-4 py-3 text-center">
                      {item.languages.join(", ")}
                    </td>
                    <td className="px-4 py-3 text-center">{item.email}</td>
                    <td className="px-4 py-3 text-center">{item.timestamp}</td>
                  </tr>
                ))}
                {submissions.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      No submissions yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
