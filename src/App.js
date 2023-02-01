import React from "react";
import Drawer from "./components/Drawer/Drawer";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="" element={<Drawer />} exact />
          </Route>
          <Route path="login" element={<Login />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
