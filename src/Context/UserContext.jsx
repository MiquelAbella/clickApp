import { useContext } from "react";
import { createContext, useReducer } from "react";
import userReducer, { initialState } from "./reducers/UserReducer";
import { userTypes } from "./Types/userTypes";

export const UserContext = createContext();

export const useUser = () => {
  const state = useContext(UserContext);
  return state;
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const createUser = async (user) => {
    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const data = await res.json();

    if (data.ok) {
      dispatch({ type: userTypes.register, payload: data.user });
    }
  };

  const loginUser = async (user) => {
    const res = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const data = await res.json();
    if (data.ok) {
      dispatch({ type: userTypes.login, payload: data.user });
    }
  };

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
      dispatch({ type: userTypes.addTodo, payload: data.user });
    }
  };

  const deleteTodo = async (todoId, userId) => {
    const res = await fetch("http://localhost:4000/todo/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todoId, userId }),
    });
    const data = await res.json();
    if (data.ok) {
      dispatch({ type: userTypes.deleteTodo, payload: data.user });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        createUser,
        loginUser,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
