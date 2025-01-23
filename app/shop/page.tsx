"use client";

import { MdKeyboardArrowDown } from "react-icons/md";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { BiSolidGridAlt } from "react-icons/bi";
import { BsListCheck } from "react-icons/bs";
import Navbar from "../components/Navbar";
import LogoRow from "../components/LogoRow";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Shop = () => {



  return (
    <>
      <Navbar />

      <div className="w-screen  bg-[#FAFAFA]  mb-10">
        <div className="w-full flex flex-col items-center ml-4 sm:ml-8 mt-2">
          <div className=" w-full mt-4 max-w-screen-xl flex flex-col md:flex-row gap-4 items-center py-10 md:py-10">
            {/* Shop Title */}
            <div className=" w-full justify-center md:justify-start md:w-auto flex md:mb-0">
              <h2 className=" font-montserrat font-bold text-lg md:text-2xl leading-6 md:leading-8 text-[#252B42]">
                Shop
              </h2>
            </div>
            {/* Breadcrumb */}
            <div className="w-full md:translate-x-full md:mr-44 gap-2 flex justify-center md:justify-start md:mb-0">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="font-montserrat font-bold text-sm md:text-base leading-6 text-[#252B42]">
                  Home
                </div>
                <span className="text-[#BDBDBD]">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                <h6 className="font-montserrat text-sm md:text-base leading-6 text-[#BDBDBD]">
                  Shop
                </h6>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <section className="w-full py-2">
            <div className="container mx-auto -translate-x-4 p-4 justify-center items-center grid grid-cols-1 sm:grid-cols-2 sm:p-4 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="relative bg-[#FAFAFA] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`/images/a${index + 1}.png`}
                      alt={`Image ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <p className="font-montserrat text-white font-bold text-base sm:text-sm md:text-lg">
                        Cloths <br />
                        <span className="font-light">5 items</span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>

      <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-4 items-center py-6 md:py-10">
        {/* Showing Results */}
        <div className="w-full flex justify-center md:justify-start md:mb-0">
          <h2 className="font-montserrat md:ml-20 font-semibold text-sm md:text-base leading-6 text-[#737373]">
            Showing all 12 results
          </h2>
        </div>
        {/* Views and Filter Options */}
        <div className="w-full flex flex-col md:flex-row  md:justify-end gap-4 items-center">
          <div className="flex md:flex-row  items-center md:-translate-x-[300px] gap-2 md:gap-4">
            <h1 className="font-montserrat font-semibold text-[#737373]">
              Views:
            </h1>
            <BiSolidGridAlt
              size={30}
              className="border-2 border-[#ECECEC] p-1 text-[#252B42] rounded-lg"
            />
            <BsListCheck
              size={30}
              className="border-2 border-[#ECECEC] p-1 text-[#252B42] rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            <button className="font-montserrat font-normal text-sm md:text-base border border-[#DDDDDD] px-4 py-2 flex justify-center items-center bg-[#F9F9F9] leading-6 text-[#737373] rounded-md hover:bg-gray-100">
              Popularity <MdKeyboardArrowDown size={20} />
            </button>
            <button className="font-montserrat font-normal text-sm md:text-base px-4 py-2 flex justify-center items-center bg-[#23A6F0] leading-6 text-white rounded-md hover:bg-blue-500">
              Filter
            </button>
          </div>
        </div>
      </div>

      

      <LogoRow />
      <Cards />
       
        
      <Footer />
    </>
  );
};

export default Shop;
