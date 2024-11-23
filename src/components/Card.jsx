import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { CartContext } from "../contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addItemActionCreator } from "../redux/cart/cartAction";

const Card = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  //const { cart, setCart } = useContext(CartContext);

  const handleAddItem = (props) => {
    const foundItem = cart && cart.find((item) => item.id === props.id);
    if (foundItem) {
      dispatch(
        addItemActionCreator(
          cart.map((item) =>
            item.id === props.id
              ? {
                  ...item,
                  quantity: Number(item.quantity) + 1,
                }
              : item
          )
        )
      );
    } else {
      dispatch(
        addItemActionCreator([
          ...cart,
          { ...props, size: "Large", color: "Black", quantity: 1 },
        ])
      );
    }
    alert(`${props.title} has been added to the cart!`);
  };

  return (
    <>
      <div
        className="flex flex-col justify-between rounded-lg shadow-md bg-white p-4 transition-transform transform hover:scale-105"
        id="product-card"
      >
        <div className="p-6">
          <img
            className="w-full max-w-[240px] h-[240px] shadow-sm mt-6 mx-auto"
            id="product-img"
            src={props.image}
            alt={props.title}
          />
          <span
            id="product-category"
            className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase rounded-lg px-2 py-1"
          >
            {props.category}
          </span>
          <Link to={`/products/item/${props.id}`}>
            <div className="description-container">
              <h1 id="product-title" className="text-xl font-bold my-4">
                {props.title}
              </h1>
            </div>
          </Link>
          <div className="flex justify-center">
            <StarRating rating={props.rating} />
          </div>
        </div>
        <div
          id="card-container"
          className="flex flex-row justify-between items-center mt-auto "
        >
          <p id="product-price" className="text-md">
            ${props.price}
          </p>
          <button
            onClick={() => handleAddItem(props)}
            id="product-btn"
            className="bg-neutral-700 hover:bg-neutral-900 p-2 rounded-md text-sm text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
