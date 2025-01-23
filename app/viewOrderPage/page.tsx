"use client";
import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles if not already imported
import Link from "next/link"; // Import Link for navigation
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type Order = {
  status: string;
  trackingNumber: string;
  estimatedDelivery: string;
  orderPlaced: string; // Adding orderPlaced timestamp
};

const ViewOrderPage = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate fetching order details on component mount
  useEffect(() => {
    setLoading(true);
    // Example data fetching logic (this could be an API call)
    setTimeout(() => {
      const fetchedOrder = {
        status: "Shipped",
        trackingNumber: "123456789",
        estimatedDelivery: "2025-01-30",
        orderPlaced: new Date().toISOString(), // Current timestamp for order placed
      };
      setOrder(fetchedOrder);
      setLoading(false);
    }, 2000); // Simulating delay for loading data
  }, []);

  // Format the estimated delivery date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Format the order placed date
  const formatOrderPlacedDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  if (loading) {
    return (
      <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-6">

        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">
            <Skeleton width={200} />
          </h1>
          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">
              <Skeleton width={150} />
            </h2>
            <Skeleton count={1} height={20} />
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">
              <Skeleton width={150} />
            </h2>
            <Skeleton count={1} height={20} />
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">
              <Skeleton width={150} />
            </h2>
            <Skeleton count={1} height={20} />
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">
              <Skeleton width={150} />
            </h2>
            <Skeleton count={1} height={20} />
          </div>

          <div className="mt-6">
            <Skeleton width="100%" height={40} />
          </div>
        </div>
        <Footer />
      </div></>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold mb-4">View Your Order</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Order Status */}
          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Order Status:</h2>
            <p className="text-gray-700">{order?.status}</p>
          </div>

          {/* Tracking Number */}
          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Tracking Number:</h2>
            <p className="text-gray-700">{order?.trackingNumber}</p>
          </div>

          {/* Estimated Delivery */}
          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Estimated Delivery:</h2>
            <p className="text-gray-700">{formatDate(order?.estimatedDelivery || "")}</p>
          </div>

          {/* Order Placed Time */}
          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Order Placed At:</h2>
            <p className="text-gray-700">{formatOrderPlacedDate(order?.orderPlaced || "")}</p>
          </div>

          {/* Tracking Button */}
          <div className="mt-6 text-center">
            <button
              className="py-2 px-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200"
              onClick={() => toast.success(`Tracking Order: ${order?.trackingNumber}`)}
            >
              Track Your Order
            </button>
          </div>

          {/* Go to Home Button */}
          <div className="mt-4 text-center">
            <Link
              href="/"
              className="py-2 px-6 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none transition duration-200"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewOrderPage;
