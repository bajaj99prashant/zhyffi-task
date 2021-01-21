export const initialState = {
  email: null,
  name: null,
  logged: false,
  img: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SESSION_CONFIRMED":
      return {
        ...state,
        name: action.name,
        email: action.email,
        logged: true,
        img: action.img,
      };
    case "RESET_STATE":
      return {
        ...state,
        name: null,
        email: null,
        logged: false,
        img: null,
      };
    default:
      return state;
  }
};

export default reducer;
