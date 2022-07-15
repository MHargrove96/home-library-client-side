import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";
import classes from "./HeaderNavBar.module.css";

export default function HeaderNavBar({ state, setState }) {
  let navigate = useNavigate();

  const logoutHandler = () => {
    setState(false);
    document.cookie = cookie.serialize("token", null, {
      maxAge: 0,
    });
    navigate("/", { replace: true });
  };

  return (
    <div className={classes.appBar}>
      <h4 className={classes.navBarTitle}>Book Nook</h4>
      {state === true && (
        <button className={classes.logOutBtn} onClick={logoutHandler}>
          Logout
        </button>
      )}
      {state === false && (
        <span className={classes.btnBox}>
          <Link to="/">
            <button className={classes.homeBtn}>Home</button>
          </Link>
          <Link to={"/login"}>
            <button className={classes.loginBtn}>Login</button>
          </Link>
        </span>
      )}

      <br />
      {/* <Link to={'/wishlist'}>
      <button className={classes.wishListBtn} >Wish list</button>
      </Link> */}
      {/* <br /> */}
    </div>
  );
}
