import Image from "next/image";

export default function Vita() {
  return (
    <div className="w-full relative bg-[#23856D] rounded-[5px] pt-24 flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col lg:flex-row gap-[30px] items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col gap-[20px] text-center lg:text-left">
          <h4 className="lg:ml-28 font-montserrat font-normal text-[20px] text-white">
            SUMMER 2020
          </h4>
          <h1 className="lg:ml-28 font-montserrat font-bold text-[36px] lg:text-[58px] leading-[40px] lg:leading-[80px] text-white">
            Vita Classic Product
          </h1>
          <p className="hidden lg:block lg:ml-28 font-montserrat font-medium text-[14px] lg:text-[16px] leading-[20px] text-white">
            We know how large objects will act, We know
            <br /> how are objects will act, We know
          </p>
          <p className="sm:hidden font-montserrat font-medium text-[14px] text-[#FAFAFA]">
            We know how large objects <br /> will act, but things on a <br />{" "}
            small scale.
          </p>
          <div className="flex flex-col lg:flex-row gap-[28px] items-center lg:items-start">
            <h3 className="md:mb-10 lg:ml-28 font-montserrat font-bold text-[24px] text-white mt-1 lg:mb-0">
              $16.48
            </h3>

            <button className="rounded-[5px] bg-[#2DC071] py-[12px] px-10 hover:bg-green-400">
              <h1 className="font-montserrat font-semibold text-[14px] text-[#ffffff]">
                ADD TO CART
              </h1>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[70%] lg:w-[510px] aspect-[4/3]">
            {" "}
            {/* Adjust aspect ratio as needed */}
            <Image
              src="/images/green.png"
              width={400}
              height={360}
              alt="A descriptive text about the green image"
              className="w-full h-auto" // Maintain width and auto height
            />
          </div>
        </div>
      </div>
    </div>
  );
}
