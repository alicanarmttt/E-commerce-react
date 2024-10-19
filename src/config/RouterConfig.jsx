import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        path="/product-details/:id"
        element={<ProductDetails></ProductDetails>}
      ></Route>
    </Routes>
  );
}

export default RouterConfig;
