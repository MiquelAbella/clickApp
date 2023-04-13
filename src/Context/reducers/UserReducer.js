import { userTypes } from "../Types/userTypes";

export const initialState = {
  user: null,
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.register:
      return { ...state, user: { ...action.payload } };
    case userTypes.login:
      return { ...state, user: { ...action.payload } };
    case userTypes.addTodo:
      return {
        ...state,
        user: {
          ...state.user,
          todos: [...state.user.todos, action.payload],
        },
      };
    default:
      return state;
  }
};

export default userReducer;
