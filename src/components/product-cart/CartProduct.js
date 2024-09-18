import "./cartproduct.scss";
import "react-loading-skeleton/dist/skeleton.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import image
import CartSkeleton from "../cart-skeleton/CartSkeleton";
import Badge from "@mui/material/Badge";
const CartProduct = ({ loading, item, addToCart }) => {
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
              <Badge badgeContent={item.amount} color="error">
                <button className="btn" onClick={() => addToCart(item)}>
                  {" "}
                  <AddShoppingCartIcon />
                </button>
              </Badge>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartProduct;
