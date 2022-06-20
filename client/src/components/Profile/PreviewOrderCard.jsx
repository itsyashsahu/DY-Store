import { Link } from "react-router-dom";

const PreviewOrderCard = ({ order }) => {
  const SmallCard = (product, i) => {
    return (
      <figure key={i} className="flex flex-row mb-4">
        <div>
          <Link
            to=""
            className="block w-20 h-20 rounded border border-gray-200 overflow-hidden"
          >
            <img src={product.img} alt="Title" />
          </Link>
        </div>
        <figcaption className="ml-3">
          <p>
            <Link to="#" className="text-gray-600 hover:text-blue-600">
              {product.name}
            </Link>
          </p>
          <p className="mt-1 font-semibold">
            {product.qty}x ${product.price}
          </p>
        </figcaption>
      </figure>
    );
  };
  return (
    <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
      <header className="lg:flex justify-between mb-4">
        <div className="mb-4 lg:mb-0">
          <p className="font-semibold">
            <span>Order ID: {order.orderId} </span>
            {order.statusCode > 0 ? (
              <span className="text-green-500"> • Confirmed </span>
            ) : (
              <span className="text-red-500"> • Pending </span>
            )}
          </p>
          <p className="text-gray-500">{order.date}</p>
        </div>
        <div>
          <button className="px-3 py-1 mr-2 inline-block text-sm text-red-500 border border-gray-300 rounded-md hover:text-red-500 hover:border-red-600">
            Cancel order
          </button>
          <button className="px-3 py-1 inline-block text-white text-sm bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">
            Track order
          </button>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-2">
        <div>
          <p className="text-gray-400 mb-1">Person</p>
          <ul className="text-gray-600">
            <li>{order.orderedBy.name}</li>
            <li>Phone: {order.orderedBy.phone}</li>
            <li>Email: {order.orderedBy.email}</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Delivery address</p>
          <ul className="text-gray-600">
            <li>{`${order.deliveryAdd.house}, ${order.deliveryAdd.building}, `}</li>
            <li>{`${order.deliveryAdd.address}, ${order.deliveryAdd.city} `}</li>
            <li> Zip: {`${order.deliveryAdd.zip}`}</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Payment</p>
          <ul className="text-gray-600">
            <li className="text-green-400">
              {order.payment.method} **** {order.payment.last4Digit}
            </li>
            <li>Total paid: $ {order.payment.totalPaid}</li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {order.products.map((product, i) => {
          return SmallCard(product, i);
        })}
      </div>
    </article>
  );
};

export default PreviewOrderCard;
