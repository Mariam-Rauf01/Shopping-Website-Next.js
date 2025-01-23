"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <header
  className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center ${
    isMenuOpen ? "bg-[#F6F6F6]" : "bg-white"
  }`}
>
          {/* Logo */}
          <div className="font-montserrat text-2xl font-bold text-gray-800">
            Bandage
          </div>

          {/* Navigation Links */}
          <nav
            className={`absolute md:static bg-[#F6F6F6] md:bg-transparent z-50 top-16 left-0 w-full md:w-auto md:flex flex-col md:flex-row items-center md:items-center text-gray-600 ${
              isMenuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <Link
              href="/"
              className="font-montserrat py-2 px-4 block text-center hover:text-gray-800"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="font-montserrat py-2 px-4 block text-center hover:text-gray-800"
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="font-montserrat py-2 px-4 block text-center hover:text-gray-800"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="font-montserrat py-2 px-4 block text-center hover:text-gray-800"
            >
              Contact
            </Link>
          </nav>

          {/* Right-side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#login"
              className="font-montserrat text-gray-600 hover:text-gray-800"
            >
              Login
            </Link>
            <Link
              href="#member"
              className="font-montserrat bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Become a member &rarr;
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex justify-center space-x-6 py-4">
              <Link href="/search">
                <FaSearch
                  size={20}
                  className="text-gray-600 hover:text-gray-800"
                />
              </Link>
              <Link href="/cart">
              <MdOutlineShoppingCart
                  size={20}
                  className="text-gray-600 hover:text-gray-800"
                />
              </Link>
              
            </div>
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
        </header>
      </div>
    </>
  );
};

export default Page;
