import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Logout = () => {
  const authContext = useContext(AuthContext);
  let navigate = useNavigate();

  const { logout, token, validate } = authContext;

  useEffect(() => {
    logout();
    validate();
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return <></>;
};

export default Logout;
