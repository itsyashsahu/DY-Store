import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import ProductDetail from "./pages/ProductDetail";

// icons css
import "./components/Utils/fonts/css/all.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
