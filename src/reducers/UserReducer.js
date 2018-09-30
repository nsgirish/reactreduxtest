import { SET_USER, SET_AGE } from "./ActionTypes";

const UserReducer = (
  state = {
    username: "redux user",
    age: 20
  },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.payload
      };

    case SET_AGE:
      return {
        ...state,
        age: action.payload
      };

    default:
      return state;
  }
};

export default UserReducer;
