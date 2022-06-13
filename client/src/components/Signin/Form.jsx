import React from "react";
import { Link } from "react-router-dom";
import Facebook from "./images/facebook.svg";
import Google from "./images/google.svg";
const Form = () => {
  return (
    <section className="bg-gray-100 py-10" style={{ minHeight: "80vh" }}>
      <div className="container max-w-screen-xl mx-auto px-4">
        {/*  COMPONENT: SIGN IN */}
        <div
          style={{ maxWidth: 360 }}
          className="mt-5 mb-8 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
        >
          <form action="">
            <h2 className="mb-5 text-2xl font-semibold">Sign in</h2>
            <div className="mb-4">
              <label className="block mb-1"> Email </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="text"
                placeholder="Type here"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1"> Password </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="password"
                placeholder="Type here"
              />
            </div>
            <label className="flex items-center w-max mb-5">
              <input
                defaultChecked=""
                name=""
                type="checkbox"
                className="h-4 w-4"
              />
              <span className="ml-2 inline-block text-gray-500">
                {" "}
                Remember me{" "}
              </span>
            </label>
            <button
              type="submit"
              className="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              to="#"
            >
              {" "}
              Sign in{" "}
            </button>
            {/* Inline style for decoration */}
            <div
              className="text-center border-b my-5"
              style={{ lineHeight: "0.1rem" }}
            >
              <span className="px-3 bg-white text-gray-400">or</span>
            </div>
            <Link
              to="#"
              className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
            >
              <img src={Google} className="mr-3" width={20} height={20} />
              Continue with Google
            </Link>
            <Link
              to="#"
              className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
            >
              <img src={Facebook} className="mr-3" width={20} height={20} />
              Continue with Facebook
            </Link>
            <p className="text-center mt-5">
              Don’t have an account?{" "}
              <Link className="text-blue-500" to="#">
                Sign up
              </Link>
            </p>
          </form>
        </div>
        {/*  COMPONENT: SIGN IN //END */}
      </div>
    </section>
  );
};

export default Form;
