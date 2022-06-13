import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-blue-600 text-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* menu */}
        <nav className="hidden lg:flex flex-1 items-center py-1">
          <Link className="px-3 py-2 rounded-md hover:bg-blue-500" to="#">
            {" "}
            Category{" "}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-blue-500" to="#">
            {" "}
            About{" "}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-blue-500" to="#">
            {" "}
            Services{" "}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-blue-500" to="#">
            {" "}
            Projects{" "}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-blue-500" to="#">
            {" "}
            Offers{" "}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-blue-500" to="#">
            {" "}
            Others{" "}
          </Link>
        </nav>
        {/* menu //end */}
      </div>{" "}
      {/* container //end */}
    </nav>
  );
};

export default Navbar;
