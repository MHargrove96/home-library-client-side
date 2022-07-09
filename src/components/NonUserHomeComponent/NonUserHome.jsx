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
      <section className={classes.BookListSec}>
        <ul className={classes.ul}>
          {books.map((book) => (
            <li key={book.book_id} className={classes.list}>
              <p className={classes.listItem}>Title: {book.title}</p>
              <p className={classes.listItem}>Summary: {book.summary}</p>
              <p className={classes.listItem}>Authored by {book.author}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className={classes.infoContainer}>
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
