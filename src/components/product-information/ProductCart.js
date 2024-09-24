import React, { useState } from "react";
// style
import "./productcart.scss";
// components
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuLink from "../menu-link/MenuLink";
// import image
import InfoSkeleton from "../information-skeleton/InfoSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../featurs/shoppingcart/shoppingSlice";
const ProductCart = ({ loading, item, category, feature }) => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartItems);
  // function addToCart(item) {
  //   item.amount = count;
  //   setMessage("محصول با موفقیت ثبت شد");
  // }
  function handelAddToCart(item) {
    if (!count) return setMessage("لطفا تعداد محصول را انتخاب کنید");
    const newItem = { ...item, amount: count };
    dispatch(addToCart(newItem));
    setMessage("محصول با موفقیت ثبت شد");
    console.log(newItem);
    console.log(cartItems);
  }
  function handelLike() {
    setLike((like) => !like);
  }
  const offer = (item.price * item.discountPercent) / 100;
  const priceAfterDiscount = item.price - offer;
  return (
    <>
      {loading ? (
        <div>
          <InfoSkeleton />
        </div>
      ) : (
        <div className="product-cart">
          <div className="cart-img">
            <img src={item.img} alt="no pictur" />
          </div>
          <div className="cart-info">
            <h3>{item.titlePer} </h3>
            <h4>{item.titleEng} </h4>
            <h4>
              دسته بندی:
              {category.map((item) => (
                <span> {item}،</span>
              ))}
            </h4>
            <h4>ویژگی ها</h4>
            <ul>
              {feature.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="button">
              نمایش بیشتر
              <KeyboardArrowDownRoundedIcon />
            </button>
          </div>
          <div className="cart-price">
            <div className="more">
              <MenuLink icon={<StarBorderIcon />} text="برند بایومارین" />
              <MenuLink
                icon={<WorkspacePremiumIcon />}
                text="ارائه تضمین اصل بودن کالا"
              />
              <MenuLink
                icon={<PedalBikeRoundedIcon />}
                text="ارسال رایگان بالای 850000 تومان"
              />
              <MenuLink
                icon={<HeadsetMicRoundedIcon />}
                text="ًضمانت بازگشت کالا 7 روزه"
              />
              <MenuLink
                icon={<HeadsetMicRoundedIcon />}
                text="مشاوره رایگان بگیرید
            "
              />
            </div>
            <hr />
            <div>
              <div className="button-menu">
                <div className="price">
                  <p className="has-discount">
                    {item.price}
                    تومان
                  </p>
                  <p> {priceAfterDiscount} تومان</p>
                </div>
                <div className="discount">
                  <p>{item.discountPercent}%</p>
                </div>
              </div>
              <div className="button-count">
                <div className="count">
                  <button className="add" onClick={() => setCount(count + 1)}>
                    +
                  </button>
                  <p>{count}</p>
                  <button className="dec" onClick={() => setCount(count - 1)}>
                    -
                  </button>
                </div>
                <div className="like" onClick={handelLike}>
                  {like ? (
                    <FavoriteIcon className="like-active" />
                  ) : (
                    <FavoriteBorderRoundedIcon />
                  )}
                </div>
              </div>
              <div className="button-add">
                <button
                  className="add-product"
                  onClick={() => handelAddToCart(item)}
                >
                  افزودن به سبد خرید
                </button>
                <span className="message">{message}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCart;
