import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Featured = () => {
  return (
    <div className="bg-white mb-8">
      {/* Section Header */}
      <div className="w-full text-center px-4">
        <h2 className="font-montserrat font-bold text-[#23A6F0]">Practice Advice</h2>
        <h1 className="hidden sm:block font-montserrat text-4xl sm:text-5xl md:font-bold text-[#252B42] mt-4">Featured Posts</h1>
        <h1 className="block sm:hidden font-montserrat text-4xl sm:text-5xl font-bold text-[#252B42] mt-4">Featured Products</h1>
        <p className="hidden sm:block font-montserrat text-sm sm:text-base text-[#737373] mt-4">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <p className="block sm:hidden font-montserrat text-sm sm:text-base text-[#737373] mt-4">
          Problems trying to resolve the <br /> conflict between the two major
        </p>
      </div>

      {/* Product Cards Row */}
      <div className="px-4 sm:px-10 lg:px-14 flex flex-wrap justify-center gap-6 mt-10">
        {/* Product Card 1 */}
        <div className="max-w-sm w-full sm:w-[348px] lg:w-[300px] bg-white shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/view.png"
              alt="Colorful houses"
              className="w-full h-[260px] object-cover hidden sm:block"
              width={400}
              height={200}
            />
               <Image
              src="/images/unsplash_gEZkP23pLZ4.png"
              alt="Colorful houses"
              className="w-full h-[260px] object-cover block sm:hidden"
              width={400}
              height={200}
            />
            <span className="absolute top-2 left-2 bg-red-500 font-montserrat text-white text-xs uppercase font-bold py-1 px-2 rounded">
              New
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className='font-montserrat'>Google</span>
              <span className="font-montserrat font-bold">&bull;</span>
              <span className='font-montserrat'>Trending</span>
              <span className="font-montserrat font-bold">&bull;</span>
              <span className='font-montserrat'>New</span>
            </div>
            <h2 className="mt-2 text-lg font-montserrat sm:text-xl font-bold text-gray-900">Loudest à la Madison #1 (L&apos;integral)</h2>
            <p className="mt-1 font-montserrat text-gray-600 text-sm sm:text-base">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
            <div className="flex items-center justify-between font-montserrat text-gray-400 text-sm mt-4">
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#23A6F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className='font-montserrat'>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
                </svg>
                <span className='font-montserrat'>10 comments</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/product-details">
                <span className="font-montserrat text-blue-500 hover:underline text-sm font-medium cursor-pointer">
                  Learn More 
                  <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] w-3 h-3 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="max-w-sm w-full sm:w-[348px] lg:w-[300px] bg-white shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/car.jpeg"
              alt="Colorful houses"
              className="w-full h-[260px] object-fit hidden sm:block"
              width={400}
              height={200}
            />
              <Image
              src="/images/unsplash_CuEvrPd3NYc.png"
              alt="Colorful houses"
              className="w-full h-[260px] object-fit block sm:hidden"
              width={400}
              height={200}
            />
            <span className="absolute top-2 left-2 bg-red-500 font-montserrat text-white text-xs uppercase font-bold py-1 px-2 rounded">
              New
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className='font-montserrat'>Google</span>
              <span className="font-montserrat font-bold">&bull;</span>
              <span className='font-montserrat'>Trending</span>
              <span className="font-montserrat font-bold">&bull;</span>
              <span className='font-montserrat'>New</span>
            </div>
            <h2 className="mt-2 font-montserrat text-lg sm:text-xl font-bold text-gray-900">Loudest à la Madison #1 (L&apos;integral)</h2>
            <p className="mt-1 font-montserrat text-gray-600 text-sm sm:text-base">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
            <div className="flex items-center justify-between text-gray-400 text-sm mt-4">
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#23A6F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className='font-montserrat'>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
                </svg>
                <span className='font-montserrat'>10 comments</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/product-details">
                <span className="font-montserrat text-blue-500 hover:underline text-sm font-medium cursor-pointer">
                  Learn More 
                  <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] w-3 h-3 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="max-w-sm w-full sm:w-[348px] lg:w-[300px] bg-white shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/umbrella.jpeg"
              alt="Colorful houses"
              className="w-full h-[256px] object-cover hidden sm:block"
              width={400}
              height={200}
            />
             <Image
              src="/images/unsplash_k0rVudBoB4c.png"
              alt="Colorful houses"
              className="w-full h-[256px] object-cover block sm:hidden"
              width={400}
              height={200}
            />

            <span className="absolute top-2 left-2 bg-red-500 font-montserrat text-white text-xs uppercase font-bold py-1 px-2 rounded">
              New
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className='font-montserrat'>Google</span>
              <span className="font-bold font-montserrat">&bull;</span>
              <span className='font-montserrat'>Trending</span>
              <span className="font-bold font-montserrat">&bull;</span>
              <span className='font-montserrat'>New</span>
            </div>
            <h2 className="mt-2 text-lg sm:text-xl font-montserrat font-bold text-gray-900">Loudest à la Madison #1 (L&apos;integral)</h2>
            <p className="mt-1 font-montserrat text-gray-600 text-sm sm:text-base">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
            <div className="flex items-center justify-between font-montserrat text-gray-400 text-sm mt-4">
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#23A6F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className='font-montserrat'>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
                </svg>
                <span className='font-montserrat'>10 comments</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/product-details">
                <span className="font-montserrat text-blue-500 hover:underline text-sm font-medium cursor-pointer">
                  Learn More 
                  <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] w-3 h-3 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
