import React, { createContext, useState } from "react";

const UserAuthContext = createContext();

//Give good name as a good practice to this component as
//it is serving as a provider so its name should reflect its usage,
//thats why we named it UserAuthProvide - or UserAuthContextProvider
const UserAuthProvider = (props) => {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@gmail.com");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("UserAuth", isLoggedIn);
  return (
    // we can noe pass whatever value we want to pass on
    <UserAuthContext.Provider
      value={{ name, email, setName, setEmail, isLoggedIn, setIsLoggedIn }}
    >
      {/* value should be singular value, single object, array, number value etc */}
      {/* By default all tags wrapped by ABC will be available in props.children */}
      {props.children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
export { UserAuthContext };
