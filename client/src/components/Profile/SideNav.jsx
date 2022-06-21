import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Utils/Modal";

const SideNav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const NavItems = [
    { Name: "New Orders", link: "/neworders" },
    { Name: "Order history", link: "/orderhistory" },
    { Name: "My Watchlist", link: "/watchlist" },
    { Name: "Transactions", link: "/transactions" },
    { Name: "Profile Settings", link: "/profilesettings" },
    { Name: "Logout", link: "/logout" },
  ];

  const NavItem = (item, i) => {
    //  <li>
    //       <Link
    //         className="block px-3 py-2 text-blue-500 bg-gray-100 hover:bg-blue-100 hover:text-blue-500 rounded-md"
    //         to={item.link}
    //       >
    //         {item.Name}
    //       </Link>
    //     </li>

    if (item.Name === "Logout") {
      return (
        <li key={i}>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className=" px-3 py-2 w-full flex text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            to={item.link}
          >
            {item.Name}
          </button>
        </li>
      );
    }

    return (
      // <>
      <li key={i}>
        <Link
          className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          to={item.link}
        >
          {item.Name}
        </Link>
      </li>
    );
  };

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <ul>
        {NavItems.map((item, i) => {
          return NavItem(item, i);
        })}
      </ul>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </aside>
  );
};

export default SideNav;
