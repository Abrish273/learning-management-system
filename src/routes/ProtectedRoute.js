import React from "react";
import useAuth from "../context/useAuth";
import { Navigate } from "react-router-dom";
import Drawer from "../components/Drawer/Drawer";

const ProtectedRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Drawer /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
