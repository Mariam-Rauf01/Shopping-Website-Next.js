import { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { MdSearch } from 'react-icons/md';
import Image from 'next/image';
// Define the Product interface
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

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]); // Use the Product type
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.trim() === '') {
        setResults([]);
        return; // Don't search if the query is empty
      }

      setLoading(true);
      const query = `*[_type == "product"]{
        _id, title, description, "imageUrl": productImage.asset->url, price, tags, discountPercentage, isNew, rating
      }`;

      const products: Product[] = await client.fetch(query); // Specify the type for fetched products

      // Filter products that start with the search query
      const filteredProducts = products.filter((product: Product) =>
        product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

      setResults(filteredProducts);
      setLoading(false);
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="border p-2 rounded pl-10 border-blue-500"
      />
      <MdSearch
        size={24}
        className="absolute left-3 top-2.5 text-blue-500"
      />
      {loading && <div>Loading...</div>}
      
      <div>
        {results.length === 0 && searchQuery.trim() !== '' ? (
          <div className="text-center text-gray-600">No results found</div>
        ) : (
          results.map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-200 rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold">
                <Link href={`/products/${product._id}`} className="text-blue-500 hover:text-blue-700">
                  {product.title}
                </Link>
              </h3>
              <ShortenedDescription description={product.description} />
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={96}
                height={96}
                className="mt-2 object-cover"
              />
              <div className="text-gray-700 mt-2">${product.price}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

interface ShortenedDescriptionProps {
  description: string;
}

const ShortenedDescription = ({ description }: ShortenedDescriptionProps) => {
  const truncatedDescription = description.length > 100 ? description.slice(0, 100) + '...' : description;

  return (
    <div className="text-gray-700 mt-2">
      {truncatedDescription}
    </div>
  );
};

export default Search;