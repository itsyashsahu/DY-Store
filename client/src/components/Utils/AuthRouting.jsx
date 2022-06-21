import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const AuthRouting = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;
  const auth = !token;
  return auth ? <Outlet /> : <Navigate to="/" />;
  //   }
};

export default AuthRouting;
