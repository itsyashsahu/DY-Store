import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = ({ item }) => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-row gap-5 mb-4">
        <div className="w-full lg:w-2/5 xl:w-2/4">
          <figure className="flex leading-5">
            <div>
              <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                <img src={item.img} alt="Title" />
              </div>
            </div>
            <figcaption className="ml-3">
              <p>
                <Link to="#" className="hover:text-blue-600">
                  {item.title}
                </Link>
              </p>
              <p className="mt-1 text-gray-400">
                {item.details.map((d) => {
                  return `${d.Name} : ${d.Value}, `;
                })}
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="">
          {/* selection */}
          <div className="w-24 relative">
            <select className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
              <option>1</option>
              <option selected="">2</option>
              <option>3</option>
            </select>
            <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
              <svg
                width={22}
                height={22}
                className="fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </i>
          </div>
          {/* selection .//end */}
        </div>
        <div>
          <div className="leading-5">
            <p className="font-semibold not-italic">
              $ {item.pricing.cost * item.qty}
            </p>
            <small className="text-gray-400">
              ${item.pricing.cost} / per {item.pricing.perQuantity}
            </small>
          </div>
        </div>
        <div className="flex-auto">
          <div className="float-right">
            <Link
              to="#"
              className="px-3 py-2 mr-2 inline-block text-blue-600 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
            >
              <i className="fa fa-heart" />
            </Link>
            <Link
              className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
              to="#"
            >
              Remove
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default CartItemCard;
