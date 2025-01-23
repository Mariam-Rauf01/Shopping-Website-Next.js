// types.ts

// Interface for product details
export interface ProductDetailProps {
  imageUrl: string;
  price: number;
  discountPercentage: number;
  slug: string; // Unique slug for the product
  id: string; // Unique ID for the product
  title: string; // Product title
  description: string; // Product description
  originalPrice: string; // Original price of the product
  salePrice: number; // Sale price of the product
  image: string; // URL to the product image
}
// Interface for a detailed product size (if needed)
export interface DetailedProductSize {
  title: string; // Title of the product
  image: string; // URL to the product image
  description: string; // Product description
  originalPrice: string; // Original price (string for consistency)
  salePrice: number; // Sale price (number for consistency)
}

export interface WishlistItem {
  slug: any;
  id: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  title: string;
  description: string;
}

// Product interface

// Product interface
export interface Product {
  reviews: boolean;
  image: string;
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
  rating?: number;
  stock: number;
  slug: {
    current: string;
  } | null;
}
// Cart item interface
export interface CartItem {
  _id: string; // Unique identifier for the item
  title: string; // Title of the item
  image: string; // URL of the item's image
  salePrice: number; // Sale price after discount
  quantity: number; // Quantity of the item in the cart
  price: number; // Original price of the item
  discountPercentage: number; // Discount percentage for the item
}

// PageProps interface
export interface PageProps {
  params: Promise<{ id: string; }>;
};
// /types/index.ts
export interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating?: number;  // Now it's optional in Product
}

export interface Order {
  _id: string;
  customerName: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  rating?: number;  // Make it optional here too
}
// Inside '@/type.ts' file

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string; // For example, admin, user, etc.
  isActive: boolean;
  createdAt: string;
}
