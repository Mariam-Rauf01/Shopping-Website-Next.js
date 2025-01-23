import React from "react";
import Image from "next/image"; // Import Image from next/image

const LogoRow = () => {
  const logos = [
    "/images/l1.png",
    "/images/l2.png",
    "/images/l3.png",
    "/images/l4.png",
    "/images/l5.png",
    "/images/l6.png",
  ];

  return (
    <div className="bg-[#FAFAFA] flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-8 lg:gap-20 px-10 py-8 ">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          width={index === 0 ? 120 : index === logos.length - 1 ? 140 : 100} // Conditional width for the first and last logos
          height={index === 0 ? 120 : index === logos.length - 1 ? 140 : 100} // Conditional height for the first and last logos
          className={`h-full 
            ${index === 0 ? "custom-class-for-first" : ""}
            ${index === logos.length - 1 ? "custom-class-for-last" : "mt-10"}`} // Optional custom class for first and last logos
        />
      ))}
    </div>
  );
};

export default LogoRow;
