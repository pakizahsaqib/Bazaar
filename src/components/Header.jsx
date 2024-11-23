import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white text-center p-2">
      Sign up and get 20% off to your first order.
      <Link className="ml-1 underline" to="/auth/signup">
        Sign Up Now
      </Link>
    </div>
  );
};

export default Header;
