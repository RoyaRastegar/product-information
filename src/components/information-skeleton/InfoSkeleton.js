import React from "react";
import "./infoskeleton.scss";
import Skeleton from "react-loading-skeleton";
const InfoSkeleton = () => {
  return (
    <div className="countainer">
      <div className="right">
        <Skeleton circle width={350} height={350} />
      </div>
      <div className="middle">
        <Skeleton count={5} width={500} />
      </div>
      <div className="left">
        <Skeleton count={5} width={350} />
      </div>
    </div>
  );
};

export default InfoSkeleton;
