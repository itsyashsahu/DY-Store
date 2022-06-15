import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Utils/Header";
import CartItemCard from "../components/Cart/CartItemCard";
import RecomendedProducts from "../components/Utils/RecomendedProducts";

const Cart = () => {
  const CartItems = [
    {
      title: "Modern Product Name Goes Here as demo",
      qty: 1,
      img: "/api/images/1.jpg",
      pricing: {
        cost: 5000,
        perQuantity: "item",
      },
      details: [
        { Name: "Color", Value: "Black" },
        { Name: "Type", Value: "Pocket Camera" },
      ],
    },
    {
      title: "Travel Bag Jeans Blue Color Modern",
      qty: 1,
      img: "/api/images/2.jpg",
      pricing: {
        cost: 25000,
        perQuantity: "item",
      },
      details: [
        { Name: "Color", Value: "Black" },
        { Name: "Type", Value: "Camera" },
      ],
    },
    {
      title: "Great product name",
      qty: 1,
      img: "/api/images/3.jpg",
      pricing: {
        cost: 15000,
        perQuantity: "item",
      },
      details: [
        { Name: "Color", Value: "Green" },
        { Name: "Type", Value: "Mobile" },
      ],
    },
  ];

  //   May be we can do this calculations in context api
  const [ttl, setTtl] = useState(+0);
  const [tax, setTax] = useState(+0);

  useEffect(() => {
    let total = 0;
    CartItems.map((item, i) => {
      total += +item.pricing.cost * +item.qty;
      return 0;
    });
    setTtl(total.toFixed(2));
    setTax((+total * 0.18).toFixed(2));
  }, []);

  return (
    <>
      <Header />
      <section className="py-5 sm:py-7 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* breadcrumbs start */}
          <h2 className="text-3xl font-semibold mb-2">Shopping cart</h2>
        </div>
        {/* /.container */}
      </section>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <main className="md:w-3/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {CartItems.map((item, index) => {
                  // setTtl(ttl + item.pricing.cost * item.qty);
                  return <CartItemCard item={item} key={index} />;
                })}
                <h6 className="font-bold">Free Delivery within 1-2 weeks</h6>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </article>
            </main>

            <aside className="md:w-1/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul className="mb-5">
                  <li className="flex justify-between text-gray-600 mb-1">
                    <span>Total price:</span>
                    <span>$ {ttl}.00</span>
                  </li>
                  <li className="flex justify-between text-gray-600 mb-1">
                    <span>Discount:</span>
                    <span className="text-green-500">- $ 00.00</span>
                  </li>
                  <li className="flex justify-between text-gray-600 mb-1">
                    <span>TAX:</span>
                    <span>$ {tax}</span>
                  </li>
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>$ {(+ttl + +tax).toFixed(2)}</span>
                  </li>
                </ul>
                <Link
                  className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                  to="/checkout"
                >
                  Checkout
                </Link>
                <Link
                  className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  to="/"
                >
                  Back to shop
                </Link>
              </article>
              {/* card end.// */}
            </aside>
            {/* col.// */}
          </div>
          {/* grid.// */}
        </div>
      </section>
      <RecomendedProducts />
    </>
  );
};

export default Cart;
