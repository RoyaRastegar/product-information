import React from "react";
import "./products.scss";
import CartProduct from "../product-cart/CartProduct";
import Pro from "../../assets/images (1).jpg";
import Pro1 from "../../assets/download.jpg";

const Products = () => {
  const product = {
    img: Pro,
    title: "کرم روشن کننده حاوی آربوتین",
    brand: "هیدرودرم",
    price: "174000",
    discount: "149000",
  };
  const product1 = {
    img: Pro1,
    title: "سرم روشن کننده حاوی آربوتین",
    brand: "هیدرودرم",
    price: "252000",
    discount: "190000",
  };
  return (
    <div className="products">
      <CartProduct
        img={product.img}
        title={product.title}
        brand={product.brand}
        price={product.price}
        discount={product.discount}
      />{" "}
      <CartProduct
        img={product.img}
        title={product.title}
        brand={product.brand}
        price={product.price}
        discount={product.discount}
      />{" "}
      <CartProduct
        img={product.img}
        title={product.title}
        brand={product.brand}
        price={product.price}
        discount={product.discount}
      />{" "}
      <CartProduct
        img={product1.img}
        title={product1.title}
        brand={product1.brand}
        price={product1.price}
        discount={product1.discount}
      />{" "}
      <CartProduct
        img={product1.img}
        title={product1.title}
        brand={product1.brand}
        price={product1.price}
        discount={product1.discount}
      />{" "}
      <CartProduct
        img={product1.img}
        title={product1.title}
        brand={product1.brand}
        price={product1.price}
        discount={product1.discount}
      />{" "}
      <CartProduct
        img={product1.img}
        title={product1.title}
        brand={product1.brand}
        price={product1.price}
        discount={product1.discount}
      />{" "}
      <CartProduct
        img={product1.img}
        title={product1.title}
        brand={product1.brand}
        price={product1.price}
        discount={product1.discount}
      />{" "}
    </div>
  );
};

export default Products;
