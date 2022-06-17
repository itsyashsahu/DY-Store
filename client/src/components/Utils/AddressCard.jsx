import React from "react";

const AddressCard = ({ add, checkourAddSelect }) => {
  if (checkourAddSelect) {
    return (
      <>
        <div className="flex items-center relative p-4 rounded-md">
          <div className="mr-3">
            <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow">
              <i className="fa fa-map-marker-alt" />
            </span>
          </div>
          <div className="text-gray-600">
            <p>
              {`${add.city}, ${add.address}`} <br />
              {/* Building 123, House 321 */}
              {`${add.building}, ${add.house} `}
              {add.isPrimary && (
                <small className="text-gray-400">(Primary)</small>
              )}
            </p>
          </div>
        </div>
        <span
          aria-hidden="true"
          class="hidden absolute inset-0 border-2 border-green-200 bg-green-100 bg-opacity-10 rounded-lg"
        >
          <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-green-400"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </span>
      </>
    );
  }

  return (
    <label
      for={add.id}
      class="relative flex flex-col bg-gray-100 rounded-lg shadow-sm  cursor-pointer"
    >
      <input
        type="radio"
        name="plan"
        id={add.id}
        value="adsf"
        class="absolute h-0 w-0 appearance-none"
      />
      <div className="flex items-center relative p-4 rounded-md">
        <div className="mr-3">
          <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow">
            <i className="fa fa-map-marker-alt" />
          </span>
        </div>
        <div className="text-gray-600">
          <p>
            {`${add.city}, ${add.address}`} <br />
            {/* Building 123, House 321 */}
            {`${add.building}, ${add.house} `}
            {add.isPrimary && (
              <small className="text-gray-400">(Primary)</small>
            )}
          </p>
        </div>
      </div>
      <span
        aria-hidden="true"
        class="hidden absolute inset-0 border-2 border-green-200 bg-green-100 bg-opacity-10 rounded-lg"
      >
        <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5 text-green-400"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </span>
    </label>
  );
};

export default AddressCard;
