import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import classes from "./OwnedBook.module.css";
import UserBookCard from "../UserBookCardComponent/UserBookCard";

const ownedBooksURL = "https://librarybackend22.herokuapp.com/mybooks";

function OwnedBooks() {
  const [search, setSearch] = useState("");
  const [ownedBookData, setOwnedData] = useState([]);
  let location = useLocation();

  const searchOwned = (evt) => {
    if (evt.key === "Enter" && search.length <= 0) {
      return alert("Please enter a title.");
    }
    if (evt.key === "Enter" && search.length > 0) {
      fetch(ownedBooksURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setOwnedData(data);
        });
    }
  };

  useEffect(() => {
    fetch(ownedBooksURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOwnedData(data);
      });
  }, []);

  return (
    <section className={classes.ownedFindBookContainer}>
      <div className="search">
        <h1 className={classes.ownedH1Text}>This is my library!</h1>
        <h2 className={classes.ownedSearchText}>Find a book</h2>
        <input
          className={classes.ownedSearchInput}
          type="text"
          placeholder="Search a Title."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchOwned}
        />
      </div>
      <div className={classes.cardContainer}>
        {ownedBookData
          .filter((books) =>
            books.book_title.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((book) => {
            return <UserBookCard key={book.ownedbook_id} book={book} />;
          })}
      </div>
    </section>
  );
}

export default OwnedBooks;
