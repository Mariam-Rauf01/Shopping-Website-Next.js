import Image from "next/image";

import React from 'react'

const Editors = () => {
  return (
    <div>
    <div className="w-full flex justify-center py-[10px] relative bg-[#f5f5f5]">
      <div className="w-full lg:w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[20px] sm:p-[40px]">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-bold md:text-[34px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
            EDITOR&apos;S PICK
          </h3>
          <p className="w-full mt-4 md:text-[15px] sm:w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve <br className="sm:hidden" />
             the conflict between
          </p>
        </div>
        {/* Images Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-[30px]">
          {/* Men Image */}
          <div className="relative w-full lg:w-[510px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0 group">
            <Image
              src="/images/man.png"
              alt="man"
              width={150}
              height={150}
              className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[50px] py-[8px] sm:py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-gray-100 group-hover:bg-gray-200">
              MEN
            </button>
          </div>
          {/* Women Image */}
          <div className="relative w-full lg:w-[240px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0 group">
            <Image
              src="/images/woman.png"
              alt="womn"
              width={150}
              height={150}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[48px] py-[8px] sm:py-[12px] shadow-md hover:bg-gray-100 group-hover:bg-gray-200">
              <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>
          {/* Accessories and Kids */}
          <div className="flex flex-col gap-[20px] w-full lg:w-[240px]">
            {/* Accessories Image */}
            <div className="relative w-full h-[242px] group">
              <Image
                src="/images/acce.png"
                alt="accessories"
                width={150}
                height={150}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md hover:bg-gray-100 group-hover:bg-gray-200">
                <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>
            {/* Kids Image */}
            <div className="relative w-full h-[242px] group">
              <Image
                src="/images/kid.png"
                alt="kids"
                width={150}
                height={150}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md hover:bg-gray-100 group-hover:bg-gray-200">
                <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  


    </div>
  )
}

export default Editors

  