import React from "react";
import ProductDetailCard from "../components/ProductDetails/ProductDetailCard";
import ProductDetailSection from "../components/ProductDetails/ProductDetailSection";
import Breadcrums from "../components/Utils/Breadcrums";
import Header from "../components/Utils/Header";
import Navbar from "../components/Utils/Navbar";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrums />
      <ProductDetailCard />
      <ProductDetailSection />
    </>
  );
};

export default ProductDetail;
