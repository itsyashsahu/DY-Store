// Routing
import { Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/productdetails" element={<ProductDetail />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
