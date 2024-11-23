import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "../contexts/UserAuth";

const PrivateRoute = (props) => {
  const { isLoggedIn } = useContext(UserAuthContext);
  console.log("PrivateRoute:", isLoggedIn);
  return (
    <>{isLoggedIn ? <>{props.children}</> : <Navigate to="/auth/login" />}</>
  );
};

export default PrivateRoute;
