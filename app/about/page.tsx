import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar2 from "../components/Navbar2";
import LogoRow from "../components/LogoRow";
import Footer from "../components/Footer";


const AboutUs = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-20 bg-white max-w-full py-8 px-6 md:px-12">
  {/* Left Side */}
  <div className="text-[#252B42] sm:ml-0 sm:mt-0  w-full sm:w-[50%] text-center md:text-left mb-8 md:mb-0">
    <div className="flex justify-center md:justify-center items-center mb-4 md:mt-20">
      <span className="hidden sm:block font-montserrat ml-4 text-md font-semibold">
        ABOUT COMPANY
      </span>
    </div>
    <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0">
      <h1 className="font-bold text-3xl md:text-4xl ml-4 mt-10 md:mb-8 md:ml-56 whitespace-nowrap">
        ABOUT US
      </h1>
      <div className="ml-4">
        <span className="hidden sm:block font-montserrat text-md text-[#737373] md:ml-52 whitespace-nowrap ">
          We know how large objects will act, <br /> but things on a small scale.
        </span>
        <span className="block sm:hidden text-center font-montserrat font-bold mt-4 text-[#737373] break-words">
          We know how large <br /> objects will act, but things <br /> on a small scale just do <br />not act that way.
        </span>
      </div>

      <div className="flex items-center ml-6 justify-center md:justify-start mt-8 md:ml-56">
        <button className="font-montserrat bg-blue-500 font-bold text-md px-6 py-4 rounded-md text-[#ffffff] hover:scale-105 transition-transform duration-200 flex items-center justify-center whitespace-nowrap">
          Get Quote New
        </button>
      </div>
    </div>
  </div>

  {/* Right Side (Image Section) */}
  <div className="relative sm:mr-0 mr-20 w-full sm:w-[50%] flex justify-center md:justify-end  sm:mt-0">
    <Image
      src="/images/none (1).png"
      width={600}
      height={450}
      alt="hero img"
      className="object-cover"
    />
  </div>
