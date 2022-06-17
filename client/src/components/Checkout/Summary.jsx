import React from "react";

const Summary = ({ ttl, tax }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-3">Summary</h2>
      <ul>
        <li className="flex justify-between mb-1">
          <span>Sub total:</span>
          <span>$ {ttl}</span>
        </li>
        <li className="flex justify-between mb-1">
          <span>Discount:</span>
          <span className="text-green-500">- $ 00.00</span>
        </li>
        <li className="flex justify-between mb-1">
          <span>TAX:</span>
          <span>$ {tax}</span>
        </li>
        <li className="border-t flex justify-between mt-3 pt-3">
          <span>Total :</span>
          <span className="text-gray-900 font-bold">$ {+ttl + +tax}</span>
        </li>
      </ul>
    </>
  );
};

export default Summary;
