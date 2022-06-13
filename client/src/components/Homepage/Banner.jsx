import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="pt-5">
      <div className="container max-w-screen-xl mx-auto px-4">
        <article className="p-4 bg-white border border-gray-200 shadow-sm rounded-md">
          <div className="flex flex-col md:flex-row">
            <aside className="md:w-1/4 flex-auto mb-4 pr-4 md:mb-0">
              <ul>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Clothes and wear
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Home interiors
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Computer and tech
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Tools, equipments
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Sports and outdoor
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Animal and pets
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Men’s clothing
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    Women’s clothing
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                    to="#"
                  >
                    More category
                  </Link>
                </li>
              </ul>
            </aside>
            <main className="md:w-3/4 flex-auto">
              {/* banner-main */}
              <article className="bg-blue-500 p-6 lg:p-16 rounded w-full h-full">
                <h1 className="text-3xl md:text-4xl text-white font-semibold">
                  Best products &amp; <br />
                  brands in our store
                </h1>
                <p className="text-lg text-white font-normal mt-4 mb-6">
                  Trendy Products, Factory Prices, Excellent Service
                </p>
                <div>
                  <Link
                    className="px-4 py-2 inline-block font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600"
                    to="#"
                  >
                    Discover
                  </Link>
                  <Link
                    className="px-4 py-2 inline-block font-semibold text-blue-600 border border-transparent rounded-md hover:bg-gray-100 bg-white"
                    to="#"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
              {/* banner-main end// */}
            </main>
          </div>{" "}
          {/* grid.// */}
        </article>
      </div>{" "}
      {/* container //end */}
    </section>
  );
};

export default Banner;
