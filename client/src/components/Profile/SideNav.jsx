import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const NavItems = [
    { Name: "New Orders", link: "/neworders" },
    { Name: "Order history", link: "/orderhistory" },
    { Name: "My Watchlist", link: "/watchlist" },
    { Name: "Transactions", link: "/transactions" },
    { Name: "Profile Settings", link: "/profilesettings" },
    { Name: "Logout", link: "/logout" },
  ];
  const NavItem = (item) => {
    return (
      <>
        <li>
          <Link
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            to={item.link}
          >
            {item.Name}
          </Link>
        </li>

        {/* <li>
              <Link
                className="block px-3 py-2 text-blue-500 bg-gray-100 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                to={item.link}
              >
                {item.Name}
              </Link>
            </li> */}
      </>
    );
  };

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <ul>
        {NavItems.map((item) => {
          return NavItem(item);
        })}
      </ul>
    </aside>
  );
};

export default SideNav;
