import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
    className="bg-cover bg-center sm:bg-right flex items-center justify-center sm:-translate-x-2"
    style={{
      backgroundImage: "url('/images/hero.jpg')",
      width: "100%",
      height: "100vh",
      backgroundPosition: "center top",
    }}
  >
      {/* Content Area */}
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center md:text-left max-w-screen-lg">
        {/* SUMMER 2020 heading */}
        <h3 className="text-white mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-3xl font-semibold">
          SUMMER 2020
        </h3>

        {/* NEW COLLECTION heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-snug sm:leading-relaxed mb-6">
          NEW <br className="sm:hidden" /> COLLECTION
        </h1>

        {/* Paragraph Description */}
        <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 break-words">
          We know how large objects <br className="sm:hidden" />
          will act, but things on a <br className="sm:hidden" />
          small scale.
        </p>
        {/* Shop Now button */}
        <Link href={'/shop'} className="px-6 py-3 sm:px-8 sm:py-4 bg-green-500 text-white text-sm sm:text-base lg:text-lg font-semibold rounded-md hover:bg-green-600 transition duration-300">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Hero;
