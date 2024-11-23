import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  console.log(cart.length);
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800">
            <Link to="/" className="hover:text-red-600">
              BAZAAR
            </Link>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-gray-600">
            {[
              { path: "products", label: "Products" },
              { path: "on-sale", label: "On Sale" },
              { path: "new-arrivals", label: "New Arrivals" },
            ].map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `hover:text-red-500 transition ${
                      isActive ? "text-red-500 font-semibold" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${
                isMobileMenuOpen ? "fa-xmark" : "fa-bars"
              }`}
            ></i>
          </button>
          {/* Search and Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-gray-300 focus-within:ring-2 focus-within:ring-red-500">
              <i className="fa-solid fa-magnifying-glass text-gray-500 cursor-pointer"></i>
              <input
                type="text"
                className=" w-64 text-sm outline-none bg-transparent"
                placeholder="Search products..."
                aria-label="Search products"
              />
            </div>
            <NavLink to={"/cart"}>
              <i
                className="fa-solid fa-cart-shopping text-2xl cursor-pointer relative"
                aria-label="Cart"
              >
                {/* Badge */}
                <span className="absolute -top-1 -right-1 flex items-center justify-center rounded-full h-5 w-5 bg-red-500 text-white font-medium text-xs">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </i>
            </NavLink>

            <NavLink to={"profile"}>
              {" "}
              <i
                className="fa-solid fa-user text-2xl cursor-pointer"
                aria-label="User"
              />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-lg border-t">
          {[
            { path: "products", label: "Products" },
            { path: "on-sale", label: "On Sale" },
            { path: "new-arrivals", label: "New Arrivals" },
            { path: "/profile", label: "My Profile" },
            { path: "/cart", label: "My Cart" },
          ].map(({ path, label }) => (
            <li key={path} className="border-b">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block py-3 px-6 hover:bg-gray-100 ${
                    isActive ? "text-red-500 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
