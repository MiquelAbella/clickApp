import { Navigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useUser();
  return user ? { ...children } : <Navigate to="/" />;
};

export default PrivateRoutes;
