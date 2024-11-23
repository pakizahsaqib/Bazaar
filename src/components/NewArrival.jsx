import React from "react";
import { Link, NavLink } from "react-router-dom";
import StarRating from "./StarRating";

const NewArrival = () => {
  const products = [
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: "$168",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: "3.9",
    },
    {
      id: 1,
      title: 'Backpack, Fits 15" Laptop',
      price: "$109.95",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: "3.9",
    },
    {
      id: 8,
      title: "Rose Gold Plated Jewelery",
      price: "$10.99",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: "1.9",
    },
    {
      id: 18,
      title: "MBJ Women's Solid T-shirt",
      price: "$9.85",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: "4.7",
    },
  ];

  return (
    <div className="p-6 text-center bg-neutral-50">
      <h2 className="text-lg sm:text-2xl font-bold mb-6">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link to={`/products/item/${product.id}`}>
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg shadow-md bg-white p-4 transition-transform transform hover:scale-105 mb-8"
            >
              <img
                className="w-full max-w-[200px] h-[200px] shadow-sm mt-6 mb-4 mx-auto"
                id="product-img"
                src={product.image}
                alt={product.title}
              />
              <div className="text-center font-medium ">{product.title}</div>
              <div className="flex justify-center">
                <StarRating rating={product.rating} />
              </div>
              <div className="text-center text-black font-bold">
                {product.price}
              </div>
              {product.discount && (
                <div className="text-center text-red-500">
                  Discounted Price: {product.discount}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <NavLink
        className="px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white"
        to={"/products"}
      >
        View More
      </NavLink>
    </div>
  );
};

export default NewArrival;
