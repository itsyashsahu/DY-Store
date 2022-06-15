import React from "react";

const CartItemsSection = ({ CartItems }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-3">Items in cart</h2>
      {CartItems.map((item, index) => {
        return (
          <figure key={index} className="flex items-center mb-4 leading-5">
            <div>
              <div className="block relative w-20 h-20 rounded p-1 border border-gray-200">
                <img width={70} height={70} src={item.img} alt="Title" />
                <span className="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
                  {index + 1}
                </span>
              </div>
            </div>
            <figcaption className="ml-3">
              <p>{item.title} </p>
              <p className="mt-1 text-gray-400">Total: $12.99</p>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};

export default CartItemsSection;
