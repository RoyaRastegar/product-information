import React from "react";
import "./shoppingcart.scss";
import ShoppingCartItem from "../shoppingcartitem/ShoppingCartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearShoppingCart } from "../../featurs/shoppingcart/shoppingSlice";
const ShoppingCart = () => {
  const cartItems = useSelector((store) => store.cartItems);

  const caculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);
  const dispatch = useDispatch();
  function clearShop() {
    dispatch(clearShoppingCart());
  }
  return (
    <>
      <div className="cart-header">
        <div>
          <h3>سبد خرید</h3>
        </div>
        <div className="clear">
          <button className="clearcart" onClick={clearShop}>
            خالی کردن سبد خرید
          </button>
        </div>
      </div>
      {cartItems.length === 0 ? <p>سبد خالی است</p> : null}
      {cartItems.map((item) => (
        <div className="shopping-item-countainer">
          <ShoppingCartItem item={item} />
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
