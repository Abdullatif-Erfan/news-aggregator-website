import { Outlet, Navigate } from "react-router-dom";
// Outlet allow nested route
const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
