import React from "react";
import { Navigate } from "react-router-dom";
import cookie from 'cookie'


const ProtectedRoutes = ({component: Component}) => {
   const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies.token ? true : false 
   }

    return  checkAuth() ? <Component /> : <Navigate to="/login" />
}

export default ProtectedRoutes

