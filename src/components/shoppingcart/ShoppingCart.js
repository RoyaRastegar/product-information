import React from "react";
import "./shoppingcart.scss";
import ShoppingCartItem from "../shoppingcartitem/ShoppingCartItem";
const ShoppingCart = ({
  cartItems,
  addToCart,
  removeFromCart,
  setCartItems,
}) => {
  const caculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  function clearShoppingCart() {
    setCartItems([]);
  }
  return (
    <>
      <div className="cart-header">
        <div>
          <h3>سبد خرید</h3>
        </div>
        <div className="clear">
          <button className="clearcart" onClick={clearShoppingCart}>
            خالی کردن سبد خرید
          </button>
        </div>
      </div>
      {cartItems.length === 0 ? <p>سبد خالی است</p> : null}
      {cartItems.map((item) => (
        <div className="shopping-item-countainer">
          <ShoppingCartItem
            item={item}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            setCartItems={setCartItems}
          />
        </div>
      ))}
      <div className="cart-footer">
        <div className="finish">
          <button>تکمیل سفارش</button>
        </div>
        <div className="total-price">{caculateTotal(cartItems)} تومان</div>
      </div>
    </>
  );
};

export default ShoppingCart;
