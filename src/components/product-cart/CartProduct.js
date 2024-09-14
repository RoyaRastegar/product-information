import "./cartproduct.scss";
import "react-loading-skeleton/dist/skeleton.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import image
import CartSkeleton from "../cart-skeleton/CartSkeleton";
import { useState } from "react";

const CartProduct = ({ loading, item, handelAddToCart }) => {
  const [amount, setAmount] = useState(item.amount || 0);
  function handelAmount() {
    setAmount(amount + 1);
    handelAddToCart(item);
  }
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
              <button className="btn" onClick={handelAmount}>
                {" "}
                <AddShoppingCartIcon />
                <span className="badge">{amount}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartProduct;
