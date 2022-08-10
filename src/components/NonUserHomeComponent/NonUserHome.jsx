import React, { useEffect, useState } from "react";
import UserSignUp from "../UserSignUpComponent/UserSignUp";
import classes from "./NonUserHome.module.css";

const serverURL = "https://librarybackend22.herokuapp.com/books";

function NonUserHome({ setState }) {
  const [books, setBooksData] = useState([]);

  useEffect(() => {
    fetch(serverURL)
      .then((response) => response.json())
      .then((data) => setBooksData(data));
  }, []);
  if (books.length === 0) {
    return <p>loading</p>;
  }

  return (
    <div className={classes.pageContainer}>
      <section className={classes.infoContainer}>
        <img
          className={classes.heroImg}
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80"
          alt="A wall of books on shelves."
        />
        <h1 className={classes.infoTitle}>
          Welcome to your own personal Book Nook.
        </h1>
        <p className={classes.infoText}>
          Manage and update your personal library effeciently and with ease.
        </p>
        <UserSignUp setState={setState} />
      </section>
    </div>
  );
}

export default NonUserHome;
