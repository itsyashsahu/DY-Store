// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ProductDetail from "./pages/ProductDetail";

// Css
import "./App.css";
import "./components/Utils/fonts/css/all.min.css";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/productdetails" element={<ProductDetail />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
