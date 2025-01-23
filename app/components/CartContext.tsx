"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CartItem = {
  discountPercentage: number;
  price: number;
  _id: string;
  title: string;
  image: string;
  salePrice: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
  getCartItemCount :()=> number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem._id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem._id === id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
          : cartItem
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((cartItem) => cartItem._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.salePrice * item.quantity, 0);
  };
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getTotalAmount,
        getCartItemCount, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
