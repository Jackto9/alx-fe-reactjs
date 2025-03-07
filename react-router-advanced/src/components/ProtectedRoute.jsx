import { Navigate, Outlet } from "react-router-dom";

// Dummy authentication hook
const useAuth = () => {
  const user = localStorage.getItem("user"); // Simulating authentication
  return user ? true : false;
};

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
