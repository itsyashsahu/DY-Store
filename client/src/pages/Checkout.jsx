import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItemsSection from "../components/Checkout/CartItemsSection";
import Invoice from "../components/Checkout/Invoice";
import Summary from "../components/Checkout/Summary";
import AddressCard from "../components/Utils/AddressCard";
import Header from "../components/Utils/Header";
import AddNewAddressBtn from "../components/Utils/AddNewAdressBtn";
import AddNewAddressForm from "../components/Utils/AddNewAddressForm";

const Checkout = () => {
  const savedAddress = [
    {
      id: "09w87dgsdfg",
      address: "Street name",
      city: "Tashkent city",
      house: "House 321",
      building: "Building 123",
      zip: 678989,
      other: "",
      isPrimary: true,
    },
    {
      id: "09w87dgsg",
      address: "Street name",
      city: "Tashkent city",
      house: "House 321",
      building: "Building 123",
      zip: 678989,
      other: "",
      isPrimary: true,
    },
    {
      id: "09870987asdf",
      address: "Street name",
      city: "Tashkent city",
      house: "House 0987",
      building: "Building 123",
      zip: 678989,
      other: "",
      isPrimary: false,
    },
  ];
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

  const [changeAdd, setChangeAdd] = useState(false);
  const [addNewAddress, setAddNewAddress] = useState(false);
  return (
    <>
      {console.log(addNewAddress)}
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
              {/* radio selection */}

              {/* radio selection .//end */}
              <article className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                {!changeAdd ? (
                  <>
                    <Invoice
                      CartItems={CartItems}
                      setChangeAdd={setChangeAdd}
                    />

                    <div className="flex justify-end space-x-2 md:px-10 mb-10">
                      <button
                        type="button"
                        className="w-full py-4 font-semibold text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                      >
                        Proceed to pay
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {addNewAddress ? (
                      <>
                        <div className="md:py-2 md:px-10 ">
                          <AddNewAddressForm />

                          <div className="flex justify-end space-x-2 mb-5">
                            <Link
                              className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                              to="#"
                            >
                              Back
                            </Link>
                            <button
                              onClick={() => {
                                setAddNewAddress(false);
                              }}
                              type="button"
                              className="px-5 py-2 font-semibold text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="md:py-2 md:px-10 ">
                        <h2 className="text-2xl font-semibold my-5">
                          Choose your delivery address
                        </h2>
                        <h2 className="text-xl font-semibold mb-5">
                          Saved address
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                          {savedAddress.map((add, index) => {
                            return <AddressCard key={index} add={add} />;
                          })}
                        </div>
                        <div
                          onClick={() => {
                            setAddNewAddress(true);
                          }}
                        >
                          <AddNewAddressBtn />
                        </div>
                        <div className="flex justify-end space-x-2 mb-8 mt-8">
                          <button
                            type="button"
                            onClick={() => {
                              setChangeAdd(false);
                            }}
                            className="w-full py-4 font-semibold text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                          >
                            Continue with this delivery address
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
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
                    Procced to pay
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
