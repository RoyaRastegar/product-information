import "./shoppingcartitem.scss";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllItem,
} from "../../featurs/shoppingcart/shoppingSlice";

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();

  function handelAddToCart(item) {
    dispatch(addToCart(item));
  }
  function handelRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }
  function handelRemoveAllItem(id) {
    dispatch(removeAllItem(id));
  }
  // const remove = (id) => {
  //   cartItems((prev) =>
  //     prev.reduce((ack, item) => {
  //       if (item.id === id) {
  //         if (item.amount === 1) return ack;
  //         return [...ack];
  //       } else {
  //         return [...ack, item];
  //       }
  //     }, [])
  //   );
  // };
  return (
    <div className="shopping-cart-item">
      <div className="countainer-img">
        <img src={item.img} alt="no img" />
      </div>
      <div className="countainer-description">
        <div className="top">
          <div className="top-right">{item.title}</div>
          <div className="top-left">
            {" "}
            <button onClick={() => handelRemoveAllItem(item.id)}>حذف</button>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-right">
            <span className="price">{item.price}</span>
            <span>{item.discount}</span>
          </div>
          <div className="bottom-left">
            <button className="add" onClick={() => handelAddToCart(item)}>
              +
            </button>
            <p> عدد {item.amount}</p>
            <button
              className="dec"
              onClick={() => handelRemoveFromCart(item.id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
