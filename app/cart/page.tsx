"use client";

import React from "react";
import { useCart } from "../components/CartContext"; // Adjust the import path as necessary
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image"; // Import Image from next/image

const CartPage: React.FC = () => {
  const { cart, getTotalAmount, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-screen-xl mx-auto">
        <h1 className="text-3xl text-center font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item._id} className="mb-4 p-4 border rounded-lg shadow-md flex flex-col sm:flex-row items-center">
                {/* Image using Next.js Image component */}
                <div className="w-20 h-20 mr-4 mb-4 sm:mb-0">
                  <Image
                    src={item.image} // Assuming the product has an "image" property
                    alt={item.title}
                    width={80} // Width of the image
                    height={80} // Height of the image
                    className="object-cover rounded-md"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Price:{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(item.salePrice * item.quantity)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4 sm:mt-0">
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6">
              <h3 className="text-2xl font-semibold">Total Amount: </h3>
              <p className="text-xl font-bold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(getTotalAmount())}
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={clearCart}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all"
                >
                  Clear Cart
                </button>
                <Link
                  href={'/checkout'}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
