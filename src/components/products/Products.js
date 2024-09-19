// style
import "./products.scss";
// components
import CartProduct from "../product-cart/CartProduct";
import CartSkeleton from "../cart-skeleton/CartSkeleton";
import ShoppingCartBtn from "../../components/shoppingcartbtn/ShoppingCartBtn";

const Products = ({ loading, item }) => {
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
          <ShoppingCartBtn />
          <div className="products">
            {item.map((item) => (
              <CartProduct item={item} loading={loading} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
