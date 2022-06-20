// components
import ProductCard from "./ProductCard";

const RecomendedProducts = () => {
  const productCardData = [
    {
      title: "Plane Solid Color T-Shirt",
      sizes: ["M", "L", "XL"],
      price: 400,
      img: "/api/images/12.jpg",
      offer: false,
      id: "/productdetails",
    },
    {
      title: "Purse",
      sizes: ["M", "L", "XL"],
      price: 80,
      img: "/api/images/14.jpg",
      offer: false,
      id: "/productdetails",
    },
    {
      title: "Short Jeans",
      sizes: ["M", "L", "XL"],
      price: 120,
      img: "/api/images/9.jpg",
      offer: false,
      id: "/productdetails",
    },
    {
      title: "Girls Bags",
      sizes: ["M", "L", "XL"],
      price: 259,
      img: "/api/images/8.jpg",
      offer: false,
      id: "/productdetails",
    },
  ];

  return (
    <section className="pt-10 pb-20 bg-gray-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Recommended products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productCardData.map((data, i) => {
            return <ProductCard key={i} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RecomendedProducts;
