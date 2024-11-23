import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../contexts/UserAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemActionCreator,
  updateQuantityActionCreator,
} from "../redux/cart/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const { isLoggedIn } = useContext(UserAuthContext);

  const handleRemove = (id) => {
    dispatch(removeItemActionCreator(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantityActionCreator(id, quantity));
  };

  const subtotal =
    cart && cart.length > 0
      ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0;
  const discount = isLoggedIn ? subtotal * 0.2 : 0; // 20% discount
  const deliveryFee = cart.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <div className="w-full md:w-2/3 bg-neutral-50 p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <div className="flex flex-col gap-6 px-8">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || "/default-image.jpg"}
                    alt={item.title}
                    className="w-16 h-16 rounded"
                  />
                  {/* Item Details */}
                  <div>
                    <h2 className="font-normal text-sm md:font-semibold md:text-lg">
                      {item.title || "Product Name"}
                    </h2>
                    {item.category !== "jewelery" &&
                    item.category !== "electronics" ? (
                      <>
                        <p className="text-sm text-gray-500">
                          Size: {item.size || "N/A"}
                        </p>
                        <p className="text-sm text-gray-500">
                          Color: {item.color || "N/A"}
                        </p>
                      </>
                    ) : null}
                    <p className="font-bold text-lg">${item.price}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          Math.max(item.quantity - 1, 1)
                        )
                      }
                      className="px-2 py-1 border rounded text-gray-600"
                    >
                      −
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 border rounded text-gray-600"
                    >
                      +
                    </button>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <Link
          to="/products"
          className="inline-block mt-2 text-red-500 float-right mr-4 hover:underline"
        >
          Add Products
        </Link>
      </div>

      <div className="w-full md:w-1/3 border p-6 rounded-lg shadow-lg bg-neutral-50">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between py-2 border-b">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-2 border-b">
          <p>Discount</p>
          <p className="text-red-500">-${discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-2 border-b">
          <p>Delivery Fee</p>
          <p>${deliveryFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-4 text-lg font-bold">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full border p-2 rounded mb-4"
          />
          <button className="w-full bg-gray-800 text-white py-2 rounded">
            Apply
          </button>
        </div>
        <button className="w-full bg-black text-white py-3 rounded mt-4">
          Go to Checkout →
        </button>
      </div>
    </div>
  );
};

export default Cart;
