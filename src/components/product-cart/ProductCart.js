import React, { useState } from "react";
import "./productcart.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MenuLink from "../menu-link/MenuLink";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
const ProductCart = ({
  img,
  titlePer,
  titleEng,
  category,
  feature,
  price,
  discount,
}) => {
  const convertToPersianNumber = (input) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return input.toString().replace(/\d/g, (digit) => persianDigits[digit]);
  };
  const [count, setCount] = useState(0);

  const offer = (price * discount) / 100;
  const priceAfterDiscount = price - offer;
  return (
    <div className="product-cart">
      <div className="cart-img">
        <img src={img} alt="no pictur" />
      </div>
      <div className="cart-info">
        <h3> {titlePer} </h3>
        <h4>{titleEng} </h4>
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
            text="ارسال رایگان بالای 850.000 تومان"
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
          <div className="button">
            <div className="price">
              <p className="has-discount">
                {convertToPersianNumber(price)}
                تومان
              </p>
              <p> {convertToPersianNumber(priceAfterDiscount)} تومان</p>
            </div>
            <div className="discount">
              <p>{convertToPersianNumber(discount)}%</p>
            </div>
          </div>
          <div className="button">
            <div className="count">
              <button className="add" onClick={() => setCount(count + 1)}>
                +
              </button>
              <p>{convertToPersianNumber(count)}</p>
              <button className="dec" onClick={() => setCount(count - 1)}>
                -
              </button>
            </div>
            <div className="like">
              {" "}
              <FavoriteBorderRoundedIcon />
            </div>
          </div>
          <div className="button">
            <button className="add-product">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
