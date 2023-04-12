import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./Router/AppRouter";
import { UserProvider } from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <AppRouter />
    </UserProvider>
  </React.StrictMode>
);
