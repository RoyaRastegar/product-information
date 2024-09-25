const initioalState = {
  user: {},
};

export default function reducerUser(state = initioalState, action) {
  switch (action.type) {
    case "AddUser":
      return {
        ...state,
        user: {
          ...state.user, // Spread the existing user data
          ...action.payload, // Add/Update properties in the user object
        },
      };
    default:
      return state;
  }
}

export function addUser(user) {
  return { type: "AddUser", payload: user };
}
