import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InvoiceTable = ({ CartItems }) => {
  const [ttl, setTtl] = useState(+0);
  const [tax, setTax] = useState(+0);
  const [ttlQty, setTtlqty] = useState(+0);

  useEffect(() => {
    let total = 0;
    let ttlQty = 0;
    CartItems.map((item, i) => {
      total += +item.pricing.cost * +item.qty;
      ttlQty += +item.qty;
      return 0;
    });
    setTtl(total.toFixed(2));
    setTax((+total * 0.18).toFixed(2));
    setTtlqty(ttlQty);
  }, []);

  if (true) {
    return (
      <div className="flex flex-col py-6 space-y-4 w-full divide-y  divide-gray-700 ">
        <h2 className="text-xl font-semibold">Order items</h2>
        <ul className="flex flex-col pt-4 space-y-2">
          {CartItems.map((item, index) => {
            return (
              <li className="flex items-start justify-between">
                <h3>
                  {item.title}
                  <span className="text-sm dark:text-blue-600">
                    {" "}
                    x{item.qty}{" "}
                  </span>
                </h3>
                <div className="text-right">
                  <span className="block">
                    $ {item.pricing.cost * item.qty}
                  </span>
                  <span className="text-sm dark:text-gray-400">
                    per {item.pricing.perQuantity}: $ {item.pricing.cost}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="pt-4 space-y-2">
          <div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ {ttl}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>- $ 00.00</span>
          </div>
        </div>
        <div className="pt-4 space-y-2">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>$ {tax} </span>
            </div>
            <Link
              rel="noopener noreferrer"
              to="#"
              className="text-xs hover:underline text-blue-600"
            >
              Wanna know more about taxes ?
            </Link>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-semibold">
                $ {(+tax + +ttl).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default InvoiceTable;
