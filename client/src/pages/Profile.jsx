import React from "react";
import { Link } from "react-router-dom";
import PreviewOrderCard from "../components/Profile/PreviewOrderCard";
import SideNav from "../components/Profile/SideNav";
import UserDetails from "../components/Profile/UserDetails";
import AddNewAdressBtn from "../components/Utils/AddNewAdressBtn";
import AddressCard from "../components/Utils/AddressCard";
import Header from "../components/Utils/Header";
import Navbar from "../components/Utils/Navbar";
const Profile = () => {
  const user = {
    name: "Mr. Jackson Mike",
    email: "myusername@gmail.com",
    phone: 1234567890988,
    savedAddress: [
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
        id: "09870987asdf",
        address: "Street name",
        city: "Tashkent city",
        house: "House 0987",
        building: "Building 123",
        zip: 678989,
        other: "",
        isPrimary: false,
      },
    ],
    orders: [
      {
        orderId: "234Dfsd234",
        date: "Dec 29, Mon, 2018",
        status: "Pending",
        statusCode: -1,
        orderedBy: {
          name: "Jackson Mike",
          phone: 3712959131,
          email: "info@mywebsite.com",
        },
        deliveryAdd: {
          address: "Street name",
          city: "Tashkent city",
          house: "House 321",
          building: "Building 123",
          zip: 678989,
          other: "",
          isPrimary: false,
        },
        payment: {
          method: "Visa Card",
          last4Digit: 4216,
          totalPaid: 412,
        },
        products: [
          {
            id: "qw987",
            name: "Travel Bag Jeans Blue Color Modern",
            qty: 2,
            price: 87,
            img: "/api/images/2.jpg",
          },
          {
            id: "qw987",
            name: "Travel Bag Jeans Blue Color Modern",
            qty: 1,
            price: 87,
            img: "/api/images/3.jpg",
          },
        ],
      },
      {
        orderId: "234Dfsd234",
        date: "Dec 29, Mon, 2018",
        status: "Confirmed",
        statusCode: 1,
        orderedBy: {
          name: "Jackson Mike",
          phone: 3712959131,
          email: "info@mywebsite.com",
        },
        deliveryAdd: {
          address: "Street name",
          city: "Tashkent city",
          house: "House 321",
          building: "Building 123",
          zip: 678989,
          other: "",
          isPrimary: false,
        },
        payment: {
          method: "Visa Card",
          last4Digit: 4216,
          totalPaid: 412,
        },
        products: [
          {
            id: "qw987",
            name: "Travel Bag Jeans Blue Color Modern",
            qty: 2,
            price: 87,
            img: "/api/images/1.jpg",
          },
          {
            id: "qw987",
            name: "Travel Bag Jeans Blue Color Modern",
            qty: 1,
            price: 87,
            img: "/api/images/4.jpg",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Navbar />
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
                Profile
              </Link>
              <i className="ml-3 text-gray-400  fa fa-chevron-right" />
            </li>
            <li className="inline-flex items-center"> Orders </li>
          </ol>
          {/* breadcrumbs end */}
        </div>
        {/* /.container */}
      </section>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* col.// */}
            <SideNav />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-4 p-3 lg:p-5">
                <UserDetails user={user} />
                <form class="w-full mb-5">
                  <fieldset class="space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {user.savedAddress.map((add) => {
                        return <AddressCard add={add} />;
                      })}
                    </div>
                  </fieldset>
                </form>
                <AddNewAdressBtn />
                <hr className="my-4" />
                <h3 className="text-xl font-semibold mb-5">Current orders</h3>
                {user.orders.map((order) => {
                  return <PreviewOrderCard order={order} />;
                })}
              </article>
            </main>
          </div>
          {/* grid.// */}
        </div>
        {/* container.// */}
      </section>
    </>
  );
};

export default Profile;
