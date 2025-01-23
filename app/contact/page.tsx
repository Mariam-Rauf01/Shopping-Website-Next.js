import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { PiArrowBendRightDownLight } from "react-icons/pi";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-20 bg-white max-w-full py-20 px-6 md:px-12">
        {/* Left Side */}
        <div className="text-[#252B42] md:ml-40 mt-4 md:mt-10 w-full md:w-[50%] text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center mb-4">
            <span className="font-montserrat ml-4 text-md font-semibold">
              CONTACT US
            </span>
          </div>
          <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0">
            <h1 className="font-bold text-3xl md:text-4xl ml-4 md:mt-8 md:mb-8">
              Get in touch today
            </h1>
            <div className="ml-4 mt-4">
              <span className="font-montserrat text-md text-[#737373]">
                We know how large objects will act, but things on a small scale.
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-4 ml-4">
              <h1 className="-translate-x-1 font-montserrat font-bold text-xl text-[#000000]">
                Phone: +451 215 215 <br />
                Fax: +451 215 215
              </h1>
            </div>
          </div>
        </div>

        {/* Social Media Logos */}
        <div className="md:-translate-y-[1800px] md:ml-[260px]">
          <div className="block sm:hidden mt-4 justify-center md:justify-start">
            <span className="flex flex-row items-center gap-6">
              <Link href="https://twitter.com" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-[#252B42] text-2xl cursor-pointer"
                />
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#252B42] text-2xl cursor-pointer"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#252B42] text-2xl cursor-pointer"
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[#252B42] text-2xl cursor-pointer"
                />
              </Link>
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full h-full mt-10 md:mt-0">
          <div className="relative w-full sm:w-[70%] mx-auto md:mx-0 flex justify-center md:justify-end">
            <Image
              src="/images/none.png"
              layout="responsive"
              width={16}
              height={9}
              alt="hero img"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Social Media Logos (for larger screens) */}
      <div className="hidden sm:block translate-x-20">
        <span className="flex flex-row items-center gap-6">
          <Link href="https://twitter.com" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-[#252B42] text-2xl cursor-pointer"
            />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#252B42] text-2xl cursor-pointer"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#252B42] text-2xl cursor-pointer"
            />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[#252B42] text-2xl cursor-pointer"
            />
          </Link>
        </span>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center gap-4 text-center mt-10">
        <h3 className="font-montserrat text-[#252B42] font-bold text-2xl">
          VISIT OUR OFFICE
        </h3>
        <p className="font-montserrat text-[#252B42] text-lg sm:text-4xl font-bold leading-snug">
          We help small businesses <br /> with big ideas
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center px-4 w-[300px] h-[350px] bg-white max-w-sm hover:scale-105 transition-transform duration-200">
          <div className="text-blue-500 mb-4">
            <FontAwesomeIcon icon={faPhone} size="4x" />
          </div>
          <div className="text-center text-gray-700">
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Get Support</h3>
          <button className="mt-6 px-6 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-200">
            Submit Request
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 w-[300px] h-[350px] bg-[#252B42] max-w-sm hover:scale-105 transition-transform duration-200">
          <div className="text-blue-500 mb-4">
            <FontAwesomeIcon icon={faLocationDot} size="4x" />
          </div>
          <div className="text-center text-white">
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">Get Support</h3>
          <button className="mt-6 px-6 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-200">
            Submit Request
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 w-[300px] h-[350px] bg-white max-w-sm hover:scale-105 transition-transform duration-200">
          <div className="text-blue-500 mb-4">
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </div>
          <div className="text-center text-gray-700">
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Get Support</h3>
          <button className="mt-6 px-6 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-200">
            Submit Request
          </button>
        </div>
      </div>

      {/* Call To Action Section */}
      <div className="flex flex-col justify-center items-center text-center md:mt-10 gap-4 px-6">
        <PiArrowBendRightDownLight size={90} className="text-blue-500" />
        <p className="font-montserrat text-[#252B42] text-sm font-bold uppercase tracking-wide">
          WE CAN&apos;T WAIT TO MEET YOU
        </p>
        <p className="font-montserrat text-[#252B42] text-4xl md:text-6xl font-bold">
          Let&apos;s Talk
        </p>
        <button className="mt-6 px-6 py-2 bg-[#23A6F0] text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Try it free now
        </button>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Page;
