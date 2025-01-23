"use client";
import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  MdFavoriteBorder,
  MdKeyboardArrowDown,
  MdOutlineShoppingCart,
  MdPersonOutline,
  MdSearch,
} from "react-icons/md";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import ChairCards from "../components/ChairCards";
import LogoRow from "../components/LogoRow";
import Footer from "../components/Footer";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
       <header>
        <div className="hidden md:block bg-[#23856D] text-white text-sm py-2">
          <div className="container mx-auto flex justify-between items-center flex-wrap px-4 md:px-8">
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <HiOutlinePhone className="text-base" />
                <span className="font-montserrat">(225) 555-0118</span>
              </div>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-base text-white"
                />
                <span className="font-montserrat">
                  michelle.rivera@example.com
                </span>
              </div>
            </div>

            {/* Follow Us */}
            <div className="hidden md:flex items-center justify-center space-x-4">
              <span className="hidden md:block font-montserrat">
                Follow Us and get a chance to win 80% off
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-2 text-white">
              <span className="hidden md:block font-montserrat">
                Follow Us:
              </span>
              <FaInstagram className="font-montserrat hover:text-gray-400 cursor-pointer" />
              <FaYoutube className="font-montserrat hover:text-gray-400 cursor-pointer" />
              <FaFacebook className="font-montserrat hover:text-gray-400 cursor-pointer" />
              <FaTwitter className="font-montserrat hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white py-3 shadow-md">
          <div className="container mx-auto flex justify-between items-center flex-wrap px-4 md:px-8">
            {/* Logo */}
            <div className="font-montserrat text-2xl font-bold text-[#252B42]">
              <Link href="/">Bandage</Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Home
              </Link>
              {/* Dropdown Trigger */}
              <div className="relative flex items-center space-x-1 font-montserrat text-gray-600 hover:text-gray-800 cursor-pointer">
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
                <button
                  aria-label="Toggle Dropdown"
                  onClick={toggleDropdown}
                  className="focus:outline-none"
                >
                  <MdKeyboardArrowDown size={20} />
                </button>
              </div>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute mt-[120px] translate-x-24 z-10 bg-white shadow-md w-48 p-2 rounded-md">
                  <Link
                    href="/men & women collection"
                    className="block font-montserrat font-medium  text-gray-600 hover:text-[#252B42] py-1 px-2 rounded-md hover:bg-gray-100"
                  >
                    Men & Women Collection
                  </Link>
                  <Link
                    href="/crockery"
                    className="block font-montserrat font-medium  text-gray-600 hover:text-[#252B42] py-1 px-2 rounded-md hover:bg-gray-100"
                  >
                    Crockery
                  </Link>
                </div>
              )}

              <Link
                href="/about"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Contact
              </Link>
              <Link
                href="/pages"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Pages
              </Link>
            </nav>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center space-x-4">
              <Link
                href="/search"
                className="text-[#252B42] hover:text-[#23A6F0]"
              >
                <MdSearch size={24} />
              </Link>
              <Link
                href="/cart"
                className="text-[#252B42] hover:text-[#23A6F0]"
              >
                <MdOutlineShoppingCart size={24} />
              </Link>
              <div
                onClick={toggleMenu}
                className="cursor-pointer flex flex-col space-y-1"
              >
                {isMenuOpen ? (
                  <IoClose size={24} className="text-gray-600" />
                ) : (
                  <div className="space-y-1">
                    <div className="h-1 w-8 bg-gray-600 rounded-lg"></div>
                    <div className="h-1 w-6 ml-2 bg-gray-600 rounded-lg"></div>
                    <div className="h-1 w-4 ml-4 bg-gray-600 rounded-lg"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Icons for desktop */}
            <div className="hidden md:flex items-center space-x-4 text-[#23A6F0]">
              <Link
                href="/login"
                className="flex items-center hover:text-[#252B42]"
              >
                <MdPersonOutline size={24} />
                <span className="ml-1 font-montserrat">Login / Register</span>
              </Link>
              <Link href="/search" className="hover:text-[#252B42]">
                <MdSearch size={24} />
              </Link>
              <Link
                href="/cart"
                className="flex items-center hover:text-[#252B42]"
              >
                <MdOutlineShoppingCart size={24} />
                <span className="ml-1 text-sm font-montserrat">1</span>
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center hover:text-[#252B42]"
              >
                <MdFavoriteBorder size={24} />
                <span className="ml-1 text-sm font-montserrat">1</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md p-4">
            <nav className="space-y-4 flex flex-col items-center justify-center">
              <Link
                href="/"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Home
              </Link>

              
            {/* Mobile Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-1 font-montserrat text-gray-600 hover:text-gray-800 cursor-pointer">
                <Link href="/shop">Shop</Link>

                <div
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the link
                    toggleDropdown();
                  }}
                >
                  <MdKeyboardArrowDown size={20} />
                </div>
              </div>
                {isDropdownOpen && (
                  <div className="absolute mt-2 bg-white shadow-md w-48 p-2 rounded-md z-10"  onClick={toggleDropdown}>
                    <Link
                      href="/men & women collection"
                      className="block font-montserrat font-medium  text-gray-600 hover:text-[#252B42] py-1 px-2 rounded-md hover:bg-gray-100"
                    >
                      Men & Women Collection
                    </Link>
                    <Link
                      href="/crockery"
                      className="block font-montserrat font-medium  text-gray-600 hover:text-[#252B42] py-1 px-2 rounded-md hover:bg-gray-100"
                    >
                      Crockery
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Contact
              </Link>
              <Link
                href="/pages"
                className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
              >
                Pages
              </Link>

              <Link
                href="/login"
                className="flex items-center text-[#23A6F0] hover:text-[#252B42]"
              >
                <MdPersonOutline size={24} />
                <span className="ml-1 font-montserrat">Login / Register</span>
              </Link>
              <Link
                href="/search"
                className="text-[#23A6F0] hover:text-[#252B42]"
              >
                <MdSearch size={24} />
              </Link>
              <Link
                href="/cart"
                className="flex items-center text-[#23A6F0] hover:text-[#252B42]"
              >
                <MdOutlineShoppingCart size={24} />
                <span className="ml-1 text-sm font-montserrat">1</span>
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center text-[#23A6F0] hover:text-[#252B42]"
              >
                <MdFavoriteBorder size={24} />
                <span className="ml-1 text-sm font-montserrat">1</span>
              </Link>
            </nav>
          </div>
        )}
      </header>
      <nav className="w-full h-auto py-6 bg-[#FAFAFA]">
        <div className="container flex md:flex-row md:-translate-x-[394px] justify-center items-center space-x-4">
          <span className="font-Montserrat font-bold text-lg text-[#252B42]">
            Home
          </span>
          <span className="text-[#BDBDBD]">
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </span>
          <span className="font-Montserrat font-bold text-lg text-[#BDBDBD]">
            Shop
          </span>
        </div>
      </nav>

      {/* Product Section */}

      <section className="bg-[#FAFAFA] font-montserrat overflow-hidden">
        <div className="container px-5  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap relative">
            <Image
              src="/images/single-product-1-cover-2.jpg"
              alt="ecommerce"
              width={500}
              height={500}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center"
            />

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#FAFAFA] hover:text-gray-900 focus:outline-none"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 translate-x-[420px] transform -translate-y-1/2 text-[#FAFAFA] hover:text-gray-900 focus:outline-none"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {/* Smaller Images below the main image */}
            <div className="block sm:hidden mt-6 -translate-x-44 pb-10">
              <div className="flex ml-[180px] space-x-4">
                <Image
                  src="/images/single-product-1-thumb-1.jpg"
                  alt="product thumbnail 1"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Image
                  src="/images/single-product-1-thumb-2.jpg"
                  alt="product thumbnail 2"
                  width={100}
                  height={100}
                  className="object-cover "
                />
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-[#252B42] text-3xl title-font font-medium mb-1">
                Floating Phone
              </h1>
              <div className="flex mb-4">
                <span className="flex gap-1 mt-2 items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5 text-[#F3CD03]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5 text-[#F3CD03]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5 text-[#F3CD03]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5 text-[#F3CD03]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5 text-[#F3CD03]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-montserrat text-[#737373] ml-3 font-semibold text-sm">
                    10 Reviews
                  </span>
                </span>
              </div>
              <span className="title-font font-medium text-2xl text-[#252B42]">
                $1,139.33
              </span>
              <div className="mt-2 title-font font-semibold text-md text-[#737373]">
                Availability :{" "}
                <span className="font-montserrat font-semibold text-[#23A6F0] text-sm">
                  In Stock{" "}
                </span>
              </div>
              <p className="leading-relaxed mt-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 mb-5"></div>
              <div className="flex gap-2">
                <button className="bg-[#23A6F0] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="ml-1 bg-[#2DC071] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="ml-1 bg-[#E77C40] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="ml-1 bg-[#252B42] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
              </div>

              <div className="flex">
                <button className="flex mt-8 py-2 px-4 whitespace-nowrap text-[#FAFAFA] bg-[#23A6F0] border-0 md:py-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Select options
                </button>
                <div className="flex ml-2 gap-1 md:space-x-2 mt-8 ">
                  {/* Heart Icon Button */}
                  <button className="rounded-full w-10 h-10 bg-transparent border border-gray-300 inline-flex items-center justify-center hover:border-gray-500 focus:outline-none">
                    <AiOutlineHeart className="w-5 h-5 text-gray-700" />
                  </button>

                  <button className="rounded-full w-10 h-10 bg-transparent border border-gray-300 inline-flex items-center justify-center hover:border-gray-500 focus:outline-none">
                    <AiOutlineShoppingCart className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Eye Icon Button */}
                  <button className="rounded-full w-10 h-10 bg-transparent border border-gray-300 inline-flex items-center justify-center hover:border-gray-500 focus:outline-none">
                    <AiOutlineEye className="w-5 h-5 text-[#000000]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Smaller Images below the main image */}
          <div className="hidden sm:block mt-6 -translate-x-14 pb-10">
            <div className="flex ml-[180px] space-x-4">
              <Image
                src="/images/single-product-1-thumb-1.jpg"
                alt="product thumbnail 1"
                width={100}
                height={100}
                className="object-cover"
              />
              <Image
                src="/images/single-product-1-thumb-2.jpg"
                alt="product thumbnail 2"
                width={100}
                height={100}
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ProductsCrads */}
      <section className="container py-20">
        <div className="w-full md:w-[1051px] h-auto flex justify-center items-center md:ml-40 md:gap-20 gap-4 relative">
          <span className="font-Montserrat font-bold text-[12px]  flex justify-center text-[#737373]">
            Description
          </span>
          <span className="font-Montserrat font-bold text-[12px] flex justify-center text-[#737373] whitespace-nowrap">
            Additional Information
          </span>
          <span className="font-Montserrat font-bold text-[12px]  flex justify-center text-[#737373]">
            Reviews
            <h1 className="text-[12px] text-[#23856D] ml-1 md:ml-2">(0)</h1>
          </span>
        </div>

        <div className="ml-4 md:ml-24 flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-8 md:py-12 items-center justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-[323px] h-auto flex-shrink-0 overflow-hidden">
            <Image
              src="/images/c.png"
              alt="Interior Design"
              width={323}
              height={400}
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row w-full lg:w-[65%] space-y-6 lg:space-y-0 gap-8">
            {/* Text Block */}
            <div className="w-full md:w-[332px] space-y-4 flex flex-col">
              <h2 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800">
                The quick fox jumps over
              </h2>
              <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>

            {/* List Section */}
            <div className="space-y-6 flex flex-col gap-6">
              {/* First List */}
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold font-Montserrat text-gray-800 mb-[10px] md:mb-[20px]">
                  The quick fox jumps over
                </h3>
                <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    The quick fox jumps over the lazy dog
                  </li>
                </ul>
              </div>

              {/* Second List */}
              <div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-[10px] md:mb-[20px]">
                  The quick fox jumps over
                </h3>
                <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    The quick fox jumps over the lazy dog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChairCards />

      <LogoRow />
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};

export default Header;
