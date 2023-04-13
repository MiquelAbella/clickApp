import { todoTypes } from "../Types/todoTypes.js";

export const initialState = {
  todos: [],
};

export const todoReducer = (state = {}, action) => {
  switch (action.type) {
 
    default:
      return state;
  }
};

export default todoReducer;
