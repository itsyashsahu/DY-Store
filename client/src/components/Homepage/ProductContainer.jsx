// Utils
import ProductCard from "../Utils/ProductCard";

const ProductContainer = () => {
  const productCardData = [
    {
      title: "T-Shirt",
      sizes: ["M", "L", "XL"],
      price: 250,
      img: "/api/images/10.jpg",
      offer: true,
      id: "/productdetails",
    },
    {
      title: "Sweater",
      sizes: ["M", "L", "XL"],
      price: 1500,
      img: "/api/images/11.jpg",
      offer: false,
      id: "/productdetails",
    },
    {
      title: "Shorts for Summers",
      sizes: ["M", "L", "XL"],
      price: 350,
      img: "/api/images/9.jpg",
      offer: false,
      id: "/productdetails",
    },
    {
      title: "Plane Solid Color T-Shirt",
      sizes: ["M", "L", "XL"],
      price: 400,
      img: "/api/images/12.jpg",
      offer: false,
      id: "/productdetails",
    },
    {
      title: "Simple Blue Blazer",
      sizes: ["M", "L", "XL"],
      price: 1800,
      img: "/api/images/13.jpg",
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
      title: "Girls Bags",
      sizes: ["M", "L", "XL"],
      price: 120,
      img: "/api/images/9.jpg",
      offer: false,
      id: "/productdetails",
    },
  ];

  return (
    <section className="py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">New products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productCardData.map((data) => {
            return <ProductCard data={data} />;
          })}
        </div>
        {/* grid ./ */}
      </div>
    </section>
  );
};

export default ProductContainer;
