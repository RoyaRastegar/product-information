import React from "react";
// style
import "./products.scss";
// components
import CartProduct from "../product-cart/CartProduct";
import CartSkeleton from "../cart-skeleton/CartSkeleton";
// import image
import Pro from "../../assets/images (1).jpg";
import Pro1 from "../../assets/download.jpg";

const Products = ({ loading, handelAddToCart, item, amount, setAmount }) => {
  // const product = {
  //   img: Pro,
  //   title: "کرم روشن کننده حاوی آربوتین",
  //   brand: "هیدرودرم",
  //   price: "174000",
  //   discount: "149000",
  // };
  // const product1 = {
  //   img: Pro1,
  //   title: "سرم روشن کننده حاوی آربوتین",
  //   brand: "هیدرودرم",
  //   price: "252000",
  //   discount: "190000",
  // };
  return (
    <>
      {loading ? (
        <div className="countainer">
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
        </div>
      ) : (
        <div className="products">
          {item.map((item) => (
            <CartProduct
              item={item}
              loading={loading}
              handelAddToCart={handelAddToCart}
              amount={amount}
              setAmount={setAmount}
            />
          ))}
          {/* <CartProduct
            item={product}
            loading={loading}
            handelAddToCart={handelAddToCart}
          />{" "} */}
        </div>
      )}
    </>
  );
};

export default Products;
