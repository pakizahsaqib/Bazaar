import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import UserAuth from "./Pages/UseAuth";
import UserAuthProvider from "./contexts/UserAuth";
import CartContextProvider from "./contexts/CartContext";
import Cart from "./components/Cart";
import Home from "./Pages/Home";
import Product from "./Pages/Products";
import CardDetails from "./components/CardDetails";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./Pages/UserProfile";
import Layout from "./components/Layout";
import CatLayout from "./components/CatLayout";
import NewArrival from "./components/NewArrival";
import OnSale from "./components/OnSale";

const App = () => {
  return (
    <>
      <UserAuthProvider>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route element={<CatLayout />}></Route>
              <Route path="/products/:category?" element={<Product />} />
              <Route path="/products/item/:id" element={<CardDetails />} />
              <Route path="/on-sale" element={<OnSale />} />
              <Route path="/new-arrivals" element={<NewArrival />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/auth" element={<UserAuth />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
              </Route>
            </Route>
          </Routes>
        </CartContextProvider>
      </UserAuthProvider>
      <Footer />
    </>
  );
};

export default App;
