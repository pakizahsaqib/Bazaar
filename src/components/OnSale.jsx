import React from "react";
import Product from "../Pages/Products";
import StarRating from "./StarRating";
import { Link, NavLink } from "react-router-dom";

const OnSale = () => {
  const products = [
    {
      id: 5,
      title: "Dragon Station Chain Bracelet",
      price: "$895",
      discount: "$695",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: "5",
    },
    {
      id: 14,
      title: "Samsung 49-Inch Monitor",
      price: "$1495",
      discount: "$999.99",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: "2.2",
    },
    {
      id: 16,
      title: "Women's Biker Jacket",
      price: "$39.5",
      discount: "$29.95",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: "2.9",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: "$75.5",
      discount: "$55.99",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: "4.7",
    },
  ];

  return (
    <div className="p-6 text-center bg-orange-100">
      <h2 className="text-lg sm:text-2xl font-bold mb-6">
        SALE - <span className="text-red-500">UPTO 30% OFF</span>
      </h2>
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
export default OnSale;
