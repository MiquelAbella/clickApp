import { useContext } from "react";
import { createContext, useReducer } from "react";
import userReducer, { initialState } from "./reducers/UserReducer";

export const UserContext = createContext();

export const useUser = () => {
  const state = useContext(UserContext);
  return state;
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
