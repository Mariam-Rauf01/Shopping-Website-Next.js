"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; 
import Image from 'next/image';

interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
  rating: number;
}

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      const groqQuery = `*[_type == "product" && title match $query] {
        _id, 
        title, 
        description, 
        "imageUrl": productImage.asset->url, 
        price, 
        tags, 
        discountPercentage, 
        isNew, 
        rating
      }`;

      try {
        const response = await client.fetch(groqQuery, { query: `${query}*` } as Record<string, string>);
        setResults(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Search Results for: {query}</h1>
      {results.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((product) => (
            <li
              key={product._id}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              {/* Image using Next.js Image component */}
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={200}  // Set a reasonable width for the image
                height={200} // Set a reasonable height for the image
                className="w-full h-48 object-cover rounded-md mb-4"
                priority
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2">
                {product.description.substring(0, 100)}...
              </p>
              <p className="font-bold text-lg">${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
