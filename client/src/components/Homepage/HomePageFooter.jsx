// Routing
import { Link } from "react-router-dom";

// Images
// import LogoWhite from './images/logo-white.png';
import { ReactComponent as LogoWhite } from "../Utils/images/logoWhite.svg";
import BtnAppstore from "./images/btn-appstore.png";
import BtnGMarket from "./images/btn-market.png";
import Payments from "./images/payments.png";

const HomePageFooter = () => {
  const columns = [
    {
      name: "Store",
      items: [
        { itemName: "Join us", link: "/" },
        { itemName: "Find store", link: "/" },
        { itemName: "Categories", link: "/" },
        { itemName: "Patnership", link: "/" },
      ],
    },
    {
      name: "About",
      items: [
        { itemName: "About us", link: "/" },
        { itemName: "Our history", link: "/" },
        { itemName: "Our team", link: "/" },
        { itemName: "Offices", link: "/" },
      ],
    },
    {
      name: "Help",
      items: [
        { itemName: "Contact us", link: "/" },
        { itemName: "Submit ticket", link: "/" },
        { itemName: "FAQs", link: "/" },
        { itemName: "Refunds", link: "/" },
      ],
    },
    {
      name: "Links",
      items: [
        { itemName: "Our terms", link: "/" },
        { itemName: "Privacy settings", link: "/" },
        { itemName: "Signup", link: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-blue-600">
      {/* section footer top */}
      <section className="py-10 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap">
            <aside className="w-full md:w-1/3 lg:w-1/4 mb-5">
              {/* <img src={LogoWhite} height={38} alt='Company name' /> */}
              <div className="h-14 w-24 ">
                <LogoWhite />
              </div>
              <p className="my-4">
                DY Store <br /> © 2022 DY Corporation Copyrigth <br />
                All rights reserved.
              </p>
            </aside>
            {columns.map((col, idx1) => {
              return (
                <aside className="w-1/2 sm:w-auto flex-auto mb-5" key={idx1}>
                  <h3 className="font-semibold"> {col.name} </h3>
                  <ul className="mt-2 space-y-1">
                    {col.items.map((item, idx2) => {
                      return (
                        <li key={idx2}>
                          <Link to="#" className="opacity-70 hover:opacity-100">
                            {item.itemName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </aside>
              );
            })}
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
            {/* col ./ */}
          </div>{" "}
          {/* grid ./ */}
        </div>{" "}
        {/* container ./ */}
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
            {/* col ./ */}
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
            {/* col ./ */}
          </div>{" "}
          {/* grid ./ */}
        </div>{" "}
        {/* container ./ */}
      </section>
      {/* section footer bottom  end */}
    </footer>
  );
};

export default HomePageFooter;
