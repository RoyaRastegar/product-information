import React from "react";
import Skeleton from "react-loading-skeleton";
import "./cartskeleton.scss";
const CartSkeleton = () => {
  return (
    <div className="cart-skeleton">
      <div className="up">
        <Skeleton circle width={150} height={150} />
      </div>
      <div className="middel">
        <Skeleton count={3} width={250} />
      </div>
      <div className="down">
        <Skeleton count={3} width={250} />
      </div>
    </div>
  );
};

export default CartSkeleton;
