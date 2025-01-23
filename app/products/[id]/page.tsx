import { client } from '@/sanity/lib/client';  // Sanity client
import { PageProps, Product } from '@/type';  // Import types
import ProductPageClient from '@/app/components/ProductPageClient';  // Product Page component to display
import Head from 'next/head';  // For metadata

const ProductPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;  // Resolve params in case it's a promise
  const { id } = resolvedParams;  // Extract `id` from params

  try {
    // GROQ query to fetch the product by ID
    const query = `*[_type == "product" && _id == $id][0]{
      _id, title, description, "imageUrl": productImage.asset->url, price, tags, discountPercentage, isNew, rating
    }`;

    // Fetch product data
    const product: Product | null = await client.fetch(query, { id });

    // Check if the product was found
    if (!product) {
      return <div>Product not found</div>;  // Product not found message
    }

    return (
      <>
        <Head>
          <title>{product.title} - Product Page</title>
          <meta name="description" content={product.description} />
        </Head>
        <ProductPageClient product={product} />
      </>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error loading product. Please try again later.</div>;  // Error message
  }
};

export default ProductPage;