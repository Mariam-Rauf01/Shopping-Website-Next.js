"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactSupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you can replace this with an actual API request)
    setTimeout(() => {
      setIsSubmitting(false);
      setResponseMessage(
        "Your message has been sent successfully! We&apos;ll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-[#252B42] mb-4">
            Customer Support
          </h1>
          <p className="text-lg text-gray-600">
            Need help? Reach out to our support team, and we&apos;ll assist you
            as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="bg-[#f3f4f6] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#252B42] mb-4">
              Get In Touch
            </h2>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#23A6F0] mr-4" />
              <div>
                <p className="font-semibold text-[#252B42]">Email:</p>
                <p className="text-[#737373]">support@example.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-[#23A6F0] mr-4" />
              <div>
                <p className="font-semibold text-[#252B42]">Phone:</p>
                <p className="text-[#737373]">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-[#23A6F0] mr-4" />
              <div>
                <p className="font-semibold text-[#252B42]">Address:</p>
                <p className="text-[#737373]">
                  1234 Support St., City, Country
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-[#f3f4f6] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#252B42] mb-4">
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#252B42] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#252B42] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[#252B42] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's your isuue?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#252B42] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-[#23A6F0] rounded-md hover:bg-[#1E90D1] focus:outline-none transition duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </form>
            {responseMessage && (
              <div className="mt-4 text-green-600 text-lg">
                {responseMessage}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSupportPage;
