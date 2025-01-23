"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the type for the context value
interface WishlistContextType {
  wishlist: WishlistItem[]; // The wishlist array
  addToWishlist: (item: WishlistItem) => void; // Function to add items to wishlist
  removeFromWishlist: (itemId: string) => void; // Function to remove item from wishlist
  getWishlistCount: () => number; // Function to get wishlist count
}

// Interface for Wishlist Item
export interface WishlistItem {
  slug: string;
  id: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  title: string;
  description: string;
}

// Create the context with default value
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Define the type for the provider props including children
interface WishlistProviderProps {
  children: React.ReactNode; // This will allow any child components
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]); // Wishlist state

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  // Add item to wishlist
  const addToWishlist = (item: WishlistItem) => {
    // Check if item already exists in the wishlist
    const isItemInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

    if (!isItemInWishlist) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (itemId: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== itemId));
  };

  // Get the count of items in the wishlist
  const getWishlistCount = () => {
    return wishlist.length;
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, getWishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the Wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
