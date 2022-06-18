const InfoBlock = () => {
  return (
    <section className="pb-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <article className="shadow-sm rounded bg-white border border-gray-200 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* item */}
            <figure className="flex items-center mr-10">
              <div className="flex mr-5 items-center justify-center  rounded w-11 h-11 bg-green-200">
                <i className="fa fa-truck fa-lg text-green-600" />
              </div>
              <figcaption>
                <p className="font-medium">Free shipping</p>
                <p className="text-sm text-gray-500">
                  Have you ever finally just
                </p>
              </figcaption>
            </figure>
            {/* item end */}
            {/* item */}
            <figure className="flex items-center mr-10">
              <div className="flex mr-5 items-center justify-center  rounded w-11 h-11 bg-yellow-200">
                <i className="fa fa-star fa-lg text-yellow-600" />
              </div>
              <figcaption>
                <p className="font-medium">High quality</p>
                <p className="text-sm text-gray-500">
                  Have you ever finally just
                </p>
              </figcaption>
            </figure>
            {/* item end */}
            {/* item */}
            <figure className="flex items-center mr-10">
              <div className="flex mr-5 items-center justify-center  rounded w-11 h-11 bg-red-200">
                <i className="fa fa-envelope fa-lg text-red-600" />
              </div>
              <figcaption>
                <p className="font-medium">Customer support</p>
                <p className="text-sm text-gray-500">
                  Have you ever finally just
                </p>
              </figcaption>
            </figure>
            {/* item end */}
            {/* item */}
            <figure className="flex items-center mr-10">
              <div className="flex mr-5 items-center justify-center  rounded w-11 h-11 bg-blue-200">
                <i className="fa fa-tag fa-lg text-blue-600" />
              </div>
              <figcaption>
                <p className="font-medium">Reasonable Prices</p>
                <p className="text-sm text-gray-500">
                  Have you ever finally just
                </p>
              </figcaption>
            </figure>
            {/* item end */}
          </div>
        </article>
      </div>
      {/* container ./ */}
    </section>
  );
};

export default InfoBlock;
