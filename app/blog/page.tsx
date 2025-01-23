import React from "react";

import Image from "next/image";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Navbar2 from "../components/Navbar2";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "../components/Footer";

const page = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Username",
      profession: "Profession",
      image: "/images/team11.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 2,
      name: "Username",
      profession: "Profession",
      image: "/images/team12.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 3,
      name: "Username",
      profession: "Profession",
      image: "/images/team13.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 4,
      name: "Username",
      profession: "Profession",
      image: "/images/team3.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 5,
      name: "Username",
      profession: "Profession",
      image: "/images/team14.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 6,
      name: "Username",
      profession: "Profession",
      image: "/images/team1.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 7,
      name: "Username",
      profession: "Profession",
      image: "/images/team2.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 8,
      name: "Username",
      profession: "Profession",
      image: "/images/team15.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
    {
      id: 9,
      name: "Username",
      profession: "Profession",
      image: "/images/team16.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        twitter: "https://www.twitter.com",
      },
    },
  ];
  return (
    <>
      <Navbar2 />

      <div className="flex flex-col mt-20 items-center gap-[10px]">
        <h3 className="font-Montserrat text-[#737373] font-medium text-xl">
          WHAT WE DO
        </h3>
        <p className="w-full font-Montserrat text-3xl md:text-6xl font-bold md:leading-[90px] text-[#252B42] text-center">
          Innovation tailored for you
        </p>
        <div className="flex flex-row gap-4">
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

      <div className="grid grid-cols-4 gap-2 mt-10">
        {/* Left large image */}
        <div className="col-span-2 row-span-2">
          <Image
            src="/images/unsplash_Lks7vei-eAg.png"
            width={600}
            height={400}
            alt="Large Grid Item"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top-right smaller image */}
        <div>
          <Image
            src="/images/unsplash_gMsnXqILjp4.png"
            width={400}
            height={400}
            alt="Small Grid Item 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle-right smaller image */}
        <div>
          <Image
            src="/images/unsplash_1-aA2Fadydc.png"
            width={400}
            height={400}
            alt="Small Grid Item 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-right smaller image */}
        <div>
          <Image
            src="/images/unsplash_PSmDDeXaEWE.png"
            width={400}
            height={400}
            alt="Small Grid Item 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src="/images/unsplash_mcSDtbWXUZU (1).png"
            width={400}
            height={400}
            alt="Small Grid Item 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center text-center p-4 items-center mt-20">
        <h1 className="font-montserrat font-bold text-2xl text-[#252B42]">
          Start your 14 days free trial
        </h1>
        <p className="font-montserrat font-normal text-xl text-[#737373] text-center mt-10">
          Met minim Mollie non desert Alamo est sit cliquey dolor <br />
          do met sent. RELIT official consequent.
        </p>
        <button className="font-Montserrat font-bold mt-10 px-10 py-[14px] leading-[22px] rounded-[5px] bg-[#23A6F0] text-[#FAFAFA] hover:bg-blue-700">
          Try it free now
        </button>
        {/* Social Media Logos */}
        <div className="flex flex-row items-center gap-[20px] mt-4">
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

      {/* Team Section */}
      <section>
        <div className="mt-10 md:translate-x-3/4 ml-10 text-center max-w-lg">
          <h2 className="font-montserrat text-4xl font-bold text-[#252B42]">
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-20">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center bg-white shadow-lg rounded-md overflow-hidden"
            >
              <div className="w-full h-[230px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="text-center p-4">
                <h5 className="font-montserrat text-lg font-semibold text-[#252B42]">
                  {member.name}
                </h5>
                <p className="font-montserrat text-[#737373]">
                  {member.profession}
                </p>
                <div className="flex space-x-4 mt-4">
                  <Link href={member.socialLinks.facebook} passHref>
                    <FaFacebook
                      size={20}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    />
                  </Link>
                  <Link href={member.socialLinks.instagram} passHref>
                    <FaInstagram
                      size={20}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    />
                  </Link>
                  <Link href={member.socialLinks.twitter} passHref>
                    <FaTwitter
                      size={20}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
