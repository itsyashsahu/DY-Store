import React from "react";
import { Link } from "react-router-dom";

const InvoiceTable = () => {
  return (
    <>
      {/* <!-- scrolling horiz. table --> */}
      <div className="overflow-x-auto shadow-sm">
        <table className="w-full whitespace-no-wrap">
          <thead className="w-full">
            <tr className="text-xs font-semibold tracking-wide text-left uppercase bg-gray-200">
              <th className="px-3 py-3" width="800">
                Item
              </th>
              <th className="px-10 py-3">Price</th>
              <th className="px-3 py-3">Qty</th>
              <th className="pl-12 pr-3 py-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            <tr className="text-gray-900">
              <td className="px-3 py-3">
                <div className="flex items-center leading-tight">
                  <div>
                    <p className="font-semibold">Product Name</p>
                    <p className="text-sm text-gray-500">More Details</p>
                  </div>
                </div>
              </td>

              <td className="text-center pr-3 py-3">$ 4000.00</td>
              <td className="px-3 text-center py-3">8</td>
              <td className="text-right pr-3 py-3">$ 4000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InvoiceTable;
