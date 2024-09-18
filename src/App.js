import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// components
import CartProduct from "./components/product-cart/CartProduct";
import Products from "../src/components/products/Products";
import Home from "../src/pages/home/Home";
import ProductCart from "../src/components/product-information/ProductCart";
import CartItemImage from "./assets/download.jpg";
import Img from "./assets/images (2).jpg";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import ShoppingCartItem from "./components/shoppingcartitem/ShoppingCartItem";
function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const category = ["بهداشتی", "مراقبت از پوست"];
  const feature = ["آبرسان", "رطوبت رسان", "فاقد تست حیوانی"];
  const [item] = useState([
    {
      id: Math.random(),
      img: CartItemImage,
      title: "کرم آبرسان",
      titleEng: "DETOX Ultra Hydrating Serum 40ml BIOMARINE",
      brand: "هیدرودرم",
      category: { category },
      feature: { feature },
      discountPercent: 10,
      price: 450000,
      discount: 120000,
      amount: 0,
    },
    {
      id: Math.random(),
      img: Img,
      title: "کرم ",
      titleEng: "DETOX Ultra BIOMARINE",
      brand: "هیدرودرم",
      category: { category },
      feature: { feature },
      discountPercent: 10,
      price: 25000,
      discount: 50000,
      amount: 0,
    },
    {
      id: Math.random(),
      img: Img,
      title: "کرم ",
      titleEng: "DETOX Ultra BIOMARINE",
      brand: "هیدرودرم",
      category: { category },
      feature: { feature },
      discountPercent: 10,
      price: 25000,
      discount: 50000,
      amount: 0,
    },
  ]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  const handelAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      // is the item already add to cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // first time the item is add
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handelRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };
  console.log(cartItems);
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="products"
        element={
          <Products
            loading={loading}
            item={item}
            addToCart={handelAddToCart}
            cartItems={cartItems}
            removeFromCart={handelRemoveFromCart}
            setCartItems={setCartItems}
          />
        }
      />
      <Route
        path="information"
        element={
          <ProductCart
            loading={loading}
            handelAddToCart={handelAddToCart}
            item={item[0]}
            category={category}
            feature={feature}
          />
        }
      />
    </Routes>
  );
}

export default App;
