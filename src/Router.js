import React from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

import NonUserHome from "./components/NonUserHomeComponent/NonUserHome";
import LoginForm from "./components/LoginFormComponent/LoginForm";
import MyBooks from "./components/UserHomeComponent/UserHome";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<NonUserHome />} />
      <Route path="/loggedin" element={<MyBooks />} />
      <Route path="/login" element={<LoginForm />} />
      {/* <Route path="/" element={<ProtectedRoutes />}> */}
        {/* <Route path="/" element={< />} /> */}
      {/* </Route> */}
    </Routes>
  );
}

export default Router;
