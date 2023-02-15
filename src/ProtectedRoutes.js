// import { useContext } from "react";
// import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "./App";

// const useAuth = () => {
//   const { user } = useContext(UserContext);
//   return user && user.loggedIn;
// };
const useAuth = () => {
  const user = { loggedIn: false };
  //const user ={loggedIn:true}; for accessing protected routes
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  // const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
    // replace state={{ from: location }}
  );
};

export default ProtectedRoutes;
