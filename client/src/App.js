// Routing
import { Routes, Route } from "react-router-dom";
import AuthRouting from "./components/Utils/AuthRouting";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ProductDetail from "./pages/ProductDetail";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

// Css
import "./App.css";
import "./components/Utils/fonts/css/all.min.css";

// Utils
import Header from "./components/Utils/Header";
import Logout from "./pages/Logout";

import AuthContext from "./context/auth/authContext";
import React, { useContext, useEffect } from "react";

import { ReactComponent as Arrow } from "./components/Signin/images/arrow.svg";

const App = () => {
  const authContext = useContext(AuthContext);
  const { token, googleOneTap, validateStartup } = authContext;

  useEffect(() => {
    if (!token) {
      validateStartup();
    }
  }, []);

  return (
    <>
      {googleOneTap.loading && (
        <>
          <div className="absolute bg-gray-800 h-full w-full backdrop-blur-sm opacity-25"></div>
          <Arrow className="absolute mt-36 h-4/5 w-4/5" />
        </>
      )}
      <Header />
      <Routes>
        <Route element={<AuthRouting />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        {/* <Route path="/signup" element={<AuthRouting />}>
            <Route path="" element={<SignUp />} />
            </Route>
            <Route path="/signin" element={<AuthRouting />}>
            <Route path="" element={<SignIn />} />
          </Route> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productdetails" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
