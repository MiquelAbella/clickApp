import { useContext } from "react";
import { createContext, useReducer } from "react";
import todoReducer, { initialState } from "./reducers/TodoReducer";

export const TodoContext = createContext();

export const useTodo = () => {
  const state = useContext(TodoContext);
  return state;
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (todo, userId) => {
    const res = await fetch("http://localhost:4000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo, userId }),
    });
    const data = await res.json();
    console.log(data);

    if (data.ok) {
    }
  };
  return (
    <TodoContext.Provider
      value={{
        ...state,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