</div>


      {/* Problem Typing Section */}
      <div className="flex flex-col lg:flex-row items-start gap-4 w-full">
        {/* Left Side (First Text) */}
        <div className="mt-10 flex justify-center items-center md:ml-20 md:flex flex-col md:items-start gap-3 w-full lg:w-[394px] h-auto lg:order-1">
          <p className="font-montserrat text-[14px] leading-[20px] font-normal text-[#E74040]">
            Problems trying
          </p>

          {/* Section Title */}
          
          <h2 className="hidden sm:block font-montserrat w-full text-[24px] leading-[32px] font-bold text-[#252B42]">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br /> met sent.
          </h2>
          <h2 className="block sm:hidden font-montserrat text-center w-full text-[24px] leading-[32px] font-bold text-[#252B42]">
            Met minim Mollie non <br /> desert Alamo est sit <br /> cliquey dolor do met <br /> sent.
          </h2>
        </div>
      
        {/* Right Side (Last Paragraph) */}
        <div className="flex flex-col items-start gap-3 w-full lg:w-[529px] h-auto lg:order-2">
          <p className="hidden sm:block translate-x-64 mt-20 text-[14px] leading-[20px] font-normal tracking-[0.8px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p className="block sm:hidden -translate-x-14 mt-10 ml-[140px] text-[14px] leading-[20px] font-normal tracking-[0.8px] text-[#737373]">
            Problems trying to resolve the conflict between <br /> the two major realms of Classical physics:<br /> Newtonian mechanics.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative flex flex-col items-center bg-white py-10 lg:py-20 px-4">
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4 md:gap-40 max-w-[1050px] mx-auto">
          {/* Metric 1 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
            <h5 className="font-montserrat text-[16px] font-semibold text-[#737373] whitespace-nowrap ">
              Happy Customers
            </h5>
          </div>
          {/* Metric 2 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
            <h5 className="font-montserrat text-[16px] font-semibold text-[#737373]">
              Monthly Visitors
            </h5>
          </div>
          {/* Metric 3 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
            <h5 className="font-montserrat text-[16px] font-semibold text-[#737373] whitespace-nowrap">
              Countries Worldwide
            </h5>
          </div>
          {/* Metric 4 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
            <h5 className="font-montserrat text-[16px] font-semibold text-[#737373]">
              Top Partners
            </h5>
          </div>
        </div>
      </div>

    {/* Video Section */}
<div className="relative w-full bg-white h-[764px] max-w-[1440px] mx-auto flex justify-center items-center">
  {/* Video Card */}
  <div className="relative bg-white rounded-lg w-[90%] max-w-[989px] h-[540px] flex items-center justify-center">
    {/* Background Image */}
    <div className="absolute inset-0 rounded-lg overflow-hidden">
      <Image
        src="/images/vid.png"
        alt="Video Background"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      {/* Gradient Filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-80"></div>
    </div>

    {/* Play Button */}
    <div className="relative z-10">
      <button className="w-[92.6px] h-[92.6px] bg-[#23A6F0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[28px] h-[28px] text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </button>
    </div>
  </div>
</div>


      {/* Team Section */}
      <section>
        <div className="text-center md:translate-x-3/4 ml-10  max-w-lg">
          <h2 className="font-montserrat text-4xl font-bold text-[#252B42]">
            Meet Our Team
          </h2>
          <p className="font-montserrat text-base text-[#737373] mt-4">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-20">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-md overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src="/images/team1.jpg"
                alt="Team Member"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="font-montserrat text-lg font-semibold text-[#252B42]">
                Username
              </h5>
              <p className="font-montserrat text-[#737373]">Profession</p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.facebook.com" passHref>
                  <FaFacebook
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
                <Link href="https://www.instagram.com" passHref>
                  <FaInstagram
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
                <Link href="https://www.twitter.com" passHref>
                  <FaTwitter
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-md overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src="/images/team2.jpg"
                alt="Team Member"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="font-montserrat text-lg font-semibold text-[#252B42]">
                Username
              </h5>
              <p className="font-montserrat text-[#737373]">Profession</p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.facebook.com" passHref>
                  <FaFacebook
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
                <Link href="https://www.instagram.com" passHref>
                  <FaInstagram
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
                <Link href="https://www.twitter.com" passHref>
                  <FaTwitter
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-md overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src="/images/team3.jpg"
                alt="Team Member"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="font-montserrat text-lg font-semibold text-[#252B42]">
                Username
              </h5>
              <p className="font-montserrat text-[#737373]">Profession</p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.facebook.com" passHref>
                  <FaFacebook
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
                <Link href="https://www.instagram.com" passHref>
                  <FaInstagram
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
                <Link href="https://www.twitter.com" passHref>
                  <FaTwitter
                    size={20}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#FAFAFA]">
        <div className="text-center md:translate-x-3/4 ml-10 max-w-lg">
          <h2 className="font-montserrat text-4xl font-bold text-[#252B42]">
            Big Companies Are Here
          </h2>
          <p className="font-montserrat text-sm md:text-base text-[#737373] mt-8">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <LogoRow />
      </section>

      {/* groW */}
      <section className="relative mt-10 w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center">
        {/* Right Side Blue Section */}
        <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
          <div className="w-[438px] flex flex-col gap-[24px]">
            <h5 className="hidden sm:block text-[#ffffff] text-lg font-bold leading-[24px] tracking-[0.1px]">
              WORK WITH US
            </h5>
            <h5 className="block sm:hidden text-center text-[#ffffff] text-lg font-bold leading-[24px] tracking-[0.1px]">
              WORK WITH US
            </h5>
            <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px] md:-translate-x-8 text-center">
              Now Let&apos;s <br className="sm:hidden"/> grow Yours
            </h2>
            <p className="hidden sm:block text-[#ffffff] md:w-auto md:flex lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>
            <p className="block sm:hidden justify-center items-center text-[#ffffff] text-[12px] leading-[20px] tracking-[0.2px] text-center">
              The gradual accumulation of <br /> information about atomic and <br /> small-scale behavior during the <br /> first quarter of the 20th
            </p>
            <button className="w-[132px] h-[52px] ml-40 md:-translate-x-40 border border-white rounded-md md:flex items-center justify-center py-3 px-10 gap-2 mt-6 hover:bg-blue-700">
              <span className="text-white text-sm font-bold">Button</span>
            </button>
          </div>
        </div>
        {/* Left Side Image */}
        <div className="hidden sm:block w-[540px] md:w-1/2 h-full relative">
          <Image
            src="/images/py.png"
            width={400}
            height={400}
            alt="Testimonial Background"
            className="absolute w-[570px] h-[640px] left-[150px] inset-0 object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
