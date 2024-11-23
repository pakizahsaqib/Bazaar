import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import StarRating from "./StarRating"; // Assuming you have a star rating component
import { CartContext } from "../contexts/CartContext";
import { addItemActionCreator } from "../redux/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";

const CardDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //const { cart, setCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleAddItem = (product) => {
    const foundItem = cart.find((item) => item.id === product.id);
    console.log("FoundItem: ", foundItem);
    if (foundItem) {
      dispatch(
        addItemActionCreator(
          cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  size: selectedSize,
                  color: selectedColor,
                  quantity: item.quantity + 1,
                }
              : item
          )
        )
      );
    } else {
      dispatch(
        addItemActionCreator([
          ...cart,
          { ...product, size: selectedSize, color: selectedColor, quantity: 1 },
        ])
      );
    }
    alert(`${product.title} has been added to the cart!`);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return null;
  console.log(product.category);
  return (
    <div className="container mx-auto mt-10 p-6">
      <Link
        className="hover:text-red-500 text-neutral-900 font-semibold mb-6 inline-flex items-center"
        to="/products"
      >
        <i className="fa-solid fa-arrow-left mr-2"></i> Back to all products
      </Link>

      <div className="flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full lg:w-2/3 lg:max-h-[420px] max-w-md rounded-lg"
        />

        <div className="flex flex-col items-start w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            <StarRating rating={product.rating.rate} />
            <span className="ml-2 text-gray-500">({product.rating.count})</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-green-600">
              ${product.price}
            </span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          {product.category !== "jewelery" &&
            product.category !== "electronics" && (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Select Colors</h3>
                  <div className="flex gap-4">
                    {["White", "Black", "Navy"].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Choose Size</h3>
                  <div className="flex gap-4">
                    {["Small", "Medium", "Large", "X-Large"].map((size) => (
                      <button
                        key={size}
                        className={`px-4 py-2 border rounded-md ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "bg-gray-100"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Select Quantity
                  </h3>
                  <div className="flex items-center gap-4">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-md"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className="text-xl">{quantity}</span>
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-md"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}

          <button
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
            onClick={() => handleAddItem(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
