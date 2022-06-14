// Routing
import { Link } from "react-router-dom";

// imports
import { useState } from "react";

const ProductDetailSection = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Overview",
      title: "First Tab: Overview",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 2,
      tabTitle: "Specification",
      title: "Second Tab : Overview",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 3,
      tabTitle: "Delivery",
      title: "Third Tab : Delivery",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 4,
      tabTitle: "Payment info",
      title: "Fourth Tab : Payment Info",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];
  const similarProducts = [
    {
      title: "Travel Bag Jeans Blue Color Modern",
      price: 712.0,
      link: "/images/asldkjfh",
    },
    {
      title: "Apple Watch Series 4 - Space Gray",
      price: 12.99,
      link: "/images/asldkjfh",
    },
    {
      title: "Travel Bag Jeans Blue Color Modern",
      price: 712.0,
      link: "/images/asldkjfh",
    },
    {
      title: "Travel Bag Jeans Blue Color Modern",
      price: 712.0,
      link: "/images/asldkjfh",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <div className="lg:w-3/4 px-2">
            <article className="border border-gray-200 shadow-sm rounded bg-white">
              <nav className="border-b px-4 tabs">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    id={tab.id}
                    type="button"
                    disabled={currentTab === `${tab.id}`}
                    className="px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500"
                    // className="px-3 py-4 mx-1 inline-block border-b border-blue-600 text-blue-600 hover:border-blue-600 hover:text-blue-500"
                    onClick={handleTabClick}
                  >
                    {tab.tabTitle}
                  </button>
                ))}
              </nav>
              <div className="content">
                {tabs.map((tab, i) => (
                  <div key={i}>
                    {currentTab === `${tab.id}` && (
                      <div className="p-5 text-gray-700">
                        <p className="mb-3">{tab.title}</p>
                        <p className="mb-3">{tab.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>
          {/* col.// */}
          <aside className="lg:w-1/4 px-2">
            <article className="border border-gray-200 shadow-sm rounded bg-white p-4">
              <h3 className="mb-5 text-lg font-semibold">Similar products</h3>
              {similarProducts.map((smproduct) => {
                return (
                  <figure className="flex flex-row mb-4">
                    <div>
                      <Link
                        to="#"
                        className="block w-20 h-20 rounded border border-gray-200 overflow-hidden"
                      >
                        <img src="images/items/8.jpg" alt="Title" />
                      </Link>
                    </div>
                    <figcaption className="ml-3">
                      <p>
                        <Link
                          to="#"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {smproduct.title}
                        </Link>
                      </p>
                      <p className="mt-1 font-semibold">${smproduct.price}</p>
                    </figcaption>
                  </figure>
                );
              })}
            </article>
          </aside>
          {/* col./ */}
        </div>
        {/* grid./ */}
      </div>
      {/* container./ */}
    </section>
  );
};

export default ProductDetailSection;
