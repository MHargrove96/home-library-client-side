import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import cookie from 'cookie'
import classes from "./HeaderNavBar.module.css";



export default function HeaderNavBar() {
  let navigate = useNavigate();
  const logoutHandler = () => {
    document.cookie = cookie.serialize("token", null, {
      maxAge: 0,
    });
    navigate("/", { replace: true });  
  }

  return (
    <div  className={classes.appBar}>
      <h4 className={classes.navBarTitle}>Book Nook</h4>
      <Link to={'/login'}>
      <button className={classes.loginBtn} >Login</button>
      </Link>
      <br />
      <Link to='/'>
      <button className={classes.homeBtn} >Home</button>
      </Link>
      <br />
      <Link to={'/wishlist'}>
      <button className={classes.wishListBtn} >Wish list</button>
      </Link>
      <br />
      <button className={classes.logOutBtn} onClick={logoutHandler}>Logout</button>
    </div>
  );
}
