import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { UserAuthContext } from "../contexts/UserAuth";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserAuthContext);
  const defaultValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const handleSubmit = () => {
    setIsLoggedIn(true);
  };
  if (isLoggedIn) {
    // Redirect if logged in
    return <Navigate to="/profile" />;
  }
  return (
    <div className="flex flex-col items-center justify-center mt-[10px] w-full max-w-[480px] mx-auto min-h-screen-130 p-10 ">
      <h1 className="w-full text-xl bg-neutral-800 text-center text-white p-6">
        Login
      </h1>

      <Formik
        className="flex items-center justify-center"
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Email
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Enter your Email"
              />
              <p className="font-normal text-red-500 italic">
                <ErrorMessage name="email" />
              </p>
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2">
              Password
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
              <p className="font-normal text-red-500 italic">
                <ErrorMessage name="password" />
              </p>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>

            <Link
              className="font-normal inline-block align-baseline  text-sm text-red-600 hover:text-red-900"
              to="../signup"
            >
              New User?
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
