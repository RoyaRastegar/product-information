import "./cartproduct.scss";
import "react-loading-skeleton/dist/skeleton.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartSkeleton from "../cart-skeleton/CartSkeleton";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateAmount,
} from "../../featurs/shoppingcart/shoppingSlice";
// import { useState } from "react";
const CartProduct = ({ loading, item }) => {
  const cartItems = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  function handelAdd(item) {
    dispatch(addToCart(item));
    dispatch(updateAmount(item.id));
  }

  const x = cartItems.find((i) => i.id === item.id);

  return (
    <>
      {loading ? (
        <CartSkeleton />
      ) : (
        <div className="cart">
          <div className="img">
            <img
              src={item.img}
              alt="محصول "
              width="300px"
              height="150px"
              className="back-img"
            />
            <div className="percent">%</div>
          </div>
          <div className="title">
            <div>{item.title}</div>
            <div>
              <h4>{item.brand}</h4>
            </div>
          </div>
          <div className="prices">
            <div className="price">
              <p>{item.price} تومان</p>
              <h5>{item.discount} تومان</h5>
            </div>
            <div className="icon">
              {x ? (
                <Badge
                  className="badge"
                  badgeContent={x.amount}
                  color="error"
                ></Badge>
              ) : null}
              <button className="btn" onClick={() => handelAdd(item)}>
                {" "}
                <AddShoppingCartIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartProduct;
