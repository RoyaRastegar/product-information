import { createStore } from "redux";
import reducerShoppingCart from "./featurs/shoppingcart/shoppingSlice";

const store = createStore(reducerShoppingCart);
export default store;
