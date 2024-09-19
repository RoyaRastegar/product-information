const initialState = {
  cartItems: [],
};
export default function reducerShoppingCart(state = initialState, action) {
  switch (action.type) {
    case "AddToCart":
      const isItemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, amount: 1 }],
      };
    case "RemoveFromCart":
      return {
        ...state,
        cartItems: state.cartItems.reduce((ack, item) => {
          if (item.id === action.payload) {
            if (item.amount === 1) return ack;
            return [...ack, { ...item, amount: item.amount - 1 }];
          } else {
            return [...ack, item];
          }
        }, []),
      };
    case "RemoveAllItem":
      return {
        ...state,
        cartItems: state.cartItems.reduce((ack, item) => {
          if (item.id === action.payload) {
            if (item.amount === 1) return ack;
            return [...ack];
          } else {
            return [...ack, item];
          }
        }, []),
      };
    case "ClearShoppingCart":
      return { ...state, cartItems: [] };
    // case "UpdateAmount":
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.map(
    //       (item) =>
    //         item.id === action.payload
    //           ? { ...item, amount: item.amount + 1 }
    //           : item // سایر محصولات دست نخورده باقی می‌مانند
    //     ),
    //   };
    // const item = state.cartItems.find((item) => item.id === action.payload);
    // return {
    //   ...state,
    //   amount: item ? item.amount : 0,
    // };

    default:
      return state;
  }
}
export function addToCart(item) {
  return { type: "AddToCart", payload: item };
}
export function removeFromCart(id) {
  return { type: "RemoveFromCart", payload: id };
}
export function removeAllItem(id) {
  return { type: "RemoveAllItem", payload: id };
}
export function clearShoppingCart() {
  return { type: "ClearShoppingCart" };
}
// export function updateAmount(id) {
//   return { type: "UpdateAmount", payload: id };
// }
