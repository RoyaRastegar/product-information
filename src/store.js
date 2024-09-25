import { createStore, combineReducers } from "redux";
import reducerShoppingCart from "./featurs/shoppingcart/shoppingSlice";
import reducerUser from "./featurs/user/userSlice";

const rootReducer = combineReducers({
  user: reducerUser,
  shoppingCart: reducerShoppingCart,
});
const store = createStore(rootReducer);
export default store;
