import React from "react";
import Banner from "../components/Homepage/Banner";
import HomePageFooter from "../components/Homepage/HomePageFooter";
import InfoBlock from "../components/Homepage/InfoBlock";
import ProductContainer from "../components/Homepage/ProductContainer";
import Header from "../components/Utils/Header";
import Navbar from "../components/Utils/Navbar";
const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <ProductContainer />
      <InfoBlock />
      <HomePageFooter />
    </>
  );
};

export default Home;
