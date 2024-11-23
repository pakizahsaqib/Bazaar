import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CatLayout = () => {
  const [category, setCategory] = useState([]);
  const location = useLocation(); // To highlight the active category

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchData();
  }, []);
  const normalizedPath = decodeURIComponent(location.pathname.toLowerCase());

  // Check if the normalized path includes the item

  return (
    <div className="w-full bg-neutral-100 text-white py-4 shadow-md">
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {category.map((item, i) => (
          <Link
            key={i}
            to={`/products/${item}`}
            className={`px-4 py-2 rounded-full font-semibold transition-all hover:bg-neutral-900 hover:text-white ${
              normalizedPath === `/products/${item}`
                ? "bg-neutral-700 text-white"
                : "bg-neutral-300 text-black"
            }`}
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatLayout;
