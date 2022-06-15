import React from "react";

const AddressCard = ({ add }) => {
  return (
    <figure className="md:w-1/2 flex items-center relative bg-gray-100 p-4 rounded-md">
      <div className="mr-3">
        <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow">
          <i className="fa fa-map-marker-alt" />
        </span>
      </div>
      <figcaption className="text-gray-600">
        <p>
          {`${add.city}, ${add.address}`} <br />
          {/* Building 123, House 321 */}
          {`${add.building}, ${add.house} `}
          {add.isPrimary && <small className="text-gray-400">(Primary)</small>}
        </p>
      </figcaption>
    </figure>
  );
};

export default AddressCard;
