import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import Todo from "../components/ui/Todo";
import Testimonial from "../components/ui/Testimonial";
import JoinNow from "../components/ui/JoinNow";
import Footer from "../components/ui/Footer";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    languages: [],
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
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
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
                  <label className=" font-dmSans block font-medium mb-1">
                    Gender
                  </label>
                  <div className="flex gap-4">
                    {["Male", "Female"].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 bg-red-50 p-2 rounded cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={label}
                          checked={formData.gender === label}
                          onChange={handleChange}
                        />
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
                        <input
                          type="checkbox"
                          name="languages"
                          value={lang}
                          onChange={handleChange}
                          checked={formData.languages.includes(lang)}
                        />
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
        {showThankYou && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg">
            Thank you for your interest! We’ll get back to you soon.
          </div>
        )}

        {/* Submission Table */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Submitted Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Gender</th>
                  <th className="border px-4 py-2">Languages</th>
                  <th className="border px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="border px-4 py-2">{item.gender}</td>
                    <td className="border px-4 py-2">
                      {item.languages.join(", ")}
                    </td>
                    <td className="border px-4 py-2">{item.email}</td>
                  </tr>
                ))}
                {submissions.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
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
