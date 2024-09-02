import React from "react";
import "./menulink.scss";
const MenuLink = ({ icon, text }) => {
  return (
    <div className="menuLink">
      {icon}
      <span className="menuLinkText">{text}</span>
    </div>
  );
};

export default MenuLink;
