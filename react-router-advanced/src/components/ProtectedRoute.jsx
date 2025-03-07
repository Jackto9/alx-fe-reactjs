import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Change to true for testing
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
