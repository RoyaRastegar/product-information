import { Routes, Route } from "react-router-dom";
import CartProduct from "./components/product-cart/CartProduct";
import Products from "../src/components/products/Products";
import Home from "../src/pages/home/Home";
import ProductCart from "../src/components/product-information/ProductCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cartproduct" Component={CartProduct} />
      <Route path="products" Component={Products} />
      <Route path="productinformation" Component={ProductCart} />
    </Routes>
  );
}

export default App;
