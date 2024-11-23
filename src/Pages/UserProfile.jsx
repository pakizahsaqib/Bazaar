import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../contexts/UserAuth";

const UserProfile = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserAuthContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen-130 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome Onboard!</h1>
      <p className="text-lg text-black">
        We're excited to have you here. Enjoy a special{" "}
        <span className="text-red-500">20% discount</span> on all products!
      </p>
      <p className="mt-2">
        Check the
        <Link className="ml-1 hover:underline" to={"/products"}>
          products page
        </Link>
        ...
        <br />
      </p>
      <Link
        className="mt-10 hover:underline hover:text-red-600"
        to={"/auth/login"}
        onClick={() => setIsLoggedIn(false)}
      >
        Logout
      </Link>
    </div>
  );
};

export default UserProfile;
