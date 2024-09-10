import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// components
import CartProduct from "./components/product-cart/CartProduct";
import Products from "../src/components/products/Products";
import Home from "../src/pages/home/Home";
import ProductCart from "../src/components/product-information/ProductCart";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<CartProduct loading={loading} />} />
      <Route path="products" element={<Products loading={loading} />} />
      <Route path="information" element={<ProductCart loading={loading} />} />
    </Routes>
  );
}

export default App;
