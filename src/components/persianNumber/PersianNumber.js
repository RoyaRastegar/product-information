import React from "react";
import "./persiannumber.scss";
import sanitizePersian from "sanitize-persian";
const PersianNumber = ({ number }) => {
  const persianNumber = sanitizePersian(number, { numbers: "toPersian" });
  return <div className="number">{persianNumber}</div>;
};

export default PersianNumber;
