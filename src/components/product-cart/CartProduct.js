import "./cartproduct.scss";
import "react-loading-skeleton/dist/skeleton.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import image
import CartItemImage from "../../assets/download.jpg";
import CartSkeleton from "../cart-skeleton/CartSkeleton";

const CartProduct = ({ loading }) => {
  const cartItem = {
    img: CartItemImage,
    title: "کرم آبرسان",
    brand: "هیدرودرم",
    price: "1450000",
    discount: "120000",
  };

  return (
    <>
      {loading ? (
        <CartSkeleton />
      ) : (
        <div className="cart">
          <div className="img">
            <img
              src={cartItem.img}
              alt="محصول "
              width="300px"
              height="150px"
              className="back-img"
            />
            <div className="percent">%</div>
          </div>
          <div className="title">
            <div>{cartItem.title}</div>
            <div>
              <h4>{cartItem.brand}</h4>
            </div>
          </div>
          <div className="prices">
            <div className="price">
              <p>{cartItem.price} تومان</p>
              <h5>{cartItem.discount} تومان</h5>
            </div>
            <div className="icon">
              <button className="btn">
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
