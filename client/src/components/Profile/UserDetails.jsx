import React from "react";
import { Link } from "react-router-dom";
// import Modal from "../Utils/Modal";

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
      {/* <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          setModalOpen(true);
        }}
        data-modal-toggle="popup-modal"
      >
        Toggle modal
      </button> */}
    </>
  );
};

export default UserDetails;
