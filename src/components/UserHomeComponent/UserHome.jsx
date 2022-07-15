import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import classes from "./UserHome.module.css";

import Card from "../CardComponent/Card";
import OwnedBooks from "../OwnedBooksComponent/OwnedBooks";

function UserHome() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [addBook, setAddBook] = useState(false);

  let location = useLocation();

  const searchBook = (evt) => {
    if (evt.key === "Enter" && search.length <= 0) {
      return alert("Please enter a title.");
    }
    if (evt.key === "Enter" && search.length > 0) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=` +
          search +
          `&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}` +
          `&maxResults=40`
      )
        .then((response) => response.json())
        .then((data) => setData(data.items));
    }
  };

  return (
    <div className={classes.pageContainer}>
      <section className={classes.findBookText}>
        <h1 className={classes.homeTitle}>
          A room without books is like <br /> a body without a soul.
        </h1>
        <h2 className={classes.homeSearchText}>Find a book</h2>
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search a Title."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
      <section className={classes.findBookResults}>
        <div className={classes.cardContainer}>
          {bookData.map((book) => {
            return <Card key={book.id} book={book} setBookState={setAddBook} />;
          })}
        </div>
      </section>
      </section>
      <OwnedBooks addBookState={addBook} setBookState={setAddBook} />
      {/* if condition that will switch between the ownedbooks component and the wishlist component */}
    </div>
  );
}

export default UserHome;
