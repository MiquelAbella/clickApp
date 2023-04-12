import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const PublicRoutes = ({ children }) => {
  const { user } = useUser();

  return !user ? { ...children } : <Navigate to="/main" />;
};

export default PublicRoutes;
