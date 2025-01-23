"use client";

import React, { useState, useEffect } from "react";
import { Product, CartItem, WishlistItem } from "@/type";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import Image from "next/image"; // Corrected import
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Review {
  username: string;
  rating: number;
  reviewText: string;
  date: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPageClient = ({ product }: ProductPageProps) => {
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const { addToCart } = useCart();
  const { addToWishlist, wishlist } = useWishlist();

  // Load reviews from localStorage on component mount, based on product._id
  useEffect(() => {
    const storedReviews = localStorage.getItem(`reviews-${product._id}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, [product._id]);

  // Save reviews to localStorage whenever they change, based on product._id
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem(`reviews-${product._id}`, JSON.stringify(reviews));
    }
  }, [reviews, product._id]);

  const getSalePrice = () =>
    product.price * (1 - (product.discountPercentage || 0) / 100);

  const handleAddToCart = () => {
    const salePrice = getSalePrice();
    const totalPrice = salePrice * quantity; // Calculate total price based on quantity

    const cartItem: CartItem = {
      _id: product._id,
      title: product.title,
      image: product.imageUrl || "",
      salePrice: !isNaN(salePrice) ? salePrice : product.price,
      quantity,
      price: totalPrice, // Set total price based on quantity
      discountPercentage: product.discountPercentage,
    };

    addToCart(cartItem);
    toast.success(`${quantity} ${product.title} added to cart!`);
  };

  const handleAddToWishlist = () => {
    const isItemInWishlist = wishlist.some(
      (item: WishlistItem) => item.id === product._id
    );

    if (isItemInWishlist) {
      toast.info(`${product.title} is already in your wishlist!`);
    } else {
      const wishlistItem: WishlistItem = {
        id: product._id,
        originalPrice: product.price,
        salePrice: getSalePrice(),
        image: product.imageUrl || "",
        title: product.title,
        description: product.description,
        slug: product.slug,
      };
      addToWishlist(wishlistItem);
      toast.success(`${product.title} added to wishlist!`);
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleReviewSubmit = () => {
    if (rating === 0 || reviewText.trim() === "" || username.trim() === "") {
      toast.error("Please provide a username, rating, and review text.");
      return;
    }

    const currentDate = new Date().toLocaleString();

    const newReview: Review = {
      username,
      rating,
      reviewText,
      date: currentDate,
    };

    setReviews((prevReviews) => {
      const updatedReviews = [newReview, ...prevReviews];
      localStorage.setItem(`reviews-${product._id}`, JSON.stringify(updatedReviews));
      return updatedReviews;
    });

    setReviewText("");
    setRating(0);
    setUsername(""); // Clear username after submission
    toast.success("Review submitted successfully!");
  };

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? "⭐" : "☆"
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  const isReviewValid = rating > 0 && reviewText.trim() !== "" && username.trim() !== "";

  const salePrice = getSalePrice(); // Get sale price
  const totalPrice = salePrice * quantity; // Calculate total price based on quantity

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-8 mt-20 mb-20 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg transform transition-transform hover:scale-110"
              />
            ) : (
              <p className="text-center text-gray-500">Image not available</p>
            )}
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-2">
              {isExpanded
                ? product.description
                : `${product.description.substring(0, 100)}...`}
            </p>
            <button onClick={toggleDescription} className="text-blue-500 mb-4">
              {isExpanded ? "Read Less" : "Read More"}
            </button>

            {/* Tags Section */}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Tags:</h3>
                <div className="flex flex-wrap space-x-2 mt-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 space-y-2">
              <h2 className="text-2xl font-semibold text-green-600">
                <span className="text-slate-900">Price:</span> ${totalPrice}
              </h2>

              {product.discountPercentage && (
                <p className="text-green-500 font-semibold">
                  {product.discountPercentage}% off
                </p>
              )}
            </div>

            <div className="flex items-center mt-4">
              <button
                onClick={decrementQuantity}
                className="bg-gray-300 text-gray-700 p-2 rounded-full mr-2"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-gray-300 text-gray-700 p-2 rounded-full ml-2"
              >
                +
              </button>
            </div>

            <div className="my-6">
              <hr className="border-t-2 mt-6 border-gray-200" />
            </div>

            <div className="flex mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white p-3 rounded-full flex items-center space-x-2 mr-4 
                  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
              >
                <AiOutlineShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleAddToWishlist}
                className="w-16 h-12 flex justify-center items-center bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:border-transparent focus:outline-none transition-all transform hover:scale-110"
              >
                <FaHeart className="text-gray-700 text-lg hover:text-white transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="mb-6">
            <div className="flex space-x-2">
              {stars.map((star, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-xl"
                  onClick={() => handleStarClick(index + 1)}
                >
                  {star}
                </span>
              ))}
            </div>
            <textarea
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here"
            />
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
            />
            <button
              onClick={handleReviewSubmit}
              disabled={!isReviewValid}
              className={`mt-2 px-4 py-2 rounded-md text-white ${
                isReviewValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit Review
            </button>
          </div>

          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 mb-4"
                >
                  <h3 className="font-semibold text-gray-900">{review.username}</h3>
                  <div className="flex items-center text-yellow-500">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index}>
                        {index < review.rating ? "⭐" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-gray-600">{review.reviewText}</p>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to review this product!</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPageClient;