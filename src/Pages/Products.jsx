import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

function Product() {
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products based on category from URL
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const endpoint = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : `https://fakestoreapi.com/products`;

        const response = await axios.get(endpoint);
        setProducts(response.data);
        setSearchProducts(response.data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  // Search functionality
  useEffect(() => {
    const searchResult = products.filter((item) => {
      return item.title.toLowerCase().includes(searchString.toLowerCase());
    });
    setSearchProducts(searchResult);
  }, [searchString, products]);

  // Sort products
  const sortedProductAsc = [...searchProducts].sort(
    (a, b) => a.price - b.price
  );
  const sortedProductDesc = [...searchProducts].sort(
    (a, b) => b.price - a.price
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="min-h-screen relative w-full p-12 sm:p-8">
        <div className="mb-8 w-full flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            className="w-full sm:w-[60%] border border-gray-300 rounded-md p-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all"
            placeholder="Enter the product name ..."
            type="text"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button
              className="bg-neutral-700 text-white p-3 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all"
              onClick={() => setSearchProducts(sortedProductAsc)}
            >
              Price (low to high)
            </button>
            <button
              className="bg-neutral-700 text-white p-3 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all"
              onClick={() => setSearchProducts(sortedProductDesc)}
            >
              Price (high to low)
            </button>
          </div>
        </div>

        {category && (
          <h2 className="text-3xl font-semibold text-center mb-8">
            Showing Products in: <span className="capitalize">{category}</span>
          </h2>
        )}

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchProducts.length > 0 ? (
            searchProducts.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                price={item.price}
                rating={item.rating.rate}
              />
            ))
          ) : (
            <p>No products found...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
