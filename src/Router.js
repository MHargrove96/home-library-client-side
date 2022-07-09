import React from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

import NonUserHome from "./components/NonUserHomeComponent/NonUserHome";
import LoginForm from "./components/LoginFormComponent/LoginForm";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import UserHome from "./components/UserHomeComponent/UserHome";

function Router({state, setState}) {
  return (
    <Routes>
      <Route path="/" element={<NonUserHome setState={setState}/>} />
      <Route path="/login" element={<LoginForm setState={setState}/>} />
      <Route path="/dashboard" element={<ProtectedRoutes state={state} component={UserHome}/>} />
    </Routes>
  );
}

export default Router;
