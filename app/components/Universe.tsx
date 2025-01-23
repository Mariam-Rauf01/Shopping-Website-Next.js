import React from "react";
import Image from "next/image";

const Universe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 bg-white max-w-full py-14 px-6 md:px-12">
      {/* Right Side (Image) */}
      <div className="relative w-full md:w-[50%] mt-5 justify-center md:justify-end">
        <Image
          src="/images/asian.png"
          width={400}
          height={360}
          alt="hero img"
           className="w-full max-w-[400px] md:max-w-[400px] hidden sm:block"
        />
      </div>

      {/* Left Side (Text) */}
      <div className="text-[#252B42] w-full md:w-[50%] text-center md:text-left mb-8 md:mb-0">
        <div className="flex justify-center md:justify-start items-center mb-4">
          <span className="font-montserrat text-[#BDBDBD] font-bold text-md">SUMMER 2020</span>
        </div>
        <div className="w-full max-w-[280px] md:max-w-[320px] mx-auto md:mx-0">
          <h1 className="hidden lg:block md:block font-montserrat text-3xl text-[#252B42] font-bold mb-6">
            Part of the Neural <br /> Universe
          </h1>
          <h1 className="md:hidden font-montserrat text-3xl text-[#252B42] font-bold mb-6">
            Part of the <br className="sm:hidden" /> Neural  <br className="sm:hidden" /> Universe
          </h1>
          <div>
            <span className="hidden md:block lg:block font-montserrat text-[#737373] text-md">
              We know how large objects will act, <br /> but things on a small scale.
            </span>
            <span className="md:hidden sm:block font-montserrat text-[#737373] text-md">
              We know how large <br className="sm:hidden" /> objects will act, but <br className="sm:hidden" /> things on a small scale.
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-8">
            <button className="md:block lg:block hidden font-montserrat w-full md:w-auto bg-[#2DC071] font-bold text-md px-6 py-2 text-[#ffffff] hover:scale-105 transition-transform duration-200 items-center justify-center whitespace-nowrap">
              BUY NOW
            </button>
            <button className="font-montserrat w-full md:w-auto bg-[#ffffff] border-2 border-[#2DC071] font-bold text-md px-6 py-2 text-[#2DC071] hover:scale-105 transition-transform duration-200 items-center justify-center whitespace-nowrap md:block lg:block hidden">
              READ MORE
            </button>

            <button className="font-montserrat md:w-auto bg-[#23A6F0] font-bold text-md px-8 py-2 text-[#ffffff] hover:scale-105 transition-transform duration-200 items-center justify-center whitespace-nowrap md:hidden lg:hidden sm:block">
              BUY NOW
            </button>
            <button className="font-montserrat md:w-auto bg-[#ffffff] border-2 border-[#23A6F0] font-bold text-md px-6 py-2 text-[#23A6F0] hover:scale-105 transition-transform duration-200 items-center justify-center whitespace-nowrap md:hidden lg:hidden sm:block">
              READ MORE
            </button>
          </div>
          <div className="relative w-full md:w-[50%] mt-5 justify-center md:justify-end">
  <Image
    src="/images/asian.png"
    width={400} // Intrinsic width
    height={360} // Intrinsic height
    alt="hero img"
    className="w-full max-w-[400px] h-auto block sm:hidden" // Set height to auto
  />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Universe;
