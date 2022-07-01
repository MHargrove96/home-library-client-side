import React, { useEffect, useState } from "react";

import classes from "./UserHome.module.css";

import Card from "../CardComponent/Card";

function UserHome() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
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
    <>
      <section className={classes.findBookContainer}>
        <div className={classes.h1TextContainer}>
          <h1 className={classes.homeMainText}>
            A room without books is like <br /> a body without a soul.
          </h1>
        </div>
        <div className={classes.h1TextContainer}>
          <h2 className={classes.homeSearchText}>Find a book</h2>
          <div className="search">
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
          </div>
        </div>

        <div className={classes.cardContainer}>
          {bookData.map((book) => {
            return <Card key={book.id} book={book}/>;
          })}
        </div>
      </section>
      <section></section>
    </>
  );
}

export default UserHome;
