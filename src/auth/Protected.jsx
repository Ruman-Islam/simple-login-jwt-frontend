import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  if (!parsedUser?.token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
