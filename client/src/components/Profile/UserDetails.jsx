import React from "react";
import { Link } from "react-router-dom";

const UserDetails = ({ user }) => {
  return (
    <>
      <figure className="flex items-start sm:items-center">
        <img
          className="w-16 rounded-full mr-4"
          src="images/avatars/avatar3.jpg"
          alt=""
        />
        <figcaption>
          <h5 className="font-semibold text-lg">{user.name}</h5>
          <p>
            Email:
            <Link to="mailto:myusername@gmail.com">{user.email} </Link>| Phone:
            <Link to="tel:+1234567890988"> +{user.phone}</Link>
          </p>
        </figcaption>
      </figure>
      <hr className="my-4" />
    </>
  );
};

export default UserDetails;
