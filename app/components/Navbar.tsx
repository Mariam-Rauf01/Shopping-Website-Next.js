"use client";
import { useState } from "react";
import Link from "next/link";
import {
  MdSearch,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdPersonOutline,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Topbar1 from "./Topbar";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import Search from "./Search";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const { getWishlistCount } = useWishlist();
  const wishlistCount = getWishlistCount();
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <Topbar1 />

      {/* Main Navbar */}
      <div className="bg-white py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
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
            <Link
              href="/shop"
              className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Shop
            </Link>
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
              href="/adminpanel"
              className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Admin Panel
            </Link>

            <Link
              href="/faq"
              className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
            >
              FAQs
            </Link>
          </nav>

          {/* Search Bar for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-blue-500">
              <MdSearch size={24} />
            </button>
            <div
              className={`absolute right-80 top-24 transition-all duration-300 ease-in-out ${
                isSearchOpen
                  ? "opacity-100 block"
                  : "opacity-0 pointer-events-none hidden md:block"
              }`} // Hide on small screens
              style={{
                width: isSearchOpen ? "300px" : "0",
                overflow: "hidden",
                zIndex: 10, // Ensure it appears above other elements
                backgroundColor: "white", // White background
                border: "1px solid #e2e8f0", // Light gray border
                borderRadius: "4px", // Rounded corners
                padding: isSearchOpen ? "10px" : "0", // Padding when open
              }}
            >
              <Search />
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="flex items-center text-blue-500">
              <MdFavoriteBorder size={24} />
              <span className="ml-1 text-sm">{wishlistCount}</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="flex items-center text-blue-500">
              <MdOutlineShoppingCart size={24} />
              <span className="ml-1 text-sm">{cartItemCount}</span>
            </Link>

            {/* Login/Register */}
            <Link href="/sign-up" className="flex items-center text-blue-500">
              <MdPersonOutline size={24} />
              <span className="ml-1">Login / Register</span>
            </Link>
          </div>

          {/* Search Bar for Desktop */}
          <div className="block md:hidden items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="flex justify-center items-center text-blue-500 ml-40 "
            >
              <MdSearch size={24} />
            </button>
            <div
              className={`absolute right-14 top-14 transition-all duration-300 ease-in-out ${
                isSearchOpen
                  ? "opacity-100 block"
                  : "opacity-0 pointer-events-none hidden md:block"
              }`} // Hide on small screens
              style={{
                width: isSearchOpen ? "300px" : "0",
                overflow: "hidden",
                zIndex: 10, // Ensure it appears above other elements
                backgroundColor: "white", // White background
                border: "1px solid #e2e8f0", // Light gray border
                borderRadius: "4px", // Rounded corners
                padding: isSearchOpen ? "10px" : "0", // Padding when open
              }}
            >
              <Search />
            </div>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
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
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Shop
            </Link>
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
              href="/adminpanel"
              className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Admin Panel
            </Link>
            <Link
              href="/faq"
              className="font-montserrat text-gray-600 hover:text-[#252B42] hover:underline"
            >
              FAQs
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="flex items-center text-blue-500 hover:text-[#252B42]"
            >
              <MdFavoriteBorder size={24} />
              <span className="ml-1">{wishlistCount}</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center text-blue-500 hover:text-[#252B42]"
            >
              <MdOutlineShoppingCart size={24} />
              <span className="ml-1">{cartItemCount}</span>
            </Link>

            {/* Login/Register */}
            <Link
              href="/sign-up"
              className="flex items-center text-blue-500 hover:text-[#252B42]"
            >
              <MdPersonOutline size={24} />
              <span className="ml-1">Login / Register</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
