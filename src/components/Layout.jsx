import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Product from "../Pages/Products";
import Categories from "../Pages/Categories";
import CatLayout from "./CatLayout";

const Layout = () => {
  const location = useLocation();

  // Check if the current route is the product page
  const isProductPage = location.pathname.startsWith("/products");
  return (
    <div>
      <Header />
      <Navbar />
      {isProductPage && <CatLayout />}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
