import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import electronics from "../assets/electronics.jpg";
import women from "../assets/clothes.jpg";
import men from "../assets/clothes_m.jpg";
import jewelery from "../assets/jewellery.webp";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(response.data);
    };
    fetchData();
  }, []);

  // Placeholder images for categories
  const categoryImages = {
    electronics: electronics,
    jewelery: jewelery,
    "men's clothing": men,
    "women's clothing": women,
  };

  return (
    <div className="mx-auto py-20 px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        BROWSE BY PRODUCT CATEGORY
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {category.map((item, i) => (
          <Link
            to={`/products/${item}`}
            key={i}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            {/* Background Image */}
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  categoryImages[item] || "https://via.placeholder.com/300x200"
                })`,
              }}
            ></div>
            {/* Category Name */}
            <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
              <h3 className="text-white text-lg font-semibold capitalize">
                {item}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
