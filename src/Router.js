import React from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

import NonUserHome from "./components/NonUserHomeComponent/NonUserHome";
import LoginForm from "./components/LoginFormComponent/LoginForm";
import MyBooks from "./components/UserHomeComponent/UserHome";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import UserHome from "./components/UserHomeComponent/UserHome";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<NonUserHome />} />
      <Route path="/login" element={<LoginForm />} />
        <Route path="/loggedin" element={<MyBooks />} />
        <Route path="/" element={<UserHome/>} />
      {/* <Route path="/" element={<ProtectedRoutes />}> */}
      {/* </Route> */}
    </Routes>
  );
}

export default Router;
