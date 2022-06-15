import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItemsSection from "../components/Checkout/CartItemsSection";
import Summary from "../components/Checkout/Summary";
import Header from "../components/Utils/Header";
const Checkout = () => {
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
          <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
            <li className="inline-flex items-center">
              <Link className="text-gray-600 hover:text-blue-600" to="#">
                Home
              </Link>
              <i className="ml-3 text-gray-400 fa fa-chevron-right" />
            </li>
            <li className="inline-flex items-center" aria-current="page">
              <Link className="text-gray-600 hover:text-blue-600" to="#">
                Cart
              </Link>
              <i className="ml-3 text-gray-400  fa fa-chevron-right" />
            </li>
            <li className="inline-flex items-center"> Order </li>
          </ol>
          {/* breadcrumbs end */}
        </div>
        {/* /.container */}
      </section>
      <section className="py-10 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
            <main className="md:w-2/3">
              <article className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                <h2 className="text-xl font-semibold mb-5">Guest checkout</h2>
                <div className="grid grid-cols-2 gap-x-3">
                  <div className="mb-4">
                    <label className="block mb-1"> First name </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1"> Last name </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-x-3">
                  <div className="mb-4">
                    <label className="block mb-1"> Phone </label>
                    <div className="flex w-full">
                      <input
                        className="appearance-none w-24 border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                        type="text"
                        placeholder="Code"
                        defaultValue={+998}
                      />
                      <input
                        className="appearance-none flex-1 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                        type="text"
                        placeholder="Type phone"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1"> Email </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="email"
                      placeholder="Type here"
                    />
                  </div>
                </div>
                <label className="flex items-center w-max my-4">
                  <input
                    defaultChecked=""
                    name=""
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span className="ml-2 inline-block text-gray-500">
                    I agree with Terms and Conditions
                  </span>
                </label>
                <hr className="my-4" />
                <h2 className="text-xl font-semibold mb-5">
                  Shipping information
                </h2>
                {/* radio selection */}
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  <label className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                    <span>
                      <input
                        name="shipping"
                        type="radio"
                        className="h-4 w-4 mt-1"
                      />
                    </span>
                    <p className="ml-2">
                      <span>Express delivery</span>
                      <small className="block text-sm text-gray-400">
                        3-4 days via Fedex
                      </small>
                    </p>
                  </label>
                  <label className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                    <span>
                      <input
                        name="shipping"
                        type="radio"
                        className="h-4 w-4 mt-1"
                      />
                    </span>
                    <p className="ml-2">
                      <span>Post office</span>
                      <small className="block text-sm text-gray-400">
                        20-30 days via post
                      </small>
                    </p>
                  </label>
                  <label className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                    <span>
                      <input
                        name="shipping"
                        type="radio"
                        className="h-4 w-4 mt-1"
                      />
                    </span>
                    <p className="ml-2">
                      <span>Self pick-up</span>
                      <small className="block text-sm text-gray-400">
                        Nearest location
                      </small>
                    </p>
                  </label>
                </div>
                {/* radio selection .//end */}
                <div className="grid md:grid-cols-3 gap-x-3">
                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Address* </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
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
                          width={22}
                          height={22}
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
                      placeholder="Type here"
                    />
                  </div>
                  <div className="mb-4 md:col-span-1">
                    <label className="block mb-1"> Building </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="mb-4 md:col-span-1">
                    <label className="block mb-1"> ZIP code </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-1"> Other info </label>
                  <textarea
                    placeholder="Type your wishes"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    defaultValue={""}
                  />
                </div>
                <label className="flex items-center w-max my-4">
                  <input
                    defaultChecked=""
                    name=""
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span className="ml-2 inline-block text-gray-500">
                    Save my information for future purchase
                  </span>
                </label>
                <div className="flex justify-end space-x-2">
                  <Link
                    className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                    to="#"
                  >
                    Back
                  </Link>
                  <Link
                    className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                    to="#"
                  >
                    Continue
                  </Link>
                </div>
              </article>
            </main>

            <aside className="md:w-1/3">
              <article className="text-gray-600" style={{ maxWidth: 350 }}>
                <Summary ttl={ttl} tax={tax} />
                <hr className="my-4" />
                <div className="flex gap-3">
                  <Link
                    className="px-4 py-2 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                </div>
                <hr className="my-4" />

                <CartItemsSection CartItems={CartItems} />
              </article>
            </aside>
            {/* col.// */}
          </div>
          {/* grid.// */}
        </div>
        {/* container.// */}
      </section>
      ;
    </>
  );
};

export default Checkout;
