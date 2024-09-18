// style
import "./products.scss";
// components
import CartProduct from "../product-cart/CartProduct";
import CartSkeleton from "../cart-skeleton/CartSkeleton";
import ShoppingCartBtn from "../../components/shoppingcartbtn/ShoppingCartBtn";

const Products = ({
  loading,
  item,
  addToCart,
  cartItems,
  removeFromCart,
  setCartItems,
}) => {
  return (
    <>
      {loading ? (
        <div className="countainer">
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
        </div>
      ) : (
        <>
          <ShoppingCartBtn
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            setCartItems={setCartItems}
          />
          <div className="products">
            {item.map((item) => (
              <CartProduct
                item={item}
                loading={loading}
                addToCart={addToCart}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
