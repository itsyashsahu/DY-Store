import React from "react";
import { Link } from "react-router-dom";

const AddNewAddressForm = () => {
  return (
    <>
      <div>
        {/* </div>
      <div className="md:py-2 md:px-10 "> */}
        <h2 className="text-2xl font-semibold my-5">Add new address</h2>
        {/* <h2 className="text-xl font-semibold mb-5">Saved address</h2> */}
        <div className="grid md:grid-cols-3 gap-x-3 mt-10 ">
          <div className="mb-4 md:col-span-2">
            <label className="block mb-1"> Street Name* </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Street Name"
            />
          </div>

          <div className="mb-4 md:col-span-1">
            <label className="block mb-1"> City* </label>
            <div className="relative">
              <select className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                <option>Select here</option>
                <option>Second option</option>
                <option>Third option</option>
              </select>
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </i>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-3">
          <div className="mb-4 md:col-span-1">
            <label className="block mb-1"> House </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="House"
            />
          </div>

          <div className="mb-4 md:col-span-1">
            <label className="block mb-1"> Building </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Building"
            />
          </div>

          <div className="mb-4 md:col-span-1">
            <label className="block mb-1"> ZIP code </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Zip code"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Other info </label>
          <textarea
            placeholder="Give more directions needed"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
          ></textarea>
        </div>

        <label className="flex items-center w-max my-4">
          <input name="" type="checkbox" className="h-4 w-4" />
          <span className="ml-2 inline-block text-gray-500">
            Save my information for future purchase
          </span>
        </label>
      </div>
    </>
  );
};

export default AddNewAddressForm;