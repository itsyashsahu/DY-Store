// Routing
import { Link } from "react-router-dom";

// Images
import { ReactComponent as Logo } from "./images/logo.svg";

import AuthContext from "../../context/auth/authContext";
import React, { useContext } from "react";

const Header = () => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;

  return (
    <header className="bg-white py-3">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <Link to="/">
              <div className="h-14 w-24 ml-auto flex justify-end ">
                <Logo />
              </div>
            </Link>
          </div>
          {/* Search Input  */}
          <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
            <input
              className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
              type="text"
              placeholder="Search"
            />
            <button
              type="button"
              className="px-4 py-2 inline-block text-blue-600 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md hover:bg-blue-100"
            >
              <i className="fa fa-search" />
            </button>
          </div>
          {/* Search Input  End*/}

          <div className="flex items-center space-x-2 ml-auto">
            <Link
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              to={token ? "/profile" : "/signin"}
            >
              <i className="text-gray-400 w-5 fa fa-user" />
              {token ? (
                <span className="hidden lg:inline ml-1">Profile</span>
              ) : (
                <span className="hidden lg:inline ml-1">Sign in</span>
              )}
            </Link>

            <Link
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              to="#"
            >
              <i className="text-gray-400 w-5 fa fa-heart" />
              <span className="hidden lg:inline ml-1">Wishlist</span>
            </Link>
            <Link
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              to="/cart"
            >
              <i className="text-gray-400 w-5 fa fa-shopping-cart" />
              <span className="hidden lg:inline ml-1">My cart</span>
            </Link>
          </div>
          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
