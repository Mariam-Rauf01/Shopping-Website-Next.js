import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/type";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

const ITEMS_PER_PAGE = 4; // Set the number of items per page

const Best = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query =
          '*[_type == "product"]{ _id, title, description, "imageUrl": productImage.asset->url, price, tags, discountPercentage, isNew }';
        const data = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading State
  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  // Error State
  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }

  // Pagination Logic
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white py-16">
      <h2 className="text-center text-[#737373] text-base sm:text-lg">
        Featured Products
      </h2>
      <div className="text-center mt-4">
        <h1 className="text-xl md:text-2xl font-bold text-[#252B42]">
          BESTSELLER <br className="sm:hidden" /> PRODUCTS
        </h1>
        <p className="text-sm md:text-lg text-[#737373] mt-2">
          Problems trying to resolve the <br className="sm:hidden" /> conflict
          between
        </p>
      </div>

      {/* Cards Container */}
      <div className="mt-10 px-4 sm:px-12 lg:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((product) => (
          <div
            key={product._id}
            className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-100 hover:shadow-2xl hover:shadow-gray-400/50"
          >
            {/* Product Image */}
            <div className="w-full h-[300px] relative">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-16 h-16 object-cover"
                  style={{ width: "auto", height: "auto" }}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center bg-gray-200"
                  aria-label="No image available"
                >
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {product.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mt-4">
                {product.discountPercentage > 0 && (
                  <span className="text-lg font-medium text-gray-400 line-through">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.price)}
                  </span>
                )}
                <span className="text-xl font-bold text-green-600">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    product.price * (1 - product.discountPercentage / 100)
                  )}
                </span>
              </div>
            </div>

            {/* View Item Button */}
            <div className="flex flex-col justify-center items-center gap-4 mb-4">
              <Link
                href={`/products/${product._id}`} // Use _id instead of slug
                className="flex items-center px-4 py-2 font-montserrat text-sm text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                aria-label={`View details for ${product.title}`}
              >
                View Item
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 disabled:opacity-50 transition-all duration-300 hover:bg-gray-300"
        >
          Previous
        </button>

        {/* Ellipsis and Page Numbers */}
        {currentPage > 3 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 transition-all duration-300 hover:bg-gray-300"
            >
              1
            </button>
            <span className="px-2 py-2 text-gray-800">...</span>
          </>
        )}

        {/* Display Current Page and Nearby Pages */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1;
          if (pageNum >= currentPage - 1 && pageNum <= currentPage + 1) {
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPage === pageNum
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {pageNum}
              </button>
            );
          }
          return null;
        })}

        {/* Ellipsis and Last Page */}
        {currentPage < totalPages - 2 && (
          <>
            <span className="px-2 py-2 text-gray-800">...</span>
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 transition-all duration-300 hover:bg-gray-300"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 disabled:opacity-50 transition-all duration-300 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Best;
