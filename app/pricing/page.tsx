import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";



import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Navbar2 from "../components/Navbar2";
import LogoRow from "../components/LogoRow";
import Footer from "../components/Footer";
;

const page = () => {
  const faqs = [
    {
      title: "The quick fox jumps over the lazy dog 1",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "The quick fox jumps over the lazy dog 2",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "The quick fox jumps over the lazy dog 3",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "The quick fox jumps over the lazy dog 4",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "The quick fox jumps over the lazy dog 5",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "The quick fox jumps over the lazy dog 6",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full min-h-screen bg-[#FAFAFA]">
          <div className="w-full max-w-[1050px] mx-auto py-[48px] px-4 lg:py-[112px] lg:px-0 flex flex-col gap-[48px]">
            {/* Navbar + Intro Section */}
            <div className="w-full h-auto bg-white rounded-lg shadow-md">
              <div className="w-full h-auto bg-white/50">
                {/* Navbar */}
                <Navbar2 />
                <div className="w-full mx-auto mt-[32px] lg:mt-[64px] flex flex-col items-center space-y-[16px] px-4 mb-20">
                  <h5 className="text-[#737373] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                    PRICING
                  </h5>
                  <h2 className="text-[#252B42] text-[32px] lg:text-[58px] font-bold leading-[40px] lg:leading-[80px] tracking-[0.2px] text-center">
                    Simple Pricing
                  </h2>
                  <div className="flex items-center space-x-[8px] lg:space-x-[15px]">
                    <Link
                      className="text-[#252B42] text-[18px] font-bold leading-[24px] tracking-[0.2px]"
                      href="#"
                    >
                      Home
                    </Link>
                    <div className="w-[9px] h-[16px]">
                      <span className="text-[#737373] text-12 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </div>
                    <span className="text-[#737373] text-[18px] font-bold leading-[24px] tracking-[0.2px]">
                      Pricing
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Short Intro Section */}
            <div className="flex flex-col items-center justify-center px-4 lg:px-0 space-y-[16px]">
              <div className="flex flex-col items-center w-full max-w-[625px] space-y-[8px]">
                <h2 className="text-[#252B42] text-[28px] sm:text-[32px] lg:text-[40px] font-montserrat font-bold leading-[36px] sm:leading-[40px] lg:leading-[50px] tracking-[0.2px] text-center">
                  Pricing
                </h2>
                <p className="hidden sm:block text-[#737373] text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] text-center tracking-[0.2px]">
                  Problems trying to resolve the conflict between <br />
                  the two major realms of Classical physics: Newtonian mechanics
                </p>
                <p className="block sm:hidden text-[#737373] text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] text-center tracking-[0.2px]">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics
                </p>
              </div>
            </div>

            <div className="mt-1">
              {/* TOGGLE BUTTON */}
              <div className="relative flex flex-row sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
                {/* Monthly Label */}
                <h5 className="text-[14px] sm:text-[16px] font-Montserrat font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
                  Monthly
                </h5>

                {/* Toggle Switch */}
                <div className="relative flex items-center w-[40px] sm:w-[45px] h-[22px] sm:h-[25px] bg-white border border-[#23A6F0] rounded-full">
                  <div className="absolute w-[16px] sm:w-[19px] h-[16px] sm:h-[19px] bg-[#D0D0D0] rounded-full left-1 top-[3px] transition-transform transform-gpu"></div>
                </div>

                {/* Yearly Label */}
                <h5 className="text-[14px] sm:text-[16px] font-Montserrat font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
                  Yearly
                </h5>

                {/* Save Button */}
                <button className="flex items-center justify-center p-2 w-24 sm:w-28 h-10 sm:h-11 bg-[#B3E3FF] rounded-[37px]">
                  <h6 className="text-[12px] sm:text-[14px] font-Montserrat font-bold text-[#23A6F0] text-center tracking-[0.2px]">
                    Save 25%
                  </h6>
                </button>
              </div>
              <div className="flex flex-col items-center md:flex-row  mt-12 gap-6">
                {/* Free Plan */}
                <div className="max-w-sm w-full bg-[#ffffff] border border-[#23A6F0] rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-200">
                  <h3 className="text-xl font-bold font-montserrat text-center text-[#252B42]">
                    FREE
                  </h3>
                  <p className="text-center font-montserrat text-gray-500 mt-2">
                    Organize across all apps by hand
                  </p>
                  <div className="text-center font-montserrat text-[#23A6F0] text-4xl font-bold mt-4">
                    0
                    <span className="text-2xl font-montserrat align-top text-[#23A6F0] ml-2">
                      $
                    </span>
                  </div>
                  <span className="text-center font-montserrat text-[#8EC2F2] mt-2">
                    Per Month
                  </span>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-700">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-700">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-700">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-500 rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-500">
                        1GB Cloud storage
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-500 rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-500">
                        Email and community support
                      </span>
                    </li>
                  </ul>
                  <button className="mt-6 w-full font-montserrat bg-[#23A6F0] text-white font-medium py-2 rounded hover:bg-blue-600">
                    Try for free
                  </button>
                </div>

                {/* Paid Plan */}
                <div className="max-w-sm w-full bg-[#252B42] border border-blue-300 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-200">
                  <h3 className="text-xl font-bold font-montserrat text-center text-[#ffffff]">
                    STANDARD
                  </h3>
                  <p className="text-center font-montserrat text-[#ffffff] mt-2">
                    Organize across all apps by hand
                  </p>
                  <div className="text-center font-montserrat text-[#23A6F0] text-4xl font-bold mt-4">
                    9.99
                    <span className="text-2xl align-top font-montserrat text-[#23A6F0] ml-2">
                      $
                    </span>
                  </div>
                  <p className="text-center ml-[140px] font-montserrat text-[#8EC2F2]">
                    Per Month
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-[#ffffff]">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-[#ffffff]">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-[#ffffff]">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-500 rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-[#ffffff]">
                        1GB Cloud storage
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-500 rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-[#ffffff]">
                        Email and community support
                      </span>
                    </li>
                  </ul>
                  <button className="mt-6 font-montserrat w-full bg-[#23A6F0] text-[#ffffff] font-medium py-2 rounded hover:bg-blue-600">
                    Try for free
                  </button>
                </div>

                {/* Additional Plan */}
                <div className="max-w-sm w-full bg-[ffffff] border border-blue-300 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-200">
                  <h3 className="text-xl font-montserrat font-bold text-center text-[#252B42]">
                    PREMIUM
                  </h3>
                  <p className="text-center font-montserrat text-[#737373] mt-2">
                    Organize across all apps by hand
                  </p>
                  <div className="text-center font-montserrat text-[#23A6F0] text-4xl font-bold mt-4">
                    0
                    <span className="text-2xl font-montserrat align-top text-[#23A6F0] ml-2">
                      $
                    </span>
                  </div>
                  <p className="text-center font-montserrat text-[#8EC2F2]">
                    Per Month
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-700">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-700">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-700">
                        Unlimited product updates
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-500 rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-500">
                        1GB Cloud storage
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-500 rounded-full">
                        ✓
                      </span>
                      <span className="ml-3 font-montserrat text-gray-500">
                        Email and community support
                      </span>
                    </li>
                  </ul>
                  <button className="font-montserrat mt-6 w-full bg-[#23A6F0] text-white font-medium py-2 rounded hover:bg-blue-600">
                    Try for free
                  </button>
                </div>
              </div>

              {/* COMPANIES */}
              <div className="w-full h-auto bg-[#FAFAFA]">
                <div className="max-w-[1050px] mx-auto py-[80px] px-4 ">
                  <h4 className="font-montserrat text-center text-[20px] sm:text-[22px] md:text-[24px] text-[#252B42] font-normal leading-[30px] tracking-[0.2px]">
                    Trusted By Over 4000 Big Companies
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-translate-y-48">
          <LogoRow />

          <div className="w-full bg-white">
            <div className="max-w-screen-lg mx-auto py-20 px-8">
              {/* FAQs Heading */}
              <div className="text-center mb-12">
                <h2 className="font-Montserrat font-bold text-4xl text-[#252B42] mb-4">
                  Pricing FAQs
                </h2>
                <h4 className="font-Montserrat font-normal text-lg text-[#737373]">
                  Problems trying to resolve the conflict <br /> between the two
                  major realms of Classical physics
                </h4>
              </div>

              {/* FAQ Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start gap-4 p-6 "
                  >
                    <span className="text-[#23A6F0]">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <div>
                      <h5 className="font-Montserrat font-bold text-lg text-[#252B42] mb-2">
                        {faq.title}
                      </h5>
                      <h6 className="font-Montserrat font-normal text-sm text-[#737373]">
                        {faq.description}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h1 className="font-montserrat text-center md:flex justify-center items-center text-[#737373]">
              Haven&apos;t got your answer? Contact our support
            </h1>

            {/* white div 2 */}
            <div className="relative bg-white flex flex-col items-center py-[80px] lg:py-[160px] gap-[48px] lg:gap-[96px] w-full">
              {/* Container */}
              <div className="flex flex-col items-center gap-[24px] lg:gap-[36px] w-full lg:w-[1050px] px-4">
                {/* Main content */}
                <div className="flex flex-col items-center gap-[20px] lg:gap-[30px] w-full lg:w-[547px] h-auto">
                  <h2 className="font-Montserrat font-bold text-[24px] lg:text-[40px] leading-[36px] lg:leading-[50px] text-center text-[#252B42] w-full">
                    Start your 14 days free trial
                  </h2>

                  <h6 className="font-Montserrat font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[22px] text-center text-[#737373] w-full lg:w-[411px]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent.
                  </h6>

                  <div className="flex flex-row items-center gap-[10px]">
                    <button className="bg-[#23A6F0] text-[#FAFAFA] font-Montserrat font-bold text-[14px] lg:text-[16px] leading-[22px] rounded-[5px] px-[40px] py-[15px] hover:bg-blue-700">
                      Try it free now
                    </button>
                  </div>
                  {/* Social Media Logos */}
                  <div className="flex flex-row items-center gap-[20px] mt-2">
                    {/* Twitter */}
                    <Link
                      href="https://twitter.com"
                      className="text-[#1DA1F2] text-[24px] cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    {/* Facebook */}
                    <Link
                      href="https://facebook.com"
                      className="text-[#1877F2] text-[24px] cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    {/* Instagram */}
                    <Link
                      href="https://instagram.com"
                      className="text-[#000000] text-[24px] cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    {/* LinkedIn */}
                    <Link
                      href="https://linkedin.com"
                      className="text-[#0077B5] text-[24px] cursor-pointer rounded-none"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
