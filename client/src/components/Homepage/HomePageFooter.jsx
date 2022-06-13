import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "./images/logo-white.png";
import BtnAppstore from "./images/btn-appstore.png";
import BtnGMarket from "./images/btn-market.png";
import Payments from "./images/payments.png";
const HomePageFooter = () => {
  return (
    <footer className="bg-blue-600">
      {/* section footer top */}
      <section className="py-10 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap">
            <aside className="w-full md:w-1/3 lg:w-1/4 mb-5">
              <img src={LogoWhite} height={38} alt="Company name" />
              <p className="my-4">
                Company name. <br /> © 2018- 2021 Templatemount. <br />
                All rights reserved.
              </p>
            </aside>{" "}
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold"> Store </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Join us{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Find store{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Categories{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Partnership{" "}
                  </Link>
                </li>
              </ul>
            </aside>{" "}
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold"> About </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    About us{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Our history{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Our team{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Offices{" "}
                  </Link>
                </li>
              </ul>
            </aside>{" "}
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto  mb-5">
              <h3 className="font-semibold"> Help </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Contact us{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Submit ticket{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    FAQs{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Refunds{" "}
                  </Link>
                </li>
              </ul>
            </aside>{" "}
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto  mb-5">
              <h3 className="font-semibold"> Links </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Our terms
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Privacy setting
                  </Link>
                </li>
                <li>
                  <Link to="#" className="opacity-70 hover:opacity-100">
                    {" "}
                    Sign up{" "}
                  </Link>
                </li>
              </ul>
            </aside>{" "}
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto lg:w-40  mb-5">
              <h3 className="font-semibold"> Apps </h3>
              <Link to="#" className="mt-3 inline-block">
                <img
                  className="h-10"
                  src={BtnAppstore}
                  alt="Available in IStore"
                  height={38}
                />
              </Link>
              <Link to="#" className="inline-block">
                <img
                  className="h-10"
                  src={BtnGMarket}
                  alt="Available in Play Store"
                  height={38}
                />
              </Link>
            </aside>{" "}
            {/* col .// */}
          </div>{" "}
          {/* grid .// */}
        </div>{" "}
        {/* container .// */}
      </section>
      {/* section footer top end */}
      {/* section footer bottom  */}
      <section className="bg-blue-700 py-6 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="lg:flex justify-between">
            <div className="mb-3">
              <img
                src={Payments}
                height={24}
                className="h-6"
                alt="Payment methods"
              />
            </div>{" "}
            {/* col .// */}
            <div className="space-x-6">
              <nav className="text-sm space-x-4">
                <Link to="#" className="opacity-70 hover:opacity-100">
                  Support
                </Link>
                <Link to="#" className="opacity-70 hover:opacity-100">
                  Privacy &amp; Cookies
                </Link>
                <Link to="#" className="opacity-70 hover:opacity-100">
                  Accessibility
                </Link>
              </nav>
            </div>{" "}
            {/* col .// */}
          </div>{" "}
          {/* grid .// */}
        </div>{" "}
        {/* container .// */}
      </section>
      {/* section footer bottom  end */}
    </footer>
  );
};

export default HomePageFooter;
