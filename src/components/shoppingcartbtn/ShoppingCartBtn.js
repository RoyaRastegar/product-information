import React, { useState } from "react";
import "./shoppingcartbtn.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ShoppingCart from "../shoppingcart/ShoppingCart";

const ShoppingCartBtn = ({
  cartItems,
  addToCart,
  removeFromCart,
  setCartItems,
}) => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleDrawerToggle = (openState) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCartOpen(openState);
  };

  return (
    <>
      <div className="shopping" onClick={() => setCartOpen(true)}>
        <div>
          <AddShoppingCartIcon className="shopping-icon " />
        </div>
        <div>سبد خرید</div>
        <div>
          <span>{cartItems.length}</span>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={handleDrawerToggle(false)}
      >
        <Box className="shopping-box" role="presentation">
          <ShoppingCart
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            setCartItems={setCartItems}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default ShoppingCartBtn;
