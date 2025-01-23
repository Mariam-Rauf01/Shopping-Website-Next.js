"use client";

import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ThankYouPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the code runs only on the client
  }, []);

  if (!isClient) {
    return null; // Optionally render nothing while the component is loading
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Thank you section */}
      <div className="text-center bg-[#f3f4f6] p-8 rounded-lg shadow-lg">
        <AiOutlineCheckCircle className="text-green-500 mx-auto text-6xl mb-4" />
        <h1 className="text-4xl font-semibold text-[#252B42] mb-4">Thank You for Your Order!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We appreciate your business. Your order is being processed, and you&apos;ll receive an email confirmation soon.
        </p>
        <div className="flex justify-center gap-6">
          <button
            className="px-6 py-3 bg-[#23A6F0] text-white rounded-lg hover:bg-[#1e90d1] transition duration-200"
            onClick={() => window.location.href = "/"}
          >
            Go to Home
          </button>
          <button
            className="px-6 py-3 bg-gray-200 text-[#252B42] rounded-lg hover:bg-gray-300 transition duration-200"
            onClick={() => window.location.href = "/viewOrderPage"}
          >
            View Orders
          </button>
        </div>
      </div>

      {/* Additional details or suggestions */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-[#252B42] mb-4">Need Help?</h2>
        <p className="text-lg text-gray-600 mb-6">
          If you have any questions or need assistance, feel free to reach out to our customer support team.
        </p>
        <button
          className="px-6 py-3 bg-[#F1F1F1] text-[#252B42] rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-200"
          onClick={() => window.location.href = "/contactSupportPage"}
        >
          Contact Support
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ThankYouPage;
