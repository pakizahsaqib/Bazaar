import React, { createContext, useState } from "react";

const CartContext = createContext(); // This is the context object

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export { CartContext };
