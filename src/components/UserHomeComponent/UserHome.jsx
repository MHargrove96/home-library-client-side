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
    <main className={classes.mainBox}>
      <section className={classes.findBookContainer}>
        <h1 className={classes.homeMainText}>
          A room without books is like <br /> a body without a soul.
        </h1>

        <div className={classes.h1TextContainer}>
          <h2 className={classes.homeSearchText}>Find a book</h2>
          <div className="search">
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Search a Title."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
          </div>
        </div>

        <div className={classes.cardContainer}>
          {bookData.map((book) => {
            return <Card key={book.id} book={book} setBookState={setAddBook} />;
          })}
        </div>
      </section>
      <OwnedBooks addBookState={addBook} setBookState={setAddBook} />
      {/* if condition that will switch between the ownedbooks component and the wishlist component */}
    </main>
  );
}

export default UserHome;
