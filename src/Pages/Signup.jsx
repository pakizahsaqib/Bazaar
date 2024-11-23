import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    termsAccepted: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    termsAccepted: Yup.bool()
      .oneOf([true], "You must accept the terms and conditions")
      .required("Terms acceptance is required"),
  });
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className=" flex flex-col items-center justify-center w-full p-10 max-w-[480px] mx-auto min-h-screen-130">
      <h1 className="w-full text-xl  bg-neutral-800 text-center text-white p-6">
        Signup
      </h1>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {" "}
              Full Name
              <Field
                className="font-normal shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Enter your Full Name"
              />
              <p className="font-normal text-red-500 italic">
                <ErrorMessage name="name" />
              </p>
            </label>
          </div>

          <div className="my-4">
            <label className="block text-gray-700 text-sm font-bold">
              {" "}
              Email
              <Field
                className="font-normal shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Enter your Email ID"
              />
              <p className="font-normal text-red-500 italic">
                <ErrorMessage name="email" />
              </p>
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
              <Field
                className="font-normal shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
              <p className="font-normal text-red-500 italic">
                <ErrorMessage name="password" />
              </p>
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
              <Field
                component="select"
                className="font-normal shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="gender"
                placeholder="Enter your Password"
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              <p className="font-normal text-red-500 italic">
                <ErrorMessage name="gender" />
              </p>
            </label>
          </div>
          <div className="mb-6">
            <Field type="checkbox" name="termsAccepted" />
            <label className="font-normal text-gray-700 ml-2">
              I accept Terms and Conditions
            </label>
            <p className="font-normal text-red-500 italic">
              <ErrorMessage name="termsAccepted" />
            </p>
          </div>

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
          <Link
            className="block align-baseline 
             my-4 text-red-600 hover:text-red-900"
            to="../login"
          >
            Already have an account
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
