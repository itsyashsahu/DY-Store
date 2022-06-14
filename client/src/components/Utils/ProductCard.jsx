// Routing
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <>
      <div>
        <article className="shadow-sm rounded bg-white border border-gray-200">
          <Link to={data.id} className="relative block p-1">
            <img
              src={data.img}
              className="mx-auto w-auto"
              style={{ height: 250 }}
              height={250}
              alt="Product title here"
            />
            {data.offer && (
              <span className="inline-block px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full absolute left-3 top-3">
                Offer
              </span>
            )}
          </Link>
          <div className="p-4 border-t border-t-gray-200">
            <Link
              className="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
              to="#"
            >
              <i className="fa fa-heart" />
            </Link>
            <h6>
              <Link to="#" className="text-gray-600 hover:text-blue-500">
                {data.title}
              </Link>
            </h6>
            <p className="text-sm text-gray-400">Sizes: S, M, XL</p>
            <span className="font-semibold">${data.price}</span>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProductCard;
