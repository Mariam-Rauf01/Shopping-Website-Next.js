import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Section */}
      <div className="w-full px-6 md:px-14 py-6 bg-[#FAFAFA] flex flex-col md:flex-row space-y-4 md:space-y-0">
        <h2 className="text-xl md:text-2xl font-bold font-montserrat text-gray-800">
          Bandage
        </h2>
        <div className="flex space-x-4 md:translate-x-[1000px]">
          <FaInstagram className="text-blue-400 hover:text-blue-500 cursor-pointer text-lg md:text-xl" />
          <FaFacebook className="text-blue-400 hover:text-blue-500 cursor-pointer text-lg md:text-xl" />
          <FaTwitter className="text-blue-400 hover:text-blue-500 cursor-pointer text-lg md:text-xl" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-[#FFFFFF] md:px-14 md:-translate-x-10 text-gray-700">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 py-6 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Company Info */}
            <div>
              <h3 className="font-semibold font-montserrat text-gray-800">
                Company Info
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    We are hiring
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold font-montserrat text-gray-800">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Licenses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold font-montserrat text-gray-800">
                Features
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Business Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    User Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Live Chat
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-montserrat hover:text-blue-500"
                  >
                    Unlimited Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-montserrat font-semibold text-gray-800">
                Get In Touch
              </h3>
              <form className="mt-4">
                <div className="flex flex-row">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="py-4 px-4 mb-2 bg-[#F9F9F9] text-[#737373] font-bold sm:mb-0 w-full sm:w-64 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="font-montserrat bg-blue-500 text-white px-4 py-2 rounded-md sm:ml-4 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base hover:bg-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-2 text-sm font-montserrat text-gray-500">
                  Lorem ipsum dolor sit amet.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="hidden sm:block w-full font-montserrat text-sm px-4 md:px-14 py-4 bg-[#FAFAFA] flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
        <p>Made with Love By Finland | All Rights Reserved</p>
      </div>

      <div className="block sm:hidden font-montserrat text-sm py-4 px-6 bg-[#FAFAFA] flex-col justify-center items-center font-bold text-center">
        <p>
          Made with Love By <br /> Finland | All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
