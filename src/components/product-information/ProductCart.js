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
import CartSkeleton from "../cart-skeleton/CartSkeleton";
import MenuLink from "../menu-link/MenuLink";
// import image
import Image from "../../assets/images (2).jpg";
import InfoSkeleton from "../information-skeleton/InfoSkeleton";

const ProductCart = ({ loading }) => {
  const category = ["بهداشتی", "مراقبت از پوست"];
  const feature = ["آبرسان", "رطوبت رسان", "فاقد تست حیوانی"];

  const [count, setCount] = useState(0);
  const product = {
    img: Image,
    titlePer: "سرم آبرسان پوست 40 میل بایومارین",
    titleEng: "DETOX Ultra Hydrating Serum 40ml BIOMARINE",
    category: { category },
    feature: { feature },
    price: "450000",
    discount: "10",
  };
  const offer = (product.price * product.discount) / 100;
  const priceAfterDiscount = product.price - offer;

  return (
    <>
      {loading ? (
        <div>
          <InfoSkeleton />
        </div>
      ) : (
        <div className="product-cart">
          <div className="cart-img">
            <img src={product.img} alt="no pictur" />
          </div>
          <div className="cart-info">
            <h3>{product.titlePer} </h3>
            <h4>{product.titleEng} </h4>
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
              <div className="button">
                <div className="price">
                  <p className="has-discount">
                    {product.price}
                    تومان
                  </p>
                  <p> {priceAfterDiscount} تومان</p>
                </div>
                <div className="discount">
                  <p>{product.discount}%</p>
                </div>
              </div>
              <div className="button">
                <div className="count">
                  <button className="add" onClick={() => setCount(count + 1)}>
                    +
                  </button>
                  <p>{count}</p>
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
      )}
    </>
  );
};

export default ProductCart;
