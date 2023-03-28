const initialState = {
  user: {
    name: "admin",
    password: "admin",
    loggedin: false,
  },
};
const authReducer = (state = initialState, action) => {
  const { type,payload } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, user: { ...state.user, loggedin: true } };
    case "LOGOUT":
      return { ...state, user: { ...state.user, loggedin: payload } };

    default:
      return state;
  }
};

export default authReducer;
