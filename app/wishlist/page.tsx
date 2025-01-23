"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "../components/WishlistContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Define the structure of wishlist items
interface WishlistItemProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  salePrice: number;
}

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Prevent hydration mismatch
  }

  // Remove duplicate items from wishlist by using the id and slug
  const uniqueWishlist = Array.from(
    new Map(wishlist.map((item: WishlistItemProps) => [item.id, item])).values()
  );

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>
        {uniqueWishlist.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {uniqueWishlist.map((item) => (
              <WishlistItem
                key={`${item.id}-${item.slug}`}
                item={item}
                removeFromWishlist={removeFromWishlist}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

const WishlistItem: React.FC<{
  item: WishlistItemProps;
  removeFromWishlist: (id: string) => void;
}> = ({ item, removeFromWishlist }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle description view between short and full
  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <Image
        src={item.image || "/placeholder-image.png"} // Fallback image
        alt={item.title}
        width={128}
        height={128}
        className="object-cover rounded-md mb-4"
        unoptimized // Allows using external image URLs
      />
      <h2 className="text-lg font-semibold text-center mb-2">{item.title}</h2>
      <p className="text-gray-600 text-sm text-center mb-2">
        {isExpanded ? item.description : `${item.description.substring(0, 100)}...`}
      </p>
      <button
        onClick={toggleDescription}
        className="text-blue-500 mb-4"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      <p className="text-blue-500 font-bold mb-4">${item.salePrice}</p>

      <div className="flex gap-2">
        <button
          onClick={() => removeFromWishlist(item.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          aria-label={`Remove ${item.title} from wishlist`}
        >
          Remove
        </button>

        <Link
          href={`/products/${item.id}`}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all inline-block text-center"
          aria-label={`Buy ${item.title}`}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default WishlistPage;
